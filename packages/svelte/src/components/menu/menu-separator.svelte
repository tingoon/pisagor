<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

let { class: className, ...rest }: HTMLAttributes<HTMLHRElement> = $props();
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
