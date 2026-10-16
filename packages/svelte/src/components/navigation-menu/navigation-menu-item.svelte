<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import {
    setNavigationMenuItemState,
    useNavigationMenuOpenState,
    withContext,
  } from "./navigation-menu.context";

  type Props = HTMLAttributes<HTMLLIElement> & {
    children?: Snippet;
  };

  let { children, onfocusout, onkeydown, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "Item" });
  const state = useNavigationMenuOpenState();
  const id = $props.id();
  const contentId = `${id}-content`;
  const open = $derived(state.openId === id);
  let trigger: HTMLElement | null = null;

  function setOpen(value: boolean) {
    state.setOpenId(value ? id : null);
  }

  setNavigationMenuItemState({
    contentId,
    get open() {
      return open;
    },
    setOpen,
    setTrigger(element) {
      trigger = element;
    },
  });

  function handleFocusOut(
    event: FocusEvent & { currentTarget: EventTarget & HTMLLIElement },
  ) {
    onfocusout?.(event);
    if (open && !event.currentTarget.contains(event.relatedTarget as Node)) {
      setOpen(false);
    }
  }

  function handleKeyDown(
    event: KeyboardEvent & { currentTarget: EventTarget & HTMLLIElement },
  ) {
    onkeydown?.(event);
    if (open && event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      trigger?.focus();
    }
  }
</script>

<Ark
  as="li"
  {...part.props}
  onfocusout={handleFocusOut}
  onkeydown={handleKeyDown}
>
  {@render children?.()}
</Ark>
