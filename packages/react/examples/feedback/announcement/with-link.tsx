import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Announcement, Badge } from "@pisagor/react";
export function WithLink() {
  return (
    <Announcement.Root asChild>
      <a href="/">
        <Badge>Latest update</Badge>
        <Announcement.Title>
          New feature added
          <ArrowUpRightIcon aria-hidden />
        </Announcement.Title>
      </a>
    </Announcement.Root>
  );
}
