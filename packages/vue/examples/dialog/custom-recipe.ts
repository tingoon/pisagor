import { dialogRecipe } from "@pisagor/recipes";
import { Button, Dialog } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { defineComponent, h } from "vue";

const brandDialogRecipe = tv({
  extend: dialogRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    content: "border-emerald-500/40",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export default defineComponent({
  name: "CustomRecipe",
  setup() {
    return () =>
      h(Dialog, { recipe: brandDialogRecipe }, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Dialog.Content, null, () => [
          h(Dialog.Header, {
            description: "Make changes to your project settings.",
            title: "Edit project",
          }),
          h(Dialog.Body, null, () =>
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              "Dialog body content.",
            ),
          ),
          h(Dialog.Footer, null, () => [
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Cancel"),
            ),
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Save"),
            ),
          ]),
        ]),
      ]);
  },
});
