import fs, { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Node, Project, SyntaxKind, TypeFormatFlags, ts } from "ts-morph";
import type {
  InterfaceDeclaration,
  ObjectLiteralExpression,
  PropertyAssignment,
  PropertySignature,
  Symbol as TsSymbol,
} from "ts-morph";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "../..");
const propsDir = path.join(workspaceRoot, "packages/props");
const recipesUiDir = path.join(workspaceRoot, "packages/presets/src/contracts");
const outDir = path.join(workspaceRoot, "apps/docs/src/lib/props");

interface PropDoc {
  description: string;
  defaultValue?: string;
  type?: string;
}

interface PropRow {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

interface ComponentSpec {
  /** Kebab-case component id (file stem under packages/props/src). */
  id: string;
  /** Exported interface name in `packages/props/src/<id>.ts`. */
  interfaceName: string;
  /**
   * Optional `tv()` recipe in `@pisagor/recipes`. Variant docs are read from
   * `defaultVariants` property JSDoc + values.
   */
  recipe?: {
    fileName: string;
    constName: string;
  };
}

const COMPONENTS: ComponentSpec[] = [
  {
    id: "button",
    interfaceName: "ButtonProps",
    recipe: { constName: "buttonRecipe", fileName: "button.ts" },
  },
  {
    id: "accordion",
    interfaceName: "AccordionProps",
  },
];

function jsDocCommentText(comment: ts.JSDoc["comment"]): string {
  if (comment === undefined) return "";
  if (typeof comment === "string") return comment.trim();

  return comment
    .map((part) => ("text" in part ? String(part.text) : ""))
    .join("")
    .trim();
}

/** JSDoc on object-literal properties is not exposed via ts-morph `getJsDocs()`. */
function compilerJsDocs(node: Node): ts.JSDoc[] {
  return ts
    .getJSDocCommentsAndTags(node.compilerNode)
    .filter((n): n is ts.JSDoc => ts.isJSDoc(n));
}

function jsDocDescriptionFromNode(node: Node): string {
  const parts = compilerJsDocs(node)
    .map((doc) => jsDocCommentText(doc.comment))
    .filter(Boolean);

  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function jsDocTagFromNode(node: Node, tagName: string): string | undefined {
  for (const doc of compilerJsDocs(node)) {
    for (const tag of doc.tags ?? []) {
      if (tag.tagName.text === tagName) {
        return jsDocCommentText(tag.comment) || undefined;
      }
    }
  }

  return undefined;
}

function descriptionOf(prop: PropertySignature): string {
  return jsDocDescriptionFromNode(prop);
}

function defaultOf(prop: PropertySignature): string | undefined {
  return (
    jsDocTagFromNode(prop, "defaultValue") ??
    jsDocTagFromNode(prop, "default") ??
    undefined
  );
}

function formatTypeText(raw: string): string {
  return raw
    .replace(/import\("(?:[^"]+)"\)\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function typeTextFromSymbol(
  symbol: TsSymbol,
  location: InterfaceDeclaration,
): string {
  const type = symbol.getTypeAtLocation(location);
  const flags =
    TypeFormatFlags.UseAliasDefinedOutsideCurrentScope |
    TypeFormatFlags.NoTruncation;

  return formatTypeText(type.getText(location, flags));
}

function typeTextFromOwn(prop: PropertySignature): string | undefined {
  const typeNode = prop.getTypeNode();
  if (!typeNode) return undefined;
  const text = formatTypeText(typeNode.getText());

  return prop.hasQuestionToken() ? `${text} | undefined` : text;
}

function formatDefaultLiteral(init: Node): string {
  if (Node.isStringLiteral(init)) {
    return `\`"${init.getLiteralValue()}"\``;
  }
  if (init.getKind() === SyntaxKind.TrueKeyword) return "`true`";
  if (init.getKind() === SyntaxKind.FalseKeyword) return "`false`";
  if (Node.isNumericLiteral(init)) return `\`${init.getLiteralValue()}\``;

  return `\`${init.getText()}\``;
}

function getObjectProperty(
  obj: ObjectLiteralExpression,
  name: string,
): PropertyAssignment | undefined {
  for (const prop of obj.getProperties()) {
    if (Node.isPropertyAssignment(prop) && prop.getName() === name) return prop;
  }

  return undefined;
}

function unwrapObjectLiteral(node: Node | undefined): ObjectLiteralExpression {
  let current = node;
  while (current) {
    if (Node.isObjectLiteralExpression(current)) return current;
    if (Node.isAsExpression(current) || Node.isSatisfiesExpression(current)) {
      current = current.getExpression();
      continue;
    }
    break;
  }
  throw new Error("Expected an object literal");
}

/**
 * Read variant prop docs from a `tv({ defaultVariants: { … } })` config.
 * Description = property JSDoc body; defaultValue = initializer literal.
 */
function loadRecipeDefaultVariantDocs(
  project: Project,
  recipe: NonNullable<ComponentSpec["recipe"]>,
): { docs: Record<string, PropDoc>; order: string[] } {
  const source = project.addSourceFileAtPathIfExists(
    path.join(recipesUiDir, recipe.fileName),
  );
  if (!source) {
    throw new Error(`Recipe file not found: ${recipe.fileName}`);
  }

  const variable = source.getVariableDeclarationOrThrow(recipe.constName);
  const initializer = variable.getInitializer();
  if (!initializer || !Node.isCallExpression(initializer)) {
    throw new Error(`${recipe.constName} must be a tv(…) call`);
  }

  const configArg = initializer.getArguments()[0];
  if (!configArg || !Node.isObjectLiteralExpression(configArg)) {
    throw new Error(`${recipe.constName}: expected tv({ … }) object argument`);
  }

  const defaultVariantsProp = getObjectProperty(configArg, "defaultVariants");
  if (!defaultVariantsProp) {
    return { docs: {}, order: [] };
  }

  const defaultsObj = unwrapObjectLiteral(defaultVariantsProp.getInitializer());
  const docs: Record<string, PropDoc> = {};
  const order: string[] = [];

  for (const prop of defaultsObj.getProperties()) {
    if (!Node.isPropertyAssignment(prop)) continue;
    const name = prop.getName();
    const description = jsDocDescriptionFromNode(prop);
    const init = prop.getInitializer();
    const defaultValue = init ? formatDefaultLiteral(init) : undefined;
    order.push(name);
    docs[name] = {
      description,
      ...(defaultValue !== undefined ? { defaultValue } : {}),
    };
  }

  return { docs, order };
}

function extractInterfaceProps(
  iface: InterfaceDeclaration,
  docs: Record<string, PropDoc>,
  preferredOrder: string[],
): PropRow[] {
  const byName = new Map<
    string,
    { type: string; description: string; defaultValue?: string }
  >();

  for (const symbol of iface.getType().getProperties()) {
    const name = symbol.getName();
    if (name.startsWith("__@")) continue;

    const own = iface.getProperty(name);
    const fromDocs = docs[name];
    const description =
      fromDocs?.description ||
      (own && Node.isPropertySignature(own) ? descriptionOf(own) : "");
    const defaultValue =
      fromDocs?.defaultValue ??
      (own && Node.isPropertySignature(own) ? defaultOf(own) : undefined);
    const type =
      fromDocs?.type ??
      (own && Node.isPropertySignature(own)
        ? typeTextFromOwn(own)
        : undefined) ??
      typeTextFromSymbol(symbol, iface);

    byName.set(name, {
      description,
      type,
      ...(defaultValue !== undefined ? { defaultValue } : {}),
    });
  }

  const rows: PropRow[] = [];
  const seen = new Set<string>();

  for (const name of preferredOrder) {
    const row = byName.get(name);
    if (!row) continue;
    rows.push({ name, ...row });
    seen.add(name);
  }

  for (const [name, row] of byName) {
    if (seen.has(name)) continue;
    rows.push({ name, ...row });
  }

  return rows;
}

function serializeRows(rows: PropRow[]): string {
  return rows
    .map((row) => {
      const lines = [
        `  {`,
        `    name: ${JSON.stringify(row.name)},`,
        `    type: ${JSON.stringify(row.type)},`,
      ];
      if (row.defaultValue !== undefined) {
        lines.push(`    defaultValue: ${JSON.stringify(row.defaultValue)},`);
      }
      lines.push(`    description: ${JSON.stringify(row.description)},`);
      lines.push(`  }`);

      return lines.join("\n");
    })
    .join(",\n");
}

function writeTypesFile(): void {
  writeFileSync(
    path.join(outDir, "types.ts"),
    `export interface PropRow {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}
`,
  );
}

function generateComponent(project: Project, spec: ComponentSpec): void {
  const source = project.getSourceFileOrThrow(
    path.join(propsDir, "src", `${spec.id}.ts`),
  );
  const iface = source.getInterfaceOrThrow(spec.interfaceName);

  let docs: Record<string, PropDoc> = {};
  let preferredOrder: string[] = [];

  if (spec.recipe) {
    const fromRecipe = loadRecipeDefaultVariantDocs(project, spec.recipe);
    docs = fromRecipe.docs;
    preferredOrder = fromRecipe.order;
  }

  // Own interface members (declaration order) after recipe variants.
  for (const member of iface.getMembers()) {
    if (!Node.isPropertySignature(member)) continue;
    preferredOrder.push(member.getName());
  }

  const rows = extractInterfaceProps(iface, docs, preferredOrder);

  if (rows.length === 0) {
    throw new Error(`No props extracted from ${spec.interfaceName}`);
  }

  const exportName = `${spec.id}Props`;
  const outPath = path.join(outDir, `${spec.id}.gen.ts`);
  const file = `/* eslint-disable */
// Generated by \`bun run --filter @pisagor/scripts generate:props\` from @pisagor/props ${spec.interfaceName}. Do not edit.
import type { PropRow } from "./types";

export type { PropRow };

/** Own props from \`@pisagor/props\` (\`packages/props/src/${spec.id}.ts\`, native HTML attributes omitted). */
export const ${exportName}: PropRow[] = [
${serializeRows(rows)},
];
`;
  writeFileSync(outPath, file);
  console.log(
    `Wrote ${path.relative(workspaceRoot, outPath)} (${rows.length} props)`,
  );
  for (const row of rows) {
    console.log(`  - ${row.name}: ${row.type}`);
  }
}

// #region Source tables (regex, every other props file)
const PROPS_DIR = path.join(propsDir, "src");
const RECIPES_DIR = recipesUiDir;
const OUT_DIR = outDir;

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

function parseJsDoc(doc: string): {
  description: string;
  defaultValue?: string;
} {
  const raw = stripStars(doc);
  let defaultValue: string | undefined;
  const descLines: string[] = [];
  for (const line of raw.split("\n")) {
    const m = line.match(/^@defaultValue\s+(.+)$/);
    if (m) {
      defaultValue = (m[1] ?? "").trim();
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
    const ch = src[i] ?? "";
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
  if (t === "true" || t === "false" || /^-?\d+(\.\d+)?$/.test(t))
    return `\`${t}\``;

  return t;
}

/** Top-level keys of `{ a: {...}, "b": {...} }` (ignore nested slot keys). */
function topLevelKeysBeforeColon(block: string): string[] {
  const inner = block.slice(1, -1);
  const keys: string[] = [];
  let depth = 0;
  let i = 0;
  while (i < inner.length) {
    const ch = inner[i] ?? "";
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
    const m = slice.match(
      /^(?:true|false|"[^"]+"|'[^']+'|[A-Za-z_][A-Za-z0-9_-]*)\s*:/,
    );
    if (m) {
      let token = (m[0] ?? "").replace(/\s*:$/, "");
      if (
        (token.startsWith('"') && token.endsWith('"')) ||
        (token.startsWith("'") && token.endsWith("'"))
      ) {
        token = token.slice(1, -1);
      }
      keys.push(token);
      i += (m[0] ?? "").length;
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
    const full = m[0] ?? "";
    const name = m[1] ?? "";
    const optional = (m[2] ?? "") === "?";
    let type = (m[3] ?? "").trim().replace(/\s+/g, " ");
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
    const keyRe =
      /(?:\/\*\*[\s\S]*?\*\/\s*)?([A-Za-z_][A-Za-z0-9_]*)\s*:\s*\{/g;
    let km: RegExpExecArray | null;
    while (true) {
      km = keyRe.exec(vInner);
      if (km == null) break;
      const key = km[1] ?? "";
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
  const fieldRe =
    /(?:\/\*\*[\s\S]*?\*\/\s*)?([A-Za-z_][A-Za-z0-9_]*)\s*:\s*([^,}]+)/g;
  let fm: RegExpExecArray | null;
  while (true) {
    fm = fieldRe.exec(inner);
    if (fm == null) break;
    const chunk = fm[0] ?? "";
    const name = fm[1] ?? "";
    const rawVal = (fm[2] ?? "").trim();
    const docMatch = chunk.match(/^\/\*\*[\s\S]*?\*\//);
    const description = docMatch ? parseJsDoc(docMatch[0]).description : "";
    let type = "unknown";
    const opts = variantsMap.get(name);
    if (opts?.length === 1 && opts[0] === "boolean")
      type = "boolean | undefined";
    else if (opts?.length) {
      type = `${opts.map((o) => JSON.stringify(o)).join(" | ")} | undefined`;
    } else if (rawVal === "true" || rawVal === "false")
      type = "boolean | undefined";
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

function parsePropsFile(
  slug: string,
): { interfaceName: string; fields: PropRow[] }[] {
  const file = path.join(PROPS_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, "utf8");
  const results: { interfaceName: string; fields: PropRow[] }[] = [];

  const ifaceRe =
    /export\s+interface\s+([A-Za-z0-9_]+Props)\s*(?:extends\s+([^{]+))?\s*\{/g;
  let im: RegExpExecArray | null;
  while (true) {
    im = ifaceRe.exec(src);
    if (im == null) break;
    const interfaceName = im[1] ?? "";
    const extendsList = ((im[2] ?? "") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const open = src.indexOf("{", im.index + (im[0] ?? "").length - 1);
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

function emitFile(
  slug: string,
  primary: { interfaceName: string; fields: PropRow[] },
): string {
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
// Generated by \`bun run --filter @pisagor/scripts generate:props\` from @pisagor/props ${primary.interfaceName}. Do not edit.
import type { PropRow } from "./types";

export type { PropRow };

/** Own props from \`@pisagor/props\` (\`packages/props/src/${slug}.ts\`, native HTML attributes omitted). */
export const ${exportName}: PropRow[] = [
${rows}
];
`;
}

/**
 * Regex-based tables for every `@pisagor/props` file not listed in `COMPONENTS`
 * (those get the ts-morph tables, which include inherited props).
 */
function generateSourceTables(skip: Set<string>): void {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  // Preserve types.ts
  const files = fs
    .readdirSync(PROPS_DIR)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(/\.ts$/, ""));

  let ok = 0;

  for (const slug of files) {
    if (skip.has(slug)) continue;
    let parsed = parsePropsFile(slug);
    if (!parsed.length) {
      // e.g. alert-dialog.ts: `export type { DialogProps as AlertDialogProps } from "./dialog"`
      const src = fs.readFileSync(path.join(PROPS_DIR, `${slug}.ts`), "utf8");
      const re =
        /export\s+type\s*\{\s*([A-Za-z0-9_]+)\s+as\s+([A-Za-z0-9_]+)\s*\}\s*from\s*["']\.\/([^"']+)["']/;
      const m = src.match(re);
      if (m) {
        const [, , asName = "", fromSlug = ""] = m;
        const fromParsed = parsePropsFile(fromSlug);
        const prefer = asName;
        const base =
          fromParsed.find(
            (x) =>
              x.interfaceName === prefer.replace(/^Alert/, "") ||
              x.interfaceName.endsWith("Props"),
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
    if (!chosen) continue;
    fs.writeFileSync(
      path.join(OUT_DIR, `${slug}.gen.ts`),
      emitFile(slug, chosen),
    );
    ok++;
  }

  console.log(`generated ${ok} prop tables -> ${OUT_DIR}`);
}
// #endregion

function main(): void {
  const project = new Project({
    skipAddingFilesFromTsConfig: false,
    tsConfigFilePath: path.join(propsDir, "tsconfig.json"),
  });

  mkdirSync(outDir, { recursive: true });
  writeTypesFile();

  generateSourceTables(new Set(COMPONENTS.map((spec) => spec.id)));
  for (const spec of COMPONENTS) {
    generateComponent(project, spec);
  }
}

main();
