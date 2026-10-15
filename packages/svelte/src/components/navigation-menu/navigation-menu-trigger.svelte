<script lang="ts">
import { focusNavigationMenuContentLink } from "@pisagor/utils";
import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import {
  useNavigationMenu,
  useNavigationMenuItemState,
} from "./navigation-menu.context";

type Props = HTMLButtonAttributes & { children?: Snippet };

let {
  children,
  class: className,
  onclick,
  onkeydown,
  ...rest
}: Props = $props();
const styles = useNavigationMenu();
const item = useNavigationMenuItemState("Trigger");
let element = $state<HTMLButtonElement | null>(null);

$effect(() => {
  item.setTrigger(element);
});

function handleClick(
  event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
) {
  onclick?.(event);
  item.setOpen(!item.open);
}

function handleKeyDown(
  event: KeyboardEvent & { currentTarget: EventTarget & HTMLButtonElement },
) {
  onkeydown?.(event);
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    item.setOpen(true);
    const position = event.key === "ArrowDown" ? "first" : "last";
    requestAnimationFrame(() =>
      focusNavigationMenuContentLink(item.contentId, position),
    );
  }
}
</script>

<button
  bind:this={element}
  {...rest}
  aria-controls={item.contentId}
  aria-expanded={item.open}
  class={styles.slots.trigger({ class: className as string | undefined })}
  data-part="trigger"
  data-scope="navigation-menu"
  onclick={handleClick}
  onkeydown={handleKeyDown}
  type="button"
>
  {@render children?.()}
  <CaretDownIcon aria-hidden="true" class={styles.slots.indicator()} />
</button>
