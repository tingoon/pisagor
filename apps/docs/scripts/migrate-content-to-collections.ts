/**
 * Move docs content to Collections shape: <id>/metadata.md → <id>.md
 * <id>/design.md → <id>/design.mdx <id>/develop.md → <id>/develop.mdx with
 * <Example> + source imports
 *
 * Usage: bun scripts/migrate-content-to-collections.ts [--framework react]
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const CONTENT = path.resolve(import.meta.dir, "../src/content");

const FRAMEWORKS = ["react", "solid", "svelte", "vue", "astro"] as const;
const AREAS = ["components", "forms"] as const;

const EXAMPLE_EXT: Record<string, string> = {
  astro: ".astro",
  react: ".tsx",
  solid: ".tsx",
  svelte: ".svelte",
  vue: ".vue",
};

const fwFilter = (() => {
  const idx = process.argv.indexOf("--framework");
  return idx >= 0 ? process.argv[idx + 1] : undefined;
})();

function exportToFileStem(exportName: string): string {
  return exportName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function examplesAlias(
  framework: string,
  area: "components" | "forms",
): string {
  if (area === "forms") return `#examples/${framework}-form`;
  return `#examples/${framework}`;
}

function stripFenceAwareExampleLines(
  body: string,
  framework: string,
  area: "components" | "forms",
  id: string,
): {
  body: string;
  exports: string[];
} {
  const kind = area === "forms" ? "form" : "component";
  const lines = body.split(/\r?\n/);
  const out: string[] = [];
  const exports: string[] = [];
  let inFence = false;
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const match = !inFence ? /^:::example\s+(\S+)\s*$/.exec(line) : null;
    if (match?.[1]) {
      const name = match[1];
      exports.push(name);
      out.push(
        `<Example name="${name}" code={${name}Source} exampleId="${id}" framework="${framework}" kind="${kind}" />`,
      );
      continue;
    }
    out.push(line);
  }
  return { body: out.join("\n"), exports };
}

function buildDevelopMdx(
  framework: string,
  area: "components" | "forms",
  id: string,
  rawDevelop: string,
): string {
  // Drop YAML frontmatter if present (meta lives in sibling .md).
  let body = rawDevelop;
  if (body.startsWith("---")) {
    const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/.exec(body);
    if (match?.[1] !== undefined) body = match[1];
  }

  const { body: withExamples, exports } = stripFenceAwareExampleLines(
    body.trim(),
    framework,
    area,
    id,
  );
  const alias = examplesAlias(framework, area);
  const unique = [...new Set(exports)];

  const ext = EXAMPLE_EXT[framework] ?? "";
  const importLines = [
    `import Example from "#/components/docs/example.astro";`,
    ...unique.map((name) => {
      const stem = exportToFileStem(name);
      return `import { source as ${name}Source } from "${alias}/${id}/${stem}${ext}";`;
    }),
  ];

  return `${importLines.join("\n")}\n\n${withExamples.trim()}\n`;
}

function migrateDesign(raw: string): string {
  let body = raw;
  if (body.startsWith("---")) {
    const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/.exec(body);
    if (match?.[1] !== undefined) body = match[1];
  }
  return `${body.trim()}\n`;
}

let movedMeta = 0;
let wroteDevelop = 0;
let wroteDesign = 0;

for (const framework of FRAMEWORKS) {
  if (fwFilter && framework !== fwFilter) continue;
  for (const area of AREAS) {
    if (framework === "astro" && area === "forms") continue;
    const areaDir = path.join(CONTENT, framework, area);
    if (!existsSync(areaDir)) continue;

    for (const id of readdirSync(areaDir).sort()) {
      const idDir = path.join(areaDir, id);
      // Already migrated meta file sitting beside folder
      const metaTarget = path.join(areaDir, `${id}.md`);

      if (statSync(idDir).isFile() && id.endsWith(".md")) continue;
      if (!statSync(idDir).isDirectory()) continue;

      const metadataPath = path.join(idDir, "metadata.md");
      const developPath = path.join(idDir, "develop.md");
      const designPath = path.join(idDir, "design.md");
      const developMdxPath = path.join(idDir, "develop.mdx");
      const designMdxPath = path.join(idDir, "design.mdx");

      if (existsSync(metadataPath)) {
        if (existsSync(metaTarget)) {
          rmSync(metadataPath);
        } else {
          renameSync(metadataPath, metaTarget);
        }
        movedMeta++;
      }

      if (existsSync(developPath) && !existsSync(developMdxPath)) {
        const raw = readFileSync(developPath, "utf8");
        writeFileSync(
          developMdxPath,
          buildDevelopMdx(framework, area, id, raw),
        );
        rmSync(developPath);
        wroteDevelop++;
      } else if (existsSync(developPath) && existsSync(developMdxPath)) {
        rmSync(developPath);
      }

      if (existsSync(designPath) && !existsSync(designMdxPath)) {
        writeFileSync(
          designMdxPath,
          migrateDesign(readFileSync(designPath, "utf8")),
        );
        rmSync(designPath);
        wroteDesign++;
      } else if (existsSync(designPath) && existsSync(designMdxPath)) {
        rmSync(designPath);
      }

      void mkdirSync;
    }
  }
}

console.log(
  `content migrate: meta=${movedMeta} develop.mdx=${wroteDevelop} design.mdx=${wroteDesign}`,
);
