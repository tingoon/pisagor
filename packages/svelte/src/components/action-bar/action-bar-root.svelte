<script lang="ts">
  import { useHotkey } from "@ark-ui/svelte";
  import type { ActionBarRootContract } from "@pisagor/contracts";
  import { actionBarRecipe } from "@pisagor/recipes";
  import type { Snippet } from "svelte";
  import { setActionBarContext } from "./action-bar.context";

  type Props = {
    children?: Snippet;
    /**
     * Whether to close the action bar when the Escape key is pressed.
     *
     * @defaultValue true
     */
    closeOnEscape?: boolean;
    /** The default open state of the action bar. */
    defaultOpen?: boolean;
    lazyMount?: boolean;
    /** The function to call when the open state of the action bar changes. */
    onOpenChange?: (open: boolean) => void;
    /** The open state of the action bar. */
    open?: boolean;
    /** Placement and gutter of the action bar. */
    positioning?: {
      gutter?: string;
      placement?: "bottom" | "bottom-start" | "bottom-end";
    };
    unmountOnExit?: boolean;
  } & ActionBarRootContract;

  let {
    closeOnEscape = true,
    defaultOpen = false,
    lazyMount,
    open = $bindable(defaultOpen),
    positioning: positioningProp,
    unmountOnExit,
    children,
    onOpenChange,
    recipe = actionBarRecipe,
  }: Props = $props();
  const defaultPositioning = { gutter: "16px", placement: "bottom" as const };
  const positioning = $derived({ ...defaultPositioning, ...positioningProp });
  const slots = $derived(recipe({ placement: positioning.placement }));

  function handleClose() {
    open = false;
    onOpenChange?.(false);
  }
  function handleOpen() {
    open = true;
    onOpenChange?.(true);
  }

  useHotkey(() => ({
    action: (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      handleClose();
    },
    enabled: Boolean(open && closeOnEscape),
    hotkey: "Escape",
  }));

  setActionBarContext({
    get isOpen() {
      return open;
    },
    get lazyMount() {
      return lazyMount;
    },
    get onClose() {
      return handleClose;
    },
    get onOpen() {
      return handleOpen;
    },
    get positioning() {
      return positioning;
    },
    get slots() {
      return slots;
    },
    get unmountOnExit() {
      return unmountOnExit;
    },
  });
</script>

{@render children?.()}
