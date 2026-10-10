<script lang="ts">
import { mount, type Component as SvelteComponent, unmount } from "svelte";
import { readComponentExamplesHostConfig } from "#/lib/examples-host-config";
import { whenVisible } from "#/lib/when-visible";

type ExampleModule = Record<string, unknown>;

const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/svelte/examples/*/index.ts",
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/svelte-form/examples/*/index.ts",
);

let {
  componentId,
  exportNames,
  kind,
}: {
  componentId?: string;
  exportNames?: string[];
  kind?: "component" | "form";
} = $props();

function slotSelector(exportName: string): string {
  return `[data-example-slot="${CSS.escape(exportName)}"]`;
}

async function loadBarrel(
  id: string,
  docKind: "component" | "form",
): Promise<ExampleModule | null> {
  const modules = docKind === "form" ? formExampleModules : exampleModules;
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/examples/${id}/index.ts`),
  );
  if (!key) return null;
  return modules[key]();
}

function resolveExport(
  module: ExampleModule | null,
  exportName: string,
): SvelteComponent | null {
  if (exportName === "sources" || exportName === "imports") return null;
  if (!module) return null;
  const Comp = module[exportName];
  if (Comp == null || typeof Comp === "string") return null;
  return Comp as SvelteComponent;
}

$effect(() => {
  const config = readComponentExamplesHostConfig({
    componentId,
    exportNames,
    kind,
  });
  if (!config) return;

  const names = config.exportNames;
  const id = config.componentId;
  const docKind = config.kind;

  let cancelled = false;
  let started = false;
  let module: ExampleModule | null | undefined;
  const observerStops: Array<() => void> = [];
  const instances: Array<() => void> = [];

  function clearInstances() {
    for (const dispose of instances) dispose();
    instances.length = 0;
  }

  function mountExport(exportName: string, el: Element) {
    const Comp = resolveExport(module ?? null, exportName);
    el.replaceChildren();
    if (!Comp) {
      const p = document.createElement("p");
      p.className = "text-muted-foreground text-sm";
      p.textContent = `Missing example “${exportName}” for “${id}”.`;
      el.appendChild(p);
      instances.push(() => {
        el.replaceChildren();
      });
      return;
    }
    const instance = mount(Comp, { target: el });
    instances.push(() => {
      unmount(instance);
    });
  }

  function tryMountVisible() {
    if (module === undefined) return;
    for (const name of names) {
      const el = document.querySelector(slotSelector(name));
      if (!el || el.getAttribute("data-example-mounted") === "1") continue;
      if (el.getAttribute("data-example-visible") !== "1") continue;
      el.setAttribute("data-example-mounted", "1");
      mountExport(name, el);
    }
  }

  async function ensureMod() {
    if (started) return;
    started = true;
    const next = await loadBarrel(id, docKind);
    if (cancelled) return;
    module = next;
    tryMountVisible();
  }

  for (const name of names) {
    const el = document.querySelector(slotSelector(name));
    if (!el) continue;
    el.removeAttribute("data-example-mounted");
    el.removeAttribute("data-example-visible");
    observerStops.push(
      whenVisible(el, () => {
        el.setAttribute("data-example-visible", "1");
        void ensureMod().then(() => {
          if (!cancelled) tryMountVisible();
        });
      }),
    );
  }

  return () => {
    cancelled = true;
    for (const stop of observerStops) stop();
    clearInstances();
    for (const name of names) {
      const el = document.querySelector(slotSelector(name));
      el?.removeAttribute("data-example-mounted");
      el?.removeAttribute("data-example-visible");
    }
  };
});
</script>

<div aria-hidden="true" data-svelte-examples-host="" hidden></div>
