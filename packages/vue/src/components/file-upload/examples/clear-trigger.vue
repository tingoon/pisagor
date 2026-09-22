<script setup lang="ts">
import { useFileUploadContext } from "@ark-ui/vue/file-upload";
import { PhTrash, PhX } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { FileUpload } from "..";

type ArkPart = Parameters<typeof h>[0];

const _CustomPreviewList = defineComponent({
  name: "CustomPreviewList",
  setup() {
    const fileUpload = useFileUploadContext();

    return () => {
      const files = fileUpload.value.acceptedFiles;

      if (files.length === 0) {
        return null;
      }

      return h(FileUpload.ItemGroup, { class: "grid grid-cols-4 gap-2" }, () =>
        files.map((file) =>
          h(FileUpload.Item, { file, key: file.name }, () => [
            h(
              FileUpload.ItemPreview as ArkPart,
              { class: "size-auto w-full rounded-2xl", type: "image/*" },
              () => h(FileUpload.ItemPreviewImage),
            ),
            h(FileUpload.ItemDeleteTrigger, { asChild: true }, () =>
              h(
                Button as ArkPart,
                { class: "absolute -top-2 -right-2", pill: true, size: "icon-xs" },
                () => h(PhX),
              ),
            ),
          ]),
        ),
      );
    };
  },
});
</script>

<template>
        <FileUpload>
          <FileUpload.ClearTrigger as-child class="absolute top-2 right-2">
            <Button aria-label="Clear files" size="icon-sm" variant="ghost">
              <PhTrash />
            </Button>
          </FileUpload.ClearTrigger>
          <FileUpload.Dropzone class="w-full">
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Drop files here</FileUpload.Title>
          </FileUpload.Dropzone>
          <FileUpload.List />
        </FileUpload>
  
</template>
