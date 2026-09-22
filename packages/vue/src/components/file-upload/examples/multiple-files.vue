<script setup lang="ts">
import { useFileUploadContext } from "@ark-ui/vue/file-upload";
import { PhX } from "@phosphor-icons/vue";
import { Button, Separator } from "@pisagor/vue";
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
        <FileUpload :max-files="5">
          <FileUpload.Dropzone>
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Drop files here</FileUpload.Title>
            <div class="flex items-center justify-center gap-2">
              <Separator />
              <FileUpload.Description>or</FileUpload.Description>
              <Separator />
            </div>
            <FileUpload.Trigger as-child>
              <Button>Browse files</Button>
            </FileUpload.Trigger>
            <FileUpload.Helper>You can upload up to 5 files at a time.</FileUpload.Helper>
          </FileUpload.Dropzone>
          <FileUpload.List />
        </FileUpload>
  
</template>
