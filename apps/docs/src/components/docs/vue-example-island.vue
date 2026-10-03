<script lang="ts" setup>
import { computed } from "vue";

type ExampleModule = Record<string, unknown>;

const exampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/vue/skills/vue/assets/examples/*/index.ts",
  { eager: true },
);

const formExampleModules = import.meta.glob<ExampleModule>(
  "../../../../../packages/vue-form/skills/vue-form/assets/examples/*/index.ts",
  { eager: true },
);

const props = defineProps<{
  componentId: string;
  exportName: string;
  kind?: "component" | "form";
}>();

function resolveExample(
  componentId: string,
  exportName: string,
  kind: "component" | "form",
) {
  const modules = kind === "form" ? formExampleModules : exampleModules;
  const key = Object.keys(modules).find((path) =>
    path.endsWith(`/examples/${componentId}/index.ts`),
  );
  if (!key) return undefined;
  const mod = modules[key];
  if (exportName === "sources" || exportName === "imports") return undefined;
  const Comp = mod?.[exportName];
  if (Comp == null || typeof Comp === "string") return undefined;
  return Comp;
}

const Component = computed(() =>
  resolveExample(
    props.componentId,
    props.exportName,
    props.kind ?? "component",
  ),
);
</script>

<template>
  <component :is="Component" v-if="Component" />
  <p class="text-muted-foreground text-sm" v-else>
    Missing example “{{ exportName }}” for “{{ componentId }}”.
  </p>
</template>
