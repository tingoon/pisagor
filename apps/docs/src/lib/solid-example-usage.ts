import { stripTsxExample } from "@pisagor/utils";

/** Build a Solid docs usage snippet from a skill example raw source. */
export function solidExampleUsage(
  componentExport: string,
  packagePath: string,
  raw: string,
): string {
  const body = stripTsxExample(raw);
  const importLine = `import { ${componentExport} } from "@pisagor/solid/${packagePath}";`;

  if (body.includes("\n")) {
    const indented = body
      .split("\n")
      .map((line) => (line.length > 0 ? `    ${line}` : line))
      .join("\n");
    return `${importLine}\n\nexport function Example() {\n  return (\n${indented}\n  );\n}`;
  }

  return `${importLine}\n\nexport function Example() {\n  return ${body};\n}`;
}
