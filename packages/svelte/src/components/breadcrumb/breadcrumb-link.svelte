<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { useBreadcrumbItem } from "./breadcrumb.context";

let { class: className, children, ...rest }: HTMLAnchorAttributes = $props();
const { slots } = useBreadcrumbItem();
</script>

<Ark
  as="a"
  {...rest}
  class={slots.link({ class: cn(className) })}
  data-part="link"
  data-scope="breadcrumb"
>
  {@render children?.()}
</Ark>
