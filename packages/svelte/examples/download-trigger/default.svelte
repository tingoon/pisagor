<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DownloadTrigger } from "@pisagor/svelte";
</script>

<DownloadTrigger
  data="Hello Pisagor"
  fileName="hello.txt"
  mimeType="text/plain"
>
  Download
</DownloadTrigger>
