import { DownloadIcon } from "@phosphor-icons/react";
import { Button, DownloadTrigger } from "@pisagor/react";
import { sampleSvg } from "./helpers";

export function DownloadSvg() {
  return (
    <DownloadTrigger
      data={sampleSvg()}
      fileName="icon.svg"
      mimeType="image/svg+xml"
    >
      <Button size="lg" variant="outline">
        <DownloadIcon />
        Download SVG
      </Button>
    </DownloadTrigger>
  );
}
