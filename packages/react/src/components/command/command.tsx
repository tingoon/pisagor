import { Portal } from "@ark-ui/react";
import type { CollectionItem } from "@ark-ui/react/collection";
import { Combobox as ComboboxPrimitive } from "@ark-ui/react/combobox";
import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import {
  comboboxControlVariants,
  commandContentVariants,
  commandDialogContentVariants,
  commandEmptyVariants,
  commandFooterVariants,
  commandInline2Variants,
  commandInline3Variants,
  commandInline4Variants,
  commandInline5Variants,
  commandInlineVariants,
  commandListVariants,
  commandSeparatorVariants,
} from "@pisagor/styles/ui/command";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import {
  Combobox,
  type ComboboxEmptyProps,
  type ComboboxGroupLabelProps,
  type ComboboxGroupProps,
  type ComboboxItemProps,
  type ComboboxListProps,
  type ComboboxRootProps,
  comboboxItemVariants,
  useComboboxRoot,
} from "../combobox";
import {
  Dialog,
  type DialogContentProps,
  type DialogTriggerProps,
  dialogContentVariants,
} from "../dialog";
import { DropdownMenu, type DropdownMenuShortcutProps } from "../dropdown-menu";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { Separator } from "../separator";

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
  return (
    <Portal>
      <Dialog.Overlay />

      <Dialog.Positioner>
        <DialogPrimitive.Content
          {...rest}
          className={cn(commandDialogContentVariants(), dialogContentVariants({ size }), className)}
        >
          <Dialog.Header
            className={commandInline3Variants()}
            description={description}
            title={title}
          />

          {children}
        </DialogPrimitive.Content>
      </Dialog.Positioner>
    </Portal>
  );
}

export function CommandRoot<T extends CollectionItem = CollectionItem>({
  lazyMount = true,
  unmountOnExit = true,
  className,
  testId,
  ...rest
}: CommandProps<T>) {
  return (
    <Combobox.Root
      {...rest}
      className={commandInlineVariants({ className })}
      closeOnSelect={false}
      disableLayer
      inputBehavior="autohighlight"
      lazyMount={lazyMount}
      loopFocus={false}
      open
      selectionBehavior="clear"
      testId={testId}
      unmountOnExit={unmountOnExit}
    />
  );
}

export function CommandContent({ className, ...rest }: CommandContentProps) {
  return <ComboboxPrimitive.Content {...rest} className={commandContentVariants({ className })} />;
}

export function CommandInput({ size, className, ...rest }: CommandInputProps) {
  const { testId } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Control className={comboboxControlVariants()}>
      <InputGroup {...rest} className={commandInline2Variants({ className })} size={size}>
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden className={commandInline4Variants()} />
        </InputGroup.Addon>
        <ComboboxPrimitive.Input asChild>
          <InputGroup.Input autoFocus data-testid={testId} />
        </ComboboxPrimitive.Input>
      </InputGroup>
    </ComboboxPrimitive.Control>
  );
}

export function CommandList({ className, ...rest }: CommandListProps) {
  return (
    <div className={commandInline5Variants()}>
      <Combobox.List {...rest} className={commandListVariants({ className })} />
    </div>
  );
}

export function CommandEmpty({ className, children, ...rest }: ComboboxEmptyProps) {
  return (
    <Combobox.Empty {...rest} className={commandEmptyVariants({ className })}>
      {children || "No results found. Try a different search."}
    </Combobox.Empty>
  );
}

export function CommandGroup(props: ComboboxGroupProps) {
  return <Combobox.Group {...props} />;
}

export function CommandGroupLabel(props: ComboboxGroupLabelProps) {
  return <Combobox.GroupLabel {...props} />;
}

export function CommandItem({ className, ...rest }: ComboboxItemProps) {
  return (
    <ComboboxPrimitive.Item
      {...rest}
      className={comboboxItemVariants({ showIndicator: false }).base({ className })}
      persistFocus
    />
  );
}

export function CommandSeparator({ className, ...rest }: ComponentProps<"div">) {
  return (
    <Separator
      {...rest}
      className={commandSeparatorVariants({ className })}
      dataPart="separator"
      dataScope="command"
    />
  );
}

export function CommandShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut dataPart="shortcut" dataScope="command" {...props} />;
}

export function CommandFooter({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={commandFooterVariants({ className })}
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
CommandGroup.displayName = "Command.Group";
CommandGroupLabel.displayName = "Command.GroupLabel";
CommandItem.displayName = "Command.Item";
CommandSeparator.displayName = "Command.Separator";
CommandShortcut.displayName = "Command.Shortcut";
CommandFooter.displayName = "Command.Footer";
// #endregion
