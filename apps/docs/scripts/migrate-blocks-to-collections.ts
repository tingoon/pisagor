/**
 * Split `content/<fw>/blocks/<id>.md` into meta `<id>.md` + `<id>/develop.mdx`
 * with `<Example />` (replacing `:::example`).
 *
 * Usage: bun scripts/migrate-blocks-to-collections.ts [--framework react]
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const CONTENT = path.resolve(import.meta.dir, "../src/content");
const FRAMEWORKS = ["react", "solid", "svelte", "vue"] as const;

const EXAMPLE_EXT: Record<string, string> = {
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

function parseFrontmatter(raw: string): { frontmatter: string; body: string } {
  if (!raw.startsWith("---")) {
    return { body: raw, frontmatter: "" };
  }
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { body: raw, frontmatter: "" };
  return { body: match[2] ?? "", frontmatter: match[1] ?? "" };
}

function stripFenceAwareExampleLines(
  body: string,
  framework: string,
  id: string,
): { body: string; exports: { name: string; title: string }[] } {
  const lines = body.split(/\r?\n/);
  const out: string[] = [];
  const exports: { name: string; title: string }[] = [];
  let inFence = false;
  let lastH2 = "";

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;

    if (!inFence) {
      const h2 = /^##\s+(.+?)\s*$/.exec(line);
      if (h2?.[1]) lastH2 = h2[1].trim();
    }

    const match = !inFence ? /^:::example\s+(\S+)\s*$/.exec(line) : null;
    if (match?.[1]) {
      const name = match[1];
      const title = lastH2 && lastH2 !== name ? lastH2 : name;
      exports.push({ name, title });
      const titleAttr =
        title !== name ? ` title="${title.replace(/"/g, "&quot;")}"` : "";
      out.push(
        `<Example name="${name}" code={${name}Source} exampleId="${id}" framework="${framework}" kind="block"${titleAttr} />`,
      );
      continue;
    }
    out.push(line);
  }
  return { body: out.join("\n"), exports };
}

function buildDevelopMdx(
  framework: string,
  id: string,
  rawBody: string,
): string {
  const { body: withExamples, exports } = stripFenceAwareExampleLines(
    rawBody.trim(),
    framework,
    id,
  );
  const unique = [...new Map(exports.map((e) => [e.name, e])).values()];
  const alias = `#examples/${framework}-blocks`;
  const ext = EXAMPLE_EXT[framework] ?? "";

  const importLines = [
    `import Example from "#/components/docs/example.astro";`,
    ...unique.map(({ name }) => {
      const stem = exportToFileStem(name);
      if (framework === "react" || framework === "solid") {
        return `import { ${name}Source } from "${alias}/${id}/${stem}${ext}";`;
      }
      return `import ${name}Source from "${alias}/${id}/${stem}${ext}?raw";`;
    }),
  ];

  return `${importLines.join("\n")}\n\n${withExamples.trim()}\n`;
}

let wroteMeta = 0;
let wroteDevelop = 0;
let skipped = 0;

for (const framework of FRAMEWORKS) {
  if (fwFilter && framework !== fwFilter) continue;
  const areaDir = path.join(CONTENT, framework, "blocks");
  if (!existsSync(areaDir)) continue;

  for (const entry of readdirSync(areaDir).sort()) {
    if (!entry.endsWith(".md")) continue;
    const id = entry.replace(/\.md$/, "");
    const metaPath = path.join(areaDir, entry);
    const paneDir = path.join(areaDir, id);
    const developPath = path.join(paneDir, "develop.mdx");

    if (existsSync(developPath)) {
      skipped++;
      continue;
    }

    const raw = readFileSync(metaPath, "utf8");
    const { frontmatter, body } = parseFrontmatter(raw);
    if (!frontmatter.trim()) {
      console.warn(`skip ${framework}/blocks/${id}: no frontmatter`);
      skipped++;
      continue;
    }

    // Meta only (title/description).
    writeFileSync(metaPath, `---\n${frontmatter.trim()}\n---\n`);
    wroteMeta++;

    mkdirSync(paneDir, { recursive: true });
    writeFileSync(developPath, buildDevelopMdx(framework, id, body));
    wroteDevelop++;
  }
}

console.log(
  `blocks migrate: meta=${wroteMeta} develop.mdx=${wroteDevelop} skipped=${skipped}`,
);
