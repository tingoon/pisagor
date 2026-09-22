import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Badge } from "@pisagor/react";
import { Announcement } from "..";
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
