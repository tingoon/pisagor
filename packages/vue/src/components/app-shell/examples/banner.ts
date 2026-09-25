import { PhWarning } from "@phosphor-icons/vue";
import { Announcement, Badge, Button } from "@pisagor/vue";
import { defineComponent, h, ref } from "vue";
import { AppShell } from "..";
import { mainContent } from "./helpers";
export default defineComponent({
  name: "Banner",
  setup() {
    const opened = ref(true);
    const close = () => {
      opened.value = false;
    };

    return () =>
      h(AppShell, null, () => [
        opened.value
          ? h(
              AppShell.Banner,
              { class: "flex items-center justify-center gap-1 p-2" },
              () => [
                h(Announcement, {
                  badge: h(Badge, { variant: "destructive" }, () => [
                    h(PhWarning),
                    "Process interrupted",
                  ]),
                  role: "alert",
                  title:
                    "Something went wrong during the process. Try again or contact support if the problem continues.",
                }),
                h(
                  Button,
                  { onClick: close, pill: true, size: "sm" },
                  () => "Dismiss",
                ),
              ],
            )
          : null,
        h(AppShell.Main, null, () => mainContent("Main")),
      ]);
  },
});
