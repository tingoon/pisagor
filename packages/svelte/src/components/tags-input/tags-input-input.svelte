<script lang="ts">
import {
  type TagsInputInputProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInput } from "./tags-input.context";

let { class: className, ...rest }: TagsInputInputProps = $props();
const { slots } = useTagsInput();
</script>

<TagsInputPrimitive.Input
  {...rest}
  class={slots.input({ class: cn(className) })}
/>
