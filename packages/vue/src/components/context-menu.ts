import { Menu as MenuPrimitive } from "@ark-ui/vue";
import type { MenuContextTriggerProps } from "@ark-ui/vue";
import type {
  ContextMenuRootContract,
  DropdownMenuContract,
} from "@pisagor/contracts";
import { contextMenuRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, Teleport } from "vue";
import type { ClassValue } from "../internal";
import type { DropdownMenuRootProps } from "./dropdown-menu";
import { DropdownMenu } from "./dropdown-menu";

// #region Types
export type ContextMenuRootProps = DropdownMenuRootProps;

export type ContextMenuContextTriggerProps = MenuContextTriggerProps &
  ContextMenuRootContract;

/**
 * Slots: `trigger` (area that opens the menu on right-click or long press) and
 * `default` (menu items).
 */
export interface ContextMenuProps
  extends ContextMenuRootProps, DropdownMenuContract {}
// #endregion

const classProp = {
  default: undefined,
  type: [String, Object, Array] as PropType<ClassValue>,
};

// #region Parts
const ContextTrigger = defineComponent({
  inheritAttrs: false,
  name: "ContextMenu.ContextTrigger",
  props: {
    class: classProp,
    recipe: {
      default: contextMenuRecipe,
      type: Function as PropType<typeof contextMenuRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        MenuPrimitive.ContextTrigger,
        { ...attrs, class: props.recipe({ class: props.class }) },
        slots,
      );
  },
});

const Shortcut = defineComponent({
  inheritAttrs: false,
  name: "ContextMenu.Shortcut",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "span",
        {
          ...attrs,
          class: dropdownMenuRecipe().shortcut({ class: props.class }),
          "data-part": "shortcut",
          "data-scope": "context-menu",
        },
        slots.default?.(),
      );
  },
});
// #endregion

// #region Shorthand
export const ContextMenuShorthand = defineComponent({
  inheritAttrs: false,
  name: "ContextMenu",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<ContextMenuProps["classNames"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;

      return h(DropdownMenu.Root, attrs, () => [
        slots.trigger
          ? h(
              ContextTrigger,
              { class: classNames?.trigger },
              { default: slots.trigger },
            )
          : null,

        h(Teleport, { to: "body" }, [
          h(DropdownMenu.Positioner, { class: classNames?.positioner }, () =>
            h(
              DropdownMenu.Content,
              { class: classNames?.content },
              slots.default,
            ),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export const ContextMenu = Object.assign(ContextMenuShorthand, {
  Arrow: DropdownMenu.Arrow,
  ArrowTip: DropdownMenu.ArrowTip,
  CheckboxItem: DropdownMenu.CheckboxItem,
  Content: DropdownMenu.Content,
  ContextTrigger,
  Indicator: DropdownMenu.Indicator,
  Item: DropdownMenu.Item,
  ItemGroup: DropdownMenu.ItemGroup,
  ItemGroupLabel: DropdownMenu.ItemGroupLabel,
  ItemIndicator: DropdownMenu.ItemIndicator,
  ItemText: DropdownMenu.ItemText,
  Positioner: DropdownMenu.Positioner,
  RadioItem: DropdownMenu.RadioItem,
  RadioItemGroup: DropdownMenu.RadioItemGroup,
  Root: DropdownMenu.Root,
  Separator: DropdownMenu.Separator,
  Shortcut,
  Sub: DropdownMenu.Sub,
  TriggerItem: DropdownMenu.TriggerItem,
});
