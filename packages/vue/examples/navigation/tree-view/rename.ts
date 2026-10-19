import { createTreeCollection, TreeView } from "@pisagor/vue";
import { defineComponent, h, shallowRef } from "vue";
import { sampleFileTree } from "./data";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Rename",
  setup() {
    const collection = shallowRef(
      createTreeCollection({ rootNode: sampleFileTree }),
    );

    const handleRenameComplete = (details: {
      indexPath: number[];
      label: string;
    }) => {
      const node = collection.value.at(details.indexPath);
      if (!node) {
        return;
      }
      collection.value = collection.value.replace(details.indexPath, {
        ...node,
        name: details.label,
      });
    };

    return () =>
      h("div", null, [
        h(TreeView as ArkPart, {
          canRename: () => true,
          collection: collection.value,
          onRenameComplete: handleRenameComplete,
        }),
      ]);
  },
});
