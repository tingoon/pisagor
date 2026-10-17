import source from "./compound.ts?raw";
import { Button, Tooltip } from "@pisagor/vue";
import { defineComponent, h, Teleport } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Compound",
  setup() {
    return () =>
      h(Tooltip.Root as ArkPart, null, () => [
        h(Tooltip.Trigger as ArkPart, { asChild: true }, () =>
          h(Button as ArkPart, { variant: "outline" }, () => "Hover me"),
        ),
        h(Teleport, { to: "body" }, [
          h(Tooltip.Positioner as ArkPart, null, () =>
            h(Tooltip.Content as ArkPart, null, () => [
              h(Tooltip.Arrow as ArkPart, null, () =>
                h(Tooltip.ArrowTip as ArkPart),
              ),
              "Composed from parts",
            ]),
          ),
        ]),
      ]);
  },
});

export { source };
