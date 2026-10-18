import { PhMagicWand } from "@phosphor-icons/vue";
import { Alert } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "CustomColor",
  setup() {
    return () =>
      h(Alert, {
        classNames: undefined,
        description: "This alert uses a custom color.",
        icon: h(PhMagicWand),
        title: "Custom color alert",
        ...({
          class: "border-purple-500/32 bg-purple-500/5 [&_svg]:text-purple-500",
        } as Record<string, unknown>),
      });
  },
});
