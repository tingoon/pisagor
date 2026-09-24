<script lang="ts">
import type { TagsInputInputProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { cn } from "@pisagor/utils";
import { useTagsInput } from "./tags-input.context";

type Props = Omit<TagsInputInputProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useTagsInput();
</script>

<TagsInputPrimitive.Input {...rest} class={slots.input({ class: cn(className) })} />
