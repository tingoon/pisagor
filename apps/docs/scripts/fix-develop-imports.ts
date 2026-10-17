/** Rebuild develop.mdx example imports from each examples/<id>/sources.ts map. */
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "../../..");

const FW: Record<
  string,
  Partial<Record<"components" | "forms" | "blocks", string>>
> = {
  astro: { components: "packages/astro/examples" },
  react: {
    blocks: "apps/docs/src/examples/react",
    components: "packages/react/examples",
    forms: "packages/react-form/examples",
  },
  solid: {
    blocks: "apps/docs/src/examples/solid",
    components: "packages/solid/examples",
    forms: "packages/solid-form/examples",
  },
  svelte: {
    blocks: "apps/docs/src/examples/svelte",
    components: "packages/svelte/examples",
    forms: "packages/svelte-form/examples",
  },
  vue: {
    blocks: "apps/docs/src/examples/vue",
    components: "packages/vue/examples",
    forms: "packages/vue-form/examples",
  },
};

function loadSourceMap(examplesDir: string, id: string): Map<string, string> {
  const sourcesPath = path.join(ROOT, examplesDir, id, "sources.ts");
  if (!existsSync(sourcesPath)) return new Map();
  const text = readFileSync(sourcesPath, "utf8");
  const map = new Map<string, string>();
  for (const m of text.matchAll(
    /import \{ source as (\w+) \} from "\.\/([^"]+)";/g,
  )) {
    if (m[1] && m[2]) map.set(m[1], m[2]);
  }
  for (const m of text.matchAll(
    /import \{ (\w+)Source as (\w+) \} from "\.\/([^"]+)";/g,
  )) {
    if (m[2] && m[3]) map.set(m[2], m[3]);
  }
  for (const m of text.matchAll(/import (\w+) from "\.\/([^"]+)\?raw";/g)) {
    if (m[1] && m[2]) map.set(m[1], m[2]);
  }
  return map;
}

let fixed = 0;
const missing: string[] = [];

for (const [fw, areas] of Object.entries(FW)) {
  for (const [area, examplesDir] of Object.entries(areas)) {
    if (!examplesDir) continue;
    const base = path.join(ROOT, "apps/docs/src/content", fw, area);
    if (!existsSync(base)) continue;
    for (const entry of readdirSync(base)) {
      const dir = path.join(base, entry);
      if (!statSync(dir).isDirectory()) continue;
      const id = entry;
      const file = path.join(dir, "develop.mdx");
      if (!existsSync(file)) continue;
      const map = loadSourceMap(examplesDir, id);
      if (map.size === 0) continue;
      const text = readFileSync(file, "utf8");
      const alias =
        area === "forms"
          ? `#examples/${fw}-form`
          : area === "blocks"
            ? `#examples/${fw}-blocks`
            : `#examples/${fw}`;

      const used = [
        ...text.matchAll(/<Example\b[^>]*\bname=["']([^"']+)["']/g),
      ].map((m) => m[1]!);
      const unique = [...new Set(used)];
      const sourceImports: string[] = [];
      const componentImports: string[] = [];
      for (const name of unique) {
        const fileName = map.get(name);
        if (!fileName) {
          missing.push(`${fw}/${area}/${id}:${name}`);
          continue;
        }
        // Prefer explicit extensions so Vite resolves consistently.
        let spec = fileName;
        if (!spec.includes(".")) {
          if (fw === "react" || fw === "solid") spec = `${spec}.tsx`;
          else if (fw === "vue") spec = `${spec}.vue`;
          else if (fw === "svelte") spec = `${spec}.svelte`;
          else if (fw === "astro") spec = `${spec}.astro`;
        }
        // React/Solid: named `<Name>Source` dual-export.
        // Vue/Svelte/Astro: `?raw` (SFC/module shims don't expose `source`).
        if (fw === "react" || fw === "solid") {
          sourceImports.push(
            `import { ${name}Source } from "${alias}/${id}/${spec}";`,
          );
        } else {
          sourceImports.push(
            `import ${name}Source from "${alias}/${id}/${spec}?raw";`,
          );
        }
        if (fw === "astro") {
          componentImports.push(
            `import ${name} from "${alias}/${id}/${fileName}";`,
          );
        }
      }

      const lines = text.split("\n");
      let firstContent = 0;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i] ?? "";
        if (line.startsWith("## ")) {
          firstContent = i;
          break;
        }
      }
      const head = [
        `import Example from "#/components/docs/example.astro";`,
        ...componentImports,
        ...sourceImports,
        "",
      ];
      const body = lines.slice(firstContent).join("\n");
      const next = `${head.join("\n")}\n${body.replace(/^\n+/, "")}`;
      if (next !== text) {
        writeFileSync(file, next.endsWith("\n") ? next : `${next}\n`);
        fixed++;
      }
    }
  }
}

console.log(`fixed ${fixed} develop.mdx files`);
console.log(`missing ${missing.length}`);
if (missing.length) console.log(missing.slice(0, 60).join("\n"));
