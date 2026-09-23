import { Badge } from "@pisagor/react";
import { Announcement } from "..";
export function Compound() {
  return (
    <Announcement.Root>
      <Badge>Release</Badge>

      <Announcement.Title>
        v2.1.0 — Dark mode, faster builds, and 12 new components
      </Announcement.Title>
    </Announcement.Root>
  );
}
