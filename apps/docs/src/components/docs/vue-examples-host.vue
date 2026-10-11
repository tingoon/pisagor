<script lang="ts" setup>
import { type Component, onBeforeUnmount, onMounted, shallowRef } from "vue";
import {
  armExamplesHost,
  type ExampleGlobs,
  type ExampleKind,
  type ExampleModule,
} from "#/lib/examples-host";

const globs: ExampleGlobs = {
  block: import.meta.glob<ExampleModule>("../../examples/vue/*/index.ts"),
  component: import.meta.glob<ExampleModule>(
    "../../../../../packages/vue/examples/*/index.ts",
  ),
  form: import.meta.glob<ExampleModule>(
    "../../../../../packages/vue-form/examples/*/index.ts",
  ),
};

/** Single client island for every live preview on a Vue docs page. */
const props = defineProps<{
  id?: string;
  exportNames?: string[];
  kind?: ExampleKind;
}>();

type Mounted = {
  key: number;
  target: Element;
  component: Component | null;
  message: string;
};

// Examples render through Teleport so they share this app's context.
const mounted = shallowRef<Mounted[]>([]);
let nextKey = 0;
let stop: (() => void) | undefined;

onMounted(() => {
  stop = armExamplesHost(
    globs,
    { exportNames: props.exportNames, id: props.id, kind: props.kind },
    (target, component, message) => {
      const entry: Mounted = {
        component: (component as Component | null) ?? null,
        key: nextKey++,
        message,
        target,
      };
      mounted.value = [...mounted.value, entry];
      return () => {
        mounted.value = mounted.value.filter((item) => item !== entry);
      };
    },
  );
});
onBeforeUnmount(() => stop?.());
</script>

<template>
  <div aria-hidden="true" data-vue-examples-host="" hidden>
    <Teleport v-for="item in mounted" :key="item.key" :to="item.target">
      <component :is="item.component" v-if="item.component" />
      <p class="text-muted-foreground text-sm" v-else>{{ item.message }}</p>
    </Teleport>
  </div>
</template>
