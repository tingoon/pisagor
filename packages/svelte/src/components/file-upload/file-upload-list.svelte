<script lang="ts">
  import { useFileUploadContext } from "@ark-ui/svelte";
  import type { FileUploadItemRootContract } from "@pisagor/props";
  import { fileUploadItemRecipe } from "@pisagor/recipes";
  import { cn, type MessageKey } from "@pisagor/utils";
  import type { ClassValue } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { useFileUpload } from "./file-upload.context";
  import FileUploadItem from "./file-upload-item.svelte";
  import FileUploadItemDeleteTrigger from "./file-upload-item-delete-trigger.svelte";
  import FileUploadItemGroup from "./file-upload-item-group.svelte";
  import FileUploadItemName from "./file-upload-item-name.svelte";
  import FileUploadItemPreview from "./file-upload-item-preview.svelte";
  import FileUploadItemPreviewImage from "./file-upload-item-preview-image.svelte";
  import FileUploadItemSize from "./file-upload-item-size.svelte";

  type Props = { class?: ClassValue } & FileUploadItemRootContract;

  let { class: className, recipe = fileUploadItemRecipe }: Props = $props();
  const api = useFileUploadContext();
  const styles = useFileUpload();
  const slots = $derived(styles.slots);
  const itemSlots = $derived(recipe());
  const { m } = useLocale();
  const accepted = $derived(api().acceptedFiles);
  const rejected = $derived(api().rejectedFiles);
</script>

{#snippet item(file: File, errors?: readonly string[])}
  {const isImage = file.type.startsWith("image/")}
  {const extension = file.name.split(".").pop()}
  <FileUploadItem
    class={itemSlots.listItem({ class: cn(className) })}
    {file}
    {recipe}
  >
    <FileUploadItemPreview
      class={itemSlots.listPreview()}
      type={isImage ? "image/*" : ".*"}
    >
      {#if isImage}
        <FileUploadItemPreviewImage />
      {:else}
        <span class={itemSlots.extension()}>{extension}</span>
      {/if}
    </FileUploadItemPreview>
    <div class={itemSlots.content()}>
      <FileUploadItemName />
      <FileUploadItemSize />
      {#each errors ?? [] as code (code)}
        <div class={itemSlots.error()}>
          {m(`fileUpload.error.${code}` as MessageKey) ?? code}
        </div>
      {/each}
    </div>
    <FileUploadItemDeleteTrigger class={itemSlots.deleteButton()} />
  </FileUploadItem>
{/snippet}

{#if accepted.length > 0}
  <FileUploadItemGroup class={slots.itemGroup()}>
    {#each accepted as file, index (`${file.name}-${index}`)}
      {@render item(file)}
    {/each}
  </FileUploadItemGroup>
{/if}

{#if rejected.length > 0}
  <FileUploadItemGroup class={slots.itemGroup()} type="rejected">
    {#each rejected as rejection, index (`${rejection.file.name}-${index}`)}
      {@render item(rejection.file, rejection.errors)}
    {/each}
  </FileUploadItemGroup>
{/if}
