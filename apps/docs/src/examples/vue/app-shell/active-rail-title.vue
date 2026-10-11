<script lang="ts" setup>
import { useAppShell } from "@pisagor/vue";
import { computed } from "vue";
import { standardAppShellBlock } from "#/recipes/blocks/app-shell";

/** Must render inside `<AppShell>` — reads the active start-rail item. */
const props = defineProps<{
  items: readonly { id: string; label: string }[];
}>();

const styles = standardAppShellBlock();
const appShell = useAppShell();

const label = computed(() => {
  const activeRailId = appShell?.railStates.start?.activeRailId;
  return (
    props.items.find((item) => item.id === activeRailId)?.label ?? "Navigation"
  );
});
</script>

<template>
  <h2 :class="styles.railTitle()">{{ label }}</h2>
</template>
