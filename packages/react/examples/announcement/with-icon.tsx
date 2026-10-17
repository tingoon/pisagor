import source from "./with-icon.tsx?raw";
import { SparkleIcon } from "@phosphor-icons/react";
import { Announcement, Badge } from "@pisagor/react";
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

export { source as WithIconSource };
