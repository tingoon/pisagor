<script lang="ts">
import type { EditableRootProps as ArkEditableRootProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";
import { editableRecipe } from "@pisagor/recipes/editable";
import { cn } from "@pisagor/utils";
import { setEditableContext } from "./editable.context";

type Props = Omit<ArkEditableRootProps, "class" | "onValueChange" | "value" | "defaultValue"> & {
  class?: string | undefined;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  recipe?: typeof editableRecipe;
  value?: string;
};

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

setEditableContext({
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
