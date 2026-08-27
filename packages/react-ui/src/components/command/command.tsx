import { Portal } from "@ark-ui/react";
import type { CollectionItem } from "@ark-ui/react/collection";
import { Combobox as ComboboxPrimitive } from "@ark-ui/react/combobox";
import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { comboboxVariants } from "@pisagor/recipes/combobox";
import { commandVariants } from "@pisagor/recipes/command";
import { dialogVariants } from "@pisagor/recipes/dialog";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import {
  Combobox,
  type ComboboxEmptyProps,
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

export interface CommandInputProps
  extends Omit<ComponentProps<typeof ComboboxPrimitive.Input>, "size"> {
  /**
   * The size of the input
   *
   * @defaultValue "md"
   */
  size?: InputProps["size"];
}

export interface CommandListProps extends ComboboxListProps {}

export type CommandContentProps = ComponentProps<typeof ComboboxPrimitive.Content>;

export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends ComboboxRootProps<T> {
  className?: string;
}

export interface CommandSeparatorProps extends ComponentProps<"div"> {}

export interface CommandFooterProps extends ComponentProps<"div"> {}
// #endregion

// #region Parts
export const CommandDialog = Dialog;

export function CommandDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}

export function CommandDialogContent({
  size = "lg",
  title = "Command Palette",
  description = "Search for a command to run...",
  className,
  children,
  ...rest
}: CommandDialogContentProps) {
  const slots = useMemo(() => commandVariants(), []);
  const dialogSlots = useMemo(() => dialogVariants(), []);

  return (
    <CommandContext value={{ slots }}>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <DialogPrimitive.Content
            {...rest}
            className={cn(slots.dialogContent(), dialogSlots.content({ size }), className)}
          >
            <Dialog.Header
              className={slots.dialogHeader()}
              description={description}
              title={title}
            />

            {children}
          </DialogPrimitive.Content>
        </Dialog.Positioner>
      </Portal>
    </CommandContext>
  );
}

export function CommandRoot<T extends CollectionItem = CollectionItem>({
  lazyMount = true,
  unmountOnExit = true,
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
        lazyMount={lazyMount}
        loopFocus={false}
        open
        selectionBehavior="clear"
        unmountOnExit={unmountOnExit}
      />
    </CommandContext>
  );
}

export function CommandContent({ className, ...rest }: CommandContentProps) {
  const { slots } = useCommand();

  return <ComboboxPrimitive.Content {...rest} className={slots.content({ className })} />;
}

export function CommandInput({ size, className, ...rest }: CommandInputProps) {
  const { slots } = useCommand();

  return (
    <ComboboxPrimitive.Control className={slots.control()}>
      <InputGroup {...rest} className={slots.input({ className })} size={size}>
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden className={slots.inputIcon()} />
        </InputGroup.Addon>
        <ComboboxPrimitive.Input asChild>
          <InputGroup.Input autoFocus />
        </ComboboxPrimitive.Input>
      </InputGroup>
    </ComboboxPrimitive.Control>
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

export function CommandEmpty({ className, children, ...rest }: ComboboxEmptyProps) {
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
  return (
    <ComboboxPrimitive.Item
      {...rest}
      className={comboboxVariants({ showIndicator: false }).item({ className })}
      persistFocus
    />
  );
}

export function CommandSeparator({ className, ...rest }: CommandSeparatorProps) {
  const { slots } = useCommand();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      dataPart="separator"
      dataScope="command"
    />
  );
}

export function CommandShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut dataPart="shortcut" dataScope="command" {...props} />;
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
