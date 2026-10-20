<script lang="ts">
  import { type MenuRootProps, Portal } from "@ark-ui/svelte";
  import type {
    DropdownMenuContract,
    DropdownMenuRootContract,
  } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import DropdownMenuContent from "../dropdown-menu/dropdown-menu-content.svelte";
  import DropdownMenuPositioner from "../dropdown-menu/dropdown-menu-positioner.svelte";
  import DropdownMenuRoot from "../dropdown-menu/dropdown-menu-root.svelte";
  import ContextMenuContextTrigger from "./context-menu-context-trigger.svelte";

  type Props = Omit<MenuRootProps, "children"> &
    DropdownMenuRootContract &
    DropdownMenuContract & {
      /** Menu items. */
      children?: Snippet;
      /** Area that opens the menu on right-click or long press. */
      trigger?: string | Snippet;
    };

  let { children, classNames, trigger, ...rest }: Props = $props();
</script>

<DropdownMenuRoot {...rest}>
  {#if trigger}
    <ContextMenuContextTrigger class={classNames?.trigger}>
      {#if typeof trigger === "string"}
        {trigger}
      {:else}
        {@render trigger()}
      {/if}
    </ContextMenuContextTrigger>
  {/if}

  <Portal>
    <DropdownMenuPositioner class={classNames?.positioner}>
      <DropdownMenuContent class={classNames?.content}>
        {@render children?.()}
      </DropdownMenuContent>
    </DropdownMenuPositioner>
  </Portal>
</DropdownMenuRoot>
