<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useInputOTP } from "./input-otp.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  class?: string | undefined;
};

let { class: className, ...rest }: Props = $props();

const { slots } = useInputOTP();
</script>

<Ark
  as="hr"
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="input-otp"
/>
