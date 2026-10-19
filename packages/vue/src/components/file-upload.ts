import {
  FileUpload as FileUploadPrimitive,
  type FileUploadFileChangeDetails,
  useFileUploadContext,
} from "@ark-ui/vue";
import { PhUpload, PhX } from "@phosphor-icons/vue";
import type {
  FileUploadContract,
  FileUploadItemRootContract,
  FileUploadRootContract,
} from "@pisagor/contracts";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import { type MessageKey } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
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
type ArkPart = Parameters<typeof h>[0];

export interface FileUploadRootProps extends FileUploadRootContract {
  /** Called with the accepted files whenever the selection changes. */
  onValueChange?: (value: File[]) => void;
}

export type FileUploadItemProps = FileUploadItemRootContract;

export interface FileUploadProps
  extends FileUploadRootProps, FileUploadContract {
  /** Content rendered as a clear-all trigger (via `asChild`); also a slot. */
  clearTrigger?: VNodeChild;
  /** Secondary text in the dropzone; also a slot. */
  description?: VNodeChild;
  /**
   * Whether to render the dropzone. When `false`, only `trigger` and the file
   * list render.
   *
   * @defaultValue true
   */
  dropzone?: boolean;
  /** Helper text at the bottom of the dropzone; also a slot. */
  helper?: VNodeChild;
  /**
   * Dropzone icon; also a slot. Pass `null` to hide it.
   *
   * @defaultValue <PhUpload />
   */
  icon?: VNodeChild;
  /** Visible label rendered above the dropzone; also a slot. */
  label?: VNodeChild;
  /**
   * Whether to render the accepted and rejected file list.
   *
   * @defaultValue true
   */
  showList?: boolean;
  /** Primary text in the dropzone; also a slot. */
  title?: VNodeChild;
  /** Content rendered as the file picker trigger (via `asChild`); also a slot. */
  trigger?: VNodeChild;
}

export type {
  FileUploadClearTriggerProps,
  FileUploadDropzoneProps,
  FileUploadItemDeleteTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemPreviewProps,
  FileUploadItemSizeTextProps,
  FileUploadLabelProps,
  FileUploadTriggerProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
const RootBase = withProvider<FileUploadRootContract>(
  FileUploadPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; renders the hidden input and passes accepted files to `onValueChange`. */
export const FileUploadRoot = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.Root",
  props: {
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
        RootBase as ArkPart,
        {
          ...attrs,
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

export const FileUploadLabel = withContext(FileUploadPrimitive.Label, {
  name: "Label",
});

export const FileUploadDropzone = withContext(FileUploadPrimitive.Dropzone, {
  name: "Dropzone",
});

export const FileUploadTrigger = withContext(FileUploadPrimitive.Trigger, {
  name: "Trigger",
});

const ClearTriggerBase = withContext(FileUploadPrimitive.ClearTrigger, {
  name: "ClearTrigger",
});

/** Clear trigger with a localized default `aria-label`. */
export const FileUploadClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ClearTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ClearTriggerBase as ArkPart,
        { "aria-label": m("fileUpload.clearFiles"), ...attrs },
        slots,
      );
  },
});

export const FileUploadItemGroup = withContext(FileUploadPrimitive.ItemGroup, {
  name: "ItemGroup",
});

export const FileUploadItem = withItemProvider<FileUploadItemRootContract>(
  FileUploadPrimitive.Item,
  { name: "Item", slot: "base" },
);

export const FileUploadItemPreview = withItemContext(
  FileUploadPrimitive.ItemPreview,
  { name: "ItemPreview", slot: "preview" },
);

export const FileUploadItemPreviewImage = withItemContext(
  FileUploadPrimitive.ItemPreviewImage,
  { name: "ItemPreviewImage", slot: "previewImage" },
);

export const FileUploadItemName = withItemContext(
  FileUploadPrimitive.ItemName,
  { name: "ItemName", slot: "name" },
);

export const FileUploadItemSizeText = withItemContext(
  FileUploadPrimitive.ItemSizeText,
  { name: "ItemSizeText", slot: "sizeText" },
);

const ItemDeleteTriggerBase = withItemContext(
  FileUploadPrimitive.ItemDeleteTrigger,
  { name: "ItemDeleteTrigger", slot: "deleteTrigger" },
);

/** Item delete trigger with a localized default `aria-label`. */
export const FileUploadItemDeleteTrigger = defineComponent({
  inheritAttrs: false,
  name: "FileUpload.ItemDeleteTrigger",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ItemDeleteTriggerBase as ArkPart,
        { "aria-label": m("fileUpload.removeFile"), ...attrs },
        slots,
      );
  },
});
// #endregion

// #region Shorthand
const FileList = defineComponent({
  name: "FileUpload.FileList",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<FileUploadProps["classNames"]>,
    },
    itemClassNames: {
      default: undefined,
      type: Object as PropType<FileUploadProps["itemClassNames"]>,
    },
  },
  setup(props) {
    const { m } = useLocale();
    const fileUpload = useFileUploadContext();

    return () => {
      const { acceptedFiles, rejectedFiles } = fileUpload.value;
      const classNames = props.classNames;
      const itemClassNames = props.itemClassNames;
      const itemSlots = fileUploadItemRecipe();

      const renderItem = (
        file: File,
        key: string,
        errors?: readonly string[],
      ) => {
        const isImage = file.type.startsWith("image/");

        return h(
          FileUploadItem as ArkPart,
          {
            class: itemSlots.listItem({ class: itemClassNames?.listItem }),
            file,
            key,
          },
          () => [
            h(
              FileUploadItemPreview as ArkPart,
              {
                class: itemSlots.listPreview({
                  class: itemClassNames?.listPreview,
                }),
                type: isImage ? "image/*" : ".*",
              },
              () =>
                isImage
                  ? h(FileUploadItemPreviewImage, {
                      class: itemClassNames?.previewImage,
                    })
                  : h(
                      "span",
                      {
                        class: itemSlots.extension({
                          class: itemClassNames?.extension,
                        }),
                      },
                      file.name.split(".").pop(),
                    ),
            ),
            h(
              "div",
              { class: itemSlots.content({ class: itemClassNames?.content }) },
              [
                h(FileUploadItemName, { class: itemClassNames?.name }),
                h(FileUploadItemSizeText, { class: itemClassNames?.sizeText }),
                ...(errors ?? []).map((code) =>
                  h(
                    "div",
                    {
                      class: itemSlots.error({ class: itemClassNames?.error }),
                      key: code,
                    },
                    m(`fileUpload.error.${code}` as MessageKey) ?? code,
                  ),
                ),
              ],
            ),
            h(
              FileUploadItemDeleteTrigger,
              { asChild: true, class: itemClassNames?.deleteTrigger },
              () =>
                h(
                  Button,
                  {
                    class: itemSlots.deleteButton({
                      class: itemClassNames?.deleteButton,
                    }),
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
          ? h(FileUploadItemGroup, { class: classNames?.itemGroup }, () =>
              acceptedFiles.map((file, index) =>
                renderItem(file, `${file.name}-${index}`),
              ),
            )
          : null,
        rejectedFiles.length > 0
          ? h(
              FileUploadItemGroup as ArkPart,
              { class: classNames?.itemGroup, type: "rejected" },
              () =>
                rejectedFiles.map(({ errors, file }, index) =>
                  renderItem(file, `${file.name}-${index}`, errors),
                ),
            )
          : null,
      ];
    };
  },
});

type DropzoneTextSlot = "description" | "dropzoneIcon" | "helper" | "title";

const DropzoneText = defineComponent({
  name: "FileUpload.DropzoneText",
  props: {
    class: { default: undefined, type: String },
    region: { required: true, type: String as PropType<DropzoneTextSlot> },
  },
  setup(props, { slots }) {
    const styles = useStyles();

    return () =>
      h(
        "div",
        { class: styles.slots[props.region]({ class: props.class }) },
        slots.default?.(),
      );
  },
});

export const FileUploadShorthand = defineComponent({
  inheritAttrs: false,
  name: "FileUpload",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<FileUploadProps["classNames"]>,
    },
    clearTrigger: contentProp,
    description: contentProp,
    dropzone: { default: true, type: Boolean },
    helper: contentProp,
    icon: contentProp,
    itemClassNames: {
      default: undefined,
      type: Object as PropType<FileUploadProps["itemClassNames"]>,
    },
    label: contentProp,
    showList: { default: true, type: Boolean },
    title: contentProp,
    trigger: contentProp,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const label = slotOrProp(slots.label, props.label);
      const clearTrigger = slotOrProp(slots.clearTrigger, props.clearTrigger);
      const title = slotOrProp(slots.title, props.title);
      const description = slotOrProp(slots.description, props.description);
      const helper = slotOrProp(slots.helper, props.helper);
      const trigger = slotOrProp(slots.trigger, props.trigger);
      const icon =
        props.icon === null && !slots.icon
          ? undefined
          : (slotOrProp(slots.icon, props.icon) ?? (() => h(PhUpload)));

      const triggerNode = trigger
        ? h(
            FileUploadTrigger,
            { asChild: true, class: classNames?.trigger },
            trigger,
          )
        : null;

      return h(FileUploadRoot as ArkPart, attrs, () => [
        label ? h(FileUploadLabel, { class: classNames?.label }, label) : null,
        clearTrigger
          ? h(
              FileUploadClearTrigger,
              { asChild: true, class: classNames?.clearTrigger },
              clearTrigger,
            )
          : null,
        props.dropzone
          ? h(FileUploadDropzone, { class: classNames?.dropzone }, () => [
              icon
                ? h(
                    DropzoneText,
                    { class: classNames?.dropzoneIcon, region: "dropzoneIcon" },
                    icon,
                  )
                : null,
              title
                ? h(
                    DropzoneText,
                    { class: classNames?.title, region: "title" },
                    title,
                  )
                : null,
              description
                ? h(
                    DropzoneText,
                    { class: classNames?.description, region: "description" },
                    description,
                  )
                : null,
              triggerNode,
              helper
                ? h(
                    DropzoneText,
                    { class: classNames?.helper, region: "helper" },
                    helper,
                  )
                : null,
            ])
          : triggerNode,
        props.showList
          ? h(FileList, {
              classNames,
              itemClassNames: props.itemClassNames,
            })
          : null,
      ]);
    };
  },
});
// #endregion

export const FileUpload = Object.assign(FileUploadShorthand, {
  ClearTrigger: FileUploadClearTrigger,
  Context: FileUploadPrimitive.Context,
  Dropzone: FileUploadDropzone,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemSizeText: FileUploadItemSizeText,
  Label: FileUploadLabel,
  Root: FileUploadRoot,
  Trigger: FileUploadTrigger,
});
