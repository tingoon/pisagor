/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { DownloadTrigger } from "@pisagor/solid/download-trigger";
import { DownloadIcon } from "@pisagor/solid/icons";
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
