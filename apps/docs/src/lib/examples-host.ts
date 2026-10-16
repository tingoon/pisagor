/**
 * Framework-agnostic core shared by the four `*-examples-host` islands.
 *
 * Each docs page renders empty `[data-example-slot="<Export>"]` placeholders
 * plus one config element (`[data-docs-examples-host]` for component/form
 * pages, `[data-docs-block-examples-host]` for blocks). A host island calls
 * `armExamplesHost` with its framework's `import.meta.glob` maps and a `mount`
 * callback; this module handles config lookup, lazy barrel loading (once per
 * page, on first visible slot) and per-slot visibility.
 */
import { whenVisible } from "#/lib/when-visible";

export type ExampleKind = "component" | "form" | "block";

export type ExampleModule = Record<string, unknown>;

type BarrelLoader = () => Promise<ExampleModule>;

/** `import.meta.glob` results per kind (globs must stay literal per host). */
export type ExampleGlobs = Record<ExampleKind, Record<string, BarrelLoader>>;

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

function loadBarrel(
  globs: ExampleGlobs,
  target: ExamplesHostTarget,
): Promise<ExampleModule | null> {
  const modules = globs[target.kind];
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/${target.id}/index.ts`),
  );
  const loader = key ? modules[key] : undefined;
  return loader ? loader() : Promise.resolve(null);
}

/** Example component for `exportName`, or null (non-component exports too). */
function resolveExport(mod: ExampleModule | null, exportName: string): unknown {
  if (!mod || exportName === "sources" || exportName === "imports") {
    return null;
  }
  const value = mod[exportName];
  if (value == null || typeof value === "string") return null;
  return value;
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
  const target = resolveTarget(props);
  if (!target) return () => {};

  let cancelled = false;
  let barrel: Promise<ExampleModule | null> | undefined;
  const disposers: Array<() => void> = [];
  const stops: Array<() => void> = [];
  const label = target.kind === "block" ? "block " : "";

  for (const exportName of target.exportNames) {
    const slot = document.querySelector(slotSelector(exportName));
    if (!slot) continue;
    stops.push(
      whenVisible(slot, () => {
        barrel ??= loadBarrel(globs, target);
        void barrel.then((mod) => {
          if (cancelled) return;
          const dispose = mount(
            slot,
            resolveExport(mod, exportName),
            `Missing example “${exportName}” for ${label}“${target.id}”.`,
          );
          if (dispose) disposers.push(dispose);
        });
      }),
    );
  }

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
