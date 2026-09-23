/** Shared strippers: turn example files into the bare snippets shown in docs. */

function dedent(text: string): string {
  const lines = text.replace(/\n+$/, "").split("\n");
  let min = Infinity;
  for (const line of lines) {
    if (!line.trim()) continue;
    const match = /^(\s*)/.exec(line);
    const indent = match?.[1]?.length ?? 0;
    min = Math.min(min, indent);
  }
  if (!Number.isFinite(min) || min === 0) {
    return lines.join("\n").trimEnd();
  }
  return lines
    .map((line) => (line.trim() ? line.slice(min) : line))
    .join("\n")
    .trimEnd();
}

/**
 * Strip a React/TSX example file to its JSX body.
 * Keeps relative indentation intact, then dedents the whole block.
 */
export function stripTsxExample(raw: string): string {
  const withoutImports = raw.replace(/^\s*import\s[\s\S]*?;\s*$/gm, "").trim();

  const wrappedParen = withoutImports.match(
    /^(?:export\s+default\s+function|export\s+function)\s+\w+\s*\([^)]*\)\s*\{\s*return\s*\(([\s\S]*?)\);\s*\}\s*$/,
  );
  const parenBody = wrappedParen?.[1];
  if (parenBody !== undefined) {
    // Keep leading indent on the first JSX line (do not trim the capture).
    const body = parenBody.replace(/^\n/, "").replace(/\n[ \t]*$/, "");
    return dedent(body);
  }

  const wrappedExpr = withoutImports.match(
    /^(?:export\s+default\s+function|export\s+function)\s+\w+\s*\([^)]*\)\s*\{\s*return\s+([^;]+);\s*\}\s*$/,
  );
  const exprBody = wrappedExpr?.[1];
  if (exprBody !== undefined) return exprBody.trim();

  return dedent(
    withoutImports
      .replace(/^export\s+default\s+function\s+/m, "function ")
      .replace(/^export\s+function\s+/m, "function "),
  ).trim();
}

/** Strip a Vue SFC example to its `<template>` body. */
export function stripVueExample(raw: string): string {
  const template = raw.match(/<template>([\s\S]*?)<\/template>/);
  const templateBody = template?.[1];
  if (templateBody !== undefined) {
    const body = templateBody.replace(/^\n/, "").replace(/\n[ \t]*$/, "");
    return dedent(body);
  }
  return raw.trim();
}

/** Strip an Astro example to its markup (frontmatter removed). */
export function stripAstroExample(raw: string): string {
  const body = raw.replace(/^---[\s\S]*?---\s*/, "");
  return dedent(body.replace(/^\n/, "")).trimEnd();
}
