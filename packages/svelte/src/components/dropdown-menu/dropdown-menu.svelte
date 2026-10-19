<script lang="ts">
  import {
    type MenuRootProps,
    type MenuTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type {
    DropdownMenuContract,
    DropdownMenuRootContract,
  } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import DropdownMenuArrow from "./dropdown-menu-arrow.svelte";
  import DropdownMenuArrowTip from "./dropdown-menu-arrow-tip.svelte";
  import DropdownMenuContent from "./dropdown-menu-content.svelte";
  import DropdownMenuPositioner from "./dropdown-menu-positioner.svelte";
  import DropdownMenuRoot from "./dropdown-menu-root.svelte";
  import DropdownMenuTrigger from "./dropdown-menu-trigger.svelte";

  type Props = Omit<MenuRootProps, "children"> &
    DropdownMenuRootContract &
    DropdownMenuContract & {
      /** Menu items. */
      children?: Snippet;
      /**
       * Whether to render an arrow pointing at the trigger.
       *
       * @defaultValue false
       */
      showArrow?: boolean;
      /** Trigger that opens the menu; spread `props()` onto your element. */
      trigger?: MenuTriggerProps["asChild"];
    };

  let {
    children,
    classNames,
    showArrow = false,
    trigger,
    ...rest
  }: Props = $props();
</script>

<DropdownMenuRoot {...rest}>
  {#if trigger}
    <DropdownMenuTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </DropdownMenuTrigger>
  {/if}

  <Portal>
    <DropdownMenuPositioner class={classNames?.positioner}>
      <DropdownMenuContent class={classNames?.content}>
        {#if showArrow}
          <DropdownMenuArrow class={classNames?.arrow}>
            <DropdownMenuArrowTip class={classNames?.arrowTip} />
          </DropdownMenuArrow>
        {/if}

        {@render children?.()}
      </DropdownMenuContent>
    </DropdownMenuPositioner>
  </Portal>
</DropdownMenuRoot>
