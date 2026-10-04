/** @jsxImportSource solid-js */

import { Announcement, Badge } from "@pisagor/solid";
import { SparkleIcon } from "@pisagor/solid/icons";
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
