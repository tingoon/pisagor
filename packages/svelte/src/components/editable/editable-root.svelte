<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableRootProps as ArkEditableRootProps,
  } from "@ark-ui/svelte";
  import type { EditableRootContract } from "@pisagor/contracts";
  import { editableRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./editable.context";

  type Props = Omit<
    ArkEditableRootProps,
    "onValueChange" | "value" | "defaultValue"
  > & {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
    value?: string;
  } & EditableRootContract;

  let {
    orientation = "horizontal",
    defaultValue,
    value,
    onValueChange,
    recipe = editableRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());

  Context.set({
    get slots() {
      return slots;
    },
  });

  function handleValueChange(details: { value: string }) {
    onValueChange?.(details.value);
  }
</script>

<EditablePrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-orientation={orientation}
  {defaultValue}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {value}
>
  {@render children?.()}
</EditablePrimitive.Root>
