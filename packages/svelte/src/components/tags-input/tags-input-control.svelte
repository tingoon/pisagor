<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputControlProps,
  } from "@ark-ui/svelte";
  import { withTagsInputContext } from "./tags-input.context";

  let { children, ...rest }: TagsInputControlProps = $props();
  const part = withTagsInputContext(() => rest, { name: "Control" });
</script>

<TagsInputPrimitive.Control {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.Control>
