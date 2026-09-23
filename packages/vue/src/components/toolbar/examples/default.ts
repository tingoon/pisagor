import { Button } from "@pisagor/vue";
import { defineComponent, Fragment, h } from "vue";
import { Toolbar } from "..";
export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Toolbar as Parameters<typeof h>[0], {
        actions: h(Fragment, null, [
          h(Button, { variant: "outline" }, () => "Import"),
          h(Button, null, () => "New project"),
        ]),
        description: "Manage deployments and monitor activity.",
        title: "Projects",
      });
  },
});
