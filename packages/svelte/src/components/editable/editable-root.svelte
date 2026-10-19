<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableRootProps as ArkEditableRootProps,
  } from "@ark-ui/svelte";
  import type { EditableRootContract } from "@pisagor/contracts";

  import { withProvider } from "./editable.context";

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
    children,
    ...rest
  }: Props = $props();

  function handleValueChange(details: { value: string }) {
    onValueChange?.(details.value);
  }

  const root = withProvider(
    () => ({
      ...rest,
      "data-orientation": orientation,
      defaultValue,
      onValueChange: onValueChange ? handleValueChange : undefined,
      value,
    }),
    { name: "Root" },
  );
</script>

<EditablePrimitive.Root {...root.props}>
  {@render children?.()}
</EditablePrimitive.Root>
