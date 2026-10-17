import { Button, DownloadTrigger } from "@pisagor/solid";

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
