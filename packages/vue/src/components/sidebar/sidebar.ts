import { PhSidebarSimple } from "@phosphor-icons/vue";
import {
  sidebar2Variants,
  sidebar3Variants,
  sidebarContainerVariants,
  sidebarContentVariants,
  sidebarFooterVariants,
  sidebarGapVariants,
  sidebarGroupActionVariants,
  sidebarGroupContentVariants,
  sidebarGroupLabelVariants,
  sidebarGroupVariants,
  sidebarHeaderVariants,
  sidebarInnerVariants,
  sidebarInputVariants,
  sidebarInsetVariants,
  sidebarMenuButtonVariants,
  sidebarMenuSkeletonVariants,
  sidebarMenuSubVariants,
  sidebarMenuVariants,
  sidebarRailVariants,
  sidebarSeparatorVariants,
  sidebarVariants,
  sidebarWrapperVariants,
} from "@pisagor/styles/ui/sidebar";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  reactive,
  ref,
  watchEffect,
} from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import { Button } from "../button";
import { Sheet } from "../sheet";
import { Tooltip, type TooltipProps } from "../tooltip";

// #region Types
type SidebarState = "expanded" | "collapsed";

type SidebarPlacement = "left" | "right";
type SidebarVariant = "sidebar" | "floating" | "inset";
type SidebarCollapsible = "offcanvas" | "icon" | "none";

export interface SidebarProps extends WithTestId {
  className?: string;
  collapsible?: SidebarCollapsible;
  placement?: SidebarPlacement;
  variant?: SidebarVariant;
}

export interface SidebarProviderProps extends Omit<SidebarProps, "className"> {
  /**
   * The default open state of the sidebar.
   *
   * @defaultValue true
   */
  defaultOpen?: boolean;
  /**
   * Controlled open state.
   */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface SidebarContextValue {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  state: SidebarState;
  setOpen: (value: boolean | ((current: boolean) => boolean)) => void;
  setOpenMobile: (value: boolean) => void;
  toggleSidebar: () => void;
  placement: SidebarPlacement;
  collapsible: SidebarCollapsible;
}
// #endregion

// #region Context
const [provideSidebarContext, useSidebarContext] = createContext<SidebarContextValue>({
  name: "Sidebar",
  strict: false,
});

export const useSidebar = () => useSidebarContext();
// #endregion

// #region Helpers
const SIDEBAR_STORAGE_KEY = "sidebar_state";

type ArkPart = Parameters<typeof h>[0];

function useIsMobile(breakpointPx = 768) {
  const isMobile = ref(false);

  onMounted(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const update = () => {
      isMobile.value = mq.matches;
    };

    update();

    // Older Safari.
    const anyMq = mq as MediaQueryList & {
      addEventListener?: (type: string, listener: () => void) => void;
      removeEventListener?: (type: string, listener: () => void) => void;
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };
    if (typeof anyMq.addEventListener === "function") {
      anyMq.addEventListener("change", update);
    } else if (typeof anyMq.addListener === "function") {
      anyMq.addListener(update);
    }

    onBeforeUnmount(() => {
      const anyMq = mq as MediaQueryList & {
        addEventListener?: (type: string, listener: () => void) => void;
        removeEventListener?: (type: string, listener: () => void) => void;
        addListener?: (listener: () => void) => void;
        removeListener?: (listener: () => void) => void;
      };
      if (typeof anyMq.removeEventListener === "function") {
        anyMq.removeEventListener("change", update);
      } else if (typeof anyMq.removeListener === "function") {
        anyMq.removeListener(update);
      }
    });
  });

  return isMobile;
}
// #endregion

// #region Parts
export const SidebarProvider = defineComponent({
  inheritAttrs: false,
  name: "SidebarProvider",
  props: {
    className: { default: undefined, type: String as PropType<string | undefined> },
    collapsible: { default: "offcanvas", type: String as PropType<SidebarCollapsible> },
    defaultOpen: { default: true, type: Boolean },
    onOpenChange: { default: undefined, type: Function as PropType<(open: boolean) => void> },
    open: { default: undefined, type: Boolean },
    placement: { default: "left", type: String as PropType<SidebarPlacement> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    const isMobileRef = useIsMobile();
    const openMobile = ref(false);

    const internalOpen = ref<boolean>(props.defaultOpen);
    const open = ref<boolean>(props.open ?? internalOpen.value);

    watchEffect(() => {
      open.value = props.open ?? internalOpen.value;
    });

    const setOpen = (value: boolean | ((current: boolean) => boolean)) => {
      const next =
        typeof value === "function" ? (value as (current: boolean) => boolean)(open.value) : value;

      if (props.onOpenChange) {
        props.onOpenChange(next);
      } else {
        internalOpen.value = next;
      }

      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next));
      } catch {
        // Ignore storage errors in restricted environments.
      }
    };

    const setOpenMobile = (value: boolean) => {
      openMobile.value = value;
    };

    const toggleSidebar = () => {
      if (isMobileRef.value) {
        openMobile.value = !openMobile.value;
      } else {
        setOpen((current) => !current);
      }
    };

    const contextValue = reactive<SidebarContextValue>({
      collapsible: props.collapsible,
      isMobile: isMobileRef.value,
      open: open.value,
      openMobile: openMobile.value,
      placement: props.placement,
      setOpen: (value) => setOpen(value),
      setOpenMobile: (value) => setOpenMobile(value),
      state: open.value ? "expanded" : "collapsed",
      toggleSidebar,
    });

    watchEffect(() => {
      contextValue.isMobile = isMobileRef.value;
      contextValue.open = open.value;
      contextValue.openMobile = openMobile.value;
      contextValue.state = open.value ? "expanded" : "collapsed";
    });

    provideSidebarContext(contextValue);

    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarWrapperVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "wrapper",
          "data-scope": "sidebar",
          "data-testid": props.testId,
          style: {
            "--sidebar-width": "16rem",
            "--sidebar-width-icon": "3rem",
            ...(((attrs as { style?: unknown }).style as Record<string, unknown> | undefined) ??
              {}),
          },
        },
        slots.default?.(),
      );
  },
});

export const SidebarRoot = defineComponent({
  inheritAttrs: false,
  name: "SidebarRoot",
  props: {
    className: { default: undefined, type: String },
    collapsible: { default: "offcanvas", type: String as PropType<SidebarCollapsible> },
    placement: { default: "left", type: String as PropType<SidebarPlacement> },
    testId: String,
    variant: { default: "sidebar", type: String as PropType<SidebarVariant> },
  },
  setup(props, { attrs, slots }) {
    const ctx = useSidebarContext();

    return () => {
      if (!ctx) return null;

      if (props.collapsible === "none") {
        return h(
          "aside",
          {
            ...attrs,
            class: cn(sidebarVariants(), props.className, (attrs as { class?: ClassValue }).class),
            "data-part": "root",
            "data-scope": "sidebar",
            "data-testid": props.testId,
          },
          slots.default?.(),
        );
      }

      if (ctx.isMobile) {
        return h(
          Sheet,
          {
            onOpenChange: ({ open }: { open: boolean }) => ctx.setOpenMobile(open),
            open: ctx.openMobile,
            testId: props.testId,
          },
          {
            default: () =>
              h(
                Sheet.Content as ArkPart,
                {
                  ...(attrs as object),
                  class: cn(sidebar2Variants()),
                  "data-mobile": "true",
                  "data-sidebar": "sidebar",
                  "data-testid": props.testId,
                  placement: props.placement === "left" ? "left" : "right",
                  style: { "--sidebar-width": "18rem" },
                },
                () => slots.default?.(),
              ),
          },
        );
      }

      return h(
        "aside",
        {
          ...attrs,
          class: cn(sidebar3Variants(), props.className, (attrs as { class?: ClassValue }).class),
          "data-collapsible": ctx.state === "collapsed" ? props.collapsible : "",
          "data-part": "root",
          "data-placement": props.placement,
          "data-scope": "sidebar",
          "data-state": ctx.state,
          "data-testid": props.testId,
          "data-variant": props.variant,
        },
        () => [
          h("div", {
            class: cn(
              sidebarGapVariants({
                padded: props.variant === "floating" || props.variant === "inset",
              }),
            ),
            "data-part": "gap",
            "data-scope": "sidebar",
          }),
          h(
            "div",
            {
              class: cn(
                sidebarContainerVariants({
                  padded: props.variant === "floating" || props.variant === "inset",
                  placement: props.placement,
                }),
                props.className,
                (attrs as { class?: ClassValue }).class,
              ),
              "data-part": "container",
              "data-scope": "sidebar",
            },
            () =>
              h(
                "div",
                {
                  class: cn(sidebarInnerVariants()),
                  "data-part": "inner",
                  "data-scope": "sidebar",
                  "data-sidebar": "sidebar",
                },
                slots.default?.(),
              ),
          ),
        ],
      );
    };
  },
});

export const SidebarContent = defineComponent({
  inheritAttrs: false,
  name: "SidebarContent",
  props: {
    className: { default: undefined, type: String },
    scrollFade: { default: false, type: Boolean },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarContentVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "content",
          "data-scope": "sidebar",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const SidebarHeader = defineComponent({
  inheritAttrs: false,
  name: "SidebarHeader",
  props: { className: { default: undefined, type: String }, testId: String },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarHeaderVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "header",
          "data-scope": "sidebar",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const SidebarFooter = defineComponent({
  inheritAttrs: false,
  name: "SidebarFooter",
  props: { className: { default: undefined, type: String }, testId: String },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarFooterVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "footer",
          "data-scope": "sidebar",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const SidebarGap = defineComponent({
  inheritAttrs: false,
  name: "SidebarGap",
  props: { padded: { default: false, type: Boolean }, testId: String },
  setup(props, { attrs }) {
    return () =>
      h("div", {
        ...attrs,
        class: cn(sidebarGapVariants({ padded: props.padded })),
        "data-part": "gap",
        "data-scope": "sidebar",
        "data-testid": props.testId,
      });
  },
});

export const SidebarSeparator = defineComponent({
  inheritAttrs: false,
  name: "SidebarSeparator",
  props: {
    className: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h("div", {
        ...attrs,
        class: cn(
          sidebarSeparatorVariants(),
          props.className,
          (attrs as { class?: ClassValue }).class,
        ),
        "data-part": "separator",
        "data-scope": "sidebar",
        "data-testid": props.testId,
      });
  },
});

export const SidebarRail = defineComponent({
  inheritAttrs: false,
  name: "SidebarRail",
  props: {
    className: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    placement: { default: "left", type: String as PropType<SidebarPlacement> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarRailVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "rail",
          "data-placement": props.placement,
          "data-scope": "sidebar",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const SidebarTrigger = defineComponent({
  inheritAttrs: false,
  name: "SidebarTrigger",
  props: {
    className: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    const ctx = useSidebarContext();
    return () =>
      h(
        Button as ArkPart,
        {
          ...attrs,
          class: cn("p-2", props.className, (attrs as { class?: ClassValue }).class),
          clickEffect: false,
          "data-part": "trigger",
          "data-scope": "sidebar",
          onClick: () => ctx?.toggleSidebar(),
          size: "icon-md",
          variant: "ghost",
        },
        () => h(PhSidebarSimple),
      );
  },
});

export const SidebarInset = defineComponent({
  inheritAttrs: false,
  name: "SidebarInset",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(sidebarInsetVariants(), (attrs as { class?: ClassValue }).class),
          "data-part": "inset",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarInput = defineComponent({
  inheritAttrs: false,
  name: "SidebarInput",
  props: {
    className: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h("input", {
        ...attrs,
        class: cn(sidebarInputVariants(), props.className, (attrs as { class?: ClassValue }).class),
        "data-part": "input",
        "data-scope": "sidebar",
        "data-testid": props.testId,
      });
  },
});

export const SidebarGroup = defineComponent({
  inheritAttrs: false,
  name: "SidebarGroup",
  props: {
    className: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarGroupVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "group",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "SidebarGroupLabel",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(sidebarGroupLabelVariants(), (attrs as { class?: ClassValue }).class),
          "data-part": "group-label",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarGroupAction = defineComponent({
  inheritAttrs: false,
  name: "SidebarGroupAction",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(sidebarGroupActionVariants(), (attrs as { class?: ClassValue }).class),
          "data-part": "group-action",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarGroupContent = defineComponent({
  inheritAttrs: false,
  name: "SidebarGroupContent",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(sidebarGroupContentVariants(), (attrs as { class?: ClassValue }).class),
          "data-part": "group-content",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarMenu = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenu",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(sidebarMenuVariants(), (attrs as { class?: ClassValue }).class),
          "data-part": "menu",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarMenuButton = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenuButton",
  props: {
    className: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    isActive: { default: false, type: Boolean },
    size: { default: undefined, type: String },
    tooltip: {
      default: undefined,
      type: [String, Object] as PropType<string | Omit<TooltipProps, "children">>,
    },
  },
  setup(props, { attrs, slots }) {
    const button = h(
      Button as ArkPart,
      {
        ...(attrs as object),
        class: cn(
          sidebarMenuButtonVariants(),
          props.className,
          (attrs as { class?: ClassValue }).class,
        ),
        clickEffect: false,
        "data-active": props.isActive,
        "data-part": "menu-button",
        "data-scope": "sidebar",
        "data-size": props.size ?? "md",
        onClick: (event: MouseEvent) =>
          (attrs as { onClick?: (event: MouseEvent) => unknown }).onClick?.(event),
        size: (props.size ?? (attrs as { size?: string }).size ?? "md") as string,
        variant: "ghost",
      },
      () => slots.default?.(),
    );

    if (!props.tooltip) return button;

    const tooltipArgs =
      typeof props.tooltip === "string" ? { content: props.tooltip } : props.tooltip;
    return () =>
      h(Tooltip as ArkPart, { ...tooltipArgs, positioning: { placement: "right" } }, () => button);
  },
});

export const SidebarMenuItem = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenuItem",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn("min-w-0", (attrs as { class?: ClassValue }).class),
          "data-part": "menu-item",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarMenuSkeleton = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenuSkeleton",
  props: { className: { default: undefined, type: [String, Object, Array] as PropType<unknown> } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            sidebarMenuSkeletonVariants(),
            props.className,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-part": "menu-skeleton",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarMenuSub = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenuSub",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(sidebarMenuSubVariants(), (attrs as { class?: ClassValue }).class),
          "data-part": "menu-sub",
          "data-scope": "sidebar",
        },
        slots.default?.(),
      );
  },
});

export const SidebarMenuSubButton = SidebarMenuButton;
export const SidebarMenuSubItem = SidebarMenuItem;

export const SidebarMenuAction = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenuAction",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        { ...attrs, "data-part": "menu-action", "data-scope": "sidebar" },
        slots.default?.(),
      );
  },
});

export const SidebarMenuBadge = defineComponent({
  inheritAttrs: false,
  name: "SidebarMenuBadge",
  setup(_, { attrs, slots }) {
    return () =>
      h("div", { ...attrs, "data-part": "menu-badge", "data-scope": "sidebar" }, slots.default?.());
  },
});

export const SidebarInsetPlaceholder = defineComponent({
  inheritAttrs: false,
  name: "SidebarInsetPlaceholder",
  setup(_, { attrs, slots }) {
    return () => h("div", attrs, slots.default?.());
  },
});
// #endregion

export { SidebarProvider as SidebarProviderRoot };
