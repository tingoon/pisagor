<script lang="ts">
import {
  type FileUploadItemDeleteTriggerProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useFileUploadItem } from "./file-upload.context";

let {
  class: className,
  children,
  ...rest
}: FileUploadItemDeleteTriggerProps = $props();
const styles = useFileUploadItem();
const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemDeleteTrigger
  {...rest}
  aria-label="Remove file"
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
