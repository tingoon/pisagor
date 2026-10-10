<script lang="ts">
import {
  type TagsInputItemTextProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInputItem } from "./tags-input.context";

let { class: className, children, ...rest }: TagsInputItemTextProps = $props();
const styles = useTagsInputItem();
const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ItemText
  {...rest}
  class={slots.text({ class: cn(className) })}
>
  {@render children?.()}
</TagsInputPrimitive.ItemText>
