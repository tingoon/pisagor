import { DownloadIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { DownloadTrigger } from "..";
export function WithPromise() {
  return (
    <DownloadTrigger
      asChild
      data={() =>
        new Promise<Blob>((resolve) => {
          setTimeout(() => {
            resolve(
              new Blob(['{"message": "Loaded asynchronously"}'], {
                type: "application/json",
              }),
            );
          }, 500);
        })
      }
      fileName="data.json"
      mimeType="application/json"
    >
      {
        <Button size="lg" variant="outline">
          <DownloadIcon />
          Download
        </Button>
      }
    </DownloadTrigger>
  );
}
