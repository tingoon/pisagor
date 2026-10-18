import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { Button, FileItem } from "@pisagor/react";

export function Compound() {
  return (
    <FileItem.Root>
      <FileItem.Media variant="image">
        <img
          alt=""
          height={40}
          src="https://picsum.photos/seed/file/80/80"
          width={40}
        />
      </FileItem.Media>
      <FileItem.Content>
        <FileItem.Name>cover.jpg</FileItem.Name>
        <FileItem.Meta>JPEG image</FileItem.Meta>
        <FileItem.Size value={409_600} />
      </FileItem.Content>
      <FileItem.Actions>
        <Button aria-label="Download" size="icon-xs" variant="ghost">
          <DownloadSimpleIcon />
        </Button>
      </FileItem.Actions>
    </FileItem.Root>
  );
}
