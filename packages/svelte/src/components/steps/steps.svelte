<script lang="ts">
  import type {
    StepsPresetItem as BaseStepsPresetItem,
    StepsContract,
  } from "@pisagor/contracts";
  import { CaretLeftIcon, CaretRightIcon, CheckIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useSteps, useStepsItem } from "./steps.context";
  import StepsCompletedContent from "./steps-completed-content.svelte";
  import StepsContent from "./steps-content.svelte";
  import StepsDescription from "./steps-description.svelte";
  import StepsIndicator from "./steps-indicator.svelte";
  import StepsItem from "./steps-item.svelte";
  import StepsList from "./steps-list.svelte";
  import StepsNextTrigger from "./steps-next-trigger.svelte";
  import StepsPrevTrigger from "./steps-prev-trigger.svelte";
  import StepsRoot from "./steps-root.svelte";
  import StepsSeparator from "./steps-separator.svelte";
  import StepsTitle from "./steps-title.svelte";
  import StepsTrigger from "./steps-trigger.svelte";

  type Renderable = Snippet | string | number;

  interface StepsPresetItem extends Omit<
    BaseStepsPresetItem,
    "content" | "description" | "icon" | "title"
  > {
    content?: Renderable;
    description?: Renderable;
    icon?: Renderable;
    title?: Renderable;
  }

  type Props = Omit<ComponentProps<typeof StepsRoot>, "children" | "count"> &
    StepsContract & {
      /** Content shown once every step is complete. */
      completedContent?: Renderable;
      /** Steps to render; `count` is derived from the list length. */
      items: StepsPresetItem[];
      /**
       * Whether to render the back / next buttons.
       *
       * @defaultValue true
       */
      showControls?: boolean;
    };

  let {
    classNames,
    completedContent,
    items,
    showControls = true,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

{#snippet render(value: Renderable)}
  {#if typeof value === "function"}
    {@render value()}
  {:else}
    {value}
  {/if}
{/snippet}

<StepsRoot {...rest} count={items.length}>
  <StepsList class={classNames?.list}>
    {#each items as item, index (item.value ?? index)}
      <StepsItem {index}>
        {@const itemStyles = useStepsItem()}
        <StepsTrigger>
          <StepsIndicator>
            <span class={itemStyles.slots.label()}>
              {@render render(item.icon ?? index + 1)}
            </span>
            <CheckIcon class={itemStyles.slots.check()} />
          </StepsIndicator>
          {#if item.title !== undefined || item.description !== undefined}
            <div class={itemStyles.slots.text()}>
              {#if item.title !== undefined}
                <StepsTitle>{@render render(item.title)}</StepsTitle>
              {/if}
              {#if item.description !== undefined}
                <StepsDescription>
                  {@render render(item.description)}
                </StepsDescription>
              {/if}
            </div>
          {/if}
        </StepsTrigger>
        <StepsSeparator />
      </StepsItem>
    {/each}
  </StepsList>
  {#each items as item, index (item.value ?? index)}
    {#if item.content !== undefined}
      <StepsContent class={classNames?.content} {index}>
        {@render render(item.content)}
      </StepsContent>
    {/if}
  {/each}
  {#if completedContent !== undefined}
    <StepsCompletedContent class={classNames?.completedContent}>
      {@render render(completedContent)}
    </StepsCompletedContent>
  {/if}
  {#if showControls}
    {@const styles = useSteps()}
    <div class={styles.slots.control({ class: classNames?.control })}>
      <StepsNextTrigger class={classNames?.nextTrigger}>
        {#snippet asChild(props)}
          <Button {...props()}>
            {m("steps.next")}
            <CaretRightIcon />
          </Button>
        {/snippet}
      </StepsNextTrigger>
      <StepsPrevTrigger class={classNames?.prevTrigger}>
        {#snippet asChild(props)}
          <Button {...props()} variant="outline">
            <CaretLeftIcon />
            {m("steps.previous")}
          </Button>
        {/snippet}
      </StepsPrevTrigger>
    </div>
  {/if}
</StepsRoot>
