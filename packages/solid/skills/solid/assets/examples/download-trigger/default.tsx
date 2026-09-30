import { Button } from "../../../../../src/components/button";
import { DownloadTrigger } from "../../../../../src/components/download-trigger/index";

export function Default() {
  return (
    <DownloadTrigger
      data="hello world"
      fileName="notes.txt"
      mimeType="text/plain"
    >
      <Button variant="outline">Download</Button>
    </DownloadTrigger>
  );
}
