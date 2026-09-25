import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  type InterfaceDeclaration,
  Node,
  type ObjectLiteralExpression,
  Project,
  type PropertyAssignment,
  type PropertySignature,
  SyntaxKind,
  type Symbol as TsSymbol,
  TypeFormatFlags,
  ts,
} from "ts-morph";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDir, "../..");
const propsDir = path.join(workspaceRoot, "packages/props");
const recipesUiDir = path.join(workspaceRoot, "packages/recipes/src");
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
  /** kebab-case component id (file stem under packages/props/src). */
  id: string;
  /** Exported interface name in `packages/props/src/<id>.ts`. */
  interfaceName: string;
  /**
   * Optional `tv()` recipe in `@pisagor/recipes`.
   * Variant docs are read from `defaultVariants` property JSDoc + values.
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
  const outPath = path.join(outDir, `${spec.id}.ts`);
  const file = `/* eslint-disable */
// Generated by \`bun run --filter @pisagor/scripts generate:props\` from @pisagor/props ${spec.interfaceName}. Do not edit.
import type { PropRow } from "./types";

export type { PropRow };

/** Own props from \`@pisagor/props/${spec.id}\` (native HTML attributes omitted). */
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

function main(): void {
  const project = new Project({
    skipAddingFilesFromTsConfig: false,
    tsConfigFilePath: path.join(propsDir, "tsconfig.json"),
  });

  mkdirSync(outDir, { recursive: true });
  writeTypesFile();

  for (const spec of COMPONENTS) {
    generateComponent(project, spec);
  }
}

main();
