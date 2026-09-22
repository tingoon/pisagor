import { DownloadSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { File } from "..";
export function WithActions() {
  return (
    <File
      actions={
        <>
          <Button aria-label="Download" size="icon-xs" variant="ghost">
            <DownloadSimpleIcon />
          </Button>
          <Button aria-label="Remove" size="icon-xs" variant="ghost">
            <TrashIcon />
          </Button>
        </>
      }
      meta="PNG image"
      name="hero-banner.png"
      size={1_048_576}
    />
  );
}
