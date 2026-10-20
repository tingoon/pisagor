<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemPreviewProps,
  } from "@ark-ui/svelte";
  import { withTagsInputItemContext } from "./tags-input.context";

  let { children, ...rest }: TagsInputItemPreviewProps = $props();
  const part = withTagsInputItemContext(() => rest, {
    name: "ItemPreview",
    slot: "preview",
  });
</script>

<TagsInputPrimitive.ItemPreview {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.ItemPreview>
