import { createTreeCollection, TreeView } from "@pisagor/vue";
import { defineComponent, h, ref } from "vue";
import { sampleFileTree } from "./data";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "CheckboxTree",
  setup() {
    const collection = createTreeCollection({ rootNode: sampleFileTree });
    const checkedNodes = ref<string[]>(["readme.md"]);

    return () =>
      h("div", { class: "flex items-center gap-2" }, [
        h("div", null, [
          h(TreeView as ArkPart, {
            checkbox: true,
            checkedValue: checkedNodes.value,
            collection,
            onCheckedChange: (details: { checkedValue: string[] }) => {
              checkedNodes.value = details.checkedValue;
            },
          }),
        ]),
        h(
          "p",
          { class: "whitespace-pre-wrap text-muted-foreground text-sm" },
          JSON.stringify(checkedNodes.value, null, 2),
        ),
      ]);
  },
});
