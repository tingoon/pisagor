import { PhFile } from "@phosphor-icons/vue";
import type { FileContract, FileRootContract } from "@pisagor/props";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Format } from "./format";

// #region Slot recipe context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
// #endregion

export type FileMediaVariant = NonNullable<FileVariantProps["variant"]>;

// #region Types
export interface FileProps extends FileRootContract, FileContract {
  class?: unknown;
  actions?: VNodeChild;
  media?: VNodeChild;
  meta?: VNodeChild;
  name: VNodeChild;
  size?: number;
}
// #endregion

// #region Parts
export const FileRoot = withProvider("div", {
  name: "Root",
  slot: "base",
});

export const FileMedia = defineComponent({
  inheritAttrs: false,
  name: "FileMedia",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    variant: {
      default: "icon",
      type: String as PropType<FileVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.media({
            class: props.class,
            variant: props.variant,
          }),
          "data-part": "media",
          "data-scope": "file",
          "data-variant": props.variant,
        },
        () => slots.default?.() ?? h(PhFile),
      );
    };
  },
});

export const FileContent = withContext("div", {
  name: "Content",
  slot: "content",
});

export const FileName = withContext("div", {
  name: "Name",
  slot: "name",
});

export const FileMeta = withContext("div", {
  name: "Meta",
  slot: "meta",
});

export const FileSize = defineComponent({
  inheritAttrs: false,
  name: "FileSize",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    value: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    const styles = useStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        "div",
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

export const FileActions = withContext("div", {
  name: "Actions",
  slot: "actions",
});

export const FileShorthand = defineComponent({
  inheritAttrs: false,
  name: "FileShorthand",
  props: {
    actions: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    media: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    meta: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    name: {
      required: true,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
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

        props.actions !== undefined
          ? h(FileActions, null, () => props.actions)
          : null,
      ]);
  },
});
// #endregion

const fileParts = {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
};

export const FileItem = Object.assign(FileShorthand, fileParts);

/** @deprecated Use `FileItem`. `File` shadows the global `File` constructor. */
export const File = Object.assign(FileShorthand, fileParts);
