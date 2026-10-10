<script lang="ts">
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarRootProps,
} from "@ark-ui/svelte/avatar";
import type { AvatarProps as BaseAvatarProps } from "@pisagor/props";
import type { AvatarRecipeSlot } from "@pisagor/recipes";
import type { Snippet } from "svelte";
import type { VariantClassNames } from "../../internal/types";
import AvatarFallback from "./avatar-fallback.svelte";
import AvatarImage from "./avatar-image.svelte";
import AvatarRoot from "./avatar-root.svelte";

type Props = Omit<AvatarRootProps, "children"> & {
  /** Alt text for the avatar image */
  alt?: string;
  /** Slot class names */
  classNames?: VariantClassNames<AvatarRecipeSlot>;
  /** Renders the fallback content shown until the image loads */
  fallback?: string | Snippet;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "class">;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Omit<AvatarImageProps, "alt" | "class" | "src">;
  /** Renders the avatar image with the provided src */
  src?: string;
} & BaseAvatarProps;

let {
  alt,
  fallback,
  fallbackProps,
  imageProps,
  src,
  classNames,
  ...rest
}: Props = $props();
</script>

<AvatarRoot {...rest}>
  {#if src}
    <AvatarImage {...imageProps} {alt} class={classNames?.image} {src} />
  {/if}
  {#if fallback !== undefined}
    <AvatarFallback {...fallbackProps} class={classNames?.fallback}>
      {#if typeof fallback === "string"}
        {fallback}
      {:else}
        {@render fallback()}
      {/if}
    </AvatarFallback>
  {/if}
</AvatarRoot>
