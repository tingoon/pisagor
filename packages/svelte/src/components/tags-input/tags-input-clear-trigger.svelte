<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputClearTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withTagsInputContext } from "./tags-input.context";

  let { children, ...rest }: TagsInputClearTriggerProps = $props();
  const { m } = useLocale();
  const part = withTagsInputContext(
    () => ({ "aria-label": m("tagsInput.clearAllTags"), ...rest }),
    {
      name: "ClearTrigger",
    },
  );
</script>

<TagsInputPrimitive.ClearTrigger {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.ClearTrigger>
