import { ark } from "@ark-ui/vue/factory";
import { PhX } from "@phosphor-icons/vue";
import type { ActionBarProps as BaseActionBarProps } from "@pisagor/props";
import { actionBarRecipe } from "@pisagor/recipes";
import {
  computed,
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
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { createContext } from "../internal/utils/create-context";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { Separator, type SeparatorProps } from "./separator";

type ArkPart = Parameters<typeof h>[0];

// #region Context
const {
  Context: ActionBarStylesContext,
  useStyles: useActionBarStyles,
  withContext,
} = createSlotRecipeContext({
  name: "ActionBar",
  recipe: actionBarRecipe,
});

type ActionBarPlacement = "bottom" | "bottom-start" | "bottom-end";

interface ActionBarPositioning {
  gutter?: string;
  placement?: ActionBarPlacement;
}

interface ActionBarStateValue {
  isOpen?: boolean;
  lazyMount?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  positioning: Required<ActionBarPositioning>;
  unmountOnExit?: boolean;
}

const [provideActionBarState, useActionBarStateRaw] =
  createContext("ActionBarState")<ActionBarStateValue>();

function useActionBarState(): ActionBarStateValue {
  const state = useActionBarStateRaw();
  if (state === undefined) {
    throw new Error(
      "useActionBarState must be used within ActionBarStateContext.",
    );
  }
  return state;
}

function useActionBar() {
  return {
    ...useActionBarStyles(),
    ...useActionBarState(),
  };
}
// #endregion

// #region Types
interface ActionBarActionItem {
  icon?: VNodeChild;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ActionBarProps
  extends Pick<ActionBarStateValue, "lazyMount" | "unmountOnExit">,
    BaseActionBarProps {
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

export interface ActionBarContentProps extends BaseActionBarProps {
  class?: unknown;
  "aria-labelledby"?: string;
}

export type ActionBarSeparatorProps = SeparatorProps;

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
// #endregion

// #region Constants
const defaultPositioning: Required<ActionBarPositioning> = {
  gutter: "16px",
  placement: "bottom",
};

function actionBarTeleport(
  content: ReturnType<typeof h> | ReturnType<typeof h>[],
) {
  return h(Teleport, { to: "body" }, [content]);
}
// #endregion

// #region Parts
export const ActionBarRoot = defineComponent({
  inheritAttrs: false,
  name: "ActionBar",
  props: {
    actions: {
      default: undefined,
      type: Array as PropType<ActionBarActionItem[]>,
    },
    closeOnEscape: { default: true, type: Boolean },
    count: { default: undefined, type: Number },
    defaultOpen: { default: false, type: Boolean },
    lazyMount: { default: true, type: Boolean },
    onOpenChange: {
      default: undefined,
      type: Function as PropType<(open: boolean) => void>,
    },
    open: { default: undefined, type: Boolean },
    positioning: {
      default: undefined,
      type: Object as PropType<ActionBarPositioning>,
    },
    recipe: {
      default: actionBarRecipe,
      type: Function as PropType<typeof actionBarRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const internalOpen = reactive<{ value: boolean }>({
      value: props.defaultOpen,
    });

    const isControlled = () => props.open !== undefined;
    const isOpen = () =>
      (isControlled() ? props.open : internalOpen.value) ?? false;

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

    const positioning = computed(() => ({
      ...defaultPositioning,
      ...(props.positioning ?? {}),
    }));

    const slotsValue = computed(() =>
      props.recipe({
        placement: positioning.value.placement,
      }),
    );

    const state = reactive<ActionBarStateValue>({
      isOpen: isOpen(),
      lazyMount: props.lazyMount,
      onClose: handleClose,
      onOpen: handleOpen,
      positioning: positioning.value,
      unmountOnExit: props.unmountOnExit,
    });

    watchEffect(() => {
      state.isOpen = isOpen();
      state.lazyMount = props.lazyMount;
      state.unmountOnExit = props.unmountOnExit;
      state.positioning = positioning.value;
    });

    provideActionBarState(state);

    return () => {
      const hasPreset =
        props.count !== undefined ||
        (props.actions !== undefined && props.actions.length > 0);

      return h(
        ActionBarStylesContext,
        {
          value: {
            get slots() {
              return slotsValue.value;
            },
            get variants() {
              return {
                placement: positioning.value.placement,
              } as never;
            },
          },
        },
        () =>
          h("div", { ...attrs }, [
            slots.default?.(),
            hasPreset
              ? h(ActionBarContent, null, () => [
                  props.count !== undefined
                    ? h(ActionBarValue, { count: props.count })
                    : null,
                  props.count !== undefined && props.actions
                    ? h(ActionBarSeparator)
                    : null,
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
                  h(ActionBarClose, null, () =>
                    h(PhX, { "aria-hidden": true }),
                  ),
                ])
              : null,
          ]),
      );
    };
  },
});

export const ActionBarTrigger = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Trigger",
  props: {
    onClick: {
      default: undefined,
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup(props, { attrs, slots }) {
    const state = useActionBarState();

    return () =>
      h(
        ark.button as ArkPart,
        {
          ...attrs,
          "aria-expanded": state.isOpen ? "true" : "false",
          "data-part": "trigger",
          "data-scope": "action-bar",
          "data-state": state.isOpen ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            state.onOpen?.();
            props.onClick?.(event);
          },
          type: "button",
        },
        slots.default?.(),
      );
  },
});

export const ActionBarContent = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Content",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const {
      isOpen,
      lazyMount,
      unmountOnExit,
      positioning,
      slots: styleSlots,
    } = useActionBar();

    return () => {
      if (!isOpen && unmountOnExit) {
        return null;
      }

      if (!isOpen && lazyMount) {
        return null;
      }

      const placement = positioning.placement;
      const gutter = positioning.gutter;

      return actionBarTeleport(
        h(
          "div",
          {
            class: styleSlots.positioner({ placement }),
            "data-part": "positioner",
            "data-placement": placement,
            "data-scope": "action-bar",
            style: { "--gutter": gutter } as Record<string, unknown>,
          },
          h(
            ark.div as ArkPart,
            {
              ...attrs,
              class: styleSlots.content({ class: props.class }),
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
  name: "ActionBar.Separator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const { slots } = useActionBarStyles();

    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: slots.separator({ class: props.class }),
        dataPart: "separator",
        dataScope: "action-bar",
        orientation: "vertical",
      });
  },
});

export const ActionBarClose = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Close",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    onClick: {
      default: undefined,
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup(props, { attrs, slots }) {
    const { onClose, isOpen, slots: styleSlots } = useActionBar();

    return () =>
      h(
        ark.button as ArkPart,
        {
          ...attrs,
          "aria-label": "Close",
          class: styleSlots.close({ class: props.class }),
          "data-part": "close",
          "data-scope": "action-bar",
          "data-state": isOpen ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            onClose?.();
            props.onClick?.(event);
          },
          type: "button",
        },
        slots.default?.(),
      );
  },
});

export const ActionBarValue = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Value",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    count: { required: true, type: Number },
    label: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { slots: styleSlots } = useActionBarStyles();

    return () =>
      h(
        Badge as ArkPart,
        {
          ...attrs,
          class: styleSlots.value({ class: props.class }),
          "data-part": "value",
          "data-scope": "action-bar",
          variant: "secondary",
        },
        () => slots.default?.() ?? props.label ?? props.count,
      );
  },
});

export const ActionBarBody = withContext(ark.div, {
  name: "Body",
});
// #endregion

export const ActionBar = Object.assign(ActionBarRoot, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
