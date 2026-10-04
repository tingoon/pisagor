<script lang="ts">
import type { ToggleRootProps } from "@ark-ui/svelte/toggle";
import { Toggle as TogglePrimitive } from "@ark-ui/svelte/toggle";
import type { ToggleProps as ToggleSharedProps } from "@pisagor/props";
import { type ButtonVariantProps, buttonRecipe, toggleRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = Omit<ToggleRootProps, "class"> &
  {
    /**
     * The variant of the toggle
     * @defaultValue "ghost"
     */
    variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
    /** Called with the pressed state when the toggle changes. */
    onValueChange?: (value: boolean) => void;
    class?: string | undefined;
    buttonRecipe?: typeof buttonRecipe;
  } & ToggleSharedProps;

let {
  size = "md",
  variant = "ghost",
  onPressedChange,
  onValueChange,
  recipe = toggleRecipe,
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

function handlePressedChange(pressed: boolean) {
  onPressedChange?.(pressed);
  onValueChange?.(pressed);
}
</script>

<TogglePrimitive.Root
  {...rest}
  class={cn(buttonRecipeProp({ clickEffect: false, variant }).base(), recipe({ size }), className)}
  onPressedChange={onPressedChange || onValueChange ? handlePressedChange : undefined}
>
  {@render children?.()}
</TogglePrimitive.Root>
