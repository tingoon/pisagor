import { createTreeCollection, TreeView } from "@pisagor/vue";
import { defineComponent, h, ref } from "vue";
import { controlledFileTree } from "./data";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Controlled",
  setup() {
    const collection = createTreeCollection({ rootNode: controlledFileTree });
    const selected = ref<string[]>([]);

    return () => {
      const isCorrectSelection = selected.value[0] === "components/input.tsx";

      return h("div", { class: "flex flex-col items-center gap-2" }, [
        h("p", { class: "text-muted-foreground text-sm" }, "Select input.tsx"),
        h(TreeView as ArkPart, {
          class: "overflow-hidden",
          collection,
          onSelectionChange: (details: { selectedValue: string[] }) => {
            selected.value = details.selectedValue;
          },
          selectedValue: selected.value,
        }),
        h(
          "p",
          { class: "text-muted-foreground text-sm" },
          isCorrectSelection ? "✅" : "❌",
        ),
      ]);
    };
  },
});
