import {
  type CollectionItem,
  type HTMLArkProps,
  useFilter,
  useListCollection,
} from "@ark-ui/solid";
import type {
  CommandContract,
  CommandDialogContract,
  CommandPresetItem,
  CommandRootContract,
} from "@pisagor/contracts";
import { commandRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { MagnifyingGlassIcon, createSlotRecipeContext } from "../internal";
import type {
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxInputProps,
  ComboboxListProps,
  ComboboxRootProps,
} from "./combobox";
import { Combobox } from "./combobox";
import type { DialogRootProps, DialogTriggerRender } from "./dialog";
import { Dialog, renderTrigger } from "./dialog";
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

export type CommandSeparatorProps = HTMLArkProps<"div">;

export type CommandShortcutProps = HTMLArkProps<"span">;

export type CommandFooterProps = HTMLArkProps<"div">;

export interface CommandItem extends Omit<CommandPresetItem, "label" | "icon"> {
  icon?: JSX.Element;
  label: string;
}

export interface CommandProps
  extends
    Omit<CommandRootProps<CommandItem>, "children" | "collection">,
    Omit<CommandContract, "emptyText" | "items" | "placeholder"> {
  /** Text shown when no item matches. */
  emptyText?: JSX.Element;
  /** Footer content, such as keyboard hints. */
  footer?: JSX.Element;
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
  children?: JSX.Element;
  /** Visually hidden dialog description. */
  description?: string;
  /** Command style recipe override (dialog content and header slots). */
  recipe?: typeof commandRecipe;
  /** Visually hidden dialog title. */
  title?: string;
  /** Element that opens the dialog (render fn preferred). */
  trigger?: DialogTriggerRender;
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
) => JSX.Element;

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
export function CommandShorthand(props: CommandProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "classNames",
    "emptyText",
    "footer",
    "items",
    "onInputValueChange",
    "placeholder",
  ]);
  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection<CommandItem>({
    filter: (itemText, query) => filterFn().contains(itemText, query),
    groupBy: (item) => item.group ?? "",
    initialItems: local.items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });
  const groups = () => collection().group();

  return (
    <Root
      {...rest}
      collection={collection()}
      onInputValueChange={(details) => {
        filter(details.inputValue);
        local.onInputValueChange?.(details);
      }}
    >
      <SearchInput
        classNames={local.classNames}
        placeholder={m("command.placeholder", local.placeholder)}
      />

      <Content class={local.classNames?.content}>
        <Empty class={local.classNames?.empty}>
          {local.emptyText ?? m("command.empty")}
        </Empty>

        <ListArea class={local.classNames?.listWrapper}>
          <List class={local.classNames?.list}>
            <For each={groups()}>
              {([group, groupItems], index) => {
                const content = (
                  <For each={groupItems}>
                    {(item) => (
                      <Combobox.Item item={item}>
                        {item.icon}
                        {item.label}
                        <Show when={item.shortcut}>
                          <Shortcut class={local.classNames?.shortcut}>
                            {item.shortcut}
                          </Shortcut>
                        </Show>
                      </Combobox.Item>
                    )}
                  </For>
                );

                return (
                  <Show fallback={content} when={group}>
                    <Combobox.ItemGroup>
                      <Combobox.ItemGroupLabel>{group}</Combobox.ItemGroupLabel>
                      {content}
                      <Show when={index() < groups().length - 1}>
                        <Separator_ class={local.classNames?.separator} />
                      </Show>
                    </Combobox.ItemGroup>
                  </Show>
                );
              }}
            </For>
          </List>
        </ListArea>
      </Content>

      <Show when={local.footer !== undefined}>
        <Footer class={local.classNames?.footer}>{local.footer}</Footer>
      </Show>
    </Root>
  );
}

/** Search field with a leading icon, used by the shorthand. */
function SearchInput(
  props: Pick<CommandProps, "classNames" | "placeholder">,
): JSX.Element {
  const styles = useStyles();

  return (
    <Control class={props.classNames?.control}>
      <InputGroup
        class={styles.slots.input({ class: props.classNames?.input })}
      >
        <InputGroup.Addon>
          <MagnifyingGlassIcon
            aria-hidden
            class={styles.slots.inputIcon({
              class: props.classNames?.inputIcon,
            })}
          />
        </InputGroup.Addon>
        <Combobox.Input
          asChild={(inputProps) => (
            <InputGroup.Input
              {...inputProps()}
              autofocus
              placeholder={props.placeholder}
            />
          )}
        />
      </InputGroup>
    </Control>
  );
}

/** Height-capped list region used by the shorthand. */
const ListArea = withContext<HTMLArkProps<"div">>("div", {
  name: "ListWrapper",
});

/** Command palette in a dialog. */
export function CommandDialog(props: CommandDialogProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "children",
    "description",
    "recipe",
    "title",
    "trigger",
  ]);
  const slots = () => (local.recipe ?? commandRecipe)();

  return (
    <Dialog.Root size="lg" {...rest}>
      <Show when={local.trigger !== undefined}>
        <Dialog.Trigger asChild={renderTrigger(local.trigger)} />
      </Show>

      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content class={slots().dialogContent()}>
            <Dialog.Header class={slots().dialogHeader()}>
              <Dialog.Title>{m("command.title", local.title)}</Dialog.Title>
              <Dialog.Description>
                {m("command.description", local.description)}
              </Dialog.Description>
            </Dialog.Header>

            {local.children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
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
