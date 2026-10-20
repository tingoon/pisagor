import { createTreeCollection, TreeView } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const collection = createTreeCollection({
    rootNode: {
      children: [
        {
          children: [
            { id: "components/button.tsx", name: "button.tsx" },
            { id: "components/input.tsx", name: "input.tsx" },
          ],
          id: "components",
          name: "components",
        },
        { id: "package.json", name: "package.json" },
      ],
      id: "ROOT",
      name: "",
    },
  });

  const [selected, setSelected] = createSignal<string[]>([]);

  const isCorrectSelection = selected()[0] === "components/input.tsx";

  return (
    <div class="flex flex-col items-center gap-2">
      <p class="text-muted-foreground text-sm">Select input.tsx</p>

      <TreeView
        class="overflow-hidden"
        collection={collection}
        onSelectionChange={({ selectedValue }) => setSelected(selectedValue)}
        selectedValue={selected()}
      />
      <p class="text-muted-foreground text-sm">
        {isCorrectSelection ? "✅" : "❌"}
      </p>
    </div>
  );
}
