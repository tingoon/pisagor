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
import {
  type ComponentPropsWithRef,
  type FunctionComponent,
  Fragment,
  type ReactNode,
} from "react";
import { createSlotRecipeContext } from "../internal";
import type {
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxInputProps,
  ComboboxListProps,
  ComboboxRootProps,
} from "./combobox";
import { Combobox } from "./combobox";
import type { DialogRootProps } from "./dialog";
import { Dialog } from "./dialog";
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

export type CommandControlProps = ComboboxControlProps;

export type CommandInputProps = ComboboxInputProps;

export type CommandContentProps = ComboboxContentProps;

export type CommandListProps = ComboboxListProps;

export type CommandEmptyProps = ComboboxEmptyProps;

export type CommandSeparatorProps = ComponentPropsWithRef<"div">;

export type CommandShortcutProps = ComponentPropsWithRef<"span">;

export type CommandFooterProps = ComponentPropsWithRef<"div">;

export interface CommandItem extends Omit<CommandPresetItem, "label" | "icon"> {
  icon?: ReactNode;
  label: string;
}

export interface CommandProps
  extends
    Omit<CommandRootProps<CommandItem>, "children" | "collection">,
    Omit<CommandContract, "emptyText" | "items" | "placeholder"> {
  /** Text shown when no item matches. */
  emptyText?: ReactNode;
  /** Footer content, such as keyboard hints. */
  footer?: ReactNode;
  /** Items; grouped by `group` and filtered as the user types. */
  items: CommandItem[];
  /** Search input placeholder. */
  placeholder?: string;
}

export interface CommandDialogProps
  extends
    Omit<DialogRootProps, "recipe">,
    Omit<CommandDialogContract, "description" | "title"> {
  /** The command palette. */
  children?: ReactNode;
  /** Visually hidden dialog description. */
  description?: string;
  /** Command style recipe override (dialog content and header slots). */
  recipe?: typeof commandRecipe;
  /** Visually hidden dialog title. */
  title?: string;
  /** Element that opens the dialog. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
const RootBase = withProvider<CommandRootProps>(Combobox.Root, {
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

/** Always-open combobox tuned for command palettes. */
const Root = RootBase as <T extends CollectionItem = CollectionItem>(
  props: CommandRootProps<T>,
) => ReturnType<FunctionComponent>;

const Control = withContext<CommandControlProps>(Combobox.Control, {
  name: "Control",
});

const Input = Combobox.Input;

const Content = withContext<CommandContentProps>(Combobox.Content, {
  name: "Content",
});

const List = withContext<CommandListProps>(Combobox.List, { name: "List" });

const Empty = withContext<CommandEmptyProps>(Combobox.Empty, {
  name: "Empty",
});

const Separator_ = withContext<CommandSeparatorProps>(Separator, {
  name: "Separator",
});

const Shortcut = withContext<CommandShortcutProps>("span", {
  name: "Shortcut",
});

const Footer = withContext<CommandFooterProps>("div", { name: "Footer" });
// #endregion

// #region Shorthand
export function CommandShorthand({
  classNames,
  emptyText,
  footer,
  items,
  onInputValueChange,
  placeholder,
  ...rest
}: CommandProps) {
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
    <Root
      {...rest}
      collection={collection}
      onInputValueChange={(details) => {
        filter(details.inputValue);
        onInputValueChange?.(details);
      }}
    >
      <SearchInput
        classNames={classNames}
        placeholder={m("command.placeholder", placeholder)}
      />

      <Content className={classNames?.content}>
        <Empty className={classNames?.empty}>
          {emptyText ?? m("command.empty")}
        </Empty>

        <ListArea className={classNames?.listWrapper}>
          <List className={classNames?.list}>
            {groups.map(([group, groupItems], index) => {
              const content = groupItems.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.icon}
                  {item.label}
                  {item.shortcut && (
                    <Shortcut className={classNames?.shortcut}>
                      {item.shortcut}
                    </Shortcut>
                  )}
                </Combobox.Item>
              ));

              return group ? (
                <Combobox.ItemGroup key={group}>
                  <Combobox.ItemGroupLabel>{group}</Combobox.ItemGroupLabel>
                  {content}
                  {index < groups.length - 1 && (
                    <Separator_ className={classNames?.separator} />
                  )}
                </Combobox.ItemGroup>
              ) : (
                <Fragment key="ungrouped">{content}</Fragment>
              );
            })}
          </List>
        </ListArea>
      </Content>

      {footer !== undefined && (
        <Footer className={classNames?.footer}>{footer}</Footer>
      )}
    </Root>
  );
}

/** Search field with a leading icon, used by the shorthand. */
function SearchInput({
  classNames,
  placeholder,
}: Pick<CommandProps, "classNames" | "placeholder">) {
  const { slots } = useStyles();

  return (
    <Control className={classNames?.control}>
      <InputGroup className={slots.input({ className: classNames?.input })}>
        <InputGroup.Addon>
          <MagnifyingGlassIcon
            aria-hidden
            className={slots.inputIcon({ className: classNames?.inputIcon })}
          />
        </InputGroup.Addon>
        <Combobox.Input asChild>
          <InputGroup.Input autoFocus placeholder={placeholder} />
        </Combobox.Input>
      </InputGroup>
    </Control>
  );
}

/** Height-capped list region used by the shorthand. */
const ListArea = withContext<ComponentPropsWithRef<"div">>("div", {
  name: "ListWrapper",
});

/** Command palette in a dialog. */
export function CommandDialog({
  children,
  description,
  recipe = commandRecipe,
  title,
  trigger,
  ...rest
}: CommandDialogProps) {
  const { m } = useLocale();
  const slots = recipe();

  return (
    <Dialog.Root size="lg" {...rest}>
      {trigger !== undefined && (
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      )}

      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content className={slots.dialogContent()}>
            <Dialog.Header className={slots.dialogHeader()}>
              <Dialog.Title>{m("command.title", title)}</Dialog.Title>
              <Dialog.Description>
                {m("command.description", description)}
              </Dialog.Description>
            </Dialog.Header>

            {children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

CommandDialog.displayName = "Command.Dialog";
// #endregion

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
