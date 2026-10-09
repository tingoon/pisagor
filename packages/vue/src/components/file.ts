import { ark } from "@ark-ui/vue/factory";
import { PhFile } from "@phosphor-icons/vue";
import type { FileProps as BaseFileProps } from "@pisagor/props";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Format } from "./format";

// #region Slot recipe context
const {
  useStyles: useFile,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
// #endregion

export type FileMediaVariant = NonNullable<FileVariantProps["variant"]>;

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FileProps extends BaseFileProps {
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
export const FileRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const FileMedia = defineComponent({
  inheritAttrs: false,
  name: "FileMedia",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    variant: {
      default: "icon",
      type: String as PropType<FileVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFile();

    return () => {
      const variantSlots = styles.slots;

      return h(
        ark.div as ArkPart,
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

export const FileContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const FileName = withContext(ark.div, {
  name: "Name",
  slot: "name",
});

export const FileMeta = withContext(ark.div, {
  name: "Meta",
  slot: "meta",
});

export const FileSize = defineComponent({
  inheritAttrs: false,
  name: "FileSize",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    value: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    const styles = useFile();

    return () => {
      const variantSlots = styles.slots;

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

export const FileActions = withContext(ark.div, {
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
      type: [String, Object, Array] as PropType<unknown>,
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

export const File = Object.assign(FileShorthand, {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
});
