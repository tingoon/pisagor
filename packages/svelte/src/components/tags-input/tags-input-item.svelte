<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemProps,
  } from "@ark-ui/svelte";
  import type { TagsInputItemRootContract } from "@pisagor/contracts";
  import { withTagsInputItemProvider } from "./tags-input.context";

  type Props = TagsInputItemProps &
    Omit<TagsInputItemRootContract, "size" | "variant">;

  let { children, ...rest }: Props = $props();
  const part = withTagsInputItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<TagsInputPrimitive.Item {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.Item>
