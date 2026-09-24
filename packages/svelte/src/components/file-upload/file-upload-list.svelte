<script lang="ts">
import { useFileUploadContext } from "@ark-ui/svelte/file-upload";
import { fileUploadItemRecipe } from "@pisagor/recipes/file-upload";
import { cn } from "@pisagor/utils";
import { useFileUpload } from "./file-upload.context";
import FileUploadItem from "./file-upload-item.svelte";
import FileUploadItemDeleteTrigger from "./file-upload-item-delete-trigger.svelte";
import FileUploadItemGroup from "./file-upload-item-group.svelte";
import FileUploadItemName from "./file-upload-item-name.svelte";
import FileUploadItemPreview from "./file-upload-item-preview.svelte";
import FileUploadItemPreviewImage from "./file-upload-item-preview-image.svelte";
import FileUploadItemSize from "./file-upload-item-size.svelte";

type Props = {
  class?: string | undefined;
  itemRecipe?: typeof fileUploadItemRecipe;
};

let { class: className, itemRecipe = fileUploadItemRecipe }: Props = $props();
const api = useFileUploadContext();
const { slots } = useFileUpload();
const itemSlots = $derived(itemRecipe());
const files = $derived(api().acceptedFiles);
</script>

{#if files.length > 0}
  <FileUploadItemGroup class={slots.itemGroup()}>
    {#each files as file, index (`${file.name}-${index}`)}
      {@const isImage = file.type.startsWith("image/")}
      {@const extension = file.name.split(".").pop()}
      <FileUploadItem class={itemSlots.listItem({ class: cn(className) })} {file} {itemRecipe}>
        <FileUploadItemPreview class={itemSlots.listPreview()} type={isImage ? "image/*" : ".*"}>
          {#if isImage}
            <FileUploadItemPreviewImage />
          {:else}
            <span class={itemSlots.extension()}>{extension}</span>
          {/if}
        </FileUploadItemPreview>
        <div class={itemSlots.content()}>
          <FileUploadItemName />
          <FileUploadItemSize />
        </div>
        <FileUploadItemDeleteTrigger class={itemSlots.deleteButton()} />
      </FileUploadItem>
    {/each}
  </FileUploadItemGroup>
{/if}
