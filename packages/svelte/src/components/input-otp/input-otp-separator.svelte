<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useInputOTP } from "./input-otp.context";

let { class: className, ...rest }: HTMLAttributes<HTMLElement> = $props();

const { slots } = useInputOTP();
</script>

<Ark
  as="hr"
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="input-otp"
/>
