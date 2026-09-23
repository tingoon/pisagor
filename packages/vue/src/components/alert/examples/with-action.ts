import { PhClockCounterClockwise } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Alert } from "..";
export default defineComponent({
  name: "WithAction",
  setup() {
    return () =>
      h(Alert, {
        action: [
          h(Button, { size: "xs", variant: "ghost" }, () => "Ignore"),
          h(Button, { size: "xs" }, () => "Update"),
        ],
        description: "Review the update when you're ready.",
        icon: h(PhClockCounterClockwise),
        title: "New update available",
      });
  },
});
