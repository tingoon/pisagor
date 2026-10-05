<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumbItem } from "./breadcrumb.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement> = $props();
const { slots } = useBreadcrumbItem();
</script>

<Ark
  as="span"
  {...rest}
  aria-current="page"
  class={slots.page({ class: cn(className) })}
  data-part="page"
  data-scope="breadcrumb"
>
  {@render children?.()}
</Ark>
