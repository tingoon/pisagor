/** @jsxImportSource solid-js */

import { Button, File } from "@pisagor/solid";
import { DownloadSimpleIcon } from "@pisagor/solid/icons";
export function Compound() {
  return (
    <File.Root>
      <File.Media variant="image">
        <img
          alt=""
          height={40}
          src="https://picsum.photos/seed/file/80/80"
          width={40}
        />
      </File.Media>
      <File.Content>
        <File.Name>cover.jpg</File.Name>
        <File.Meta>JPEG image</File.Meta>
        <File.Size value={409_600} />
      </File.Content>
      <File.Actions>
        <Button aria-label="Download" size="icon-xs" variant="ghost">
          <DownloadSimpleIcon />
        </Button>
      </File.Actions>
    </File.Root>
  );
}
