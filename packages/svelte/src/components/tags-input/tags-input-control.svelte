<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputControlProps as ArkControlProps,
    useTagsInputContext,
  } from "@ark-ui/svelte";
  import type { TagsInputRootContract } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import { useTagsInput } from "./tags-input.context";
  import TagsInputClearTrigger from "./tags-input-clear-trigger.svelte";

  const { m } = useLocale();

  type Props = ArkControlProps &
    TagsInputRootContract & {
      clearable?: boolean;
    };

  let {
    size = "md",
    variant,
    clearable = false,
    children,
    class: className,
    ...rest
  }: Props = $props();

  const styles = useTagsInput();
  const slots = $derived(styles.slots);
  const api = useTagsInputContext();
</script>

<TagsInputPrimitive.Control {...rest}>
  {#snippet asChild(props)}
    <InputGroup
      {...props({
        class: slots.control({ class: cn(className) }),
      }) as ComponentProps<typeof InputGroup>}
      {size}
      {variant}
    >
      {@render children?.()}
      {#if clearable && api().value.length > 0}
        <TagsInputClearTrigger aria-label={m("tagsInput.clearAllTags")} />
      {/if}
    </InputGroup>
  {/snippet}
</TagsInputPrimitive.Control>
