<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputInputProps,
  } from "@ark-ui/svelte";
  import { withTagsInputContext } from "./tags-input.context";

  let props: TagsInputInputProps = $props();
  const part = withTagsInputContext(() => props, { name: "Input" });
</script>

<TagsInputPrimitive.Input {...part.props} />
