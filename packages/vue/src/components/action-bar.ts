import { ark, type HTMLArkProps, Presence } from "@ark-ui/vue";
import { PhX } from "@phosphor-icons/vue";
import type {
  ActionBarActionItem as BaseActionBarActionItem,
  ActionBarRootContract,
  ActionBarContract,
  ActionBarValueContract,
} from "@pisagor/contracts";
import { actionBarRecipe } from "@pisagor/recipes";
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  reactive,
  ref,
  Teleport,
  type VNodeChild,
  watchEffect,
} from "vue";
import {
  type ClassValue,
  createContext,
  createSlotRecipeContext,
} from "../internal";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { Separator, type SeparatorProps } from "./separator";

type ArkPart = Parameters<typeof h>[0];

// #region Context
const {
  Context: ActionBarStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "ActionBar",
  recipe: actionBarRecipe,
});

type ActionBarPlacement = "bottom" | "bottom-start" | "bottom-end";

interface ActionBarPositioning {
  /**
   * The gutter from the edge in pixels.
   *
   * @defaultValue "16px"
   */
  gutter?: string;
  /**
   * The placement of the action bar.
   *
   * @defaultValue "bottom"
   */
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
    ...useStyles(),
    ...useActionBarState(),
  };
}
// #endregion

// #region Types
interface ActionBarActionItem extends Omit<
  BaseActionBarActionItem,
  "icon" | "label"
> {
  icon?: VNodeChild;
  /** Stable key; defaults to `label`. */
  id?: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ActionBarRootProps
  extends
    Pick<ActionBarStateValue, "lazyMount" | "unmountOnExit">,
    ActionBarRootContract {
  /**
   * Whether to close the action bar when the Escape key is pressed.
   *
   * @defaultValue true
   */
  closeOnEscape?: boolean;
  /** The default open state of the action bar. Ignored when `open` is set. */
  defaultOpen?: boolean;
  /** The function to call when the open state of the action bar changes. */
  onOpenChange?: (open: boolean) => void;
  /** The controlled open state of the action bar. */
  open?: boolean;
  /** Placement and gutter of the action bar. */
  positioning?: ActionBarPositioning;
}

/**
 * Slots: `trigger` (single element, rendered `as-child`) and `default` (extra
 * toolbar content, rendered in the body after `actions`).
 */
export interface ActionBarProps extends ActionBarRootProps, ActionBarContract {
  /** Action buttons built from data, rendered in the body. */
  actions?: ActionBarActionItem[];
  /** Selected item count shown at the start of the bar. */
  count?: number;
  /**
   * Whether to show the close button.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export type ActionBarTriggerProps = HTMLArkProps<"button">;

export type ActionBarPositionerProps = HTMLArkProps<"div">;

export type ActionBarContentProps = HTMLArkProps<"div">;

export type ActionBarSeparatorProps = SeparatorProps;

export type ActionBarCloseProps = HTMLArkProps<"button">;

export interface ActionBarValueProps
  extends
    Pick<BadgeProps, "class" | "pill" | "size" | "variant">,
    ActionBarValueContract {
  count: number;
  label?: string;
}

export type ActionBarBodyProps = HTMLArkProps<"div">;
// #endregion

// #region Constants
const defaultPositioning: Required<ActionBarPositioning> = {
  gutter: "16px",
  placement: "bottom",
};

const classProp = {
  default: undefined,
  type: [String, Object, Array] as PropType<ClassValue>,
};
// #endregion

// #region Parts
const rootProps = {
  closeOnEscape: { default: true, type: Boolean },
  defaultOpen: { default: false, type: Boolean },
  lazyMount: { default: undefined, type: Boolean },
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
  unmountOnExit: { default: undefined, type: Boolean },
};

const Root = defineComponent({
  name: "ActionBar.Root",
  props: rootProps,
  setup(props, { slots }) {
    const internalOpen = ref(props.defaultOpen);

    const isControlled = () => props.open !== undefined;
    const isOpen = () =>
      (isControlled() ? props.open : internalOpen.value) ?? false;

    const setOpen = (next: boolean) => {
      if (!isControlled()) internalOpen.value = next;
      props.onOpenChange?.(next);
    };

    let onKeyDown: ((event: KeyboardEvent) => void) | undefined;

    onMounted(() => {
      onKeyDown = (event) => {
        if (event.defaultPrevented || event.key !== "Escape") return;

        if (isOpen() && props.closeOnEscape) {
          event.preventDefault();
          setOpen(false);
        }
      };

      window.addEventListener("keydown", onKeyDown);
    });

    onBeforeUnmount(() => {
      if (onKeyDown) window.removeEventListener("keydown", onKeyDown);
    });

    const positioning = computed(() => ({
      ...defaultPositioning,
      ...props.positioning,
    }));

    const slotsValue = computed(() =>
      props.recipe({ placement: positioning.value.placement }),
    );

    const state = reactive<ActionBarStateValue>({
      isOpen: isOpen(),
      lazyMount: props.lazyMount,
      onClose: () => setOpen(false),
      onOpen: () => setOpen(true),
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

    return () =>
      h(
        ActionBarStylesContext,
        {
          value: {
            get slots() {
              return slotsValue.value;
            },
            get variants() {
              return { placement: positioning.value.placement } as never;
            },
          },
        },
        () => slots.default?.(),
      );
  },
});

const Trigger = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Trigger",
  props: {
    class: classProp,
    onClick: {
      default: undefined,
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup(props, { attrs, slots }) {
    const actionBar = useActionBar();

    return () =>
      h(
        ark.button as ArkPart,
        {
          ...attrs,
          "aria-expanded": actionBar.isOpen ? "true" : "false",
          class: actionBar.slots.trigger({ class: props.class }),
          "data-part": "trigger",
          "data-scope": "action-bar",
          "data-state": actionBar.isOpen ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            actionBar.onOpen?.();
            props.onClick?.(event);
          },
          type: "button",
        },
        slots,
      );
  },
});

const Positioner = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Positioner",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    const actionBar = useActionBar();

    return () =>
      h(
        Presence,
        {
          asChild: true,
          lazyMount: actionBar.lazyMount,
          present: actionBar.isOpen,
          unmountOnExit: actionBar.unmountOnExit,
        },
        () =>
          h(
            "div",
            {
              ...attrs,
              class: actionBar.slots.positioner({ class: props.class }),
              "data-part": "positioner",
              "data-placement": actionBar.positioning.placement,
              "data-scope": "action-bar",
              style: [
                { "--gutter": actionBar.positioning.gutter },
                attrs.style,
              ],
            },
            slots.default?.(),
          ),
      );
  },
});

const Content = withContext("div", {
  defaultProps: { role: "toolbar" },
  name: "Content",
});

const Separator_ = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Separator",
  props: { class: classProp },
  setup(props, { attrs }) {
    const { slots } = useStyles();

    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: slots.separator({ class: props.class }),
        "data-part": "separator",
        "data-scope": "action-bar",
        orientation: "vertical",
      });
  },
});

const Close = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Close",
  props: {
    class: classProp,
    onClick: {
      default: undefined,
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const actionBar = useActionBar();

    return () =>
      h(
        ark.button as ArkPart,
        {
          "aria-label": m("actionBar.close"),
          ...attrs,
          class: actionBar.slots.close({ class: props.class }),
          "data-part": "close",
          "data-scope": "action-bar",
          "data-state": actionBar.isOpen ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            actionBar.onClose?.();
            props.onClick?.(event);
          },
          type: "button",
        },
        slots,
      );
  },
});

const Value = defineComponent({
  inheritAttrs: false,
  name: "ActionBar.Value",
  props: {
    class: classProp,
    count: { default: 0, type: Number },
    label: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { slots: styleSlots } = useStyles();

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

const Body = withContext("div", { name: "Body" });
// #endregion

// #region Shorthand
export const ActionBarShorthand = defineComponent({
  inheritAttrs: false,
  name: "ActionBar",
  props: {
    ...rootProps,
    actions: {
      default: undefined,
      type: Array as PropType<ActionBarActionItem[]>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ActionBarProps["classNames"]>,
    },
    count: { default: undefined, type: Number },
    showCloseButton: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { actions, classNames, count, showCloseButton, ...rootPropsValue } =
        props;
      const hasActions = actions !== undefined && actions.length > 0;
      const hasBody = hasActions || slots.default !== undefined;

      return h(Root, rootPropsValue, () => [
        slots.trigger
          ? h(
              Trigger,
              { asChild: true, class: classNames?.trigger },
              { default: slots.trigger },
            )
          : null,

        h(Teleport, { to: "body" }, [
          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { ...attrs, class: classNames?.content }, () => [
              count !== undefined
                ? h(Value, { class: classNames?.value, count })
                : null,

              count !== undefined && hasBody
                ? h(Separator_, { class: classNames?.separator })
                : null,

              hasBody
                ? h(Body, { class: classNames?.body }, () => [
                    actions?.map((action) =>
                      h(
                        Button,
                        {
                          disabled: action.disabled,
                          key: action.id ?? action.label,
                          onClick: action.onClick,
                          size: "sm",
                          variant: "ghost",
                        },
                        () => [action.icon, action.label],
                      ),
                    ),
                    slots.default?.(),
                  ])
                : null,

              showCloseButton && hasBody
                ? h(Separator_, { class: classNames?.separator })
                : null,

              showCloseButton
                ? h(Close, { class: classNames?.close }, () =>
                    h(PhX, { "aria-hidden": true }),
                  )
                : null,
            ]),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export const ActionBar = Object.assign(ActionBarShorthand, {
  Body,
  Close,
  Content,
  Positioner,
  Root,
  Separator: Separator_,
  Trigger,
  Value,
});
