<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLAttributes<HTMLHRElement>, "class"> & {
  class?: string | undefined;
};

let { class: className, ...rest }: Props = $props();
const { slots } = useMenu();
</script>

<Ark
  as="hr"
  {...rest}
  aria-hidden="true"
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="menu"
/>
