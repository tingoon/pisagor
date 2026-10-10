import { type ComponentType, useEffect } from "react";
import { createRoot, type Root } from "react-dom/client";
import { readComponentExamplesHostConfig } from "#/lib/examples-host-config";
import { whenVisible } from "#/lib/when-visible";

type ExampleModule = Record<
  string,
  ComponentType | Record<string, string> | string | undefined
>;

/**
 * Single client island for all ComponentDocPage live previews.
 * Loads the example barrel once, then mounts each export into its
 * `[data-example-slot]` when that slot enters (near) the viewport.
 *
 * Props are optional — when omitted, config is read from
 * `[data-docs-examples-host]` emitted by ComponentDocPage.
 */
const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/react/examples/*/index.ts",
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/react-form/examples/*/index.ts",
);

function slotSelector(exportName: string): string {
  return `[data-example-slot="${CSS.escape(exportName)}"]`;
}

async function loadBarrel(
  componentId: string,
  kind: "component" | "form",
): Promise<ExampleModule | null> {
  const modules = kind === "form" ? formExampleModules : exampleModules;
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/examples/${componentId}/index.ts`),
  );
  if (!key) return null;
  const loader = modules[key];
  if (!loader) return null;
  return loader();
}

function resolveExport(
  mod: ExampleModule | null,
  exportName: string,
): ComponentType | null {
  if (exportName === "sources" || exportName === "imports") return null;
  if (!mod) return null;
  const Comp = mod[exportName];
  if (Comp == null || typeof Comp !== "function") return null;
  return Comp as ComponentType;
}

function renderExample(
  root: Root,
  Comp: ComponentType | null,
  exportName: string,
  componentId: string,
) {
  root.render(
    Comp ? (
      <Comp />
    ) : (
      <p className="text-muted-foreground text-sm">
        Missing example “{exportName}” for “{componentId}”.
      </p>
    ),
  );
}

export function ReactExamplesHost(
  props: {
    componentId?: string;
    exportNames?: string[];
    kind?: "component" | "form";
  } = {},
) {
  const { componentId, exportNames, kind } = props;

  useEffect(() => {
    const config = readComponentExamplesHostConfig({
      componentId,
      exportNames,
      kind,
    });
    if (!config) return;

    let cancelled = false;
    let barrel: Promise<ExampleModule | null> | undefined;
    const roots = new Map<string, Root>();
    const stops: Array<() => void> = [];

    const ensureBarrel = () => {
      barrel ??= loadBarrel(config.componentId, config.kind);
      return barrel;
    };

    for (const exportName of config.exportNames) {
      const el = document.querySelector(slotSelector(exportName));
      if (!el) continue;

      stops.push(
        whenVisible(el, () => {
          // Defer past the observer/effect turn so createRoot/render never
          // runs while React is committing (Strict Mode + sync takeRecords).
          queueMicrotask(() => {
            if (cancelled) return;
            void ensureBarrel().then((mod) => {
              if (cancelled) return;
              let root = roots.get(exportName);
              if (!root) {
                root = createRoot(el);
                roots.set(exportName, root);
              }
              renderExample(
                root,
                resolveExport(mod, exportName),
                exportName,
                config.componentId,
              );
            });
          });
        }),
      );
    }

    return () => {
      cancelled = true;
      for (const stop of stops) stop();
      queueMicrotask(() => {
        for (const root of roots.values()) root.unmount();
        roots.clear();
      });
    };
  }, [componentId, exportNames, kind]);

  return <div aria-hidden="true" data-react-examples-host="" hidden />;
}
