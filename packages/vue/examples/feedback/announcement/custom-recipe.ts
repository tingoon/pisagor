import { announcementRecipe } from "@pisagor/recipes";
import { Announcement, Badge } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { defineComponent, h } from "vue";

const brandAnnouncementRecipe = tv({
  extend: announcementRecipe,
  slots: {
    base: "border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export default defineComponent({
  name: "CustomRecipe",
  setup() {
    return () =>
      h(Announcement, {
        badge: h(Badge, { variant: "success" }, () => "New"),
        recipe: brandAnnouncementRecipe,
        title: "Teams can now share workspaces",
      });
  },
});
