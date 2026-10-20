import { PhFileCode, PhFileJs, PhFileText } from "@phosphor-icons/vue";
import { createFileIcons, createTreeCollection, TreeView } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { sampleFileTree } from "./data";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "CustomIcons",
  setup() {
    const fileIcons = createFileIcons({
      ".json": PhFileJs,
      ".md": PhFileText,
      ".tsx": PhFileCode,
    });
    const collection = createTreeCollection({ rootNode: sampleFileTree });

    return () =>
      h("div", null, [h(TreeView as ArkPart, { collection, fileIcons })]);
  },
});
