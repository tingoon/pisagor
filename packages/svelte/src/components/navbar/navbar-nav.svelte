<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useNavbar } from "./navbar.context";

let {
  "aria-label": ariaLabel = "Main",
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement> = $props();
const { slots } = useNavbar();
</script>

<Ark
  as="nav"
  {...rest}
  aria-label={ariaLabel}
  class={slots.nav({ class: cn(className) })}
  data-part="nav"
  data-scope="navbar"
>
  {@render children?.()}
</Ark>
