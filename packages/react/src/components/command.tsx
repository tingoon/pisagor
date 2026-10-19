import {
  type CollectionItem,
  Portal,
  useFilter,
  useListCollection,
} from "@ark-ui/react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import type {
  CommandContract,
  CommandDialogContract,
  CommandPresetItem,
  CommandRootContract,
} from "@pisagor/contracts";
import { commandRecipe } from "@pisagor/recipes";
import { type ComponentProps, Fragment, type ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import type {
  ComboboxContentProps,
  ComboboxEmptyProps,
  ComboboxInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxRootProps,
} from "./combobox";
import { Combobox } from "./combobox";
import { Dialog } from "./dialog";
import type {
  DialogContentProps,
  DialogRootProps,
  DialogTriggerProps,
} from "./dialog";
import type { InputProps } from "./input";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";
import { Separator } from "./separator";

// #region Context
const { Context: CommandStylesContext, useStyles } = createSlotRecipeContext({
  name: "Command",
  recipe: commandRecipe,
});
// #endregion

// #region Types
export interface CommandDialogContentProps
  extends DialogContentProps, CommandDialogContract {
  description?: string;
  title?: string;
  recipe?: typeof commandRecipe;
}

export interface CommandInputProps extends Omit<ComboboxInputProps, "size"> {
  /**
   * The size of the input
   *
   * @defaultValue "md"
   */
  size?: InputProps["size"];
}

export type CommandListProps = ComboboxListProps;

export type CommandContentProps = ComboboxContentProps;

export interface CommandRootProps<T extends CollectionItem = CollectionItem>
  extends
    Omit<
      ComboboxRootProps<T>,
      "emptyText" | "items" | "placeholder" | "recipe"
    >,
    CommandRootContract {
  className?: string;
}

export interface CommandProps<T extends CollectionItem = CollectionItem>
  extends
    Omit<CommandRootProps<T>, "children">,
    Omit<CommandContract, "emptyText" | "items" | "placeholder"> {
  emptyText?: ReactNode;
  placeholder?: string;
}

export type CommandSeparatorProps = ComponentProps<"div">;

export type CommandShortcutProps = ComponentProps<"span">;

export type CommandFooterProps = ComponentProps<"div">;

export interface CommandShorthandItem extends Omit<
  CommandPresetItem,
  "label" | "icon"
> {
  icon?: ReactNode;
  label: string;
}

export interface CommandShorthandProps extends Omit<
  CommandProps<CommandShorthandItem>,
  "collection" | "children"
> {
  emptyText?: ReactNode;
  items: CommandShorthandItem[];
  placeholder?: string;
}
// #endregion

// #region Parts
export function CommandDialog(props: DialogRootProps) {
  return <Dialog.Root size="lg" {...props} />;
}

export function CommandDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}

export function CommandDialogContent({
  children,
  description: descriptionProp,
  title: titleProp,
  recipe = commandRecipe,
  className,
  ...rest
}: CommandDialogContentProps) {
  const { m } = useLocale();
  const title = m("command.title", titleProp);
  const description = m("command.description", descriptionProp);
  const slots = recipe();

  return (
    <CommandStylesContext value={{ slots, variants: {} as never }}>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content
            {...rest}
            className={slots.dialogContent({ className })}
          >
            <Dialog.Header className={slots.dialogHeader()}>
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description>{description}</Dialog.Description>
            </Dialog.Header>

            {children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </CommandStylesContext>
  );
}

export function CommandRoot<T extends CollectionItem = CollectionItem>({
  recipe = commandRecipe,
  className,
  ...rest
}: CommandRootProps<T>) {
  const slots = recipe();

  return (
    <CommandStylesContext value={{ slots, variants: {} as never }}>
      <Combobox.Root
        {...rest}
        className={slots.base({ className })}
        closeOnSelect={false}
        showIndicator={false}
        disableLayer
        inputBehavior="autohighlight"
        loopFocus={false}
        open
        selectionBehavior="clear"
      />
    </CommandStylesContext>
  );
}

export function CommandContent({ className, ...rest }: CommandContentProps) {
  const { slots } = useStyles();

  return (
    <Combobox.Content {...rest} className={slots.content({ className })} />
  );
}

export function CommandInput({ size, className, ...rest }: CommandInputProps) {
  const { slots } = useStyles();

  return (
    <Combobox.Control className={slots.control()}>
      <InputGroup className={slots.input({ className })} size={size}>
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden className={slots.inputIcon()} />
        </InputGroup.Addon>
        <Combobox.Input asChild>
          <InputGroup.Input autoFocus {...rest} />
        </Combobox.Input>
      </InputGroup>
    </Combobox.Control>
  );
}

export function CommandList({ className, ...rest }: CommandListProps) {
  const { slots } = useStyles();

  return (
    <div className={slots.listWrapper()}>
      <Combobox.List {...rest} className={slots.list({ className })} />
    </div>
  );
}

export function CommandEmpty({
  children,
  className,
  ...rest
}: ComboboxEmptyProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <Combobox.Empty {...rest} className={slots.empty({ className })}>
      {children || m("command.empty")}
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
  return <Combobox.Item {...rest} className={className} />;
}

export function CommandSeparator({
  className,
  ...rest
}: CommandSeparatorProps) {
  const { slots } = useStyles();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="command"
    />
  );
}

export function CommandShortcut({ className, ...rest }: CommandShortcutProps) {
  const { slots } = useStyles();

  return (
    <span
      {...rest}
      className={slots.shortcut({ className })}
      data-part="shortcut"
      data-scope="command"
    />
  );
}

export function CommandFooter({ className, ...rest }: CommandFooterProps) {
  const { slots } = useStyles();

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

// #region Shorthand
export function CommandShorthand({
  emptyText,
  items,
  placeholder,
  onInputValueChange,
  ...rest
}: CommandShorthandProps) {
  const { m } = useLocale();
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group ?? "",
    initialItems: items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });
  const groups = collection.group();

  return (
    <CommandRoot
      {...rest}
      collection={collection}
      onInputValueChange={(details) => {
        filter(details.inputValue);
        onInputValueChange?.(details);
      }}
    >
      <CommandInput placeholder={m("command.placeholder", placeholder)} />
      <CommandContent>
        <CommandEmpty>{emptyText}</CommandEmpty>
        <CommandList>
          {groups.map(([group, groupItems], index) => {
            const content = groupItems.map((item) => (
              <CommandItem item={item} key={item.value}>
                {item.icon}
                {item.label}
                {item.shortcut && (
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                )}
              </CommandItem>
            ));

            return group ? (
              <CommandItemGroup key={group}>
                <CommandItemGroupLabel>{group}</CommandItemGroupLabel>
                {content}
                {index < groups.length - 1 && <CommandSeparator />}
              </CommandItemGroup>
            ) : (
              <Fragment key="ungrouped">{content}</Fragment>
            );
          })}
        </CommandList>
      </CommandContent>
    </CommandRoot>
  );
}

CommandShorthand.displayName = "Command.Shorthand";
// #endregion

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
  Shorthand: CommandShorthand,
});
