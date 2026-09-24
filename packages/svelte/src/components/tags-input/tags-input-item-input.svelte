<script lang="ts">
import type { TagsInputItemInputProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInputItem } from "./tags-input.context";

type Props = Omit<TagsInputItemInputProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useTagsInputItem();
</script>

<TagsInputPrimitive.ItemInput {...rest} class={slots.input({ class: cn(className) })} />
