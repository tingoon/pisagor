import { PhTextB } from "@phosphor-icons/vue";
import { tooltipRecipe } from "@pisagor/recipes";
import { Button, Tooltip } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

const brandTooltipRecipe = tv({
  extend: tooltipRecipe,
  slots: { content: "border-emerald-700 bg-emerald-700 text-white" },
  variants: {},
});

export default defineComponent({
  name: "CustomRecipe",
  setup() {
    return () =>
      h(
        Tooltip as ArkPart,
        {
          children: h(
            Button as ArkPart,
            { "aria-label": "Bold", size: "icon-md", variant: "outline" },
            () => h(PhTextB),
          ),
          content: "Bold",
          recipe: brandTooltipRecipe,
        },
        () => undefined,
      );
  },
});
