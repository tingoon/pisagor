/**
 * Sync framework-agnostic docs (`design.md`, `metadata.md`) from React (canonical)
 * into every other framework folder under `src/content/<fw>/{components,forms}/<id>/`.
 *
 * Links like `[Toast](/react/components/toast/design)` are rewritten to the target
 * framework; when the target framework has no page for that id, the link is
 * flattened to plain text (`Toast`).
 *
 * Only folders that already exist in the target framework are synced.
 *
 * Usage:
 *   bun scripts/sync-shared-docs.ts          # write copies
 *   bun scripts/sync-shared-docs.ts --check  # exit 1 if any copy drifted
 */
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.resolve(import.meta.dir, "../src/content");
const SOURCE_FRAMEWORK = "react";
const SECTIONS = ["components", "forms"] as const;
const SHARED_FILES = ["design.md", "metadata.md"] as const;
const LINK_RE =
  /\[([^\]]+)\]\(\/react\/(components|forms)\/([a-z0-9-]+)(\/[^)\s]*)?\)/g;

const check = process.argv.includes("--check");

function listDirs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function rewriteLinks(markdown: string, framework: string): string {
  return markdown.replace(
    LINK_RE,
    (_match, text: string, section: string, id: string, rest = "") => {
      const target = path.join(CONTENT_DIR, framework, section, id);
      if (!fs.existsSync(target)) return text;
      return `[${text}](/${framework}/${section}/${id}${rest})`;
    },
  );
}

const frameworks = listDirs(CONTENT_DIR).filter(
  (fw) => fw !== SOURCE_FRAMEWORK,
);
const drifted: string[] = [];
let written = 0;

for (const framework of frameworks) {
  for (const section of SECTIONS) {
    const sourceSection = path.join(CONTENT_DIR, SOURCE_FRAMEWORK, section);
    for (const id of listDirs(path.join(CONTENT_DIR, framework, section))) {
      for (const file of SHARED_FILES) {
        const sourcePath = path.join(sourceSection, id, file);
        if (!fs.existsSync(sourcePath)) continue;
        const targetPath = path.join(CONTENT_DIR, framework, section, id, file);
        const expected = rewriteLinks(
          fs.readFileSync(sourcePath, "utf8"),
          framework,
        );
        const current = fs.existsSync(targetPath)
          ? fs.readFileSync(targetPath, "utf8")
          : null;
        if (current === expected) continue;
        const relative = path.relative(CONTENT_DIR, targetPath);
        if (check) {
          drifted.push(relative);
        } else {
          fs.writeFileSync(targetPath, expected);
          written++;
          console.log(`synced ${relative}`);
        }
      }
    }
  }
}

if (check) {
  if (drifted.length > 0) {
    console.error(
      `Shared docs drifted from ${SOURCE_FRAMEWORK} (${drifted.length}):\n  ${drifted.join("\n  ")}\nRun: bun run docs:sync (in apps/docs)`,
    );
    process.exit(1);
  }
  console.log("Shared docs are in sync.");
} else {
  console.log(`Synced ${written} file(s).`);
}
