<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useNavbar } from "./navbar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useNavbar();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.content({ class: className })}
  data-part="content"
  data-scope="navbar"
>
  {@render children?.()}
</Ark>
