import { PhArrowUpRight, PhCheckCircle, PhWarning } from "@phosphor-icons/vue";
import { Badge } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Announcement } from "..";
export default defineComponent({
  name: "Variants",
  setup() {
    return () =>
      h("div", { class: "flex flex-col gap-2" }, [
        h(Announcement, {
          badge: h(Badge, { variant: "default" }, () => "Release"),
          title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
        }),
        h(Announcement, {
          badge: h(Badge, { variant: "destructive" }, () => [
            h(PhWarning),
            " Payment failed",
          ]),
          title:
            "Your last invoice couldn't be processed. Update your billing info.",
        }),
        h(Announcement, {
          badge: h(Badge, { variant: "info" }, () => "Maintenance"),
          title:
            "Scheduled downtime tonight 2 to 4 a.m. UTC. No action needed.",
        }),
        h(Announcement.Root, { asChild: true }, () =>
          h("a", { href: "https://example.com/announcement" }, [
            h(Badge, { variant: "success" }, () => [
              h(PhCheckCircle),
              " Deployed",
            ]),
            h(Announcement.Title, null, () => [
              "Production build completed in 2m 34s ",
              h(PhArrowUpRight),
            ]),
          ]),
        ),
        h(Announcement, {
          badge: h(Badge, { variant: "warning" }, () => [
            h(PhWarning),
            " Trial ending",
          ]),
          title: "Your free trial expires in 3 days. Upgrade to keep access.",
        }),
      ]);
  },
});
