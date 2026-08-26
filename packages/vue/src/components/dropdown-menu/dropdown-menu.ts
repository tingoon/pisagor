import { ark } from "@ark-ui/vue/factory";
import { Menu as MenuPrimitive } from "@ark-ui/vue/menu";
import { PhCaretRight, PhCheck } from "@phosphor-icons/vue";
import { dropdownMenuItemVariants, dropdownMenuVariants } from "@pisagor/recipes/dropdown-menu";
import { cn } from "@pisagor/utils";
import { type CSSProperties, defineComponent, h, type PropType } from "vue";

// #region Types
export interface DropdownMenuItemGroupProps {
  heading?: string;
}

export interface DropdownMenuItemProps {
  class?: unknown;
  variant?: "default" | "destructive";
}

export interface DropdownMenuRadioItemGroupProps {
  heading?: string;
}

export interface DropdownMenuRootProps {
  lazyMount?: boolean;
  positioning?: Record<string, unknown>;
  unmountOnExit?: boolean;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const DropdownMenuRoot = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    positioning: {
      default: () => ({ placement: "bottom-end" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        MenuPrimitive.Root as ArkPart,
        {
          ...attrs,
          lazyMount: props.lazyMount,
          positioning: props.positioning,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const DropdownMenuTrigger = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        MenuPrimitive.Trigger as ArkPart,
        {
          ...attrs,
        },
        slots,
      );
  },
});

export const DropdownMenuPositioner = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuPositioner",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(
        MenuPrimitive.Positioner as ArkPart,
        {
          ...attrs,
          class: variantSlots.positioner({ class: cn(props.class, attrs.class) }),
        },
        slots,
      );
    };
  },
});

export const DropdownMenuContent = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(DropdownMenuPositioner, null, () =>
        h(
          MenuPrimitive.Content as ArkPart,
          {
            ...attrs,
            class: variantSlots.content({ class: cn(props.class, attrs.class) }),
          },
          slots,
        ),
      );
    };
  },
});

export const DropdownMenuItemGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuItemGroupLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(
        MenuPrimitive.ItemGroupLabel as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemGroupLabel({ class: cn(props.class, attrs.class) }),
        },
        slots,
      );
    };
  },
});

export const DropdownMenuItemGroup = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuItemGroup",
  props: {
    heading: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(MenuPrimitive.ItemGroup as ArkPart, { ...attrs }, () => [
        props.heading ? h(DropdownMenuItemGroupLabel, null, () => props.heading) : undefined,
        slots.default?.(),
      ]);
  },
});

export const DropdownMenuSeparator = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(
        MenuPrimitive.Separator as ArkPart,
        {
          ...attrs,
          class: variantSlots.separator({ class: cn(props.class, attrs.class) }),
        },
        slots,
      );
    };
  },
});

export const DropdownMenuItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<"default" | "destructive"> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        MenuPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: dropdownMenuItemVariants({ variant: props.variant }).base({
            class: cn(props.class, attrs.class),
          }),
          "data-variant": props.variant,
        },
        slots,
      );
  },
});

export const DropdownMenuQuickItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuQuickItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<"default" | "destructive"> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(
        MenuPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: dropdownMenuItemVariants({ variant: props.variant }).base({
            class: variantSlots.quickItem({ class: cn(props.class, attrs.class) }),
          }),
        },
        slots,
      );
    };
  },
});

export const DropdownMenuCheckboxItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuCheckboxItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = dropdownMenuItemVariants({ inset: true, variant: "default" });

      return h(
        MenuPrimitive.CheckboxItem as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: cn(props.class, attrs.class) }),
        },
        () => [
          h(MenuPrimitive.ItemIndicator as ArkPart, { class: slots.indicator() }, () => h(PhCheck)),
          h(MenuPrimitive.ItemText as ArkPart, { class: slots.text() }, children),
        ],
      );
    };
  },
});

export const DropdownMenuRadioItemGroup = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuRadioItemGroup",
  props: {
    heading: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(MenuPrimitive.RadioItemGroup as ArkPart, { ...attrs }, () => [
        props.heading ? h(DropdownMenuItemGroupLabel, null, () => props.heading) : undefined,
        slots.default?.(),
      ]);
  },
});

export const DropdownMenuRadioItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuRadioItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = dropdownMenuItemVariants({ inset: true, variant: "default" });

      return h(
        MenuPrimitive.RadioItem as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: cn(props.class, attrs.class) }),
        },
        () => [
          h(MenuPrimitive.ItemIndicator as ArkPart, { class: slots.indicator() }, () => h(PhCheck)),
          h(MenuPrimitive.ItemText as ArkPart, { class: slots.text() }, children),
        ],
      );
    };
  },
});

export const DropdownMenuSub = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuSub",
  props: {
    lazyMount: { default: true, type: Boolean },
    positioning: {
      default: () => ({ placement: "bottom-end" }),
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => h(DropdownMenuRoot, { ...attrs, ...props }, slots);
  },
});

export const DropdownMenuSubContent = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuSubContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(DropdownMenuPositioner, {}, () =>
        h(
          MenuPrimitive.Content as ArkPart,
          {
            ...attrs,
            class: variantSlots.content({ class: cn(props.class, attrs.class) }),
          },
          slots,
        ),
      );
    };
  },
});

export const DropdownMenuTriggerItem = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuTriggerItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        MenuPrimitive.TriggerItem as ArkPart,
        {
          ...attrs,
          class: dropdownMenuItemVariants({ variant: "default" }).base({
            class: cn(props.class, attrs.class),
          }),
        },
        () => [slots.default?.(), h(DropdownMenuShortcut, null, () => h(PhCaretRight))],
      );
  },
});

export const DropdownMenuShortcut = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuShortcut",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    dataPart: { default: "shortcut", type: String },
    dataScope: { default: "dropdown-menu", type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { "data-part": _, "data-scope": __, ...rest } = attrs;
      const variantSlots = dropdownMenuVariants();

      return h(
        ark.span as ArkPart,
        {
          ...rest,
          class: variantSlots.shortcut({ class: cn(props.class, attrs.class) }),
          "data-part": props.dataPart,
          "data-scope": props.dataScope,
        },
        slots,
      );
    };
  },
});

export const DropdownMenuArrow = defineComponent({
  inheritAttrs: false,
  name: "DropdownMenuArrow",
  setup(_, { attrs }) {
    return () => {
      const variantSlots = dropdownMenuVariants();

      return h(
        MenuPrimitive.Arrow as ArkPart,
        {
          ...attrs,
          style: {
            "--arrow-background": "var(--popover)",
            "--arrow-size": "calc(1.5 * var(--spacing))",
            left: "20px",
            ...(attrs.style as CSSProperties | undefined),
          } as CSSProperties,
        },
        () => h(MenuPrimitive.ArrowTip as ArkPart, { class: variantSlots.arrowTip() }),
      );
    };
  },
});
// #endregion
