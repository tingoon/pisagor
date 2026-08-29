import { ark } from "@ark-ui/vue/factory";
import { PhX } from "@phosphor-icons/vue";
import { type ActionBarSlots, actionBarRecipe } from "@pisagor/recipes/action-bar";
import { cn } from "@pisagor/utils";
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  reactive,
  Teleport,
  type VNodeChild,
  watchEffect,
} from "vue";
import { createContext } from "../../internal/utils/create-context";
import { Badge, type BadgeProps } from "../badge";
import { Button } from "../button";
import { Separator, type SeparatorProps } from "../separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type ActionBarPlacement = "bottom" | "bottom-start" | "bottom-end";

interface ActionBarPositioning {
  gutter?: string;
  placement?: ActionBarPlacement;
}

interface ActionBarActionItem {
  icon?: VNodeChild;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ActionBarProps extends Pick<ActionBarContextValue, "lazyMount" | "unmountOnExit"> {
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  positioning?: ActionBarPositioning;
  count?: number;
  actions?: ActionBarActionItem[];
}

export interface ActionBarTriggerProps {
  onClick?: (event: MouseEvent) => void;
}

export interface ActionBarContentProps {
  class?: unknown;
  "aria-labelledby"?: string;
}

export interface ActionBarSeparatorProps extends SeparatorProps {}

export interface ActionBarCloseProps {
  onClick?: (event: MouseEvent) => void;
  class?: unknown;
}

export interface ActionBarValueProps
  extends Pick<BadgeProps, "class" | "pill" | "size" | "variant"> {
  count: number;
  label?: string;
  children?: VNodeChild;
}

interface ActionBarContextValue {
  isOpen?: boolean;
  lazyMount?: boolean;
  unmountOnExit?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  positioning: Required<ActionBarPositioning>;
  slots: ActionBarSlots;
}
// #endregion

// #region Context
const [provideActionBarContext, useActionBarContext] = createContext<ActionBarContextValue>({
  name: "ActionBar",
  strict: false,
});
// #endregion

// #region Constants
const defaultPositioning: Required<ActionBarPositioning> = { gutter: "16px", placement: "bottom" };

function actionBarTeleport(content: ReturnType<typeof h> | ReturnType<typeof h>[]) {
  return h(Teleport, { to: "body" }, () => content);
}
// #endregion

// #region Parts
export const ActionBarRoot = defineComponent({
  inheritAttrs: false,
  name: "ActionBarRoot",
  props: {
    actions: { default: undefined, type: Array as PropType<ActionBarActionItem[]> },
    closeOnEscape: { default: true, type: Boolean },
    count: { default: undefined, type: Number },
    defaultOpen: { default: false, type: Boolean },
    lazyMount: { default: true, type: Boolean },
    onOpenChange: { default: undefined, type: Function as PropType<(open: boolean) => void> },
    open: { default: undefined, type: Boolean },
    positioning: { default: undefined, type: Object as PropType<ActionBarPositioning> },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const internalOpen = reactive<{ value: boolean }>({ value: props.defaultOpen });

    const isControlled = () => props.open !== undefined;
    const isOpen = () => (isControlled() ? props.open : internalOpen.value) ?? false;

    const handleClose = () => {
      if (!isControlled()) internalOpen.value = false;
      props.onOpenChange?.(false);
    };

    const handleOpen = () => {
      if (!isControlled()) internalOpen.value = true;
      props.onOpenChange?.(true);
    };

    let onKeyDown: ((event: KeyboardEvent) => void) | undefined;

    onMounted(() => {
      onKeyDown = (event) => {
        if (event.defaultPrevented) return;
        if (event.key !== "Escape") return;
        if (isOpen() && props.closeOnEscape) {
          event.preventDefault();
          handleClose();
        }
      };

      window.addEventListener("keydown", onKeyDown);
    });

    onBeforeUnmount(() => {
      if (onKeyDown) window.removeEventListener("keydown", onKeyDown);
    });

    const contextValue = reactive<ActionBarContextValue>({
      isOpen: isOpen(),
      lazyMount: props.lazyMount,
      onClose: handleClose,
      onOpen: handleOpen,
      positioning: { ...defaultPositioning, ...(props.positioning ?? {}) },
      slots: actionBarRecipe(),
      unmountOnExit: props.unmountOnExit,
    });

    watchEffect(() => {
      contextValue.isOpen = isOpen();
      contextValue.lazyMount = props.lazyMount;
      contextValue.unmountOnExit = props.unmountOnExit;
      contextValue.positioning = { ...defaultPositioning, ...(props.positioning ?? {}) };
    });

    provideActionBarContext(contextValue);

    return () => {
      const hasPreset =
        props.count !== undefined || (props.actions !== undefined && props.actions.length > 0);

      return h(
        "div",
        {
          ...attrs,
          "data-part": "root",
          "data-scope": "action-bar",
        },
        () => [
          slots.default?.(),
          hasPreset
            ? h(ActionBarContent, null, () => [
                props.count !== undefined ? h(ActionBarValue, { count: props.count }) : null,
                props.count !== undefined ? h(ActionBarSeparator) : null,
                props.actions?.length
                  ? h(ActionBarBody, null, () =>
                      props.actions?.map((action) =>
                        h(
                          Button,
                          {
                            disabled: action.disabled,
                            key: action.label,
                            onClick: action.onClick,
                            size: "sm",
                            variant: "ghost",
                          },
                          () => [action.icon, action.label],
                        ),
                      ),
                    )
                  : null,
                props.actions?.length ? h(ActionBarSeparator) : null,
                h(ActionBarClose, null, () => h(PhX, { "aria-hidden": true })),
              ])
            : null,
        ],
      );
    };
  },
});

export const ActionBarTrigger = defineComponent({
  inheritAttrs: false,
  name: "ActionBarTrigger",
  props: {
    onClick: { default: undefined, type: Function as PropType<(event: MouseEvent) => void> },
  },
  setup(props, { attrs, slots }) {
    const context = useActionBarContext();

    return () => {
      return h(
        ark.button as unknown as ArkPart,
        {
          ...attrs,
          "aria-expanded": context?.isOpen ? "true" : "false",
          class: cn(attrs.class),
          "data-part": "trigger",
          "data-scope": "action-bar",
          "data-state": context?.isOpen ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            context?.onOpen?.();
            props.onClick?.(event);
          },
          type: "button",
        },
        slots.default?.(),
      );
    };
  },
});

export const ActionBarContent = defineComponent({
  inheritAttrs: false,
  name: "ActionBarContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useActionBarContext();

    return () => {
      if (!context) return null;

      const { placement, gutter } = context.positioning;

      if (!context.isOpen && context.unmountOnExit) {
        return null;
      }

      return actionBarTeleport(
        h(
          "div",
          {
            class: cn(context.slots.positioner({ placement })),
            "data-part": "positioner",
            "data-placement": placement,
            "data-scope": "action-bar",
            style: { "--gutter": gutter } as Record<string, unknown>,
          },
          () =>
            h(
              ark.div as unknown as ArkPart,
              {
                ...attrs,
                class: cn(context.slots.content(), props.class, attrs.class),
                "data-part": "content",
                "data-scope": "action-bar",
                role: "toolbar",
              },
              slots.default?.(),
            ),
        ),
      );
    };
  },
});

export const ActionBarSeparator = defineComponent({
  inheritAttrs: false,
  name: "ActionBarSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: { default: "vertical", type: String as PropType<"horizontal" | "vertical"> },
  },
  setup(props, { attrs }) {
    const context = useActionBarContext();

    return () =>
      h(
        Separator as ArkPart,
        {
          ...attrs,
          class: cn((context?.slots ?? actionBarRecipe()).separator(), props.class, attrs.class),
          dataPart: "separator",
          dataScope: "action-bar",
          orientation: "vertical",
        },
        undefined,
      );
  },
});

export const ActionBarClose = defineComponent({
  inheritAttrs: false,
  name: "ActionBarClose",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    onClick: { default: undefined, type: Function as PropType<(event: MouseEvent) => void> },
  },
  setup(props, { attrs, slots }) {
    const context = useActionBarContext();

    return () => {
      return h(
        ark.button as unknown as ArkPart,
        {
          ...attrs,
          class: cn((context?.slots ?? actionBarRecipe()).close(), props.class, attrs.class),
          "data-part": "close",
          "data-scope": "action-bar",
          "data-state": context?.isOpen ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            context?.onClose?.();
            props.onClick?.(event);
          },
          type: "button",
        },
        slots.default?.(),
      );
    };
  },
});

export const ActionBarValue = defineComponent({
  inheritAttrs: false,
  name: "ActionBarValue",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    count: { required: true, type: Number },
    label: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const context = useActionBarContext();

    return () =>
      h(
        Badge as ArkPart,
        {
          ...attrs,
          class: cn((context?.slots ?? actionBarRecipe()).value(), props.class, attrs.class),
          "data-part": "value",
          "data-scope": "action-bar",
          variant: "secondary",
        },
        () => slots.default?.() ?? props.label ?? props.count,
      );
  },
});

export const ActionBarBody = defineComponent({
  inheritAttrs: false,
  name: "ActionBarBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useActionBarContext();

    return () =>
      h(
        ark.div as unknown as ArkPart,
        {
          ...attrs,
          class: cn((context?.slots ?? actionBarRecipe()).body(), props.class, attrs.class),
        },
        slots.default?.(),
      );
  },
});
// #endregion
