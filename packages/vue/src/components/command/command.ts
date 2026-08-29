import type { CollectionItem, ListCollection } from "@ark-ui/vue/collection";
import { Combobox as ComboboxPrimitive } from "@ark-ui/vue/combobox";
import { Dialog as DialogPrimitive } from "@ark-ui/vue/dialog";
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { comboboxRecipe } from "@pisagor/recipes/combobox";
import { commandRecipe } from "@pisagor/recipes/command";
import { dialogRecipe } from "@pisagor/recipes/dialog";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, Teleport, type VNodeChild } from "vue";
import { Combobox, type ComboboxRootProps } from "../combobox";
import { Dialog, type DialogContentProps } from "../dialog";
import { DropdownMenu } from "../dropdown-menu";
import type { InputProps } from "../input/input";
import { InputGroup } from "../input-group";
import { Separator } from "../separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends ComboboxRootProps<T> {}

interface CommandDialogContentProps extends DialogContentProps {
  /**
   * The description of the dialog
   *
   * @defaultValue "Search for a command to run..."
   */
  description?: string;
  /**
   * The title of the dialog
   *
   * @defaultValue "Command Palette"
   */
  title?: string;
}

interface CommandInputProps {
  class?: unknown;
  /**
   * The size of the input
   *
   * @defaultValue "md"
   */
  size?: InputProps["size"];
}
// #endregion

// #region Parts
function commandTeleport(content: Array<ReturnType<typeof h>>) {
  return h(Teleport, { to: "body" }, () => content);
}

export const CommandDialog = Dialog;
CommandDialog.displayName = "Command.Dialog";

export const CommandDialogTrigger = defineComponent({
  inheritAttrs: false,
  name: "CommandDialogTrigger",
  setup(_, { attrs, slots }) {
    return () => h(Dialog.Trigger as ArkPart, { ...attrs }, slots);
  },
});
CommandDialogTrigger.displayName = "Command.DialogTrigger";

export const CommandDialogContent = defineComponent({
  inheritAttrs: false,
  name: "CommandDialogContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    description: {
      default: "Search for a command to run...",
      type: String as PropType<CommandDialogContentProps["description"]>,
    },
    size: {
      default: "lg",
      type: String as PropType<DialogContentProps["size"]>,
    },
    title: {
      default: "Command Palette",
      type: String as PropType<CommandDialogContentProps["title"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = commandRecipe();
      const dialogSlots = dialogRecipe();

      return commandTeleport([
        h(Dialog.Backdrop),
        h(Dialog.Positioner, null, () =>
          h(
            DialogPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(
                variantSlots.dialogContent(),
                dialogSlots.content({ size: props.size }),
                props.class,
              ),
            },
            () => [
              h(Dialog.Header as ArkPart, {
                class: variantSlots.dialogHeader(),
                description: props.description,
                title: props.title,
              }),
              slots.default?.(),
            ],
          ),
        ),
      ]);
    };
  },
});
CommandDialogContent.displayName = "Command.DialogContent";

export const CommandRoot = defineComponent({
  inheritAttrs: false,
  name: "CommandRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    collection: {
      default: undefined,
      type: Object as PropType<ListCollection<CollectionItem> | undefined>,
    },
    lazyMount: { default: true, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<CommandProps["onValueChange"]>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = commandRecipe();

      return h(
        Combobox.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          closeOnSelect: false,
          collection: props.collection,
          disableLayer: true,
          inputBehavior: "autohighlight",
          lazyMount: props.lazyMount,
          loopFocus: false,
          onValueChange: props.onValueChange,
          open: true,
          selectionBehavior: "clear",
          unmountOnExit: props.unmountOnExit,
        },
        slots.default?.(),
      );
    };
  },
});
CommandRoot.displayName = "Command";

export const CommandContent = defineComponent({
  inheritAttrs: false,
  name: "CommandContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = commandRecipe();

      return h(
        ComboboxPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.content(), props.class, attrs.class),
        },
        slots.default?.(),
      );
    };
  },
});
CommandContent.displayName = "Command.Content";

export const CommandInput = defineComponent({
  inheritAttrs: false,
  name: "CommandInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: undefined, type: String as PropType<CommandInputProps["size"]> },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = commandRecipe();

      return h(ComboboxPrimitive.Control as ArkPart, { class: variantSlots.control() }, () =>
        h(
          InputGroup as ArkPart,
          { class: variantSlots.input({ class: props.class }), size: props.size },
          () => [
            h(InputGroup.Addon as ArkPart, null, () =>
              h(PhMagnifyingGlass, { "aria-hidden": true, class: variantSlots.inputIcon() }),
            ),
            h(ComboboxPrimitive.Input as ArkPart, { asChild: true }, () =>
              h(InputGroup.Input as ArkPart, {
                ...attrs,
                autofocus: true,
              }),
            ),
          ],
        ),
      );
    };
  },
});
CommandInput.displayName = "Command.Input";

export const CommandList = defineComponent({
  inheritAttrs: false,
  name: "CommandList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = commandRecipe();

      return h("div", { class: variantSlots.listWrapper() }, () =>
        h(
          Combobox.List as ArkPart,
          {
            ...attrs,
            class: cn(variantSlots.list(), props.class, attrs.class),
          },
          slots.default?.(),
        ),
      );
    };
  },
});
CommandList.displayName = "Command.List";

export const CommandEmpty = defineComponent({
  inheritAttrs: false,
  name: "CommandEmpty",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = commandRecipe();

      return h(
        Combobox.Empty as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.empty(), props.class, attrs.class),
        },
        slots.default?.() ?? "No results found. Try a different search.",
      );
    };
  },
});
CommandEmpty.displayName = "Command.Empty";

export const CommandItemGroup = defineComponent({
  inheritAttrs: false,
  name: "CommandItemGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    heading: {
      default: undefined,
      type: [String, Object] as PropType<string | VNodeChild>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Combobox.ItemGroup as ArkPart,
        { ...attrs, class: props.class, heading: props.heading },
        slots.default?.(),
      );
  },
});
CommandItemGroup.displayName = "Command.ItemGroup";

export const CommandItemGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "CommandItemGroupLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(Combobox.ItemGroupLabel as ArkPart, { ...attrs, class: props.class }, slots.default?.());
  },
});
CommandItemGroupLabel.displayName = "Command.ItemGroupLabel";

export const CommandItem = defineComponent({
  inheritAttrs: false,
  name: "CommandItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    item: { default: undefined, type: Object as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ComboboxPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: comboboxRecipe({ showIndicator: false }).item({ class: props.class }),
          item: props.item,
          persistFocus: true,
        },
        slots.default?.(),
      );
  },
});
CommandItem.displayName = "Command.Item";

export const CommandSeparator = defineComponent({
  inheritAttrs: false,
  name: "CommandSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = commandRecipe();

      return h(Separator as ArkPart, {
        ...attrs,
        class: variantSlots.separator({ class: props.class }),
        dataPart: "separator",
        dataScope: "command",
      });
    };
  },
});
CommandSeparator.displayName = "Command.Separator";

export const CommandShortcut = defineComponent({
  inheritAttrs: false,
  name: "CommandShortcut",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DropdownMenu.Shortcut as ArkPart,
        { ...attrs, class: props.class, dataPart: "shortcut", dataScope: "command" },
        slots.default?.(),
      );
  },
});
CommandShortcut.displayName = "Command.Shortcut";

export const CommandFooter = defineComponent({
  inheritAttrs: false,
  name: "CommandFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = commandRecipe();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.footer({ class: props.class }),
          "data-part": "footer",
          "data-scope": "command",
        },
        slots.default?.(),
      );
    };
  },
});
CommandFooter.displayName = "Command.Footer";
// #endregion
