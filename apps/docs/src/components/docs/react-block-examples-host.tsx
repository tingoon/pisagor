import { type ComponentType, useEffect } from "react";
import { createRoot, type Root } from "react-dom/client";
import { readBlockExamplesHostConfig } from "#/lib/examples-host-config";
import { whenVisible } from "#/lib/when-visible";

type ExampleModule = Record<
  string,
  ComponentType | Record<string, string> | string | undefined
>;

/**
 * Single client island for all BlockDocPage live previews.
 * Props optional — falls back to `[data-docs-block-examples-host]`.
 */
const exampleModules = import.meta.glob<ExampleModule>(
  "../../examples/react/*/index.ts",
);

function slotSelector(exportName: string): string {
  return `[data-example-slot="${CSS.escape(exportName)}"]`;
}

async function loadBarrel(blockId: string): Promise<ExampleModule | null> {
  const key = Object.keys(exampleModules).find((path) =>
    path.endsWith(`/examples/react/${blockId}/index.ts`),
  );
  if (!key) return null;
  const loader = exampleModules[key];
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
  blockId: string,
) {
  root.render(
    Comp ? (
      <Comp />
    ) : (
      <p className="text-muted-foreground text-sm">
        Missing example “{exportName}” for block “{blockId}”.
      </p>
    ),
  );
}

export function ReactBlockExamplesHost(
  props: { blockId?: string; exportNames?: string[] } = {},
) {
  const { blockId, exportNames } = props;

  useEffect(() => {
    const config = readBlockExamplesHostConfig({ blockId, exportNames });
    if (!config) return;

    let cancelled = false;
    let barrel: Promise<ExampleModule | null> | undefined;
    const roots = new Map<string, Root>();
    const stops: Array<() => void> = [];

    const ensureBarrel = () => {
      barrel ??= loadBarrel(config.blockId);
      return barrel;
    };

    for (const exportName of config.exportNames) {
      const el = document.querySelector(slotSelector(exportName));
      if (!el) continue;

      stops.push(
        whenVisible(el, () => {
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
                config.blockId,
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
  }, [blockId, exportNames]);

  return <div aria-hidden="true" data-react-block-examples-host="" hidden />;
}
