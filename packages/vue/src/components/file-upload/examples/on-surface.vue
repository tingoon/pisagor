<script lang="ts" setup >
import { useFileUploadContext } from "@ark-ui/vue/file-upload";
import { PhX } from "@phosphor-icons/vue";
import { Button, Surface } from "@pisagor/vue";
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
        <Surface bordered class="flex flex-col gap-2" padding="md">
          <FileUpload>
            <FileUpload.Dropzone variant="primary">
              <FileUpload.DropzoneIcon />
              <FileUpload.Title>Primary</FileUpload.Title>
              <FileUpload.Trigger as-child>
                <Button>Browse files</Button>
              </FileUpload.Trigger>
            </FileUpload.Dropzone>
          </FileUpload>
          <FileUpload>
            <FileUpload.Dropzone variant="secondary">
              <FileUpload.DropzoneIcon />
              <FileUpload.Title>Secondary</FileUpload.Title>
              <FileUpload.Trigger as-child>
                <Button>Browse files</Button>
              </FileUpload.Trigger>
            </FileUpload.Dropzone>
          </FileUpload>
        </Surface>
  
</template>
