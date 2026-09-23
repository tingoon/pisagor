import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { defineComponent, h } from "vue";
import { HoverCard } from "..";
export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(HoverCard, null, () => [
        h(HoverCard.Trigger, { asChild: true }, () =>
          h(
            "button",
            {
              class: cn(buttonRecipe({ variant: "link" }).base(), "underline"),
              type: "button",
            },
            "Hover here",
          ),
        ),
        h(HoverCard.Content, null, () =>
          h("div", { class: "flex flex-col gap-2" }, [
            h("span", { class: "font-medium text-sm" }, "Jane Doe"),
            h("p", { class: "text-muted-foreground text-sm" }, "Software engineer at Example Co."),
          ]),
        ),
      ]);
  },
});
