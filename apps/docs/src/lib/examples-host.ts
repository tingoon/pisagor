/**
 * Framework-agnostic core shared by the four `*-examples-host` islands.
 *
 * Each docs page renders empty `[data-example-slot="<Export>"]` placeholders
 * plus one config element. A host island calls `armExamplesHost` with its
 * framework's per-file `import.meta.glob` maps; each visible slot lazy-loads
 * only that example file (no `index.ts` barrel).
 */
import {
  exportNameToFileStem,
  findExampleFileLoader,
  resolveExampleExport,
} from "#/lib/example-file";
import { whenVisible } from "#/lib/when-visible";

export type ExampleKind = "component" | "form" | "block";

type FileLoaderMap = Record<string, () => Promise<unknown>>;

/** `import.meta.glob` results per kind (globs must stay literal per host). */
export type ExampleGlobs = Record<ExampleKind, FileLoaderMap>;

export type ExamplesHostTarget = {
  id: string;
  kind: ExampleKind;
  exportNames: string[];
};

export type ExamplesHostProps = Partial<ExamplesHostTarget>;

/**
 * Mount one example into its slot. `component` is null when the export is
 * missing; render `message` instead. Return a disposer.
 */
export type MountExample = (
  slot: Element,
  component: unknown,
  message: string,
) => (() => void) | undefined;

function readExportNames(el: HTMLElement): string[] {
  try {
    const parsed: unknown = JSON.parse(el.dataset.exportNames ?? "[]");

    return Array.isArray(parsed)
      ? parsed.filter((n): n is string => typeof n === "string")
      : [];
  } catch {
    return [];
  }
}

/** Explicit props win; otherwise read the config element the doc page emits. */
function resolveTarget(explicit: ExamplesHostProps): ExamplesHostTarget | null {
  if (explicit.id && explicit.exportNames?.length) {
    return {
      exportNames: explicit.exportNames,
      id: explicit.id,
      kind: explicit.kind ?? "component",
    };
  }
  const component = document.querySelector<HTMLElement>(
    "[data-docs-examples-host]",
  );
  const block = document.querySelector<HTMLElement>(
    "[data-docs-block-examples-host]",
  );
  const el = component ?? block;
  if (!el) return null;
  const id = (component ? el.dataset.componentId : el.dataset.blockId)?.trim();
  const exportNames = readExportNames(el);
  if (!id || exportNames.length === 0) return null;
  const kind: ExampleKind =
    block && !component
      ? "block"
      : el.dataset.kind === "form"
        ? "form"
        : "component";

  return { exportNames, id, kind };
}

async function loadExampleComponent(
  globs: ExampleGlobs,
  target: ExamplesHostTarget,
  exportName: string,
): Promise<unknown> {
  const modules = globs[target.kind];
  const stem = exportNameToFileStem(exportName);
  const loader = findExampleFileLoader(modules, target.id, stem);
  if (!loader) return null;
  const mod = (await loader()) as Record<string, unknown>;

  return resolveExampleExport(mod, exportName);
}

function slotSelector(exportName: string): string {
  return `[data-example-slot="${CSS.escape(exportName)}"]`;
}

/** Wire every slot on the page; returns a cleanup that unmounts all of them. */
export function armExamplesHost(
  globs: ExampleGlobs,
  props: ExamplesHostProps,
  mount: MountExample,
): () => void {
  const resolved = resolveTarget(props);
  if (!resolved) return () => {};
  const target: ExamplesHostTarget = resolved;

  let cancelled = false;
  const disposers: Array<() => void> = [];
  const stops: Array<() => void> = [];
  const label = target.kind === "block" ? "block " : "";

  function armSlot(exportName: string, eager: boolean) {
    const slot = document.querySelector(slotSelector(exportName));
    if (!slot) return;

    const load = () => {
      void loadExampleComponent(globs, target, exportName)
        .then((component) => {
          if (cancelled) return;
          const dispose = mount(
            slot,
            component,
            `Missing example “${exportName}” for ${label}“${target.id}”.`,
          );
          if (dispose) disposers.push(dispose);
        })
        .catch((error) => {
          console.error(
            `[examples-host] failed to load “${exportName}” for ${label}“${target.id}”`,
            error,
          );
          if (cancelled) return;
          const dispose = mount(
            slot,
            null,
            `Failed to load example “${exportName}” for ${label}“${target.id}”: ${String(error)}`,
          );
          if (dispose) disposers.push(dispose);
        });
    };

    // First develop.mdx `<Example />` mounts immediately — no IO wait for LCP preview.
    if (eager) {
      load();
      return;
    }

    stops.push(whenVisible(slot, load));
  }

  target.exportNames.forEach((exportName, index) => {
    armSlot(exportName, index === 0);
  });

  return () => {
    cancelled = true;
    for (const stop of stops) stop();
    for (const dispose of disposers) dispose();
  };
}

/** Plain-DOM fallback for a missing example (Svelte/Solid hosts). */
export function renderMissingExample(slot: Element, message: string) {
  const p = document.createElement("p");
  p.className = "text-muted-foreground text-sm";
  p.textContent = message;
  slot.replaceChildren(p);

  return () => slot.replaceChildren();
}
