import type { CollectionItem } from "@ark-ui/solid/collection";
import { commandRecipe } from "@pisagor/recipes/command";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { MagnifyingGlassIcon } from "../../internal/icons";
import type {
  ComboboxContentProps,
  ComboboxEmptyProps,
  ComboboxFieldInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxRootProps,
} from "../combobox";
import { Combobox } from "../combobox";
import { Dialog, type DialogContentProps, type DialogTriggerProps } from "../dialog";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { Separator } from "../separator";
import { CommandContext, useCommand } from "./command.context";

export interface CommandDialogContentProps extends DialogContentProps {
  description?: string;
  title?: string;
  recipe?: typeof commandRecipe;
}

export interface CommandInputProps extends Omit<ComboboxFieldInputProps, "size"> {
  size?: InputProps["size"];
}

export type CommandListProps = ComboboxListProps;
export type CommandContentProps = ComboboxContentProps;

export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends Omit<ComboboxRootProps<T>, "recipe"> {
  class?: string;
  recipe?: typeof commandRecipe;
}

export type CommandSeparatorProps = ComponentProps<"div">;
export type CommandShortcutProps = ComponentProps<"span">;
export type CommandFooterProps = ComponentProps<"div">;

export const CommandDialog = Dialog.Root;

export function CommandDialogTrigger(props: DialogTriggerProps): JSX.Element {
  return <Dialog.Trigger {...props} />;
}

export function CommandDialogContent(props: CommandDialogContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "children",
    "description",
    "title",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? commandRecipe)();
  const size = () => local.size ?? "lg";
  const description = () => local.description ?? "Search for a command to run...";
  const title = () => local.title ?? "Command Palette";

  return (
    <CommandContext value={{ slots: slots() }}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            {...rest}
            class={slots().dialogContent({ class: local.class })}
            showCloseButton={false}
            size={size()}
          >
            <Dialog.Header class={slots().dialogHeader()}>
              <Dialog.Title>{title()}</Dialog.Title>
              <Dialog.Description>{description()}</Dialog.Description>
            </Dialog.Header>
            {local.children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </CommandContext>
  );
}

export function CommandRoot<T extends CollectionItem = CollectionItem>(
  props: CommandProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as CommandProps, ["recipe", "class"]);
  const slots = () => (local.recipe ?? commandRecipe)();

  return (
    <CommandContext value={{ slots: slots() }}>
      <Combobox.Root
        {...rest}
        class={slots().base({ class: local.class })}
        closeOnSelect={false}
        disableLayer
        inputBehavior="autohighlight"
        loopFocus={false}
        open
        selectionBehavior="clear"
      />
    </CommandContext>
  );
}

export function CommandContent(props: CommandContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCommand();
  return (
    <Combobox.Content {...rest} class={slots.content({ class: local.class })} portalled={false} />
  );
}

export function CommandInput(props: CommandInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "class"]);
  const { slots } = useCommand();

  return (
    <Combobox.Control class={slots.control()}>
      <InputGroup class={slots.input({ class: local.class })} size={local.size}>
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden class={slots.inputIcon()} />
        </InputGroup.Addon>
        <Combobox.FieldInput
          {...rest}
          asChild={(inputProps) => <InputGroup.Input {...inputProps()} autofocus />}
        />
      </InputGroup>
    </Combobox.Control>
  );
}

export function CommandList(props: CommandListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCommand();
  return (
    <div class={slots.listWrapper()}>
      <Combobox.List {...rest} class={slots.list({ class: local.class })} />
    </div>
  );
}

export function CommandEmpty(props: ComboboxEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useCommand();
  return (
    <Combobox.Empty {...rest} class={slots.empty({ class: local.class })}>
      {local.children || "No results found. Try a different search."}
    </Combobox.Empty>
  );
}

export function CommandItemGroup(props: ComboboxItemGroupProps): JSX.Element {
  return <Combobox.ItemGroup {...props} />;
}

export function CommandItemGroupLabel(props: ComboboxItemGroupLabelProps): JSX.Element {
  return <Combobox.ItemGroupLabel {...props} />;
}

export function CommandItem(props: ComboboxItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  return <Combobox.Item {...rest} class={local.class} showIndicator={false} />;
}

export function CommandSeparator(props: CommandSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCommand();
  return (
    <Separator
      {...rest}
      class={slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="command"
    />
  );
}

export function CommandShortcut(props: CommandShortcutProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCommand();
  return (
    <span
      {...rest}
      class={slots.shortcut({ class: local.class })}
      data-part="shortcut"
      data-scope="command"
    />
  );
}

export function CommandFooter(props: CommandFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCommand();
  return (
    <div
      {...rest}
      class={slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="command"
    />
  );
}
