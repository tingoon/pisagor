import { cn } from "@pisagor/utils";
import { Presence } from "@pisagor/vue";
import { h, ref } from "vue";
import preview from "#/storybook/preview";
import { outlineButtonClass } from "../../internal/story-button";

const meta = preview.meta({
  component: Presence,
  parameters: {
    docs: {
      description: {
        component:
          "Animates elements in and out of the tree so enter and exit transitions feel smooth.",
      },
    },
  },
  title: "Components/Utilities/Presence",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      const present = ref(false);

      return () =>
        h("div", { class: "relative" }, [
          h(
            "button",
            {
              class: outlineButtonClass(),
              onClick: () => {
                present.value = !present.value;
              },
              type: "button",
            },
            "Toggle",
          ),
          h(Presence, { asChild: true, present: present.value }, () =>
            h(
              "div",
              {
                class: cn(
                  "absolute bottom-full left-1/2 mb-2 -translate-x-1/2",
                  "rounded-md border bg-muted px-4 py-2 text-sm",
                  "origin-bottom",
                  "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:slide-out-to-bottom-5 data-[state=closed]:animate-out",
                  "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:slide-in-from-bottom-5 data-[state=open]:animate-in",
                ),
              },
              "Content",
            ),
          ),
        ]);
    },
  }),
});
