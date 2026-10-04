<script lang="ts">
import type { QrCodeRootProps as ArkRootProps } from "@ark-ui/svelte/qr-code";
import { QrCode as QrCodePrimitive } from "@ark-ui/svelte/qr-code";
import type { QrCodeProps as QrCodeSharedProps } from "@pisagor/props";
import { qrCodeRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setQrCodeContext } from "./qr-code.context";
import QrCodeFrame from "./qr-code-frame.svelte";

type Props = Omit<ArkRootProps, "class"> &
  {
  class?: string | undefined;
  } & QrCodeSharedProps;

let { recipe = qrCodeRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setQrCodeContext({
  get slots() {
    return slots;
  },
});
</script>

<QrCodePrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    <QrCodeFrame />
  {/if}
</QrCodePrimitive.Root>
