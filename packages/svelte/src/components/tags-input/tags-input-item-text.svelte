<script lang="ts">
import type { TagsInputItemTextProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInputItem } from "./tags-input.context";

type Props = Omit<TagsInputItemTextProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTagsInputItem();
</script>

<TagsInputPrimitive.ItemText {...rest} class={slots.text({ class: cn(className) })}>
  {@render children?.()}
</TagsInputPrimitive.ItemText>
