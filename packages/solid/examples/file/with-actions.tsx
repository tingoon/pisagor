import { Button, File } from "@pisagor/solid";
import { DownloadSimpleIcon, TrashIcon } from "@pisagor/solid/icons";
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
