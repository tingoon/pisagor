<script lang="ts">
import { Button, DownloadTrigger } from "@pisagor/svelte";
import DownloadIcon from "phosphor-svelte/lib/DownloadIcon";

const data = () =>
  new Promise<Blob>((resolve) => {
    setTimeout(() => {
      resolve(
        new Blob(['{"message": "Loaded asynchronously"}'], {
          type: "application/json",
        }),
      );
    }, 500);
  });
</script>

<DownloadTrigger {data} fileName="data.json" mimeType="application/json">
  {#snippet asChild(
    props: any,
  )}
    <Button {...props()} size="lg" variant="outline">
      <DownloadIcon />
      Download
    </Button>
  {/snippet}
</DownloadTrigger>
