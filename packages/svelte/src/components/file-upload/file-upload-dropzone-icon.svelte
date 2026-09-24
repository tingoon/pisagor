<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import UploadIcon from "phosphor-svelte/lib/UploadIcon";
import type { HTMLAttributes } from "svelte/elements";
import { useFileUpload } from "./file-upload.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
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
