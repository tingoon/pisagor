<script setup lang="ts">
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
        <DownloadTrigger as-child :data="data" file-name="data.json" mime-type="application/json">
          <Button size="lg" variant="outline">
            <PhDownload />
            Download
          </Button>
        </DownloadTrigger>
  
</template>
