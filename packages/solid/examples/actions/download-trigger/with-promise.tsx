import { Button, DownloadTrigger } from "@pisagor/solid";
import { DownloadIcon } from "@pisagor/solid/icons";

export function WithPromise() {
  return (
    <DownloadTrigger
      asChild={(props) => (
        <Button {...props()} size="lg" variant="outline">
          <DownloadIcon />
          Download
        </Button>
      )}
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
    />
  );
}
