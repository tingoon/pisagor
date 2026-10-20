<script lang="ts">
  import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte";
  import type {
    TagsInputContract,
    TagsInputRootContract,
  } from "@pisagor/contracts";
  import { XIcon } from "phosphor-svelte";
  import type { ComponentProps } from "svelte";
  import { InputGroup } from "../input-group";
  import TagsInputClearTrigger from "./tags-input-clear-trigger.svelte";
  import TagsInputControl from "./tags-input-control.svelte";
  import TagsInputInput from "./tags-input-input.svelte";
  import TagsInputItem from "./tags-input-item.svelte";
  import TagsInputItemDeleteTrigger from "./tags-input-item-delete-trigger.svelte";
  import TagsInputItemInput from "./tags-input-item-input.svelte";
  import TagsInputItemPreview from "./tags-input-item-preview.svelte";
  import TagsInputItemText from "./tags-input-item-text.svelte";
  import TagsInputRoot from "./tags-input-root.svelte";

  type Props = Omit<ComponentProps<typeof TagsInputRoot>, "children"> &
    Pick<TagsInputRootContract, "variant"> &
    TagsInputContract & {
      /**
       * Whether to show the clear-all button when there are tags.
       *
       * @defaultValue false
       */
      clearable?: boolean;
      /** Input placeholder. */
      placeholder?: string;
    };

  let {
    classNames,
    clearable = false,
    placeholder,
    size = "md",
    variant,
    ...rest
  }: Props = $props();
</script>

<TagsInputRoot {...rest} {size}>
  <TagsInputControl class={classNames?.control}>
    {#snippet asChild(controlProps)}
      <InputGroup
        {...controlProps() as ComponentProps<typeof InputGroup>}
        {size}
        {variant}
      >
        <TagsInputPrimitive.Context>
          {#snippet render(api)}
            {#each api().value as value, index (value)}
              <TagsInputItem {index} {value}>
                <TagsInputItemPreview>
                  <TagsInputItemText>{value}</TagsInputItemText>
                  <TagsInputItemDeleteTrigger>
                    {#snippet asChild(props)}
                      <InputGroup.Button
                        {...props()}
                        size="icon-xs"
                        variant="ghost"
                      >
                        <XIcon aria-hidden="true" />
                      </InputGroup.Button>
                    {/snippet}
                  </TagsInputItemDeleteTrigger>
                </TagsInputItemPreview>
                <TagsInputItemInput>
                  {#snippet asChild(props)}
                    <InputGroup.Input {...props()} />
                  {/snippet}
                </TagsInputItemInput>
              </TagsInputItem>
            {/each}
            <TagsInputInput class={classNames?.input}>
              {#snippet asChild(props)}
                <InputGroup.Input {...props()} {placeholder} />
              {/snippet}
            </TagsInputInput>
            {#if clearable && api().value.length > 0}
              <TagsInputClearTrigger class={classNames?.clearTrigger}>
                {#snippet asChild(props)}
                  <InputGroup.Button
                    {...props()}
                    size="icon-xs"
                    variant="ghost"
                  >
                    <XIcon aria-hidden="true" />
                  </InputGroup.Button>
                {/snippet}
              </TagsInputClearTrigger>
            {/if}
          {/snippet}
        </TagsInputPrimitive.Context>
      </InputGroup>
    {/snippet}
  </TagsInputControl>
</TagsInputRoot>
