import type { CollectionItem } from "@ark-ui/solid/collection";
import type {
  CommandProps as BaseCommandDialogContentProps,
  CommandProps as BaseCommandProps,
} from "@pisagor/props";
import { commandRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { MagnifyingGlassIcon } from "../internal/icons";
import type {
  ComboboxContentProps,
  ComboboxEmptyProps,
  ComboboxFieldInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxRootProps,
} from "./combobox";
import { Combobox } from "./combobox";
import {
  Dialog,
  type DialogContentProps,
  type DialogTriggerProps,
} from "./dialog";
import type { InputProps } from "./input";
import { InputGroup } from "./input-group";
import { Separator } from "./separator";

// #region Context
const { Context: CommandStylesContext, useStyles: useCommand } =
  createSlotRecipeContext({ name: "Command", recipe: commandRecipe });
// #endregion

export interface CommandDialogContentProps
  extends DialogContentProps,
    BaseCommandDialogContentProps {
  description?: string;
  title?: string;
}

export interface CommandInputProps
  extends Omit<ComboboxFieldInputProps, "size"> {
  size?: InputProps["size"];
}

export type CommandListProps = ComboboxListProps;
export type CommandContentProps = ComboboxContentProps;

export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends Omit<ComboboxRootProps<T>, "recipe">,
    BaseCommandProps {
  class?: string;
}

export type CommandSeparatorProps = ComponentProps<"div">;
export type CommandShortcutProps = ComponentProps<"span">;
export type CommandFooterProps = ComponentProps<"div">;

export const CommandDialog = Dialog.Root;

export function CommandDialogTrigger(props: DialogTriggerProps): JSX.Element {
  return <Dialog.Trigger {...props} />;
}

function CommandDialogFrame(
  props: Omit<CommandDialogContentProps, "recipe">,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "children",
    "description",
    "title",
    "class",
  ]);
  const styles = useCommand();

  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          {...rest}
          class={styles.slots.dialogContent({ class: local.class })}
          showCloseButton={false}
          size={local.size ?? "lg"}
        >
          <Dialog.Header class={styles.slots.dialogHeader()}>
            <Dialog.Title>{local.title ?? "Command Palette"}</Dialog.Title>
            <Dialog.Description>
              {local.description ?? "Search for a command to run..."}
            </Dialog.Description>
          </Dialog.Header>
          {local.children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
}

export function CommandDialogContent(
  props: CommandDialogContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe"]);

  const slots = createMemo(() => (local.recipe ?? commandRecipe)());

  return (
    <CommandStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <CommandDialogFrame {...rest} />
    </CommandStylesContext>
  );
}

function CommandRootFrame(props: Omit<CommandProps, "recipe">): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCommand();

  return (
    <Combobox.Root
      {...rest}
      class={styles.slots.base({ class: local.class })}
      closeOnSelect={false}
      disableLayer
      inputBehavior="autohighlight"
      loopFocus={false}
      open
      selectionBehavior="clear"
    />
  );
}

export function CommandRoot<T extends CollectionItem = CollectionItem>(
  props: CommandProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as CommandProps, ["recipe"]);

  const slots = createMemo(() => (local.recipe ?? commandRecipe)());

  return (
    <CommandStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <CommandRootFrame {...rest} />
    </CommandStylesContext>
  );
}

export function CommandContent(props: CommandContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCommand();

  return (
    <Combobox.Content
      {...rest}
      class={styles.slots.content({ class: local.class })}
      portalled={false}
    />
  );
}

export function CommandInput(props: CommandInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "class"]);
  const styles = useCommand();

  return (
    <Combobox.Control class={styles.slots.control()}>
      <InputGroup
        class={styles.slots.input({ class: local.class })}
        size={local.size}
      >
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden class={styles.slots.inputIcon()} />
        </InputGroup.Addon>
        <Combobox.FieldInput
          {...rest}
          asChild={(inputProps) => (
            <InputGroup.Input {...inputProps()} autofocus />
          )}
        />
      </InputGroup>
    </Combobox.Control>
  );
}

export function CommandList(props: CommandListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCommand();
  return (
    <div class={styles.slots.listWrapper()}>
      <Combobox.List
        {...rest}
        class={styles.slots.list({ class: local.class })}
      />
    </div>
  );
}

export function CommandEmpty(props: ComboboxEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useCommand();
  return (
    <Combobox.Empty
      {...rest}
      class={styles.slots.empty({ class: local.class })}
    >
      {local.children || "No results found. Try a different search."}
    </Combobox.Empty>
  );
}

export function CommandItemGroup(props: ComboboxItemGroupProps): JSX.Element {
  return <Combobox.ItemGroup {...props} />;
}

export function CommandItemGroupLabel(
  props: ComboboxItemGroupLabelProps,
): JSX.Element {
  return <Combobox.ItemGroupLabel {...props} />;
}

export function CommandItem(props: ComboboxItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  return <Combobox.Item {...rest} class={local.class} showIndicator={false} />;
}

export function CommandSeparator(props: CommandSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCommand();

  return (
    <Separator
      {...rest}
      class={styles.slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="command"
    />
  );
}

export function CommandShortcut(props: CommandShortcutProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCommand();

  return (
    <span
      {...rest}
      class={styles.slots.shortcut({ class: local.class })}
      data-part="shortcut"
      data-scope="command"
    />
  );
}

export function CommandFooter(props: CommandFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCommand();

  return (
    <div
      {...rest}
      class={styles.slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="command"
    />
  );
}

export const Command = Object.assign(CommandRoot, {
  Content: CommandContent,
  Dialog: CommandDialog,
  DialogContent: CommandDialogContent,
  DialogTrigger: CommandDialogTrigger,
  Empty: CommandEmpty,
  Footer: CommandFooter,
  Input: CommandInput,
  Item: CommandItem,
  ItemGroup: CommandItemGroup,
  ItemGroupLabel: CommandItemGroupLabel,
  List: CommandList,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
});
