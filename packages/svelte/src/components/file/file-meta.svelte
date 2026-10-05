<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFile } from "./file.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement> = $props();
const { slots } = useFile();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.meta({ class: cn(className) })}
  data-part="meta"
  data-scope="file"
>
  {@render children?.()}
</Ark>
