import {
  type FileUploadFileChangeDetails,
  FileUpload as FileUploadPrimitive,
  useFileUploadContext,
} from "@ark-ui/vue/file-upload";
import { PhUpload, PhX } from "@phosphor-icons/vue";
import { fileUploadVariants } from "@pisagor/styles/ui/file-upload";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlZoneVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import { Button } from "../button";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface FileUploadRootProps {
  class?: unknown;
  onValueChange?: (value: File[]) => void;
}

interface FileUploadDropzoneProps {
  class?: unknown;
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
export const FileUploadRoot = defineComponent({
  inheritAttrs: false,
  name: "FileUpload",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    onValueChange: {
      default: undefined,
      type: Function as PropType<FileUploadRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const onFileChange = attrs.onFileChange as
        | ((details: FileUploadFileChangeDetails) => void)
        | undefined;
      const variantSlots = fileUploadVariants();

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
        () => [slots.default?.(), h(FileUploadPrimitive.HiddenInput as ArkPart)],
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: undefined, type: String as PropType<FileUploadDropzoneProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);
      const variantSlots = fileUploadVariants();

      return h(
        FileUploadPrimitive.Dropzone as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            formControlZoneVariants({ ...shellArgs }),
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.dropzoneIcon({ class: props.class }),
          "data-part": "dropzone-icon",
          "data-scope": "file-upload",
        },
        () => slots.default?.() ?? h(PhUpload),
      );
    };
  },
});

export const FileUploadTitle = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Title",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(
        "div",
        {
          ...attrs,
          class: variantSlots.description({ class: props.class }),
          "data-part": "title",
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

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
    return () => h(FileUploadPrimitive.ItemGroup as ArkPart, { ...attrs }, slots);
  },
});

export const FileUploadItem = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Item",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    file: { required: true, type: Object as PropType<File> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(
        FileUploadPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.item({ class: props.class }),
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    type: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(
        FileUploadPrimitive.ItemPreview as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemPreview({ class: props.class }),
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(FileUploadPrimitive.ItemPreviewImage as ArkPart, {
        ...attrs,
        class: variantSlots.itemPreviewImage({ class: props.class }),
      });
    };
  },
});

export const FileUploadItemName = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemName",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(
        FileUploadPrimitive.ItemName as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemName({ class: props.class }),
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
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = fileUploadVariants();

      return h(
        FileUploadPrimitive.ItemSizeText as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemSize({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const FileUploadItemDeleteTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemDeleteTrigger",
  setup(_, { attrs, slots }) {
    return () => h(FileUploadPrimitive.ItemDeleteTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const FileUploadClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ClearTrigger",
  setup(_, { attrs, slots }) {
    return () => h(FileUploadPrimitive.ClearTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const FileUploadList = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.List",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    const fileUpload = useFileUploadContext();

    return () => {
      const files = fileUpload.value.acceptedFiles;
      const variantSlots = fileUploadVariants();

      if (files.length === 0) {
        return null;
      }

      return h(FileUploadItemGroup, { class: variantSlots.itemGroup() }, () =>
        files.map((file, index) => {
          const isImage = file.type.startsWith("image/");
          const key = `${file.name}-${index}`;
          const extension = file.name.split(".").pop();

          return h(
            FileUploadItem as ArkPart,
            {
              ...attrs,
              class: variantSlots.listItem({ class: props.class }),
              file,
              key,
            },
            () => [
              h(
                FileUploadItemPreview as ArkPart,
                {
                  class: variantSlots.listPreview(),
                  type: isImage ? "image/*" : ".*",
                },
                () =>
                  isImage
                    ? h(FileUploadItemPreviewImage)
                    : h("span", { class: variantSlots.extension() }, extension),
              ),
              h("div", { class: variantSlots.itemContent() }, [
                h(FileUploadItemName),
                h(FileUploadItemSize),
              ]),
              h(
                FileUploadItemDeleteTrigger,
                { asChild: true, class: variantSlots.deleteTrigger() },
                () =>
                  h(
                    Button as ArkPart,
                    { class: variantSlots.deleteButton(), size: "icon-xs", variant: "ghost" },
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
