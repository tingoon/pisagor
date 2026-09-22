<script setup lang="ts">
import { PhCamera } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { FileUpload } from "..";
</script>

<template>
        <FileUpload capture="environment">
          <div class="flex justify-center">
            <FileUpload.Trigger as-child>
              <Button variant="outline">
                <PhCamera />
                Take a picture
              </Button>
            </FileUpload.Trigger>
          </div>
          <FileUpload.List />
        </FileUpload>
  
</template>
