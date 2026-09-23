import { PhChecks } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Alert } from "..";
export default defineComponent({
  name: "Compound",
  setup() {
    return () =>
      h(Alert.Root, { variant: "info" }, () => [
        h(PhChecks),
        h(Alert.Title, null, () => "Deployment successful"),
        h(Alert.Description, null, () => "You can now start building your next great project."),
        h(Alert.Action, null, () => h(Button, { size: "xs" }, () => "Update")),
      ]);
  },
});
