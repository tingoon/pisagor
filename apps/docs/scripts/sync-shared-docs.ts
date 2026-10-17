/**
 * Sync framework-agnostic docs from React (canonical) into every other
 * framework folder under `src/content/<fw>/{components,forms,blocks}/`.
 *
 * - Components: `<id>/meta.md` + `<id>/design.mdx`
 * - Forms / blocks: single `<id>.mdx` (frontmatter + body)
 *
 * Links like `[Toast](/react/components/toast/design)` are rewritten to the
 * target framework; when the target framework has no page for that id, the link
 * is flattened to plain text (`Toast`).
 *
 * After link rewrite, content is formatted with `bun fmt` so table alignment
 * matches shorter `/vue/`… paths (avoids format ↔ sync thrash).
 *
 * Only ids that already exist in the target framework are synced.
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

function listIds(sectionDir: string, ext: ".mdx"): string[] {
  if (!fs.existsSync(sectionDir)) return [];
  return fs
    .readdirSync(sectionDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(ext))
    .map((entry) => entry.name.slice(0, -ext.length))
    .sort();
}

/** Component ids that have a `<id>/meta.md` page folder. */
function listComponentIds(sectionDir: string): string[] {
  if (!fs.existsSync(sectionDir)) return [];
  return fs
    .readdirSync(sectionDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(sectionDir, entry.name, "meta.md")),
    )
    .map((entry) => entry.name)
    .sort();
}

function pageExists(framework: string, section: string, id: string): boolean {
  const base = path.join(CONTENT_DIR, framework, section, id);
  return (
    fs.existsSync(`${base}.mdx`) ||
    fs.existsSync(path.join(base, "meta.md")) ||
    fs.existsSync(base)
  );
}

function rewriteLinks(markdown: string, framework: string): string {
  return markdown.replace(
    LINK_RE,
    (_match, text: string, section: string, id: string, rest = "") => {
      if (!pageExists(framework, section, id)) return text;
      // Forms/blocks are single-page routes (no /design|/develop suffix).
      const suffix =
        section === "forms" || section === "blocks"
          ? rest === "/design" || rest === "/develop"
            ? ""
            : rest
          : rest;
      return `[${text}](/${framework}/${section}/${id}${suffix})`;
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

function syncFile(sourcePath: string, targetPath: string, framework: string) {
  if (!fs.existsSync(sourcePath)) return;
  const expected = expectedDoc(sourcePath, framework, targetPath);
  const current = fs.existsSync(targetPath)
    ? fs.readFileSync(targetPath, "utf8")
    : null;
  if (current === expected) return;
  const relative = path.relative(CONTENT_DIR, targetPath);
  if (check) {
    drifted.push(relative);
    return;
  }
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, expected);
  written++;
  console.log(`synced ${relative}`);
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

    if (section === "blocks" || section === "forms") {
      for (const id of listIds(targetSection, ".mdx")) {
        syncFile(
          path.join(sourceSection, `${id}.mdx`),
          path.join(targetSection, `${id}.mdx`),
          framework,
        );
      }
      continue;
    }

    for (const id of listComponentIds(targetSection)) {
      syncFile(
        path.join(sourceSection, id, "meta.md"),
        path.join(targetSection, id, "meta.md"),
        framework,
      );
      syncFile(
        path.join(sourceSection, id, "design.mdx"),
        path.join(targetSection, id, "design.mdx"),
        framework,
      );
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
