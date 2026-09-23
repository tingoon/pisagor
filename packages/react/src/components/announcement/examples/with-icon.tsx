import { SparkleIcon } from "@phosphor-icons/react";
import { Badge } from "@pisagor/react";
import { Announcement } from "..";
export function WithIcon() {
  return (
    <Announcement
      badge={
        <Badge variant="info">
          <SparkleIcon />
          New features
        </Badge>
      }
      title="Dark mode and 12 new components available"
    />
  );
}
