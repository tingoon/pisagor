import { Menu as MenuPrimitive } from "@ark-ui/vue/menu";
import { contextMenuRecipe } from "@pisagor/recipes/context-menu";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNode } from "vue";
import type { DropdownMenuRootProps } from "../dropdown-menu/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemGroup,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTriggerItem,
} from "../dropdown-menu/dropdown-menu";

type ArkPart = Parameters<typeof h>[0];

function wrapDropdownMenuPart(
  component: Parameters<typeof h>[0],
  attrs: Record<string, unknown>,
  slots: { default?: () => VNode | VNode[] | string | undefined },
) {
  return h(component, attrs as object, slots);
}

// #region Parts
export const ContextMenuRoot = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    positioning: {
      default: () => ({ placement: "bottom-end" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => h(DropdownMenuRoot, { ...(attrs as object), ...props }, slots);
  },
});

export const ContextMenuContextTrigger = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuContextTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        MenuPrimitive.ContextTrigger as ArkPart,
        {
          ...attrs,
          class: cn(contextMenuRecipe(), props.class, attrs.class),
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

export const ContextMenuItemGroup = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuItemGroup",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuItemGroup, attrs, slots);
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

export const ContextMenuTriggerItem = defineComponent({
  inheritAttrs: false,
  name: "ContextMenuTriggerItem",
  setup(_, { attrs, slots }) {
    return () => wrapDropdownMenuPart(DropdownMenuTriggerItem, attrs, slots);
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

export type ContextMenuRootProps = DropdownMenuRootProps;
