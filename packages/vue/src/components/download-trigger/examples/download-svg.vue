<script lang="ts" setup >
import { PhDownload } from "@phosphor-icons/vue";

import { Button } from "@pisagor/vue";
import { DownloadTrigger } from "..";
import { sampleSvg } from "./helpers";

const items = sampleSvg();

const svg = sampleSvg();
</script>

<template>
        <DownloadTrigger as-child file-name="icon.svg" mime-type="image/svg+xml" :data="svg" >
          <Button size="lg" variant="outline">
            <PhDownload />
            Download SVG
          </Button>
        </DownloadTrigger>
  
</template>
