/**
 * Co-export `source` (`?raw`) from every example file and rebuild `sources.ts`
 * as a map of those exports (keyed by the component export name in the file).
 *
 * Usage: bun scripts/migrate-example-dual-export.ts [--framework react]
 */
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "../../..");
const EXAMPLE_SKIP = new Set([
  "helpers.ts",
  "helpers.tsx",
  "index.ts",
  "sources.ts",
]);

const EXPORT_NAME =
  /^export\s+(?:async\s+)?(?:function|const)\s+([A-Z][A-Za-z0-9]*)\b/m;
const EXPORT_DEFAULT_NAME = /name:\s*["']([A-Z][A-Za-z0-9]*)["']/;

const PACKAGES: {
  dir: string;
  ext: string[];
  framework: string;
  importsPkg: string;
}[] = [
  {
    dir: "packages/react/examples",
    ext: [".tsx", ".ts"],
    framework: "react",
    importsPkg: "@pisagor/react",
  },
  {
    dir: "packages/react-form/examples",
    ext: [".tsx", ".ts"],
    framework: "react",
    importsPkg: "@pisagor/react-form",
  },
  {
    dir: "packages/solid/examples",
    ext: [".tsx", ".ts"],
    framework: "solid",
    importsPkg: "@pisagor/solid",
  },
  {
    dir: "packages/solid-form/examples",
    ext: [".tsx", ".ts"],
    framework: "solid",
    importsPkg: "@pisagor/solid-form",
  },
  {
    dir: "packages/vue/examples",
    ext: [".vue", ".ts", ".tsx"],
    framework: "vue",
    importsPkg: "@pisagor/vue",
  },
  {
    dir: "packages/vue-form/examples",
    ext: [".vue", ".ts", ".tsx"],
    framework: "vue",
    importsPkg: "@pisagor/vue-form",
  },
  {
    dir: "packages/svelte/examples",
    ext: [".svelte"],
    framework: "svelte",
    importsPkg: "@pisagor/svelte",
  },
  {
    dir: "packages/svelte-form/examples",
    ext: [".svelte"],
    framework: "svelte",
    importsPkg: "@pisagor/svelte-form",
  },
  {
    dir: "packages/astro/examples",
    ext: [".astro"],
    framework: "astro",
    importsPkg: "@pisagor/astro",
  },
];

const fwFilter = (() => {
  const idx = process.argv.indexOf("--framework");
  return idx >= 0 ? process.argv[idx + 1] : undefined;
})();

function pascalFromFile(file: string): string {
  return file
    .replace(/\.[^.]+$/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function exportNameFromFile(file: string, code: string): string {
  const named = EXPORT_NAME.exec(code)?.[1];
  if (named) return named;
  const vueName = EXPORT_DEFAULT_NAME.exec(code)?.[1];
  if (vueName) return vueName;
  // Svelte/Astro often have no named export — use filename.
  return pascalFromFile(file);
}

/** Prefer `export { default as Name } from "./file"` aliases from index.ts. */
function exportNamesFromIndex(exampleDir: string): Map<string, string> {
  const indexPath = path.join(exampleDir, "index.ts");
  const map = new Map<string, string>();
  if (!existsSync(indexPath)) return map;
  const text = readFileSync(indexPath, "utf8");
  for (const m of text.matchAll(
    /export\s+\{\s*default\s+as\s+(\w+)\s*\}\s+from\s+"\.\/([^"]+)"/g,
  )) {
    const name = m[1];
    const spec = m[2]?.replace(/^\.\//, "") ?? "";
    if (!name || !spec) continue;
    const file = spec.includes(".") ? spec : `${spec}`;
    map.set(file, name);
    // Also key by stem for extension-less specs
    map.set(spec.replace(/\.[^.]+$/, ""), name);
  }
  // `export * from "./file"` keeps the in-file export name — do not guess.
  return map;
}

function ensureTsxSource(
  code: string,
  fileName: string,
  exportName: string,
): string {
  const sourceExport = `${exportName}Source`;
  if (
    code.includes(`from "./${fileName}?raw"`) &&
    code.includes(`as ${sourceExport}`)
  ) {
    return code;
  }
  if (code.includes(`from "./${fileName}?raw"`)) {
    return `${code.trimEnd()}\n\nexport { source as ${sourceExport} };\n`;
  }
  const importLine = `import source from "./${fileName}?raw";\n`;
  return `${importLine}${code.trimEnd()}\n\nexport { source as ${sourceExport} };\n`;
}

function ensureVueSource(code: string, fileName: string): string {
  if (
    code.includes(`from "./${fileName}?raw"`) &&
    /export\s*\{[^}]*\bsource\b/.test(code)
  ) {
    return code;
  }
  const block = `<script lang="ts">
import source from "./${fileName}?raw";
export { source };
</script>

`;
  return block + code;
}

function ensureSvelteSource(code: string, fileName: string): string {
  const moduleRe = /<script\b[^>]*\bmodule\b[^>]*>([\s\S]*?)<\/script>/;
  if (code.includes(`from "./${fileName}?raw"`)) {
    return code;
  }
  const match = moduleRe.exec(code);
  if (match) {
    const body = match[1] ?? "";
    const inject = `  import source from "./${fileName}?raw";\n  export { source };\n`;
    const nextBody = `${inject}${body}`;
    return code.replace(
      match[0],
      `<script module lang="ts">\n${nextBody}</script>`,
    );
  }
  return `<script module lang="ts">
  import source from "./${fileName}?raw";
  export { source };
</script>

${code}`;
}

function ensureAstroSource(code: string, fileName: string): string {
  if (
    code.includes(`from "./${fileName}?raw"`) &&
    /export\s*\{[^}]*\bsource\b/.test(code)
  ) {
    return code;
  }
  const fm = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(code);
  const inject = `import source from "./${fileName}?raw";\nexport { source };\n`;
  if (fm) {
    if (fm[1]?.includes("?raw")) return code;
    return `---\n${fm[1] ?? ""}${inject}---\n${code.slice(fm[0].length)}`;
  }
  return `---\n${inject}---\n${code}`;
}

function rebuildSourcesTs(
  exampleDir: string,
  files: { file: string; exportName: string }[],
  importsPkg: string,
): void {
  const existingPath = path.join(exampleDir, "sources.ts");
  let importsLiteral = `\`import { … } from "${importsPkg}";\``;
  if (existsSync(existingPath)) {
    const prev = readFileSync(existingPath, "utf8");
    const m = /export const imports = (`(?:\\`|[^`])*`);/.exec(prev);
    if (m?.[1]) importsLiteral = m[1];
  }

  const sorted = [...files].sort((a, b) =>
    a.exportName.localeCompare(b.exportName),
  );
  const importLines = sorted.map(({ file, exportName }) => {
    if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      return `import { ${exportName}Source as ${exportName} } from "./${file.replace(/\.(tsx|ts)$/, "")}";`;
    }
    return `import { source as ${exportName} } from "./${file}";`;
  });
  const mapLines = sorted.map(({ exportName }) => `  ${exportName},`);

  writeFileSync(
    existingPath,
    `${importLines.join("\n")}

export const imports = ${importsLiteral};

export const sources = {
${mapLines.join("\n")}
} as const;
`,
  );
}

let updatedFiles = 0;
let updatedSources = 0;

for (const pkg of PACKAGES) {
  if (fwFilter && pkg.framework !== fwFilter) continue;
  const base = path.join(ROOT, pkg.dir);
  if (!existsSync(base)) continue;

  for (const id of readdirSync(base).sort()) {
    const exampleDir = path.join(base, id);
    if (!statSync(exampleDir).isDirectory()) continue;

    const entries = readdirSync(exampleDir).filter(
      (name) =>
        !EXAMPLE_SKIP.has(name) &&
        pkg.ext.some((ext) => name.endsWith(ext)) &&
        !name.startsWith("helpers"),
    );

    const files: { file: string; exportName: string }[] = [];
    const usedNames = new Set<string>();
    const indexNames = exportNamesFromIndex(exampleDir);

    for (const file of entries) {
      const full = path.join(exampleDir, file);
      const code = readFileSync(full, "utf8");
      const stem = file.replace(/\.[^.]+$/, "");
      let exportName =
        indexNames.get(file) ??
        indexNames.get(stem) ??
        exportNameFromFile(file, code);
      if (usedNames.has(exportName)) {
        exportName = pascalFromFile(file);
      }
      usedNames.add(exportName);

      let next = code;
      if (file.endsWith(".vue")) next = ensureVueSource(code, file);
      else if (file.endsWith(".svelte")) next = ensureSvelteSource(code, file);
      else if (file.endsWith(".astro")) next = ensureAstroSource(code, file);
      else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        next = ensureTsxSource(code, file, exportName);
      }

      if (next !== code) {
        writeFileSync(full, next);
        updatedFiles++;
      }

      files.push({ exportName, file });
    }

    if (files.length === 0) continue;
    rebuildSourcesTs(exampleDir, files, pkg.importsPkg);
    updatedSources++;
  }
}

console.log(
  `dual-export: updated ${updatedFiles} example files, rebuilt ${updatedSources} sources.ts`,
);
