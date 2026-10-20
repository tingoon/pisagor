import {
  TagsInput as TagsInputPrimitive,
  type TagsInputValueChangeDetails,
} from "@ark-ui/vue";
import { PhX } from "@phosphor-icons/vue";
import type {
  TagsInputContract,
  TagsInputItemRootContract,
  TagsInputRootContract,
} from "@pisagor/contracts";
import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import { type Component, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal";
import { InputGroup } from "./input-group";
import type { InputGroupProps } from "./input-group/input-group-core";
import { useLocale } from "./provider/context";

type FormControlVariant = "primary" | "secondary";
type TagsInputSize = NonNullable<InputGroupProps["size"]>;
type ArkPart = Parameters<typeof h>[0];

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

export interface TagsInputRootProps extends TagsInputRootBaseContract {
  defaultValue?: string[];
  editable?: boolean;
  /** Called with the tag list when it changes. */
  onValueChange?: (value: string[]) => void;
  size?: TagsInputSize;
  tabIndex?: number;
  value?: string[];
}

export type TagsInputItemProps = Omit<
  TagsInputItemRootContract,
  "size" | "variant"
> & {
  disabled?: boolean;
  index: number;
  value: string;
};

export interface TagsInputProps
  extends
    TagsInputRootProps,
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

export type {
  TagsInputClearTriggerProps,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
  TagsInputLabelProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
export const TagsInputContext = TagsInputPrimitive.Context;

const RootBase = withProvider(TagsInputPrimitive.Root, {
  name: "Root",
  slot: "base",
});

/** Root; renders the hidden form input and exposes `data-size`. */
export const TagsInputRoot = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.Root",
  props: {
    editable: { default: false, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<TagsInputRootProps["onValueChange"]>,
    },
    size: { default: "md", type: String as PropType<TagsInputSize> },
    tabIndex: { default: undefined, type: Number },
    value: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RootBase as ArkPart,
        {
          ...attrs,
          "data-size": props.size,
          editable: props.editable,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: TagsInputValueChangeDetails) =>
                props.onValueChange?.(details.value)
            : undefined,
        },
        () => [
          slots.default?.(),
          h(TagsInputPrimitive.HiddenInput as ArkPart, {
            tabIndex: props.tabIndex,
          }),
        ],
      );
  },
});

const RootProviderBase = withProvider(TagsInputPrimitive.RootProvider, {
  name: "RootProvider",
  slot: "base",
});

/** Root for an external `useTagsInput` instance. */
export const TagsInputRootProvider = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.RootProvider",
  props: {
    size: { default: "md", type: String as PropType<TagsInputSize> },
    /**
     * Machine API from `useTagsInput` — must be a declared prop so Vue unwraps
     * refs.
     */
    value: { required: true, type: Object as PropType<object> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RootProviderBase as ArkPart,
        { ...attrs, "data-size": props.size, value: props.value },
        () => [slots.default?.(), h(TagsInputPrimitive.HiddenInput as ArkPart)],
      );
  },
});

export const TagsInputLabel = withContext(TagsInputPrimitive.Label, {
  name: "Label",
});

export const TagsInputControl = withContext(TagsInputPrimitive.Control, {
  name: "Control",
});

// Cast: the Ark input props union is too complex for `withContext` to infer.
export const TagsInputInput = withContext(
  TagsInputPrimitive.Input as Component,
  {
    name: "Input",
  },
);

const ClearTriggerBase = withContext(TagsInputPrimitive.ClearTrigger, {
  name: "ClearTrigger",
});

/** Clear-all trigger with a localized default `aria-label`. */
export const TagsInputClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ClearTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ClearTriggerBase as ArkPart,
        { "aria-label": m("tagsInput.clearAllTags"), ...attrs },
        slots,
      );
  },
});

export const TagsInputItem = withItemProvider(TagsInputPrimitive.Item, {
  name: "Item",
  slot: "base",
});

export const TagsInputItemPreview = withItemContext(
  TagsInputPrimitive.ItemPreview,
  { name: "ItemPreview", slot: "preview" },
);

export const TagsInputItemText = withItemContext(TagsInputPrimitive.ItemText, {
  name: "ItemText",
  slot: "text",
});

const ItemDeleteTriggerBase = withItemContext(
  TagsInputPrimitive.ItemDeleteTrigger,
  { name: "ItemDeleteTrigger", slot: "delete" },
);

/** Delete trigger with a localized default `aria-label`. */
export const TagsInputItemDeleteTrigger = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ItemDeleteTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ItemDeleteTriggerBase as ArkPart,
        { "aria-label": m("tagsInput.removeTag"), ...attrs },
        slots,
      );
  },
});

// Cast: the Ark input props union is too complex for `withContext` to infer.
export const TagsInputItemInput = withItemContext(
  TagsInputPrimitive.ItemInput as Component,
  { name: "ItemInput", slot: "input" },
);
// #endregion

// #region Shorthand
export const TagsInputShorthand = defineComponent({
  inheritAttrs: false,
  name: "TagsInput",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<TagsInputProps["classNames"]>,
    },
    clearable: { default: false, type: Boolean },
    placeholder: { default: undefined, type: String },
    size: { default: "md", type: String as PropType<TagsInputSize> },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const classNames = props.classNames;

      return h(TagsInputRoot as ArkPart, { ...attrs, size: props.size }, () =>
        h(TagsInputControl, { asChild: true, class: classNames?.control }, () =>
          h(
            InputGroup as ArkPart,
            { size: props.size, variant: props.variant },
            () =>
              h(TagsInputPrimitive.Context as ArkPart, null, {
                default: (api: { value: string[] }) => [
                  ...api.value.map((value, index) =>
                    h(
                      TagsInputItem as ArkPart,
                      { index, key: value, value },
                      () => [
                        h(TagsInputItemPreview, null, () => [
                          h(TagsInputItemText, null, () => value),
                          h(TagsInputItemDeleteTrigger, { asChild: true }, () =>
                            h(
                              InputGroup.Button as ArkPart,
                              { size: "icon-xs", variant: "ghost" },
                              () => h(PhX, { "aria-hidden": true }),
                            ),
                          ),
                        ]),
                        h(TagsInputItemInput, { asChild: true }, () =>
                          h(InputGroup.Input as ArkPart),
                        ),
                      ],
                    ),
                  ),
                  h(
                    TagsInputInput,
                    { asChild: true, class: classNames?.input },
                    () =>
                      h(InputGroup.Input as ArkPart, {
                        placeholder: props.placeholder,
                      }),
                  ),
                  props.clearable && api.value.length > 0
                    ? h(
                        TagsInputClearTrigger,
                        { asChild: true, class: classNames?.clearTrigger },
                        () =>
                          h(
                            InputGroup.Button as ArkPart,
                            { size: "icon-xs", variant: "ghost" },
                            () => h(PhX, { "aria-hidden": true }),
                          ),
                      )
                    : null,
                ],
              }),
          ),
        ),
      );
    };
  },
});
// #endregion

export const TagsInput = Object.assign(TagsInputShorthand, {
  ClearTrigger: TagsInputClearTrigger,
  Context: TagsInputContext,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Item: TagsInputItem,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemPreview: TagsInputItemPreview,
  ItemText: TagsInputItemText,
  Label: TagsInputLabel,
  Root: TagsInputRoot,
  RootProvider: TagsInputRootProvider,
});
