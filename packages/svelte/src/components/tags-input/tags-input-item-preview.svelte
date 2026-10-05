<script lang="ts">
import type { TagsInputItemPreviewProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { useTagsInputItem } from "./tags-input.context";

type Props = Omit<TagsInputItemPreviewProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTagsInputItem();
</script>

<TagsInputPrimitive.ItemPreview
  {...rest}
  class={slots.preview({ class: className })}
>
  {@render children?.()}
</TagsInputPrimitive.ItemPreview>
