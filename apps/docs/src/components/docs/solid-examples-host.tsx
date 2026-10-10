/** @jsxImportSource solid-js */

import {
  type Component,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  For,
  type JSX,
  onCleanup,
  Show,
} from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { readComponentExamplesHostConfig } from "#/lib/examples-host-config";
import { whenVisible } from "#/lib/when-visible";

type ExampleModule = Record<string, unknown>;

const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/solid/examples/*/index.ts",
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/solid-form/examples/*/index.ts",
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
  mod: ExampleModule | null | undefined,
  exportName: string,
): Component | null | undefined {
  if (mod === undefined) return undefined;
  if (exportName === "sources" || exportName === "imports") return null;
  if (!mod) return null;
  const Comp = mod[exportName];
  if (Comp == null || typeof Comp !== "function") return null;
  return Comp as Component;
}

function ExamplePortal(props: {
  componentId: string;
  exportName: string;
  mod: ExampleModule | null | undefined;
}): JSX.Element {
  const [target, setTarget] = createSignal<Element>();
  const [visible, setVisible] = createSignal(false);

  createEffect(() => {
    const el =
      document.querySelector(slotSelector(props.exportName)) ?? undefined;
    setTarget(el);
    if (!el) return;
    setVisible(false);
    onCleanup(whenVisible(el, () => setVisible(true)));
  });

  const Comp = createMemo(() => resolveExport(props.mod, props.exportName));

  return (
    <Show when={visible() && Comp() !== undefined ? target() : undefined}>
      {(mount) => (
        <Portal mount={mount()}>
          <Show
            fallback={
              <p class="text-muted-foreground text-sm">
                Missing example “{props.exportName}” for “{props.componentId}”.
              </p>
            }
            when={Comp()}
          >
            {(entry) => <Dynamic component={entry()} />}
          </Show>
        </Portal>
      )}
    </Show>
  );
}

export function SolidExamplesHost(props: {
  componentId?: string;
  exportNames?: string[];
  kind?: "component" | "form";
}): JSX.Element {
  const [config, setConfig] = createSignal(
    null as ReturnType<typeof readComponentExamplesHostConfig>,
  );
  const [loadRequested, setLoadRequested] = createSignal(false);

  createEffect(() => {
    const next = readComponentExamplesHostConfig({
      componentId: props.componentId,
      exportNames: props.exportNames,
      kind: props.kind,
    });
    setConfig(next);
    setLoadRequested(false);
    if (!next) return;

    const stops: Array<() => void> = [];
    for (const name of next.exportNames) {
      const el = document.querySelector(slotSelector(name));
      if (!el) continue;
      stops.push(whenVisible(el, () => setLoadRequested(true)));
    }
    onCleanup(() => {
      for (const stop of stops) stop();
    });
  });

  const [mod] = createResource(
    () => {
      const cfg = config();
      if (!loadRequested() || !cfg) return null;
      return [cfg.componentId, cfg.kind] as const;
    },
    (args) => {
      if (!args) return undefined;
      const [componentId, kind] = args;
      return loadBarrel(componentId, kind);
    },
  );

  return (
    <div aria-hidden="true" data-solid-examples-host="" hidden>
      <Show when={config()}>
        {(cfg) => (
          <For each={cfg().exportNames}>
            {(exportName) => (
              <ExamplePortal
                componentId={cfg().componentId}
                exportName={exportName}
                mod={mod()}
              />
            )}
          </For>
        )}
      </Show>
    </div>
  );
}
