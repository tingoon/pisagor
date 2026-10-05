<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumb } from "./breadcrumb.context";

type Props = Omit<HTMLAttributes<HTMLOListElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useBreadcrumb();
</script>

<Ark
  as="ol"
  {...rest}
  class={slots.list({ class: className })}
  data-part="list"
  data-scope="breadcrumb"
>
  {@render children?.()}
</Ark>
