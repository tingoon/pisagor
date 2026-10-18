<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemDeleteTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { useFileUploadItem } from "./file-upload.context";

  const { m } = useLocale();

  let {
    class: className,
    children,
    ...rest
  }: FileUploadItemDeleteTriggerProps = $props();
  const styles = useFileUploadItem();
  const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemDeleteTrigger
  aria-label={m("fileUpload.removeFile")}
  {...rest}
  class={cn(
    buttonRecipe({ size: "icon-xs", variant: "ghost" }).base(),
    slots.deleteTrigger({ class: cn(className) }),
  )}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <XIcon aria-hidden="true" />
  {/if}
</FileUploadPrimitive.ItemDeleteTrigger>
