<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, shallowRef, watch } from "vue";
import { readBlockExamplesHostConfig } from "#/lib/examples-host-config";
import { whenVisible } from "#/lib/when-visible";

type ExampleModule = Record<string, unknown>;

const exampleModules = import.meta.glob<ExampleModule>(
  "../../examples/vue/*/index.ts",
);

const props = defineProps<{
  blockId?: string;
  exportNames?: string[];
}>();

const resolvedBlockId = shallowRef("");
const mod = shallowRef<ExampleModule | null | undefined>(undefined);

type SlotState = {
  exportName: string;
  target: Element | null;
  visible: boolean;
};

type ReadySlot = {
  exportName: string;
  target: Element;
};

const slots = shallowRef<SlotState[]>([]);
const stops: Array<() => void> = [];

function slotSelector(exportName: string): string {
  return `[data-example-slot="${CSS.escape(exportName)}"]`;
}

async function loadBarrel(id: string): Promise<ExampleModule | null> {
  const key = Object.keys(exampleModules).find((path) =>
    path.endsWith(`/examples/vue/${id}/index.ts`),
  );
  if (!key) return null;
  return exampleModules[key]();
}

function resolveExport(exportName: string): unknown {
  const module = mod.value;
  if (module === undefined) return undefined;
  if (exportName === "sources" || exportName === "imports") return null;
  if (!module) return null;
  const Comp = module[exportName];
  if (Comp == null || typeof Comp === "string") return null;
  return Comp;
}

function clearStops() {
  for (const stop of stops) stop();
  stops.length = 0;
}

function arm() {
  clearStops();
  mod.value = undefined;
  const config = readBlockExamplesHostConfig({
    blockId: props.blockId,
    exportNames: props.exportNames,
  });
  if (!config) {
    resolvedBlockId.value = "";
    slots.value = [];
    return;
  }
  resolvedBlockId.value = config.blockId;

  let started = false;
  const startLoad = () => {
    if (started) return;
    started = true;
    void loadBarrel(config.blockId).then((next) => {
      mod.value = next;
    });
  };

  slots.value = config.exportNames.map((exportName) => {
    const target = document.querySelector(slotSelector(exportName));
    const state: SlotState = { exportName, target, visible: false };
    if (target) {
      stops.push(
        whenVisible(target, () => {
          state.visible = true;
          slots.value = [...slots.value];
          startLoad();
        }),
      );
    }
    return state;
  });
}

onMounted(arm);
watch(
  () => [props.blockId, props.exportNames?.join("\0") ?? ""] as const,
  () => {
    arm();
  },
);
onBeforeUnmount(clearStops);

const readySlots = computed((): ReadySlot[] => {
  const out: ReadySlot[] = [];
  for (const slot of slots.value) {
    if (
      !slot.target ||
      !slot.visible ||
      resolveExport(slot.exportName) === undefined
    ) {
      continue;
    }
    out.push({ exportName: slot.exportName, target: slot.target });
  }
  return out;
});
</script>

<template>
  <div aria-hidden="true" data-vue-block-examples-host="" hidden>
    <Teleport
      v-for="slot in readySlots"
      :key="slot.exportName"
      :to="slot.target"
    >
      <component
        :is="resolveExport(slot.exportName)"
        v-if="resolveExport(slot.exportName)"
      />
      <p class="text-muted-foreground text-sm" v-else>
        Missing example “{{ slot.exportName }}” for block “{{
          resolvedBlockId
        }}”.
      </p>
    </Teleport>
  </div>
</template>
