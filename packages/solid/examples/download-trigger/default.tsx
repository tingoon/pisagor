/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { DownloadTrigger } from "@pisagor/solid/download-trigger";

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
