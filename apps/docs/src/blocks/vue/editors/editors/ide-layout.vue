<script lang="ts" setup>
import { PhX } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import type { TreeNodeType } from "@pisagor/vue";
import { Button, createTreeCollection, Tabs, TreeView } from "@pisagor/vue";
import { ref } from "vue";
import { ideLayoutBlock } from "#/styles/recipes/editors";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = ideLayoutBlock();

const activeItem = ref("");

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
        id: "app",
        name: "app",
      },
      {
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
        id: "components",
        name: "components",
      },
      { id: "package.json", name: "package.json" },
      { id: "readme.md", name: "README.md" },
    ],
    id: "ROOT",
    name: "",
  },
});

function handleSelectNode(details: { selectedNodes?: TreeNodeType[] }) {
  const selectedNodes = details.selectedNodes ?? [];
  // Folders (branches) don't open a tab.
  const isFolder = selectedNodes.every((node) => node.children?.length ?? 0);
  if (isFolder) return;
  activeItem.value = selectedNodes[0]?.name.split("/").at(-1) ?? "";
}
</script>

<template>
  <div :class="cn(styles.root(), props.class)">
    <div :class="styles.sidebar()">
      <TreeView :collection="collection" @selection-change="handleSelectNode" />
    </div>
    <div :class="styles.pane()">
      <Tabs.Root
        v-if="activeItem"
        :class="styles.tabs()"
        :value="activeItem"
        variant="underline"
      >
        <Tabs.List>
          <Tabs.Trigger :value="activeItem">
            <span :class="styles.tabLabel()">
              <span>{{ activeItem }}</span>
              <Button
                aria-label="Close"
                size="icon-xs"
                type="button"
                variant="ghost"
                @click.stop="activeItem = ''"
              >
                <PhX aria-hidden="true" />
              </Button>
            </span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content :class="styles.content()" :value="activeItem">
          // File content
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
</template>
