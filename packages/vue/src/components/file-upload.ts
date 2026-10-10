import {
  type FileUploadFileChangeDetails,
  FileUpload as FileUploadPrimitive,
  useFileUploadContext,
} from "@ark-ui/vue/file-upload";
import { PhUpload, PhX } from "@phosphor-icons/vue";
import type {
  FileUploadItemProps as BaseFileUploadItemProps,
  FileUploadProps as BaseFileUploadRootProps,
} from "@pisagor/props";
import {
  fileUploadItemRecipe,
  fileUploadRecipe,
  formControlZoneRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Button } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const {
  provideStyles: provideFileUploadItemStyles,
  useOptionalStyles: useOptionalFileUploadItemStyles,
} = createSlotRecipeContext({
  name: "FileUpload",
  recipe: fileUploadItemRecipe,
});

/** Slots from the nearest FileUploadItem root, or the default recipe when used standalone. */
function useFileUploadItemSlots() {
  const styles = useOptionalFileUploadItemStyles();

  return () => styles?.slots ?? fileUploadItemRecipe();
}
// #endregion

// #region Context
const {
  provideStyles: provideFileUploadStyles,
  useOptionalStyles: useOptionalFileUploadStyles,
} = createSlotRecipeContext({
  name: "FileUpload",
  recipe: fileUploadRecipe,
});

/** Slots from the nearest FileUpload root, or the default recipe when used standalone. */
function useFileUploadSlots() {
  const styles = useOptionalFileUploadStyles();

  return () => styles?.slots ?? fileUploadRecipe();
}
// #endregion

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FileUploadRootProps extends BaseFileUploadRootProps {
  onValueChange?: (value: File[]) => void;
  class?: unknown;
}

interface FileUploadDropzoneProps {
  class?: unknown;
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}

export interface FileUploadItemProps extends BaseFileUploadItemProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const FileUploadRoot = defineComponent({
  inheritAttrs: false,
  name: "FileUpload",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<FileUploadRootProps["onValueChange"]>,
    },
    recipe: {
      default: fileUploadRecipe,
      type: Function as PropType<typeof fileUploadRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideFileUploadStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () => {
      const onFileChange = attrs.onFileChange as
        | ((details: FileUploadFileChangeDetails) => void)
        | undefined;
      const variantSlots = recipeSlots.value;

      return h(
        FileUploadPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          onFileChange: (details: FileUploadFileChangeDetails) => {
            onFileChange?.(details);
            props.onValueChange?.(details.acceptedFiles);
          },
        },
        () => [
          slots.default?.(),
          h(FileUploadPrimitive.HiddenInput as ArkPart),
        ],
      );
    };
  },
});

export const FileUploadTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Trigger",
  setup(_, { attrs, slots }) {
    return () => h(FileUploadPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const FileUploadDropzone = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Dropzone",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FileUploadDropzoneProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadSlots();

    const surfaceVariant = useFormControlSurface();

    return () => {
      const resolved = {
        surfaceVariant,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = {
        surfaceVariant: resolved.surfaceVariant,
        variant: resolved.variant,
      };
      const controlProps = { "data-variant": resolved.variant };
      const variantSlots = getSlots();

      return h(
        FileUploadPrimitive.Dropzone as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            formControlZoneRecipe({ ...shellArgs }),
            variantSlots.dropzone(),
            props.class,
          ),
        },
        slots,
      );
    };
  },
});

export const FileUploadDropzoneIcon = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.DropzoneIcon",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.dropzoneIcon({ class: props.class }),
          "data-part": "dropzone-icon",
          "data-scope": "file-upload",
        },
        slots.default?.() ?? h(PhUpload),
      );
    };
  },
});

export const FileUploadTitle = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Title",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
          "data-part": "title",
          "data-scope": "file-upload",
        },
        slots,
      );
    };
  },
});

export const FileUploadDescription = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Description",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.description({ class: props.class }),
          "data-part": "description",
          "data-scope": "file-upload",
        },
        slots,
      );
    };
  },
});

export const FileUploadHelper = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Helper",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.helper({ class: props.class }),
          "data-part": "dropzone-helper",
          "data-scope": "file-upload",
        },
        slots,
      );
    };
  },
});

export const FileUploadItemGroup = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemGroup",
  setup(_, { attrs, slots }) {
    return () =>
      h(FileUploadPrimitive.ItemGroup as ArkPart, { ...attrs }, slots);
  },
});

export const FileUploadItem = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    file: { required: true, type: Object as PropType<File> },
    recipe: {
      default: fileUploadItemRecipe,
      type: Function as PropType<typeof fileUploadItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideFileUploadItemStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () => {
      const variantSlots = recipeSlots.value;

      return h(
        FileUploadPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          file: props.file,
        },
        slots,
      );
    };
  },
});

export const FileUploadItemPreview = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemPreview",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    type: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadItemSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        FileUploadPrimitive.ItemPreview as ArkPart,
        {
          ...attrs,
          class: variantSlots.preview({ class: props.class }),
          type: props.type,
        },
        slots,
      );
    };
  },
});

export const FileUploadItemPreviewImage = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemPreviewImage",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const getSlots = useFileUploadItemSlots();

    return () => {
      const variantSlots = getSlots();

      return h(FileUploadPrimitive.ItemPreviewImage as ArkPart, {
        ...attrs,
        class: variantSlots.previewImage({ class: props.class }),
      });
    };
  },
});

export const FileUploadItemName = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemName",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadItemSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        FileUploadPrimitive.ItemName as ArkPart,
        {
          ...attrs,
          class: variantSlots.name({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const FileUploadItemSize = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemSize",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadItemSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        FileUploadPrimitive.ItemSizeText as ArkPart,
        {
          ...attrs,
          class: variantSlots.size({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const FileUploadItemDeleteTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemDeleteTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useFileUploadItemSlots();

    return () => {
      const variantSlots = getSlots();

      return h(
        FileUploadPrimitive.ItemDeleteTrigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.deleteTrigger({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const FileUploadClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ClearTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(FileUploadPrimitive.ClearTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const FileUploadList = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.List",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const getSlots = useFileUploadSlots();

    const fileUpload = useFileUploadContext();

    return () => {
      const files = fileUpload.value.acceptedFiles;
      const rootSlots = getSlots();
      const itemSlots = fileUploadItemRecipe();

      if (files.length === 0) {
        return null;
      }

      return h(FileUploadItemGroup, { class: rootSlots.itemGroup() }, () =>
        files.map((file, index) => {
          const isImage = file.type.startsWith("image/");
          const key = `${file.name}-${index}`;
          const extension = file.name.split(".").pop();

          return h(
            FileUploadItem as ArkPart,
            {
              ...attrs,
              class: itemSlots.listItem({ class: props.class }),
              file,
              key,
            },
            () => [
              h(
                FileUploadItemPreview as ArkPart,
                {
                  class: itemSlots.listPreview(),
                  type: isImage ? "image/*" : ".*",
                },
                () =>
                  isImage
                    ? h(FileUploadItemPreviewImage)
                    : h("span", { class: itemSlots.extension() }, extension),
              ),
              h("div", { class: itemSlots.content() }, [
                h(FileUploadItemName),
                h(FileUploadItemSize),
              ]),
              h(FileUploadItemDeleteTrigger, { asChild: true }, () =>
                h(
                  Button as ArkPart,
                  {
                    class: itemSlots.deleteButton(),
                    size: "icon-xs",
                    variant: "ghost",
                  },
                  () => h(PhX),
                ),
              ),
            ],
          );
        }),
      );
    };
  },
});
// #endregion

export const FileUpload = Object.assign(FileUploadRoot, {
  ClearTrigger: FileUploadClearTrigger,
  Description: FileUploadDescription,
  Dropzone: FileUploadDropzone,
  DropzoneIcon: FileUploadDropzoneIcon,
  Helper: FileUploadHelper,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemSize: FileUploadItemSize,
  List: FileUploadList,
  Title: FileUploadTitle,
  Trigger: FileUploadTrigger,
});
