/** @jsxImportSource solid-js */

import { Announcement } from "@pisagor/solid/announcement";
import { ArrowUpRightIcon } from "@pisagor/solid/icons";

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
