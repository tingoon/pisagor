<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { TagsInputRootContract } from "@pisagor/contracts";
  import { withTagsInputProvider } from "./tags-input.context";

  type Props = Omit<ArkRootProps, "onValueChange"> &
    Omit<TagsInputRootContract, "variant"> & {
      /** Called with the tag list when it changes. */
      onValueChange?: (value: string[]) => void;
    };

  let {
    children,
    editable = false,
    onValueChange,
    size = "md",
    ...rest
  }: Props = $props();

  function handleValueChange(details: { value: string[] }) {
    onValueChange?.(details.value);
  }

  const root = withTagsInputProvider(
    () => ({
      ...rest,
      "data-size": size,
      editable,
      onValueChange: onValueChange ? handleValueChange : undefined,
    }),
    { name: "Root" },
  );
</script>

<TagsInputPrimitive.Root {...root.props}>
  {@render children?.()}
  <TagsInputPrimitive.HiddenInput />
</TagsInputPrimitive.Root>
