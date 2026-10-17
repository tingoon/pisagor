import source from "./download-svg.tsx?raw";
import { Button, DownloadTrigger } from "@pisagor/solid";
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

export { source as DownloadSvgSource };
