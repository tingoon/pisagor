<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import UploadIcon from "phosphor-svelte/lib/UploadIcon";
import type { HTMLAttributes } from "svelte/elements";
import { useFileUpload } from "./file-upload.context";

let {
  children,
  class: className,
  ...rest
}: HTMLAttributes<HTMLDivElement> = $props();
const { slots } = useFileUpload();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.dropzoneIcon({ class: cn(className) })}
  data-part="dropzone-icon"
  data-scope="file-upload"
>
  {#if children}
    {@render children()}
  {:else}
    <UploadIcon />
  {/if}
</Ark>
