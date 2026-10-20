import { TagsInput as TagsInputPrimitive } from "@ark-ui/solid";
import type {
  TagsInputClearTriggerProps,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemProps as TagsInputItemPrimitiveProps,
  TagsInputItemTextProps,
  TagsInputLabelProps,
  TagsInputRootProps as TagsInputRootPrimitiveProps,
  TagsInputRootProviderProps as TagsInputRootProviderPrimitiveProps,
} from "@ark-ui/solid";
import type {
  TagsInputContract,
  TagsInputItemRootContract,
  TagsInputRootContract,
} from "@pisagor/contracts";
import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { XIcon, createSlotRecipeContext } from "../internal";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "TagsInput",
  recipe: tagsInputRecipe,
});

const { withContext: withItemContext, withProvider: withItemProvider } =
  createSlotRecipeContext({
    name: "TagsInput",
    recipe: tagsInputItemRecipe,
  });
// #endregion

// #region Types
type TagsInputRootBaseContract = Omit<TagsInputRootContract, "variant">;

export type TagsInputRootProps = Omit<
  TagsInputRootPrimitiveProps,
  "onValueChange"
> &
  TagsInputRootBaseContract & {
    /** Called with the tag list when it changes. */
    onValueChange?: (value: string[]) => void;
  };

export type TagsInputRootProviderProps = TagsInputRootProviderPrimitiveProps &
  TagsInputRootBaseContract;

export type TagsInputItemProps = Omit<TagsInputItemPrimitiveProps, "size"> &
  Omit<TagsInputItemRootContract, "size" | "variant">;

export interface TagsInputProps
  extends
    Omit<TagsInputRootProps, "children">,
    Pick<TagsInputRootContract, "variant">,
    TagsInputContract {
  /**
   * Whether to show the clear-all button when there are tags.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Input placeholder. */
  placeholder?: string;
}
// #endregion

// #region Parts
export const TagsInputContext = TagsInputPrimitive.Context;

const RootBase = withProvider<
  Omit<TagsInputRootPrimitiveProps, "size"> & TagsInputRootBaseContract
>(TagsInputPrimitive.Root, { name: "Root", slot: "base" });

/** Root; renders the hidden form input and exposes `data-size`. */
function Root(props: TagsInputRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "editable",
    "onValueChange",
    "size",
    "tabIndex",
  ]);

  return (
    <RootBase
      {...rest}
      data-size={local.size ?? "md"}
      editable={local.editable ?? false}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
    >
      {local.children}

      <TagsInputPrimitive.HiddenInput tabIndex={local.tabIndex} />
    </RootBase>
  );
}

const RootProviderBase = withProvider<
  Omit<TagsInputRootProviderPrimitiveProps, "size"> & TagsInputRootBaseContract
>(TagsInputPrimitive.RootProvider, { name: "RootProvider", slot: "base" });

/** Root for an external `useTagsInput` instance. */
function RootProvider(props: TagsInputRootProviderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "size"]);

  return (
    <RootProviderBase {...rest} data-size={local.size ?? "md"}>
      {local.children}

      <TagsInputPrimitive.HiddenInput />
    </RootProviderBase>
  );
}

const Label = withContext<TagsInputLabelProps>(TagsInputPrimitive.Label, {
  name: "Label",
});

const Control = withContext<TagsInputControlProps>(TagsInputPrimitive.Control, {
  name: "Control",
});

const Input = withContext<TagsInputInputProps>(TagsInputPrimitive.Input, {
  name: "Input",
});

const ClearTriggerBase = withContext<TagsInputClearTriggerProps>(
  TagsInputPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

/** Clear-all trigger with a localized default `aria-label`. */
function ClearTrigger(props: TagsInputClearTriggerProps): JSX.Element {
  const { m } = useLocale();

  return (
    <ClearTriggerBase aria-label={m("tagsInput.clearAllTags")} {...props} />
  );
}

const Item = withItemProvider<TagsInputItemProps>(TagsInputPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const ItemPreview = withItemContext<TagsInputItemPreviewProps>(
  TagsInputPrimitive.ItemPreview,
  { name: "ItemPreview", slot: "preview" },
);

const ItemText = withItemContext<TagsInputItemTextProps>(
  TagsInputPrimitive.ItemText,
  { name: "ItemText", slot: "text" },
);

const ItemDeleteTriggerBase = withItemContext<TagsInputItemDeleteTriggerProps>(
  TagsInputPrimitive.ItemDeleteTrigger,
  { name: "ItemDeleteTrigger", slot: "delete" },
);

/** Delete trigger with a localized default `aria-label`. */
function ItemDeleteTrigger(
  props: TagsInputItemDeleteTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return (
    <ItemDeleteTriggerBase aria-label={m("tagsInput.removeTag")} {...props} />
  );
}

const ItemInput = withItemContext<TagsInputItemInputProps>(
  TagsInputPrimitive.ItemInput,
  { name: "ItemInput", slot: "input" },
);
// #endregion

// #region Shorthand
export function TagsInputShorthand(props: TagsInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "clearable",
    "placeholder",
    "size",
    "variant",
  ]);
  const size = () => local.size ?? "md";

  return (
    <Root {...rest} size={size()}>
      <Control
        asChild={(controlProps) => (
          <InputGroup {...controlProps()} size={size()} variant={local.variant}>
            <TagsInputPrimitive.Context>
              {(api) => (
                <>
                  <For each={api().value}>
                    {(value, index) => (
                      <Item index={index()} value={value}>
                        <ItemPreview>
                          <ItemText>{value}</ItemText>
                          <ItemDeleteTrigger
                            asChild={(triggerProps) => (
                              <InputGroup.Button
                                {...triggerProps()}
                                size="icon-xs"
                                variant="ghost"
                              >
                                <XIcon aria-hidden />
                              </InputGroup.Button>
                            )}
                          />
                        </ItemPreview>
                        <ItemInput
                          asChild={(inputProps) => (
                            <InputGroup.Input {...inputProps()} />
                          )}
                        />
                      </Item>
                    )}
                  </For>

                  <Input
                    asChild={(inputProps) => (
                      <InputGroup.Input
                        {...inputProps()}
                        placeholder={local.placeholder}
                      />
                    )}
                    class={local.classNames?.input}
                  />

                  <Show
                    when={(local.clearable ?? false) && api().value.length > 0}
                  >
                    <ClearTrigger
                      asChild={(triggerProps) => (
                        <InputGroup.Button
                          {...triggerProps()}
                          size="icon-xs"
                          variant="ghost"
                        >
                          <XIcon aria-hidden />
                        </InputGroup.Button>
                      )}
                      class={local.classNames?.clearTrigger}
                    />
                  </Show>
                </>
              )}
            </TagsInputPrimitive.Context>
          </InputGroup>
        )}
        class={local.classNames?.control}
      />
    </Root>
  );
}
// #endregion

export type {
  TagsInputClearTriggerProps,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
  TagsInputLabelProps,
} from "@ark-ui/solid";

export const TagsInput = Object.assign(TagsInputShorthand, {
  ClearTrigger,
  Context: TagsInputContext,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemPreview,
  ItemText,
  Label,
  Root,
  RootProvider,
});
