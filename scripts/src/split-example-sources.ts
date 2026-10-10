/**
 * Split example barrels so `sources.ts` holds only `?raw` imports + `sources`
 * (+ optional `imports`), and `index.ts` re-exports those plus live components.
 *
 * Docs SSR loads `sources.ts` for code panels without evaluating example SFCs.
 * Idempotent: re-run after adding examples, or on already-split barrels.
 */
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "../..");

const EXAMPLE_ROOTS = [
  "packages/astro/examples",
  "packages/react/examples",
  "packages/react-form/examples",
  "packages/solid/examples",
  "packages/solid-form/examples",
  "packages/svelte/examples",
  "packages/svelte-form/examples",
  "packages/vue/examples",
  "packages/vue-form/examples",
  "apps/docs/src/examples/react",
  "apps/docs/src/examples/solid",
  "apps/docs/src/examples/svelte",
  "apps/docs/src/examples/vue",
] as const;

function listExampleDirs(rootRel: string): string[] {
  const root = path.join(workspaceRoot, rootRel);
  if (!existsSync(root)) return [];
  return readdirSync(root)
    .map((name) => path.join(root, name))
    .filter((dir) => {
      try {
        return (
          statSync(dir).isDirectory() && existsSync(path.join(dir, "index.ts"))
        );
      } catch {
        return false;
      }
    })
    .sort();
}

/** Lines that belong in sources.ts (raw imports + sources/imports exports). */
function extractSourcesSection(indexText: string): {
  sourcesBody: string;
  componentExports: string;
} {
  const lines = indexText.split(/\r?\n/);
  const sourcesLines: string[] = [];
  const componentLines: string[] = [];
  let inImportsTemplate = false;
  let inSourcesObject = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (inImportsTemplate) {
      sourcesLines.push(line);
      if (trimmed.endsWith("`;") || trimmed === "`;") {
        inImportsTemplate = false;
      }
      continue;
    }

    if (inSourcesObject) {
      sourcesLines.push(line);
      if (trimmed === "} as const;" || trimmed === "};") {
        inSourcesObject = false;
      }
      continue;
    }

    if (/^import\s+.+\s+from\s+["']\.\/.+\?raw["'];?\s*$/.test(trimmed)) {
      sourcesLines.push(line);
      continue;
    }

    if (trimmed.startsWith("export const imports")) {
      sourcesLines.push(line);
      if (
        !trimmed.endsWith("`;") &&
        trimmed.includes("`") &&
        !trimmed.match(/`[^`]*`;\s*$/)
      ) {
        inImportsTemplate = true;
      } else if (trimmed.includes("`") && !trimmed.endsWith("`;")) {
        inImportsTemplate = true;
      }
      continue;
    }

    if (trimmed.startsWith("export const sources")) {
      sourcesLines.push(line);
      if (!trimmed.includes("} as const") && !trimmed.endsWith("};")) {
        inSourcesObject = true;
      }
      continue;
    }

    if (
      trimmed.startsWith("export * from ") ||
      trimmed.startsWith("export { default as ")
    ) {
      componentLines.push(line);
      continue;
    }

    if (
      trimmed.startsWith("export { sources") ||
      trimmed.startsWith("export { imports") ||
      trimmed === 'export { sources, imports } from "./sources";' ||
      /^export \{[^}]*\}\s+from\s+["']\.\/sources["'];?\s*$/.test(trimmed)
    ) {
      // Already split — ignore re-export lines; rebuilt below.
      continue;
    }

    if (trimmed === "" || trimmed.startsWith("//")) {
      continue;
    }

    throw new Error(`Unrecognized index.ts line: ${line}`);
  }

  // Restore blank lines between import block / imports / sources.
  const normalized: string[] = [];
  for (let i = 0; i < sourcesLines.length; i++) {
    const line = sourcesLines[i] ?? "";
    const prev = normalized[normalized.length - 1];
    const isExport = line.trim().startsWith("export ");
    const prevIsImport = prev?.trim().startsWith("import ");
    if (isExport && prevIsImport) {
      normalized.push("");
    } else if (
      line.trim().startsWith("export const sources") &&
      prev?.trim().startsWith("export const imports")
    ) {
      normalized.push("");
    } else if (
      line.trim().startsWith("export const sources") &&
      prev?.trim() === "`;"
    ) {
      normalized.push("");
    }
    normalized.push(line);
  }
  const sourcesBody = `${normalized.join("\n").replace(/\n+$/, "")}\n`;
  const componentExports = `${componentLines.join("\n").replace(/\n+$/, "")}\n`;
  return { componentExports, sourcesBody };
}

/** Match Biome `organizeExports`: sort by `from "..."` specifier. */
function buildIndex(sourcesBody: string, componentExports: string): string {
  const hasImports = /\bexport const imports\b/.test(sourcesBody);
  const reexport = hasImports
    ? 'export { imports, sources } from "./sources";'
    : 'export { sources } from "./sources";';
  const lines = [
    reexport,
    ...componentExports.split(/\r?\n/).filter((l) => l.trim()),
  ];
  lines.sort((a, b) => {
    const pathA = /from\s+["']([^"']+)["']/.exec(a)?.[1] ?? a;
    const pathB = /from\s+["']([^"']+)["']/.exec(b)?.[1] ?? b;
    return pathA.localeCompare(pathB);
  });
  return `${lines.join("\n")}\n`;
}

function splitDir(dir: string): "wrote" | "unchanged" {
  const indexPath = path.join(dir, "index.ts");
  const sourcesPath = path.join(dir, "sources.ts");
  const indexText = readFileSync(indexPath, "utf8");

  let sourcesBody: string;
  let componentExports: string;

  if (existsSync(sourcesPath) && /from\s+["']\.\/sources["']/.test(indexText)) {
    // Already split — keep sources.ts; rebuild index from component re-exports.
    sourcesBody = readFileSync(sourcesPath, "utf8");
    if (!sourcesBody.endsWith("\n")) sourcesBody += "\n";
    componentExports = `${indexText
      .split(/\r?\n/)
      .filter(
        (l) =>
          l.trim().startsWith("export * from ") ||
          l.trim().startsWith("export { default as "),
      )
      .join("\n")}\n`;
  } else {
    ({ componentExports, sourcesBody } = extractSourcesSection(indexText));
  }

  if (!sourcesBody.includes("export const sources")) {
    throw new Error(`No sources export in ${indexPath}`);
  }
  if (!componentExports.trim()) {
    throw new Error(`No component exports in ${indexPath}`);
  }

  const nextIndex = buildIndex(sourcesBody, componentExports);
  const prevSources = existsSync(sourcesPath)
    ? readFileSync(sourcesPath, "utf8")
    : null;
  const prevIndex = indexText;

  let changed = false;
  if (prevSources !== sourcesBody) {
    writeFileSync(sourcesPath, sourcesBody);
    changed = true;
  }
  if (prevIndex !== nextIndex) {
    writeFileSync(indexPath, nextIndex);
    changed = true;
  }
  return changed ? "wrote" : "unchanged";
}

let wrote = 0;
let unchanged = 0;

for (const root of EXAMPLE_ROOTS) {
  for (const dir of listExampleDirs(root)) {
    const result = splitDir(dir);
    if (result === "wrote") wrote += 1;
    else unchanged += 1;
  }
}

console.log(
  `split-example-sources: wrote ${wrote}, unchanged ${unchanged}, total ${wrote + unchanged}`,
);
