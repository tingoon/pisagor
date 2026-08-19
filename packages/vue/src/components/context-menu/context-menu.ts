import { Menu as MenuPrimitive } from "@ark-ui/vue/menu";
import { contextMenuTriggerVariants } from "@pisagor/styles/ui/context-menu";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNode } from "vue";
import type { WithTestId } from "../../internal/types";
import type { DropdownMenuRootProps } from "../dropdown-menu/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  useDropdownMenuRoot,
} from "../dropdown-menu/dropdown-menu";

type ArkPart = Parameters<typeof h>[0];

function wrapDropdownMenuPart(
  component: Parameters<typeof h>[0],
  attrs: Record<string, unknown>,
  slots: { default?: () => VNode | VNode[] | string | undefined },
) {
  return h(component, attrs as object, slots);
}

// #region Components
export const ContextMenuRoot = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    positioning: {
      default: () => ({ placement: "bottom-end" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => h(DropdownMenuRoot, { ...(attrs as object), ...props }, slots);
  },
});

export const ContextMenuTrigger = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useDropdownMenuRoot();

    return () =>
      h(
        MenuPrimitive.ContextTrigger as ArkPart,
        {
          ...attrs,
          class: cn(contextMenuTriggerVariants(), props.class, attrs.class),
          "data-testid": context?.testId,
        },
        slots,
      );
  },
});

export const ContextMenuContent = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuContent",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuContent, attrs, slots);
  },
});

export const ContextMenuGroup = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuGroup",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuGroup, attrs, slots);
  },
});

export const ContextMenuSeparator = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuSeparator",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuSeparator, attrs, slots);
  },
});

export const ContextMenuItem = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuItem",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuItem, attrs, slots);
  },
});

export const ContextMenuSub = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuSub",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuSub, attrs, slots);
  },
});

export const ContextMenuSubContent = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuSubContent",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuSubContent, attrs, slots);
  },
});

export const ContextMenuSubTrigger = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuSubTrigger",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuSubTrigger, attrs, slots);
  },
});

export const ContextMenuShortcut = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuShortcut",
  setup(_, { attrs, slots }) {
    return () =>
      wrapDropdownMenuPart(
        DropdownMenuShortcut,
        {
          ...attrs,
          dataPart: "shortcut",
          dataScope: "context-menu",
        },
        slots,
      );
  },
});
// #endregion

export type ContextMenuRootProps = DropdownMenuRootProps & WithTestId;
