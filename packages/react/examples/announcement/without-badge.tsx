import source from "./without-badge.tsx?raw";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Announcement } from "@pisagor/react";

export function WithoutBadge() {
  return (
    <Announcement
      title={
        <>
          New features added, check the logs for more details.
          <ArrowUpRightIcon />
        </>
      }
    />
  );
}

export { source as WithoutBadgeSource };
