/** @jsxImportSource solid-js */
import type { Component, JSX } from "solid-js";

type ExampleModule = Record<string, unknown>;

/**
 * Client island host for Solid ComponentDocPage previews.
 * Pass serializable ids — never Solid components as island props.
 */
const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/solid/examples/*/index.ts",
  { eager: true },
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/solid-form/examples/*/index.ts",
  { eager: true },
);

function resolveExample(
  componentId: string,
  exportName: string,
  kind: "component" | "form",
): Component | undefined {
  const modules = kind === "form" ? formExampleModules : exampleModules;
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/examples/${componentId}/index.ts`),
  );
  if (!key) return undefined;
  const mod = modules[key];
  if (exportName === "sources" || exportName === "imports") return undefined;
  const Comp = mod?.[exportName];
  if (Comp == null || typeof Comp === "string") return undefined;
  return Comp as Component;
}

export function SolidExampleIsland(props: {
  componentId: string;
  exportName: string;
  kind?: "component" | "form";
}): JSX.Element {
  const Component = resolveExample(
    props.componentId,
    props.exportName,
    props.kind ?? "component",
  );
  if (!Component) {
    return (
      <p class="text-muted-foreground text-sm">
        Missing example “{props.exportName}” for “{props.componentId}”.
      </p>
    );
  }
  return <Component />;
}
