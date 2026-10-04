/** @jsxImportSource solid-js */

import { Badge } from "@pisagor/solid";
import { Announcement } from "@pisagor/solid/announcement";
import { ArrowUpRightIcon } from "@pisagor/solid/icons";
export function WithLink() {
  return (
    <Announcement.Root
      asChild={(props) => (
        <a {...props()} href="/">
          <Badge>Latest update</Badge>
          <Announcement.Title>
            New feature added
            <ArrowUpRightIcon aria-hidden />
          </Announcement.Title>
        </a>
      )}
    />
  );
}
