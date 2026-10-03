<script lang="ts">
type ExampleModule = Record<string, unknown>;

const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/svelte/skills/svelte/assets/examples/*/index.ts",
  { eager: true },
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/svelte-form/skills/svelte-form/assets/examples/*/index.ts",
  { eager: true },
);

let {
  componentId,
  exportName,
  kind = "component",
}: {
  componentId: string;
  exportName: string;
  kind?: "component" | "form";
} = $props();

function resolveExample(
  id: string,
  name: string,
  docKind: "component" | "form",
) {
  const modules = docKind === "form" ? formExampleModules : exampleModules;
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/examples/${id}/index.ts`),
  );
  if (!key) return undefined;
  const mod = modules[key];
  if (name === "sources" || name === "imports") return undefined;
  const Comp = mod?.[name];
  if (Comp == null || typeof Comp === "string") return undefined;
  return Comp as typeof import("svelte").SvelteComponent;
}

const Component = resolveExample(componentId, exportName, kind);
</script>

{#if Component}
  <Component />
{:else}
  <p class="text-muted-foreground text-sm">
    Missing example “{exportName}” for “{componentId}”.
  </p>
{/if}
