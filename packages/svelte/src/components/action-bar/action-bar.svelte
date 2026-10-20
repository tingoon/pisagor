<script lang="ts">
  import { type DialogTriggerProps, Portal } from "@ark-ui/svelte";
  import type {
    ActionBarActionItem,
    ActionBarContract,
  } from "@pisagor/contracts";
  import { XIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button.svelte";
  import ActionBarBody from "./action-bar-body.svelte";
  import ActionBarClose from "./action-bar-close.svelte";
  import ActionBarContent from "./action-bar-content.svelte";
  import ActionBarPositioner from "./action-bar-positioner.svelte";
  import ActionBarRoot from "./action-bar-root.svelte";
  import ActionBarSeparator from "./action-bar-separator.svelte";
  import ActionBarTrigger from "./action-bar-trigger.svelte";
  import ActionBarValue from "./action-bar-value.svelte";

  type ActionItem = Omit<ActionBarActionItem, "icon" | "label"> & {
    icon?: Snippet;
    label: string;
    onClick: () => void;
  };

  type Props = Omit<ComponentProps<typeof ActionBarRoot>, "children"> &
    ActionBarContract & {
      /** Action buttons built from data, rendered in the body. */
      actions?: ActionItem[];
      /** Accessible label for the toolbar. */
      "aria-label"?: string;
      /** Extra toolbar content, rendered in the body after `actions`. */
      children?: Snippet;
      /** Selected item count shown at the start of the bar. */
      count?: number;
      /**
       * Whether to show the close button.
       *
       * @defaultValue true
       */
      showCloseButton?: boolean;
      /** Element that opens the bar; spread `props()` onto your element. */
      trigger?: DialogTriggerProps["asChild"];
    };

  let {
    actions,
    "aria-label": ariaLabel,
    children,
    classNames,
    count,
    open = $bindable(),
    showCloseButton = true,
    trigger,
    ...rest
  }: Props = $props();
  const hasBody = $derived(
    (actions !== undefined && actions.length > 0) || children !== undefined,
  );
</script>

<ActionBarRoot {...rest} bind:open>
  {#if trigger}
    <ActionBarTrigger asChild={trigger} class={classNames?.trigger} />
  {/if}

  <Portal>
    <ActionBarPositioner class={classNames?.positioner}>
      <ActionBarContent aria-label={ariaLabel} class={classNames?.content}>
        {#if count !== undefined}
          <ActionBarValue class={classNames?.value} {count} />
        {/if}

        {#if count !== undefined && hasBody}
          <ActionBarSeparator class={classNames?.separator} />
        {/if}

        {#if hasBody}
          <ActionBarBody class={classNames?.body}>
            {#each actions ?? [] as action (action.id ?? action.label)}
              <Button
                disabled={action.disabled}
                onclick={action.onClick}
                size="sm"
                variant="ghost"
              >
                {@render action.icon?.()}
                {action.label}
              </Button>
            {/each}

            {@render children?.()}
          </ActionBarBody>
        {/if}

        {#if showCloseButton && hasBody}
          <ActionBarSeparator class={classNames?.separator} />
        {/if}

        {#if showCloseButton}
          <ActionBarClose class={classNames?.close}>
            <XIcon aria-hidden="true" />
          </ActionBarClose>
        {/if}
      </ActionBarContent>
    </ActionBarPositioner>
  </Portal>
</ActionBarRoot>
