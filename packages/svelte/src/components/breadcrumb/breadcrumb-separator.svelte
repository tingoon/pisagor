<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumb } from "./breadcrumb.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useBreadcrumb();
</script>

<Ark
  as="li"
  {...rest}
  aria-hidden="true"
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="breadcrumb"
  role="presentation"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretRightIcon />
  {/if}
</Ark>
