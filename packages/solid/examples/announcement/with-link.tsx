import { Announcement, Badge } from "@pisagor/solid";
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
