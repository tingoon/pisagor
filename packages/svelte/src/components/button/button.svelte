<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ButtonProps as ButtonSharedProps } from "@pisagor/props/button";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import Spinner from "../spinner/spinner.svelte";

type Props = Omit<HTMLButtonAttributes, "class" | "disabled" | "type"> &
  ButtonSharedProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    disabled?: boolean | null;
    type?: "button" | "reset" | "submit" | null;
  };

let {
  clickEffect = true,
  loading = false,
  pill = false,
  size = "md",
  variant = "default",
  disabled = false,
  type = "button",
  recipe = buttonRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ clickEffect, loading, pill, size, variant }));
</script>

<Ark
  as="button"
  {...rest}
  aria-busy={loading || undefined}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="button"
  data-size={size}
  data-state={loading ? "loading" : "idle"}
  data-variant={variant}
  disabled={Boolean(disabled || loading)}
  type={type ?? "button"}
>
  {#if loading}
    <span aria-hidden="true" class={slots.hidden()}> {@render children?.()} </span>
    <span class={slots.srOnly()}> {@render children?.()} </span>
    <span class={slots.spinner()}>
      <Spinner aria-hidden="true" />
    </span>
  {:else}
    {@render children?.()}
  {/if}
</Ark>
