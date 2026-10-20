<script lang="ts">
  import type { CollapsibleContract } from "@pisagor/contracts";
  import { CaretDownIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import CollapsibleBody from "./collapsible-body.svelte";
  import CollapsibleContent from "./collapsible-content.svelte";
  import CollapsibleIndicator from "./collapsible-indicator.svelte";
  import CollapsibleRoot from "./collapsible-root.svelte";
  import CollapsibleTrigger from "./collapsible-trigger.svelte";

  type Props = Omit<ComponentProps<typeof CollapsibleRoot>, "children"> &
    CollapsibleContract & {
      /** Content revealed when open. */
      children?: Snippet;
      /**
       * Whether to render the caret indicator inside the trigger.
       *
       * @defaultValue true
       */
      showIndicator?: boolean;
      /** Trigger label. */
      trigger?: Snippet | string;
    };

  let {
    children,
    classNames,
    showIndicator = true,
    trigger,
    ...rest
  }: Props = $props();
</script>

<CollapsibleRoot {...rest}>
  {#if trigger !== undefined}
    <CollapsibleTrigger class={classNames?.trigger}>
      {#if typeof trigger === "string"}
        {trigger}
      {:else}
        {@render trigger()}
      {/if}
      {#if showIndicator}
        <CollapsibleIndicator class={classNames?.indicator}>
          <CaretDownIcon class={classNames?.icon} />
        </CollapsibleIndicator>
      {/if}
    </CollapsibleTrigger>
  {/if}
  <CollapsibleContent class={classNames?.content}>
    <CollapsibleBody class={classNames?.body}>
      {@render children?.()}
    </CollapsibleBody>
  </CollapsibleContent>
</CollapsibleRoot>
