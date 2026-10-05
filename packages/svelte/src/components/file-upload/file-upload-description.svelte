<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFileUpload } from "./file-upload.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement> = $props();
const { slots } = useFileUpload();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.description({ class: cn(className) })}
  data-part="title"
  data-scope="file-upload"
>
  {@render children?.()}
</Ark>
