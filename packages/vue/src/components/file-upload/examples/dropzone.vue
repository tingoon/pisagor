<script lang="ts" setup >
import { useFileUploadContext } from "@ark-ui/vue/file-upload";
import { PhX } from "@phosphor-icons/vue";
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
          <FileUpload.Dropzone>
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Drop your files here</FileUpload.Title>
          </FileUpload.Dropzone>
          <FileUpload.List />
        </FileUpload>
  
</template>
