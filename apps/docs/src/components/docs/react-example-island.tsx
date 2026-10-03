import type { ComponentType } from "react";

type ExampleModule = Record<
  string,
  ComponentType | Record<string, string> | string | undefined
>;

/**
 * Client island host for dynamic ComponentDocPage previews.
 * Astro serializes island props to JSON, so React components cannot be passed
 * as `component={Example}` (they become null). Pass serializable ids instead
 * and resolve the example export inside this module.
 */
const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/react/skills/react/assets/examples/*/index.ts",
  { eager: true },
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/react-form/skills/react-form/assets/examples/*/index.ts",
  { eager: true },
);

function resolveExample(
  componentId: string,
  exportName: string,
  kind: "component" | "form",
): ComponentType | undefined {
  const modules = kind === "form" ? formExampleModules : exampleModules;
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/examples/${componentId}/index.ts`),
  );
  if (!key) return undefined;
  const mod = modules[key];
  if (exportName === "sources" || exportName === "imports") return undefined;
  const Comp = mod?.[exportName];
  if (Comp == null || typeof Comp === "string") return undefined;
  return Comp as ComponentType;
}

export function ReactExampleIsland({
  componentId,
  exportName,
  kind = "component",
}: {
  componentId: string;
  exportName: string;
  kind?: "component" | "form";
}) {
  const Component = resolveExample(componentId, exportName, kind);
  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Missing example “{exportName}” for “{componentId}”.
      </p>
    );
  }
  return <Component />;
}
