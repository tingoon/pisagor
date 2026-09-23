<script lang="ts" setup >
import { PhDownload } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DownloadTrigger } from "..";

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

<template>
        <DownloadTrigger as-child file-name="data.json" mime-type="application/json" :data="data" >
          <Button size="lg" variant="outline">
            <PhDownload />
            Download
          </Button>
        </DownloadTrigger>
  
</template>
