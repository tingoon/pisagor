import { createTreeCollection, TreeView } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { sampleFileTree } from "./data";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "MultipleSelection",
  setup() {
    const collection = createTreeCollection({ rootNode: sampleFileTree });

    return () =>
      h("div", null, [
        h(TreeView as ArkPart, { collection, selectionMode: "multiple" }),
      ]);
  },
});
