<script lang="ts">
import { DownloadTrigger } from "@pisagor/svelte/download-trigger";
</script>

<DownloadTrigger data="Hello Pisagor" fileName="hello.txt" mimeType="text/plain">
  Download
</DownloadTrigger>
