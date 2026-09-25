import { DownloadIcon, FileTextIcon } from "@phosphor-icons/react";
import { Button, Item } from "@pisagor/react";
import { DownloadTrigger } from "..";
import { sampleText } from "./helpers";

export function Default() {
  return (
    <div className="flex flex-col gap-2">
      <Item.Group variant="outline">
        <Item>
          <FileTextIcon />
          <Item.Title>{sampleText()}</Item.Title>
        </Item>
      </Item.Group>
      <DownloadTrigger
        data={sampleText()}
        fileName="notes.txt"
        mimeType="text/plain"
      >
        <Button size="lg" variant="outline">
          <DownloadIcon />
          Download
        </Button>
      </DownloadTrigger>
    </div>
  );
}
