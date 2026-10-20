import { PhPackage } from "@phosphor-icons/vue";
import { createTreeCollection, TreeView } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "CustomIconsFolder",
  setup() {
    const collection = createTreeCollection({
      rootNode: {
        children: [
          {
            children: [
              { id: "app/page.tsx", name: "page.tsx" },
              { id: "app/layout.tsx", name: "layout.tsx" },
            ],
            expandedIcon: PhPackage,
            icon: PhPackage,
            id: "app",
            name: "app",
          },
          {
            children: [
              { id: "components/button.tsx", name: "button.tsx" },
              { id: "components/input.tsx", name: "input.tsx" },
            ],
            expandedIcon: null,
            icon: null,
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

    return () => h("div", null, [h(TreeView as ArkPart, { collection })]);
  },
});
