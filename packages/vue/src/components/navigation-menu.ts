import { ark } from "@ark-ui/vue";
import { PhCaretDown } from "@phosphor-icons/vue";
import type { NavigationMenuProps as BaseNavigationMenuRootProps } from "@pisagor/props";
import {
  type NavigationMenuRecipeSlot,
  navigationMenuRecipe,
} from "@pisagor/recipes";
import {
  cn,
  focusNavigationMenuContentLink,
  handleNavigationMenuContentKeyDown,
  handleNavigationMenuListKeyDown,
} from "@pisagor/utils";
import { computed, defineComponent, h, inject, provide, ref, useId } from "vue";
import type { InjectionKey, PropType, Ref } from "vue";
import {
  type ClassValue,
  type VariantClassNames,
  createSlotRecipeContext,
} from "../internal";
import { useLocale } from "./provider/context";

// #region Slot recipe context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});
// #endregion

// #region Types
type NavigationMenuClassNames = VariantClassNames<NavigationMenuRecipeSlot>;

export interface NavigationMenuRootProps extends BaseNavigationMenuRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

interface NavigationMenuItemState {
  contentId: string;
  open: Readonly<Ref<boolean>>;
  setOpen: (open: boolean) => void;
  trigger: Ref<HTMLElement | null>;
}

const NavigationMenuOpenKey: InjectionKey<Ref<string | null>> =
  Symbol("NavigationMenuOpen");
const NavigationMenuItemKey: InjectionKey<NavigationMenuItemState> =
  Symbol("NavigationMenuItem");

function useNavigationMenuItem(part: string) {
  const item = inject(NavigationMenuItemKey, null);
  if (!item) {
    throw new Error(
      `NavigationMenu.${part} must be used in NavigationMenu.Item`,
    );
  }

  return item;
}

const classProp = {
  default: undefined,
  type: [String, Object, Array] as PropType<ClassValue>,
};

function callHandler(handler: unknown, event: Event) {
  if (typeof handler === "function") {
    (handler as (event: Event) => void)(event);
  }
}

// #region Parts
const NavigationMenuNav = withProvider("nav", {
  name: "Root",
  slot: "base",
});

export const NavigationMenuRoot = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenu",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();
    const openId = ref<string | null>(null);
    provide(NavigationMenuOpenKey, openId);

    return () =>
      h(
        NavigationMenuNav as ArkPart,
        { "aria-label": m("navigationMenu.label"), ...attrs },
        slots,
      );
  },
});

const NavigationMenuListBase = withContext("ul", {
  name: "List",
});

export const NavigationMenuList = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenu.List",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        NavigationMenuListBase as ArkPart,
        {
          ...attrs,
          onKeydown: (event: KeyboardEvent) => {
            callHandler(attrs.onKeydown, event);
            if (!event.defaultPrevented) {
              handleNavigationMenuListKeyDown(event);
            }
          },
        },
        slots,
      );
  },
});

const NavigationMenuItemBase = withContext("li", {
  name: "Item",
});

export const NavigationMenuItem = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenu.Item",
  setup(_, { attrs, slots }) {
    const openId = inject(NavigationMenuOpenKey, ref<string | null>(null));
    const id = useId();
    const open = computed(() => openId.value === id);
    const trigger = ref<HTMLElement | null>(null);
    const setOpen = (value: boolean) => {
      openId.value = value ? id : null;
    };
    provide(NavigationMenuItemKey, {
      contentId: `${id}-content`,
      open,
      setOpen,
      trigger,
    });

    return () =>
      h(
        NavigationMenuItemBase as ArkPart,
        {
          ...attrs,
          onFocusout: (event: FocusEvent) => {
            callHandler(attrs.onFocusout, event);
            const current = event.currentTarget as HTMLElement;
            if (
              open.value &&
              !current.contains(event.relatedTarget as Node | null)
            ) {
              setOpen(false);
            }
          },
          onKeydown: (event: KeyboardEvent) => {
            callHandler(attrs.onKeydown, event);
            if (open.value && event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
              trigger.value?.focus();
            }
          },
        },
        slots,
      );
  },
});

export const NavigationMenuTrigger = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenu.Trigger",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const item = useNavigationMenuItem("Trigger");

    return () =>
      h(
        ark.button as ArkPart,
        {
          ...attrs,
          "aria-controls": item.contentId,
          "aria-expanded": item.open.value,
          class: styles.slots.trigger({
            class: props.class as string | undefined,
          }),
          "data-part": "trigger",
          "data-scope": "navigation-menu",
          onClick: (event: MouseEvent) => {
            callHandler(attrs.onClick, event);
            item.setOpen(!item.open.value);
          },
          onKeydown: (event: KeyboardEvent) => {
            callHandler(attrs.onKeydown, event);
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              item.setOpen(true);
              const position = event.key === "ArrowDown" ? "first" : "last";
              requestAnimationFrame(() =>
                focusNavigationMenuContentLink(item.contentId, position),
              );
            }
          },
          ref: item.trigger,
          type: "button",
        },
        () => [
          slots.default?.(),
          h(PhCaretDown, {
            "aria-hidden": true,
            class: styles.slots.indicator(),
          }),
        ],
      );
  },
});

export const NavigationMenuContent = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenu.Content",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const item = useNavigationMenuItem("Content");

    return () =>
      h(
        "ul",
        {
          ...attrs,
          class: styles.slots.content({
            class: props.class as string | undefined,
          }),
          "data-part": "content",
          "data-scope": "navigation-menu",
          "data-state": item.open.value ? "open" : "closed",
          hidden: !item.open.value,
          id: item.contentId,
          onKeydown: (event: KeyboardEvent) => {
            callHandler(attrs.onKeydown, event);
            handleNavigationMenuContentKeyDown(event);
          },
        },
        slots,
      );
  },
});

export const NavigationMenuLink = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenuLink",
  props: {
    active: { default: false, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<NavigationMenuClassNames>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () => {
      const slots$ = styles.slots;

      return h(
        ark.a as ArkPart,
        {
          ...attrs,
          "aria-current": props.active ? "page" : undefined,
          class: slots$.link({
            class: cn(props.class, attrs.class, props.classNames?.link),
          }),
          "data-active": props.active,
          "data-part": "link",
          "data-scope": "navigation-menu",
        },
        slots,
      );
    };
  },
});
// #endregion

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
});
