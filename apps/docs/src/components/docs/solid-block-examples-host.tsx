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
import { readBlockExamplesHostConfig } from "#/lib/examples-host-config";
import { whenVisible } from "#/lib/when-visible";

type ExampleModule = Record<string, unknown>;

const exampleModules = import.meta.glob<ExampleModule>(
  "../../examples/solid/*/index.ts",
);

function slotSelector(exportName: string): string {
  return `[data-example-slot="${CSS.escape(exportName)}"]`;
}

async function loadBarrel(blockId: string): Promise<ExampleModule | null> {
  const key = Object.keys(exampleModules).find((path) =>
    path.endsWith(`/examples/solid/${blockId}/index.ts`),
  );
  if (!key) return null;
  const loader = exampleModules[key];
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
  blockId: string;
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
                Missing example “{props.exportName}” for block “{props.blockId}
                ”.
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

export function SolidBlockExamplesHost(props: {
  blockId?: string;
  exportNames?: string[];
}): JSX.Element {
  const [config, setConfig] = createSignal(
    null as ReturnType<typeof readBlockExamplesHostConfig>,
  );
  const [loadRequested, setLoadRequested] = createSignal(false);

  createEffect(() => {
    const next = readBlockExamplesHostConfig({
      blockId: props.blockId,
      exportNames: props.exportNames,
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
      return cfg.blockId;
    },
    (blockId) => {
      if (!blockId) return undefined;
      return loadBarrel(blockId);
    },
  );

  return (
    <div aria-hidden="true" data-solid-block-examples-host="" hidden>
      <Show when={config()}>
        {(cfg) => (
          <For each={cfg().exportNames}>
            {(exportName) => (
              <ExamplePortal
                blockId={cfg().blockId}
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
