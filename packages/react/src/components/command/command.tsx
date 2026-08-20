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

interface CommandInputProps extends Omit<ComponentProps<typeof ComboboxPrimitive.Input>, "size"> {
  /**
   * The size of the input
   *
   * @defaultValue "md"
   */
  size?: InputProps["size"];
}

interface CommandListProps extends ComboboxListProps {}

export type CommandContentProps = ComponentProps<typeof ComboboxPrimitive.Content>;

export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends ComboboxRootProps<T> {
  className?: string;
}
// #endregion

// #region Parts
export const CommandDialog = Dialog;
CommandDialog.displayName = "Command.Dialog";

export function CommandDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}
CommandDialogTrigger.displayName = "Command.DialogTrigger";

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
CommandDialogContent.displayName = "Command.DialogContent";

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
      className={cn(commandInlineVariants(), className)}
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
CommandRoot.displayName = "Command";

export function CommandContent({ className, ...rest }: CommandContentProps) {
  return (
    <ComboboxPrimitive.Content {...rest} className={cn(commandContentVariants(), className)} />
  );
}
CommandContent.displayName = "Command.Content";

export function CommandInput({ size, className, ...rest }: CommandInputProps) {
  const { testId } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Control className={cn(comboboxControlVariants())}>
      <InputGroup {...rest} className={cn(commandInline2Variants(), className)} size={size}>
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
CommandInput.displayName = "Command.Input";

export function CommandList({ className, ...rest }: CommandListProps) {
  return (
    <div className={commandInline5Variants()}>
      <Combobox.List {...rest} className={cn(commandListVariants(), className)} />
    </div>
  );
}
CommandList.displayName = "Command.List";

export function CommandEmpty({ className, children, ...rest }: ComboboxEmptyProps) {
  return (
    <Combobox.Empty {...rest} className={cn(commandEmptyVariants(), className)}>
      {children || "No results found. Try a different search."}
    </Combobox.Empty>
  );
}
CommandEmpty.displayName = "Command.Empty";

export function CommandGroup(props: ComboboxGroupProps) {
  return <Combobox.Group {...props} />;
}
CommandGroup.displayName = "Command.Group";

export function CommandGroupLabel(props: ComboboxGroupLabelProps) {
  return <Combobox.GroupLabel {...props} />;
}
CommandGroupLabel.displayName = "Command.GroupLabel";

export function CommandItem({ className, ...rest }: ComboboxItemProps) {
  return (
    <ComboboxPrimitive.Item
      {...rest}
      className={cn(comboboxItemVariants({ showIndicator: false }), className)}
      persistFocus
    />
  );
}
CommandItem.displayName = "Command.Item";

export function CommandSeparator({ className, ...rest }: ComponentProps<"div">) {
  return (
    <Separator
      {...rest}
      className={cn(commandSeparatorVariants(), className)}
      dataPart="separator"
      dataScope="command"
    />
  );
}
CommandSeparator.displayName = "Command.Separator";

export function CommandShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut dataPart="shortcut" dataScope="command" {...props} />;
}
CommandShortcut.displayName = "Command.Shortcut";

export function CommandFooter({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={cn(commandFooterVariants(), className)}
      data-part="footer"
      data-scope="command"
    />
  );
}
CommandFooter.displayName = "Command.Footer";
// #endregion
