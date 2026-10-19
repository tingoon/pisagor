<script lang="ts" setup>
import { useFileUploadContext } from "@ark-ui/vue";
import { PhUpload, PhX } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

const CustomPreviewList = defineComponent({
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
                {
                  class: "absolute -top-2 -right-2",
                  pill: true,
                  size: "icon-xs",
                },
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
  <FileUpload.Root accept="image/*">
    <FileUpload.Dropzone>
      <PhUpload class="text-muted-foreground size-5" />
      <span class="text-sm font-medium">Drop files here</span>
    </FileUpload.Dropzone>
    <CustomPreviewList />
  </FileUpload.Root>
</template>
