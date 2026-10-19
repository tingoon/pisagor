<script lang="ts">
  import {
    type CollectionItem,
    Select as SelectPrimitive,
    type SelectRootProps as ArkSelectRootProps,
  } from "@ark-ui/svelte";
  import type { SelectRootContract } from "@pisagor/contracts";
  import { selectRecipe } from "@pisagor/recipes";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { Context } from "./select.context";

  type Props = Omit<ArkSelectRootProps<CollectionItem>, "onValueChange"> &
    SelectRootContract & {
      onValueChange?: (value: string | string[]) => void;
    };

  let {
    onValueChange,
    size = "md",
    variant,
    surfaceVariant,
    recipe = selectRecipe,
    children,
    ...rest
  }: Props = $props();

  const surfaceFromContext = useFormControlSurface();
  const resolved = $derived({
    size,
    surfaceVariant: surfaceVariant ?? surfaceFromContext,
    variant,
  });
  const slots = $derived(recipe(resolved));

  Context.set({
    get slots() {
      return slots;
    },
    get variants() {
      return resolved as never;
    },
  });

  function handleValueChange(details: { value: string[] }) {
    onValueChange?.(details.value);
  }
</script>

<SelectPrimitive.Root
  {...rest}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
  <SelectPrimitive.HiddenSelect />
</SelectPrimitive.Root>
