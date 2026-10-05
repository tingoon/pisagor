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
  class={slots.actions({ class: cn(className) })}
  data-part="actions"
  data-scope="file"
>
  {@render children?.()}
</Ark>
