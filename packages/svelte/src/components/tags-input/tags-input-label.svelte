<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputLabelProps,
  } from "@ark-ui/svelte";
  import { withTagsInputContext } from "./tags-input.context";

  let { children, ...rest }: TagsInputLabelProps = $props();
  const part = withTagsInputContext(() => rest, { name: "Label" });
</script>

<TagsInputPrimitive.Label {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.Label>
