import { Button } from "../../button";
import { DownloadTrigger } from "../index";

export function Default() {
  return (
    <DownloadTrigger data="hello world" fileName="notes.txt" mimeType="text/plain">
      <Button variant="outline">Download</Button>
    </DownloadTrigger>
  );
}
