<script lang="ts" setup>
import { Provider } from "@pisagor/vue";
import { type Component, onBeforeUnmount, onMounted, shallowRef } from "vue";
import {
  armExamplesHost,
  type ExampleGlobs,
  type ExampleKind,
} from "#/lib/examples-host";

const globs: ExampleGlobs = {
  block: import.meta.glob("../../../blocks/vue/**/*.{ts,tsx,vue}"),
  component: import.meta.glob(
    "../../../../../../packages/vue/examples/*/*/*.{ts,tsx,vue}",
  ),
  form: import.meta.glob(
    "../../../../../../packages/vue-form/examples/*/*/*.{ts,tsx,vue}",
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
  <Provider>
    <div aria-hidden="true" data-vue-examples-host="" hidden>
      <Teleport v-for="item in mounted" :key="item.key" :to="item.target">
        <component :is="item.component" v-if="item.component" />
        <p class="text-muted-foreground text-sm" v-else>{{ item.message }}</p>
      </Teleport>
    </div>
  </Provider>
</template>
