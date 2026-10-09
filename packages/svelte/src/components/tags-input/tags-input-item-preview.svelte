<script lang="ts">
import {
  type TagsInputItemPreviewProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInputItem } from "./tags-input.context";

let {
  class: className,
  children,
  ...rest
}: TagsInputItemPreviewProps = $props();
const styles = useTagsInputItem();
const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ItemPreview
  {...rest}
  class={slots.preview({ class: cn(className) })}
>
  {@render children?.()}
</TagsInputPrimitive.ItemPreview>
