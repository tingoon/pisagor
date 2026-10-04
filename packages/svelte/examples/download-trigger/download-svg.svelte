<script lang="ts">
import { Button, DownloadTrigger } from "@pisagor/svelte";
import DownloadIcon from "phosphor-svelte/lib/DownloadIcon";
import { sampleSvg } from "./helpers";
</script>

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
