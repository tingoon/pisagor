import { announcementRecipe } from "@pisagor/recipes";
import { Announcement, Badge } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandAnnouncementRecipe = tv({
  extend: announcementRecipe,
  slots: {
    base: "border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Announcement
      badge={<Badge variant="success">New</Badge>}
      recipe={brandAnnouncementRecipe}
      title="Teams can now share workspaces"
    />
  );
}
