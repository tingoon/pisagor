<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumb } from "./breadcrumb.context";

type Props = Omit<HTMLAttributes<HTMLOListElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useBreadcrumb();
</script>

<Ark
  as="ol"
  {...rest}
  class={slots.list({ class: cn(className) })}
  data-part="list"
  data-scope="breadcrumb"
  role="list"
>
  {@render children?.()}
</Ark>
