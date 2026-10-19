import {
  FileUpload as FileUploadPrimitive,
  type FileUploadFileChangeDetails,
  useFileUploadContext,
} from "@ark-ui/vue";
import type {
  FileUploadDropzoneProps as FileUploadDropzonePrimitiveProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadRootProps as FileUploadRootPrimitiveProps,
} from "@ark-ui/vue";
import { PhUpload, PhX } from "@phosphor-icons/vue";
import type {
  FileUploadItemRootContract,
  FileUploadRootContract,
} from "@pisagor/contracts";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import { type MessageKey } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const {
  withContext,
  withProvider,
  useStyles: useFileUpload,
} = createSlotRecipeContext({
  name: "FileUpload",
  recipe: fileUploadRecipe,
});

const { withContext: withItemContext, withProvider: withItemProvider } =
  createSlotRecipeContext({
    name: "FileUploadItem",
    recipe: fileUploadItemRecipe,
  });
// #endregion

// #region Types
type FileUploadItemRootProps = FileUploadItemProps & FileUploadItemRootContract;

type FileUploadRootProps = FileUploadRootPrimitiveProps &
  FileUploadRootContract & {
    onValueChange?: (value: File[]) => void;
  };

type FileUploadDropzoneProps = FileUploadDropzonePrimitiveProps;

type FileUploadItemPreviewImageProps = Record<string, unknown>;

type FileUploadItemDeleteTriggerProps = Record<string, unknown>;

type FileUploadDropzoneIconProps = {
  class?: unknown;
};

type FileUploadTitleProps = {
  class?: unknown;
};

type FileUploadDescriptionProps = {
  class?: unknown;
};

type FileUploadHelperProps = {
  class?: unknown;
};
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const RootBase = withProvider<FileUploadRootProps>(FileUploadPrimitive.Root, {
  name: "Root",
});

const Root = defineComponent({
  inheritAttrs: false,
  name: "FileUpload",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<FileUploadRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const onFileChange = attrs.onFileChange as
        ((details: FileUploadFileChangeDetails) => void) | undefined;

      return h(
        RootBase,
        {
          ...attrs,
          class: props.class as string | undefined,
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

const Trigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Trigger",
  setup(_props, { attrs, slots }) {
    return () => h(FileUploadPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

const Dropzone = withContext<FileUploadDropzoneProps>(
  FileUploadPrimitive.Dropzone,
  {
    name: "Dropzone",
  },
);

const DropzoneIconBase = withContext<FileUploadDropzoneIconProps>("div", {
  name: "DropzoneIcon",
});

const DropzoneIcon = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.DropzoneIcon",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DropzoneIconBase,
        {
          ...attrs,
          class: props.class,
        },
        () => slots.default?.() ?? h(PhUpload),
      );
  },
});

const Title = withContext<FileUploadTitleProps>("div", {
  name: "Title",
});

const Description = withContext<FileUploadDescriptionProps>("div", {
  name: "Description",
});

const Helper = withContext<FileUploadHelperProps>("div", {
  name: "Helper",
  part: "dropzone-helper",
});

const ItemGroup = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemGroup",
  setup(_props, { attrs, slots }) {
    return () =>
      h(FileUploadPrimitive.ItemGroup as ArkPart, { ...attrs }, slots);
  },
});

const Item = withItemProvider<FileUploadItemRootProps>(
  FileUploadPrimitive.Item,
  {
    name: "Item",
    slot: "base",
  },
);

const ItemPreview = withItemContext<FileUploadItemPreviewProps>(
  FileUploadPrimitive.ItemPreview,
  {
    name: "ItemPreview",
    part: "preview",
    slot: "preview",
  },
);

const ItemPreviewImage = withItemContext<FileUploadItemPreviewImageProps>(
  FileUploadPrimitive.ItemPreviewImage,
  {
    name: "ItemPreviewImage",
    part: "preview-image",
    slot: "previewImage",
  },
);

const ItemName = withItemContext<FileUploadItemNameProps>(
  FileUploadPrimitive.ItemName,
  {
    name: "ItemName",
    part: "name",
    slot: "name",
  },
);

const ItemSizeText = withItemContext<FileUploadItemSizeTextProps>(
  FileUploadPrimitive.ItemSizeText,
  {
    name: "ItemSizeText",
    slot: "sizeText",
  },
);

const ItemDeleteTrigger = withItemContext<FileUploadItemDeleteTriggerProps>(
  FileUploadPrimitive.ItemDeleteTrigger,
  {
    name: "ItemDeleteTrigger",
    part: "delete-trigger",
    slot: "deleteTrigger",
  },
);

const ClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ClearTrigger",
  setup(_props, { attrs, slots }) {
    return () =>
      h(FileUploadPrimitive.ClearTrigger as ArkPart, { ...attrs }, slots);
  },
});

const List = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.List",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: fileUploadItemRecipe,
      type: Function as PropType<typeof fileUploadItemRecipe>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();
    const fileUpload = useFileUploadContext();
    const styles = useFileUpload();

    return () => {
      const { acceptedFiles, rejectedFiles } = fileUpload.value;
      const itemSlots = props.recipe();

      if (acceptedFiles.length === 0 && rejectedFiles.length === 0) {
        return null;
      }

      const renderItem = (
        file: File,
        key: string,
        errors?: readonly string[],
      ) => {
        const isImage = file.type.startsWith("image/");
        const extension = file.name.split(".").pop();

        return h(
          Item,
          {
            ...attrs,
            class: itemSlots.listItem({ class: props.class }),
            file,
            key,
            recipe: props.recipe,
          },
          () => [
            h(
              ItemPreview,
              {
                class: itemSlots.listPreview(),
                type: isImage ? "image/*" : ".*",
              },
              () =>
                isImage
                  ? h(ItemPreviewImage)
                  : h("span", { class: itemSlots.extension() }, extension),
            ),
            h("div", { class: itemSlots.content() }, [
              h(ItemName),
              h(ItemSizeText),
              ...(errors ?? []).map((code) =>
                h(
                  "div",
                  { class: itemSlots.error(), key: code },
                  m(`fileUpload.error.${code}` as MessageKey) ?? code,
                ),
              ),
            ]),
            h(ItemDeleteTrigger, { asChild: true }, () =>
              h(
                Button,
                {
                  "aria-label": m("fileUpload.removeFile"),
                  class: itemSlots.deleteButton(),
                  size: "icon-xs",
                  variant: "ghost",
                },
                () => h(PhX, { "aria-hidden": true }),
              ),
            ),
          ],
        );
      };

      return [
        acceptedFiles.length > 0
          ? h(ItemGroup, { class: styles.slots.itemGroup() }, () =>
              acceptedFiles.map((file, index) =>
                renderItem(file, `${file.name}-${index}`),
              ),
            )
          : null,
        rejectedFiles.length > 0
          ? h(
              ItemGroup,
              { class: styles.slots.itemGroup(), type: "rejected" },
              () =>
                rejectedFiles.map(({ file, errors }, index) =>
                  renderItem(file, `${file.name}-${index}`, errors),
                ),
            )
          : null,
      ];
    };
  },
});
// #endregion

export type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadTriggerProps,
} from "@ark-ui/vue";

export const FileUpload = Object.assign(Root, {
  ClearTrigger,
  Description,
  Dropzone,
  DropzoneIcon,
  Helper,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  List,
  Title,
  Trigger,
});
