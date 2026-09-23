import { PhCheckCircle, PhChecks, PhClockCounterClockwise, PhWarning } from "@phosphor-icons/vue";
import { defineComponent, h } from "vue";
import { Alert } from "..";

export default defineComponent({
  name: "Variants",
  setup() {
    return () =>
      h("div", { class: "flex flex-col gap-2" }, [
        h(Alert, {
          description: "You can now start building your next great project.",
          icon: h(PhChecks),
          title: "Deployment successful",
          variant: "default",
        }),
        h(Alert, {
          description: "Your session has expired. Please log in again.",
          icon: h(PhWarning),
          title: "Session expired",
          variant: "destructive",
        }),
        h(Alert, {
          description: "A new update is available. Review the update when you're ready.",
          icon: h(PhClockCounterClockwise),
          title: "New update available",
          variant: "info",
        }),
        h(Alert, {
          description:
            "Your payment has been processed successfully. You will receive a receipt in your email.",
          icon: h(PhCheckCircle),
          title: "Payment successful",
          variant: "success",
        }),
        h(Alert, {
          description:
            "Your storage is almost full. Consider upgrading your plan to avoid losing data.",
          icon: h(PhWarning),
          title: "Storage almost full",
          variant: "warning",
        }),
      ]);
  },
});
