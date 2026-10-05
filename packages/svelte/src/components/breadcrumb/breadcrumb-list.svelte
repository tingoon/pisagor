<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumb } from "./breadcrumb.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLOListElement> = $props();
const { slots } = useBreadcrumb();
</script>

<Ark
  as="ol"
  {...rest}
  class={slots.list({ class: cn(className) })}
  data-part="list"
  data-scope="breadcrumb"
>
  {@render children?.()}
</Ark>
