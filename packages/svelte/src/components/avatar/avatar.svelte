<script lang="ts">
import type { AvatarRootProps } from "@ark-ui/svelte/avatar";
import { Avatar as AvatarPrimitive } from "@ark-ui/svelte/avatar";
import {
  type AvatarRecipeSlot,
  type AvatarVariantProps,
  avatarRecipe,
} from "@pisagor/recipes/avatar";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setAvatarContext } from "./avatar.context";

type Props = Omit<AvatarRootProps, "class" | "children"> &
  AvatarVariantProps & {
    alt?: string;
    class?: string | undefined;
    classNames?: Partial<Record<AvatarRecipeSlot, string>>;
    fallback?: string | Snippet;
    recipe?: typeof avatarRecipe;
    src?: string;
  };

let {
  shape = "circle",
  size = "md",
  alt,
  fallback,
  src,
  class: className,
  classNames,
  recipe = avatarRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ shape, size }));

setAvatarContext({
  get slots() {
    return slots;
  },
});
</script>

<AvatarPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-shape={shape}
  data-size={size}
>
  {#if src}
    <AvatarPrimitive.Image {alt} class={slots.image({ class: cn(classNames?.image) })} {src} />
  {/if}
  {#if fallback !== undefined}
    <AvatarPrimitive.Fallback class={slots.fallback({ class: cn(classNames?.fallback) })}>
      {#if typeof fallback === "string"}
        {fallback}
      {:else}
        {@render fallback()}
      {/if}
    </AvatarPrimitive.Fallback>
  {/if}
</AvatarPrimitive.Root>
