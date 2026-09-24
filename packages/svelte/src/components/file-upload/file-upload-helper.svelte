<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFileUpload } from "./file-upload.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useFileUpload();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.helper({ class: cn(className) })}
  data-part="dropzone-helper"
  data-scope="file-upload"
>
  {@render children?.()}
</Ark>
