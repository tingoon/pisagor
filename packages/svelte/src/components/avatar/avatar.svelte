<script lang="ts">
  import type {
    AvatarFallbackProps,
    AvatarImageProps,
    AvatarRootProps,
  } from "@ark-ui/svelte";
  import type { AvatarContract, AvatarRootContract } from "@pisagor/contracts";
  import { getInitials } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import AvatarFallback from "./avatar-fallback.svelte";
  import AvatarImage from "./avatar-image.svelte";
  import AvatarRoot from "./avatar-root.svelte";

  type Props = Omit<AvatarRootProps, "children"> &
    AvatarRootContract & {
      /** Alt text for the avatar image */
      alt?: string;
      fallback?: string | Snippet;
      /** Extra props forwarded to the avatar fallback element */
      fallbackProps?: Omit<AvatarFallbackProps, "children" | "class">;
      /** Extra props forwarded to the avatar image element */
      imageProps?: Omit<AvatarImageProps, "alt" | "class" | "src">;
      name?: string;
      /** Renders the avatar image with the provided src */
      src?: string;
    } & AvatarContract;

  let {
    alt,
    name,
    fallback: fallbackProp,
    fallbackProps,
    imageProps,
    src,
    classNames,
    ...rest
  }: Props = $props();

  const fallback = $derived(
    fallbackProp === undefined && name ? getInitials(name) : fallbackProp,
  );
</script>

<AvatarRoot {...rest}>
  {#if src}
    <AvatarImage
      {...imageProps}
      alt={alt ?? name}
      class={classNames?.image}
      {src}
    />
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
