<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemInputProps,
  } from "@ark-ui/svelte";
  import { withTagsInputItemContext } from "./tags-input.context";

  let props: TagsInputItemInputProps = $props();
  const part = withTagsInputItemContext(() => props, {
    name: "ItemInput",
    slot: "input",
  });
</script>

<TagsInputPrimitive.ItemInput {...part.props} />
