import {
  type CollectionItem,
  type HTMLArkProps,
  useFilter,
  useListCollection,
} from "@ark-ui/vue";
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import type {
  CommandContract,
  CommandDialogContract,
  CommandPresetItem,
  CommandRootContract,
} from "@pisagor/contracts";
import { commandRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  Fragment,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { createSlotRecipeContext } from "../internal";
import { Combobox, type ComboboxRootProps } from "./combobox";
import { Dialog, type DialogRootProps } from "./dialog";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";
import { Separator } from "./separator";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Command",
  recipe: commandRecipe,
});
// #endregion

// #region Types
export interface CommandRootProps<T extends CollectionItem = CollectionItem>
  extends
    Omit<
      ComboboxRootProps<T>,
      "emptyText" | "items" | "placeholder" | "recipe"
    >,
    CommandRootContract {}

export type CommandSeparatorProps = HTMLArkProps<"div">;

export type CommandShortcutProps = HTMLArkProps<"span">;

export type CommandFooterProps = HTMLArkProps<"div">;

export interface CommandItem extends Omit<CommandPresetItem, "label" | "icon"> {
  icon?: VNodeChild;
  label: string;
}

export interface CommandProps
  extends
    Omit<CommandRootProps<CommandItem>, "collection">,
    Omit<CommandContract, "emptyText" | "items" | "placeholder"> {
  /** Text shown when no item matches. Also available as the `empty` slot. */
  emptyText?: VNodeChild;
  /** Items; grouped by `group` and filtered as the user types. */
  items: CommandItem[];
  /** Search input placeholder. */
  placeholder?: string;
}

export interface CommandDialogProps
  extends
    Omit<DialogRootProps, "recipe">,
    Omit<CommandDialogContract, "description" | "title"> {
  /** Visually hidden dialog description. */
  description?: string;
  /** Command style recipe override (dialog content and header slots). */
  recipe?: typeof commandRecipe;
  /** Visually hidden dialog title. */
  title?: string;
}
// #endregion

// #region Parts
/** Always-open combobox tuned for command palettes. */
const Root = withProvider<CommandRootProps>(Combobox.Root, {
  defaultProps: {
    closeOnSelect: false,
    disableLayer: true,
    inputBehavior: "autohighlight",
    loopFocus: false,
    open: true,
    selectionBehavior: "clear",
    showIndicator: false,
  },
  name: "Root",
  slot: "base",
});

const Control = withContext(Combobox.Control, { name: "Control" });

const Input = Combobox.Input;

const Content = withContext(Combobox.Content, { name: "Content" });

const List = withContext(Combobox.List, { name: "List" });

const Empty = withContext(Combobox.Empty, { name: "Empty" });

const Separator_ = withContext(Separator, { name: "Separator" });

const Shortcut = withContext("span", { name: "Shortcut" });

const Footer = withContext("div", { name: "Footer" });

/** Height-capped list region used by the shorthand. */
const ListArea = withContext("div", { name: "ListWrapper" });
// #endregion

// #region Shorthand
/** Search field with a leading icon, used by the shorthand. */
const SearchInput = defineComponent({
  inheritAttrs: false,
  name: "Command.SearchInput",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<CommandProps["classNames"]>,
    },
    placeholder: { default: undefined, type: String },
  },
  setup(props) {
    const styles = useStyles();

    return () =>
      h(Control, { class: props.classNames?.control }, () =>
        h(
          InputGroup,
          { class: styles.slots.input({ class: props.classNames?.input }) },
          () => [
            h(InputGroup.Addon, null, () =>
              h(PhMagnifyingGlass, {
                "aria-hidden": true,
                class: styles.slots.inputIcon({
                  class: props.classNames?.inputIcon,
                }),
              }),
            ),
            h(Input, { asChild: true }, () =>
              h(InputGroup.Input, {
                autofocus: true,
                placeholder: props.placeholder,
              }),
            ),
          ],
        ),
      );
  },
});

/** Slots: `empty` (no-match content) and `footer` (keyboard hints, …). */
export const CommandShorthand = defineComponent({
  inheritAttrs: false,
  name: "Command",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<CommandProps["classNames"]>,
    },
    emptyText: {
      default: undefined,
      type: [String, Number, Object, Array] as PropType<VNodeChild>,
    },
    items: {
      required: true,
      type: Array as PropType<CommandItem[]>,
    },
    placeholder: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const filterFn = useFilter({ sensitivity: "base" });
    const { collection, filter } = useListCollection<CommandItem>({
      filter: (itemText, query) => filterFn.value.contains(itemText, query),
      groupBy: (item) => item.group ?? "",
      initialItems: props.items,
      itemToString: (item) => item.label,
      itemToValue: (item) => item.value,
    });

    return () => {
      const classNames = props.classNames;
      const groups = collection.value.group();
      const onInputValueChange = attrs.onInputValueChange as
        ((details: { inputValue: string }) => void) | undefined;

      return h(
        Root,
        {
          ...attrs,
          collection: collection.value,
          onInputValueChange: (details: { inputValue: string }) => {
            filter(details.inputValue);
            onInputValueChange?.(details);
          },
        },
        () => [
          h(SearchInput, {
            classNames,
            placeholder: m("command.placeholder", props.placeholder),
          }),

          h(Content, { class: classNames?.content }, () => [
            h(
              Empty,
              { class: classNames?.empty },
              () => slots.empty?.() ?? props.emptyText ?? m("command.empty"),
            ),

            h(ListArea, { class: classNames?.listWrapper }, () =>
              h(List, { class: classNames?.list }, () =>
                groups.map(([group, groupItems], index) => {
                  const content = groupItems.map((item) =>
                    h(Combobox.Item, { item, key: item.value }, () => [
                      item.icon,
                      item.label,
                      item.shortcut
                        ? h(
                            Shortcut,
                            { class: classNames?.shortcut },
                            () => item.shortcut,
                          )
                        : null,
                    ]),
                  );

                  return group
                    ? h(Combobox.ItemGroup, { key: group }, () => [
                        h(Combobox.ItemGroupLabel, null, () => group),
                        ...content,
                        index < groups.length - 1
                          ? h(Separator_, { class: classNames?.separator })
                          : null,
                      ])
                    : h(Fragment, { key: "ungrouped" }, content);
                }),
              ),
            ),
          ]),

          slots.footer
            ? h(Footer, { class: classNames?.footer }, slots.footer)
            : null,
        ],
      );
    };
  },
});

/**
 * Command palette in a dialog. Slots: `trigger` (single element, rendered
 * `as-child`) and `default` (the palette, usually `Command.Root`).
 */
export const CommandDialog = defineComponent({
  inheritAttrs: false,
  name: "Command.Dialog",
  props: {
    description: { default: undefined, type: String },
    recipe: {
      default: commandRecipe,
      type: Function as PropType<typeof commandRecipe>,
    },
    title: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () => {
      const recipeSlots = props.recipe();

      return h(Dialog.Root, { size: "lg", ...attrs }, () => [
        slots.trigger
          ? h(Dialog.Trigger, { asChild: true }, { default: slots.trigger })
          : null,

        h(Teleport, { to: "body" }, [
          h(Dialog.Backdrop),

          h(Dialog.Positioner, null, () =>
            h(Dialog.Content, { class: recipeSlots.dialogContent() }, () => [
              h(Dialog.Header, { class: recipeSlots.dialogHeader() }, () => [
                h(Dialog.Title, null, () => m("command.title", props.title)),
                h(Dialog.Description, null, () =>
                  m("command.description", props.description),
                ),
              ]),
              slots.default?.(),
            ]),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export type {
  ComboboxContentProps as CommandContentProps,
  ComboboxControlProps as CommandControlProps,
  ComboboxEmptyProps as CommandEmptyProps,
  ComboboxInputProps as CommandInputProps,
  ComboboxListProps as CommandListProps,
} from "@ark-ui/vue";

export const Command = Object.assign(CommandShorthand, {
  Content,
  Control,
  Dialog: CommandDialog,
  Empty,
  Footer,
  Input,
  Item: Combobox.Item,
  ItemGroup: Combobox.ItemGroup,
  ItemGroupLabel: Combobox.ItemGroupLabel,
  List,
  Root,
  Separator: Separator_,
  Shortcut,
});
