<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemTextProps,
  } from "@ark-ui/svelte";
  import { withTagsInputItemContext } from "./tags-input.context";

  let { children, ...rest }: TagsInputItemTextProps = $props();
  const part = withTagsInputItemContext(() => rest, {
    name: "ItemText",
    slot: "text",
  });
</script>

<TagsInputPrimitive.ItemText {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.ItemText>
