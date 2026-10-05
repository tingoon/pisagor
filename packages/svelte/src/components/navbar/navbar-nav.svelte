<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useNavbar } from "./navbar.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  class?: string | undefined;
};
let {
  "aria-label": ariaLabel = "Main",
  class: className,
  children,
  ...rest
}: Props = $props();
const { slots } = useNavbar();
</script>

<Ark
  as="nav"
  {...rest}
  aria-label={ariaLabel}
  class={slots.nav({ class: className })}
  data-part="nav"
  data-scope="navbar"
>
  {@render children?.()}
</Ark>
