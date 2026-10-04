import { Button, Toolbar } from "@pisagor/vue";
import { defineComponent, Fragment, h } from "vue";

export default defineComponent({
  name: "WrappedActions",
  setup() {
    return () =>
      h(Toolbar as Parameters<typeof h>[0], {
        actions: h(Fragment, null, [
          h(Button, { size: "sm", variant: "outline" }, () => "Invite"),
          h(Button, { size: "sm", variant: "outline" }, () => "Export"),
          h(Button, { size: "sm" }, () => "Add member"),
        ]),
        class: "items-center",
        title: "Team members",
      });
  },
});
