<script lang="ts">
import {
  type FileUploadItemDeleteTriggerProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useMessageResolver } from "../provider/provider.context";
import { useFileUploadItem } from "./file-upload.context";

const t = useMessageResolver();

let {
  class: className,
  children,
  ...rest
}: FileUploadItemDeleteTriggerProps = $props();
const styles = useFileUploadItem();
const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemDeleteTrigger
  aria-label={t("fileUpload.removeFile")}
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
