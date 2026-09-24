/**
 * Generate docs PropRow tables from `@pisagor/props` (+ recipe defaultVariants).
 * Usage: bun apps/docs/scripts/generate-props-tables.ts
 */
import fs from "node:fs";
import path from "node:path";

type PropRow = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

const ROOT = path.resolve(import.meta.dir, "../../..");
const PROPS_DIR = path.join(ROOT, "packages/props/src");
const RECIPES_DIR = path.join(ROOT, "packages/recipes/src");
const OUT_DIR = path.join(ROOT, "apps/docs/src/lib/props");

function kebabToCamel(kebab: string): string {
  return kebab.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function kebabToPascal(kebab: string): string {
  const camel = kebabToCamel(kebab);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function stripStars(block: string): string {
  return block
    .replace(/^\/\*\*?/, "")
    .replace(/\*\/$/, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, ""))
    .join("\n")
    .trim();
}

function parseJsDoc(doc: string): { description: string; defaultValue?: string } {
  const raw = stripStars(doc);
  let defaultValue: string | undefined;
  const descLines: string[] = [];
  for (const line of raw.split("\n")) {
    const m = line.match(/^@defaultValue\s+(.+)$/);
    if (m) {
      defaultValue = m[1].trim();
      continue;
    }
    if (line.startsWith("@")) continue;
    descLines.push(line);
  }
  return {
    defaultValue,
    description: descLines.join(" ").replace(/\s+/g, " ").trim(),
  };
}

function extractBraceBlock(src: string, openIdx: number): string {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return src.slice(openIdx, i + 1);
    }
  }
  return "";
}

function niceDefault(v: string): string {
  const t = v.trim();
  if (t.startsWith("`")) return t;
  const q = t.match(/^["'](.*)["']$/);
  if (q) return `\`${q[1]}\``;
  if (t === "true" || t === "false" || /^-?\d+(\.\d+)?$/.test(t)) return `\`${t}\``;
  return t;
}

/** Top-level keys of `{ a: {...}, "b": {...} }` (ignore nested slot keys). */
function topLevelKeysBeforeColon(block: string): string[] {
  const inner = block.slice(1, -1);
  const keys: string[] = [];
  let depth = 0;
  let i = 0;
  while (i < inner.length) {
    const ch = inner[i];
    if (ch === "{") {
      depth++;
      i++;
      continue;
    }
    if (ch === "}") {
      depth--;
      i++;
      continue;
    }
    if (depth !== 0) {
      i++;
      continue;
    }
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (inner.startsWith("/*", i)) {
      const end = inner.indexOf("*/", i + 2);
      i = end < 0 ? inner.length : end + 2;
      continue;
    }
    const slice = inner.slice(i);
    const m = slice.match(/^(?:true|false|"[^"]+"|'[^']+'|[A-Za-z_][A-Za-z0-9_-]*)\s*:/);
    if (m) {
      let token = m[0].replace(/\s*:$/, "");
      if (
        (token.startsWith('"') && token.endsWith('"')) ||
        (token.startsWith("'") && token.endsWith("'"))
      ) {
        token = token.slice(1, -1);
      }
      keys.push(token);
      i += m[0].length;
      continue;
    }
    i++;
  }
  return keys;
}

function parseInterfaceFields(body: string): PropRow[] {
  const fields: PropRow[] = [];
  const re =
    /(?:\/\*\*[\s\S]*?\*\/\s*)?(?:readonly\s+)?([A-Za-z_][A-Za-z0-9_]*)(\??)\s*:\s*([^;]+);/g;
  let m: RegExpExecArray | null;
  while (true) {
    m = re.exec(body);
    if (m == null) break;
    const full = m[0];
    const name = m[1];
    const optional = m[2] === "?";
    let type = m[3].trim().replace(/\s+/g, " ");
    if (full.includes("[")) continue;
    if (optional && !/\bundefined\b/.test(type)) type = `${type} | undefined`;
    const docMatch = full.match(/^\/\*\*[\s\S]*?\*\//);
    const meta = docMatch ? parseJsDoc(docMatch[0]) : { description: "" };
    const row: PropRow = {
      description: meta.description || "",
      name,
      type,
    };
    if (meta.defaultValue) row.defaultValue = niceDefault(meta.defaultValue);
    fields.push(row);
  }
  return fields;
}

function parseRecipeVariantFields(slug: string): PropRow[] {
  const file = path.join(RECIPES_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, "utf8");

  const variantsMap = new Map<string, string[]>();
  const vIdx = src.search(/variants\s*:\s*\{/);
  if (vIdx >= 0) {
    const vOpen = src.indexOf("{", vIdx);
    const vBlock = extractBraceBlock(src, vOpen);
    const vInner = vBlock.slice(1, -1);
    const keyRe = /(?:\/\*\*[\s\S]*?\*\/\s*)?([A-Za-z_][A-Za-z0-9_]*)\s*:\s*\{/g;
    let km: RegExpExecArray | null;
    while (true) {
      km = keyRe.exec(vInner);
      if (km == null) break;
      const key = km[1];
      const subOpen = vInner.indexOf("{", km.index + km[0].length - 1);
      if (subOpen < 0) continue;
      // Ensure this `{` is the value for this key at depth 0 — extractBraceBlock from subOpen
      const sub = extractBraceBlock(vInner, subOpen);
      const opts = topLevelKeysBeforeColon(sub);
      if (opts.length && opts.every((o) => o === "true" || o === "false")) {
        variantsMap.set(key, ["boolean"]);
      } else if (opts.length) {
        variantsMap.set(key, opts);
      }
    }
  }

  const dvIdx = src.search(/defaultVariants\s*:\s*\{/);
  if (dvIdx < 0) return [];
  const open = src.indexOf("{", dvIdx);
  const block = extractBraceBlock(src, open);
  const inner = block.slice(1, -1);

  const fields: PropRow[] = [];
  const fieldRe = /(?:\/\*\*[\s\S]*?\*\/\s*)?([A-Za-z_][A-Za-z0-9_]*)\s*:\s*([^,}]+)/g;
  let fm: RegExpExecArray | null;
  while (true) {
    fm = fieldRe.exec(inner);
    if (fm == null) break;
    const chunk = fm[0];
    const name = fm[1];
    const rawVal = fm[2].trim();
    const docMatch = chunk.match(/^\/\*\*[\s\S]*?\*\//);
    const description = docMatch ? parseJsDoc(docMatch[0]).description : "";
    let type = "unknown";
    const opts = variantsMap.get(name);
    if (opts?.length === 1 && opts[0] === "boolean") type = "boolean | undefined";
    else if (opts?.length) {
      type = `${opts.map((o) => JSON.stringify(o)).join(" | ")} | undefined`;
    } else if (rawVal === "true" || rawVal === "false") type = "boolean | undefined";
    else if (/^["']/.test(rawVal)) type = "string | undefined";
    fields.push({
      defaultValue: niceDefault(rawVal),
      description: description || "",
      name,
      type,
    });
  }
  return fields;
}

function parsePropsFile(slug: string): { interfaceName: string; fields: PropRow[] }[] {
  const file = path.join(PROPS_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, "utf8");
  const results: { interfaceName: string; fields: PropRow[] }[] = [];

  const ifaceRe = /export\s+interface\s+([A-Za-z0-9_]+Props)\s*(?:extends\s+([^{]+))?\s*\{/g;
  let im: RegExpExecArray | null;
  while (true) {
    im = ifaceRe.exec(src);
    if (im == null) break;
    const interfaceName = im[1];
    const extendsList = (im[2] || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const open = src.indexOf("{", im.index + im[0].length - 1);
    const block = extractBraceBlock(src, open);
    const own = parseInterfaceFields(block.slice(1, -1));
    const merged = new Map<string, PropRow>();
    for (const ext of extendsList) {
      if (ext.endsWith("VariantProps")) {
        for (const f of parseRecipeVariantFields(slug)) merged.set(f.name, f);
      }
    }
    for (const f of own) merged.set(f.name, f);
    results.push({ fields: [...merged.values()], interfaceName });
  }
  return results;
}

function emitFile(slug: string, primary: { interfaceName: string; fields: PropRow[] }): string {
  const exportName = `${kebabToCamel(slug)}Props`;
  const rows = primary.fields
    .map((f) => {
      const parts = [
        `    name: ${JSON.stringify(f.name)},`,
        `    type: ${JSON.stringify(f.type)},`,
      ];
      if (f.defaultValue !== undefined) {
        parts.push(`    defaultValue: ${JSON.stringify(f.defaultValue)},`);
      }
      parts.push(`    description: ${JSON.stringify(f.description)},`);
      return `  {\n${parts.join("\n")}\n  }`;
    })
    .join(",\n");

  return `/* eslint-disable */
// Generated by \`bun apps/docs/scripts/generate-props-tables.ts\` from @pisagor/props ${primary.interfaceName}. Do not edit.
import type { PropRow } from "./types";

export type { PropRow };

/** Own props from \`@pisagor/props/${slug}\` (native HTML attributes omitted). */
export const ${exportName}: PropRow[] = [
${rows}
];
`;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  // Preserve types.ts
  const files = fs
    .readdirSync(PROPS_DIR)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(/\.ts$/, ""));

  let ok = 0;
  const indexExports: string[] = [];

  for (const slug of files) {
    let parsed = parsePropsFile(slug);
    if (!parsed.length) {
      // e.g. alert-dialog.ts: `export type { DialogProps as AlertDialogProps } from "./dialog"`
      const src = fs.readFileSync(path.join(PROPS_DIR, `${slug}.ts`), "utf8");
      const re =
        /export\s+type\s*\{\s*([A-Za-z0-9_]+)\s+as\s+([A-Za-z0-9_]+)\s*\}\s*from\s*["']\.\/([^"']+)["']/;
      const m = src.match(re);
      if (m) {
        const [, , asName, fromSlug] = m;
        const fromParsed = parsePropsFile(fromSlug);
        const prefer = asName;
        const base =
          fromParsed.find(
            (x) =>
              x.interfaceName === prefer.replace(/^Alert/, "") || x.interfaceName.endsWith("Props"),
          ) ?? fromParsed[0];
        if (base) {
          parsed = [{ fields: base.fields, interfaceName: asName }];
        }
      }
    }
    if (!parsed.length) continue;
    const prefer = `${kebabToPascal(slug)}Props`;
    const chosen =
      parsed.find((p) => p.interfaceName === prefer) ??
      [...parsed].sort((a, b) => b.fields.length - a.fields.length)[0];
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.ts`), emitFile(slug, chosen));
    indexExports.push(`export { ${kebabToCamel(slug)}Props } from "./${slug}";`);
    ok++;
  }

  fs.writeFileSync(
    path.join(OUT_DIR, "index.ts"),
    `export type { PropRow } from "./types";\n${indexExports.sort().join("\n")}\n`,
  );
  console.log(`generated ${ok} prop tables -> ${OUT_DIR}`);
}

main();
