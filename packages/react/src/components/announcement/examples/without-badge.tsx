import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Announcement } from "..";

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
