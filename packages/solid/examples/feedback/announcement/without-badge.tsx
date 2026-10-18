import { Announcement } from "@pisagor/solid";
import { ArrowUpRightIcon } from "@squidlab/phosphor-solid/icons";

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
