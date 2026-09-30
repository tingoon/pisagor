import { Announcement } from "../../../../../src/components/announcement/index";
import { Badge } from "../../../../../src/components/badge";

export function Default() {
  return (
    <Announcement
      badge={<Badge>Release</Badge>}
      title="v2.1.0 — Dark mode, faster builds, and 12 new components"
    />
  );
}
