<script lang="ts">
import {
  type EditableRootProps as ArkEditableRootProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";
import type { EditableProps as BaseEditableProps } from "@pisagor/props";
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
} & BaseEditableProps;

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
