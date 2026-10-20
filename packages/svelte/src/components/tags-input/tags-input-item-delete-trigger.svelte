<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemDeleteTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withTagsInputItemContext } from "./tags-input.context";

  let { children, ...rest }: TagsInputItemDeleteTriggerProps = $props();
  const { m } = useLocale();
  const part = withTagsInputItemContext(
    () => ({ "aria-label": m("tagsInput.removeTag"), ...rest }),
    {
      name: "ItemDeleteTrigger",
      slot: "delete",
    },
  );
</script>

<TagsInputPrimitive.ItemDeleteTrigger {...part.props}>
  {@render children?.()}
</TagsInputPrimitive.ItemDeleteTrigger>
