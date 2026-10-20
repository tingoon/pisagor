import { TagsInput as TagsInputPrimitive } from "@ark-ui/react";
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
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type {
  TagsInputContract,
  TagsInputItemRootContract,
  TagsInputRootContract,
} from "@pisagor/contracts";
import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
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
function Root({
  children,
  editable = false,
  onValueChange,
  size = "md",
  tabIndex,
  ...rest
}: TagsInputRootProps) {
  return (
    <RootBase
      {...rest}
      data-size={size}
      editable={editable}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
    >
      {children}

      <TagsInputPrimitive.HiddenInput tabIndex={tabIndex} />
    </RootBase>
  );
}

const RootProviderBase = withProvider<
  Omit<TagsInputRootProviderPrimitiveProps, "size"> & TagsInputRootBaseContract
>(TagsInputPrimitive.RootProvider, { name: "RootProvider", slot: "base" });

/** Root for an external `useTagsInput` instance. */
function RootProvider({
  children,
  size = "md",
  ...rest
}: TagsInputRootProviderProps) {
  return (
    <RootProviderBase {...rest} data-size={size}>
      {children}

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
function ClearTrigger(props: TagsInputClearTriggerProps) {
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
function ItemDeleteTrigger(props: TagsInputItemDeleteTriggerProps) {
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
export function TagsInputShorthand({
  classNames,
  clearable = false,
  placeholder,
  size = "md",
  variant,
  ...rest
}: TagsInputProps) {
  return (
    <Root {...rest} size={size}>
      <Control asChild className={classNames?.control}>
        <InputGroup size={size} variant={variant}>
          <TagsInputPrimitive.Context>
            {(api) => (
              <>
                {api.value.map((value, index) => (
                  <Item index={index} key={value} value={value}>
                    <ItemPreview>
                      <ItemText>{value}</ItemText>
                      <ItemDeleteTrigger asChild>
                        <InputGroup.Button size="icon-xs" variant="ghost">
                          <XIcon aria-hidden />
                        </InputGroup.Button>
                      </ItemDeleteTrigger>
                    </ItemPreview>
                    <ItemInput asChild>
                      <InputGroup.Input />
                    </ItemInput>
                  </Item>
                ))}

                <Input asChild className={classNames?.input}>
                  <InputGroup.Input placeholder={placeholder} />
                </Input>

                {clearable && api.value.length > 0 && (
                  <ClearTrigger asChild className={classNames?.clearTrigger}>
                    <InputGroup.Button size="icon-xs" variant="ghost">
                      <XIcon aria-hidden />
                    </InputGroup.Button>
                  </ClearTrigger>
                )}
              </>
            )}
          </TagsInputPrimitive.Context>
        </InputGroup>
      </Control>
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
} from "@ark-ui/react";

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
