<script lang="ts">
import {
  type TagsInputInputProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInput } from "./tags-input.context";

let { class: className, ...rest }: TagsInputInputProps = $props();
const styles = useTagsInput();
const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.Input
  {...rest}
  class={slots.input({ class: cn(className) })}
/>
