/** @jsxImportSource solid-js */
import { Announcement } from "@pisagor/solid/announcement";
import { Badge } from "@pisagor/solid/badge";

export function Default() {
  return (
    <Announcement
      badge={<Badge>Release</Badge>}
      title="v2.1.0 — Dark mode, faster builds, and 12 new components"
    />
  );
}
