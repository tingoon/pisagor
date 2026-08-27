import type { CollectionItem } from "@ark-ui/react/collection";
import { Portal } from "@ark-ui/react/portal";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { commandVariants } from "@pisagor/recipes/command";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import {
  Combobox,
  type ComboboxContentProps,
  type ComboboxEmptyProps,
  type ComboboxFieldInputProps,
  type ComboboxItemGroupLabelProps,
  type ComboboxItemGroupProps,
  type ComboboxItemProps,
  type ComboboxListProps,
  type ComboboxRootProps,
} from "../combobox";
import { Dialog, type DialogContentProps, type DialogTriggerProps } from "../dialog";
import { DropdownMenu, type DropdownMenuShortcutProps } from "../dropdown-menu";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { Separator } from "../separator";
import { CommandContext, useCommand } from "./command.context";

// #region Types
export interface CommandDialogContentProps extends DialogContentProps {
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

export interface CommandInputProps extends Omit<ComboboxFieldInputProps, "size"> {
  /**
   * The size of the input
   *
   * @defaultValue "md"
   */
  size?: InputProps["size"];
}

export type CommandListProps = ComboboxListProps;

export type CommandContentProps = ComboboxContentProps;

export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends ComboboxRootProps<T> {
  className?: string;
}

export type CommandSeparatorProps = ComponentProps<"div">;

export type CommandFooterProps = ComponentProps<"div">;
// #endregion

// #region Parts
export const CommandDialog = Dialog.Root;

export function CommandDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}

export function CommandDialogContent({
  size = "lg",
  children,
  description = "Search for a command to run...",
  title = "Command Palette",
  className,
  ...rest
}: CommandDialogContentProps) {
  const slots = useMemo(() => commandVariants(), []);

  return (
    <CommandContext value={{ slots }}>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content
            {...rest}
            className={slots.dialogContent({ className })}
            showCloseButton={false}
            size={size}
          >
            <Dialog.Header className={slots.dialogHeader()}>
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description>{description}</Dialog.Description>
            </Dialog.Header>

            {children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </CommandContext>
  );
}

export function CommandRoot<T extends CollectionItem = CollectionItem>({
  className,
  ...rest
}: CommandProps<T>) {
  const slots = useMemo(() => commandVariants(), []);

  return (
    <CommandContext value={{ slots }}>
      <Combobox.Root
        {...rest}
        className={slots.base({ className })}
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

export function CommandContent({ className, ...rest }: CommandContentProps) {
  const { slots } = useCommand();

  return <Combobox.Content {...rest} className={slots.content({ className })} portalled={false} />;
}

export function CommandInput({ size, className, ...rest }: CommandInputProps) {
  const { slots } = useCommand();

  return (
    <Combobox.Control className={slots.control()}>
      <InputGroup {...rest} className={slots.input({ className })} size={size}>
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden className={slots.inputIcon()} />
        </InputGroup.Addon>
        <Combobox.FieldInput asChild>
          <InputGroup.Input autoFocus />
        </Combobox.FieldInput>
      </InputGroup>
    </Combobox.Control>
  );
}

export function CommandList({ className, ...rest }: CommandListProps) {
  const { slots } = useCommand();

  return (
    <div className={slots.listWrapper()}>
      <Combobox.List {...rest} className={slots.list({ className })} />
    </div>
  );
}

export function CommandEmpty({ children, className, ...rest }: ComboboxEmptyProps) {
  const { slots } = useCommand();

  return (
    <Combobox.Empty {...rest} className={slots.empty({ className })}>
      {children || "No results found. Try a different search."}
    </Combobox.Empty>
  );
}

export function CommandItemGroup(props: ComboboxItemGroupProps) {
  return <Combobox.ItemGroup {...props} />;
}

export function CommandItemGroupLabel(props: ComboboxItemGroupLabelProps) {
  return <Combobox.ItemGroupLabel {...props} />;
}

export function CommandItem({ className, ...rest }: ComboboxItemProps) {
  return <Combobox.Item {...rest} className={className} showIndicator={false} />;
}

export function CommandSeparator({ className, ...rest }: CommandSeparatorProps) {
  const { slots } = useCommand();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="command"
    />
  );
}

export function CommandShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut {...props} data-part="shortcut" data-scope="command" />;
}

export function CommandFooter({ className, ...rest }: CommandFooterProps) {
  const { slots } = useCommand();

  return (
    <div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="command"
    />
  );
}
// #endregion

// #region Display Names
CommandDialog.displayName = "Command.Dialog";
CommandDialogTrigger.displayName = "Command.DialogTrigger";
CommandDialogContent.displayName = "Command.DialogContent";
CommandRoot.displayName = "Command";
CommandContent.displayName = "Command.Content";
CommandInput.displayName = "Command.Input";
CommandList.displayName = "Command.List";
CommandEmpty.displayName = "Command.Empty";
CommandItemGroup.displayName = "Command.ItemGroup";
CommandItemGroupLabel.displayName = "Command.ItemGroupLabel";
CommandItem.displayName = "Command.Item";
CommandSeparator.displayName = "Command.Separator";
CommandShortcut.displayName = "Command.Shortcut";
CommandFooter.displayName = "Command.Footer";
// #endregion
