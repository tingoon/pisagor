import { ark } from "@ark-ui/vue/factory";
import { PhFile } from "@phosphor-icons/vue";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes/file";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { Format } from "../format";

export type FileMediaVariant = NonNullable<FileVariantProps["variant"]>;

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FileProps {
  /** Trailing actions (download, remove, …). */
  actions?: VNodeChild;
  /**
   * Style recipe. Defaults to `fileRecipe` from `@pisagor/recipes/file`.
   *
   * @defaultValue fileRecipe
   */
  recipe?: typeof fileRecipe;
  class?: unknown;
  /** Leading media; defaults to a file icon. */
  media?: VNodeChild;
  /** Optional subtitle (type, modified date, etc.). */
  meta?: VNodeChild;
  /** Display name for the file. */
  name: VNodeChild;
  /** Size in bytes; rendered with `Format.Byte` when set. */
  size?: number;
}
// #endregion

// #region Parts
export const FileRoot = defineComponent({
  inheritAttrs: false,
  name: "FileRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "file",
        },
        slots,
      );
    };
  },
});

export const FileMedia = defineComponent({
  inheritAttrs: false,
  name: "FileMedia",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
    variant: { default: "icon", type: String as PropType<FileVariantProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.media({ class: props.class, variant: props.variant }),
          "data-part": "media",
          "data-scope": "file",
          "data-variant": props.variant,
        },
        () => slots.default?.() ?? h(PhFile),
      );
    };
  },
});

export const FileContent = defineComponent({
  inheritAttrs: false,
  name: "FileContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: props.class }),
          "data-part": "content",
          "data-scope": "file",
        },
        slots,
      );
    };
  },
});

export const FileName = defineComponent({
  inheritAttrs: false,
  name: "FileName",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.name({ class: props.class }),
          "data-part": "name",
          "data-scope": "file",
        },
        slots,
      );
    };
  },
});

export const FileMeta = defineComponent({
  inheritAttrs: false,
  name: "FileMeta",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.meta({ class: props.class }),
          "data-part": "meta",
          "data-scope": "file",
        },
        slots,
      );
    };
  },
});

export const FileSize = defineComponent({
  inheritAttrs: false,
  name: "FileSize",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
    value: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.size({ class: props.class }),
          "data-part": "size",
          "data-scope": "file",
        },
        () => h(Format.Byte, { value: props.value }),
      );
    };
  },
});

export const FileActions = defineComponent({
  inheritAttrs: false,
  name: "FileActions",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: fileRecipe,
      type: Function as PropType<typeof fileRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.actions({ class: props.class }),
          "data-part": "actions",
          "data-scope": "file",
        },
        slots,
      );
    };
  },
});

export const FileShorthand = defineComponent({
  inheritAttrs: false,
  name: "FileShorthand",
  props: {
    actions: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    media: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    meta: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    name: { required: true, type: [String, Object, Array] as PropType<VNodeChild> },
    size: { default: undefined, type: Number },
  },
  setup(props, { attrs }) {
    return () =>
      h(FileRoot, { ...attrs, class: props.class }, () => [
        h(FileMedia, null, () => props.media),

        h(FileContent, null, () => [
          h(FileName, null, () => props.name),

          props.meta !== undefined ? h(FileMeta, null, () => props.meta) : null,

          props.size !== undefined ? h(FileSize, { value: props.size }) : null,
        ]),

        props.actions !== undefined ? h(FileActions, null, () => props.actions) : null,
      ]);
  },
});
// #endregion
