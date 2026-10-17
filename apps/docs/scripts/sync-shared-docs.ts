/**
 * Sync framework-agnostic docs (`<id>.md` meta + `<id>/design.mdx`) from React
 * (canonical) into every other framework folder under
 * `src/content/<fw>/{components,forms,blocks}/`.
 *
 * Links like `[Toast](/react/components/toast/design)` are rewritten to the
 * target framework; when the target framework has no page for that id, the link
 * is flattened to plain text (`Toast`).
 *
 * After link rewrite, content is formatted with `bun fmt` so table alignment
 * matches shorter `/vue/`… paths (avoids format ↔ sync thrash).
 *
 * Only ids that already exist in the target framework are synced. Block
 * `develop.mdx` is not synced (framework-specific example imports).
 *
 * Usage:
 *
 * ```sh
 * bun scripts/sync-shared-docs.ts         # write copies
 * bun scripts/sync-shared-docs.ts --check # exit 1 if any copy drifted
 * ```
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.resolve(import.meta.dir, "../src/content");
const SOURCE_FRAMEWORK = "react";
const SECTIONS = ["components", "forms", "blocks"] as const;
const LINK_RE =
  /\[([^\]]+)\]\(\/react\/(components|forms|blocks)\/([a-z0-9-]+)(\/[^)\s]*)?\)/g;

const check = process.argv.includes("--check");

function listDirs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function listMetaIds(sectionDir: string): string[] {
  if (!fs.existsSync(sectionDir)) return [];
  return fs
    .readdirSync(sectionDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""))
    .sort();
}

function rewriteLinks(markdown: string, framework: string): string {
  return markdown.replace(
    LINK_RE,
    (_match, text: string, section: string, id: string, rest = "") => {
      const meta = path.join(CONTENT_DIR, framework, section, `${id}.md`);
      const folder = path.join(CONTENT_DIR, framework, section, id);
      if (!fs.existsSync(meta) && !fs.existsSync(folder)) return text;
      return `[${text}](/${framework}/${section}/${id}${rest})`;
    },
  );
}

/** Format markdown/MDX the same way `bun fmt` does (stable sync ↔ format). */
function formatDoc(content: string, filePath: string): string {
  const result = spawnSync("bun", ["fmt", `--stdin-filepath=${filePath}`], {
    encoding: "utf8",
    input: content,
    maxBuffer: 10 * 1024 * 1024,
  });
  if (result.status !== 0) {
    const err = (result.stderr || result.stdout || "").trim();
    throw new Error(`bun fmt failed for ${filePath}: ${err}`);
  }
  return result.stdout;
}

function expectedDoc(
  sourcePath: string,
  framework: string,
  targetPath: string,
): string {
  const rewritten = rewriteLinks(
    fs.readFileSync(sourcePath, "utf8"),
    framework,
  );
  return formatDoc(rewritten, targetPath);
}

const frameworks = listDirs(CONTENT_DIR).filter(
  (fw) => fw !== SOURCE_FRAMEWORK,
);
const drifted: string[] = [];
let written = 0;

for (const framework of frameworks) {
  for (const section of SECTIONS) {
    const sourceSection = path.join(CONTENT_DIR, SOURCE_FRAMEWORK, section);
    const targetSection = path.join(CONTENT_DIR, framework, section);
    for (const id of listMetaIds(targetSection)) {
      // Meta: <id>.md
      const sourceMeta = path.join(sourceSection, `${id}.md`);
      if (fs.existsSync(sourceMeta)) {
        const targetMeta = path.join(targetSection, `${id}.md`);
        const expected = expectedDoc(sourceMeta, framework, targetMeta);
        const current = fs.existsSync(targetMeta)
          ? fs.readFileSync(targetMeta, "utf8")
          : null;
        if (current !== expected) {
          const relative = path.relative(CONTENT_DIR, targetMeta);
          if (check) drifted.push(relative);
          else {
            fs.writeFileSync(targetMeta, expected);
            written++;
            console.log(`synced ${relative}`);
          }
        }
      }

      // Design: <id>/design.mdx
      const sourceDesign = path.join(sourceSection, id, "design.mdx");
      if (fs.existsSync(sourceDesign)) {
        const targetDesign = path.join(targetSection, id, "design.mdx");
        const expected = expectedDoc(sourceDesign, framework, targetDesign);
        const current = fs.existsSync(targetDesign)
          ? fs.readFileSync(targetDesign, "utf8")
          : null;
        if (current !== expected) {
          const relative = path.relative(CONTENT_DIR, targetDesign);
          if (check) drifted.push(relative);
          else {
            fs.mkdirSync(path.dirname(targetDesign), { recursive: true });
            fs.writeFileSync(targetDesign, expected);
            written++;
            console.log(`synced ${relative}`);
          }
        }
      }
    }
  }
}

if (check) {
  if (drifted.length > 0) {
    console.error(
      `Shared docs drift (${drifted.length}). Run: bun scripts/sync-shared-docs.ts\n` +
        drifted.map((f) => `  ${f}`).join("\n"),
    );
    process.exit(1);
  }
  console.log("Shared docs in sync.");
} else {
  console.log(written === 0 ? "Already in sync." : `Wrote ${written} file(s).`);
}
