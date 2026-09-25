<script lang="ts">
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useFileUploadItem } from "./file-upload.context";

type Props = {
  class?: string | undefined;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useFileUploadItem();
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
