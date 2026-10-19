import {
  FileUpload as FileUploadPrimitive,
  useFileUploadContext,
} from "@ark-ui/solid";
import type {
  FileUploadClearTriggerProps,
  FileUploadDropzoneProps as FileUploadDropzonePrimitiveProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadRootProps as FileUploadRootPrimitiveProps,
  FileUploadTriggerProps,
} from "@ark-ui/solid";
import type {
  FileUploadItemRootContract,
  FileUploadRootContract,
} from "@pisagor/contracts";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import type { MessageKey } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { UploadIcon, XIcon, createSlotRecipeContext } from "../internal";
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

type FileUploadListProps = Omit<FileUploadItemRootProps, "file">;

type FileUploadRootProps = FileUploadRootPrimitiveProps &
  FileUploadRootContract & {
    onValueChange?: (value: File[]) => void;
  };

type FileUploadDropzoneProps = FileUploadDropzonePrimitiveProps;

type FileUploadItemPreviewImageProps = ComponentProps<
  typeof FileUploadPrimitive.ItemPreviewImage
>;

type FileUploadItemDeleteTriggerProps = ComponentProps<
  typeof FileUploadPrimitive.ItemDeleteTrigger
>;

type FileUploadDropzoneIconProps = ComponentProps<"div">;

type FileUploadTitleProps = ComponentProps<"div">;

type FileUploadDescriptionProps = ComponentProps<"div">;

type FileUploadHelperProps = ComponentProps<"div">;
// #endregion

// #region Parts
const RootBase = withProvider<FileUploadRootProps>(FileUploadPrimitive.Root, {
  name: "Root",
});

function Root(props: FileUploadRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "onFileChange",
    "onValueChange",
  ]);

  return (
    <RootBase
      {...rest}
      onFileChange={(details) => {
        local.onFileChange?.(details);
        local.onValueChange?.(details.acceptedFiles);
      }}
    >
      {local.children}

      <FileUploadPrimitive.HiddenInput />
    </RootBase>
  );
}

function Trigger(props: FileUploadTriggerProps): JSX.Element {
  return <FileUploadPrimitive.Trigger {...props} />;
}

const Dropzone = withContext<FileUploadDropzoneProps>(
  FileUploadPrimitive.Dropzone,
  {
    name: "Dropzone",
  },
);

const DropzoneIconBase = withContext<FileUploadDropzoneIconProps>("div", {
  name: "DropzoneIcon",
});

function DropzoneIcon(props: FileUploadDropzoneIconProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <DropzoneIconBase {...rest}>
      {local.children ?? <UploadIcon />}
    </DropzoneIconBase>
  );
}

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

function ItemGroup(props: FileUploadItemGroupProps): JSX.Element {
  return <FileUploadPrimitive.ItemGroup {...props} />;
}

function List(props: FileUploadListProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class", "recipe"]);
  const fileUpload = useFileUploadContext();
  const { slots } = useFileUpload();
  const recipe = () => local.recipe ?? fileUploadItemRecipe;
  const itemSlots = () => recipe()();
  const accepted = () => fileUpload().acceptedFiles;
  const rejected = () => fileUpload().rejectedFiles;

  const renderItem = (file: File, errors?: readonly string[]) => {
    const isImage = file.type.startsWith("image/");
    const extension = file.name.split(".").pop();

    return (
      <Item
        {...rest}
        class={itemSlots().listItem({ class: local.class })}
        file={file}
        recipe={recipe()}
      >
        <ItemPreview
          class={itemSlots().listPreview()}
          type={isImage ? "image/*" : ".*"}
        >
          <Show
            fallback={<span class={itemSlots().extension()}>{extension}</span>}
            when={isImage}
          >
            <ItemPreviewImage />
          </Show>
        </ItemPreview>

        <div class={itemSlots().content()}>
          <ItemName />
          <ItemSizeText />
          <For each={errors}>
            {(code) => (
              <div class={itemSlots().error()}>
                {m(`fileUpload.error.${code}` as MessageKey) ?? code}
              </div>
            )}
          </For>
        </div>

        <ItemDeleteTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps({ class: itemSlots().deleteButton() })}
              aria-label={m("fileUpload.removeFile")}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon aria-hidden />
            </Button>
          )}
        />
      </Item>
    );
  };

  return (
    <>
      <Show when={accepted().length > 0}>
        <ItemGroup class={slots.itemGroup()}>
          <For each={accepted()}>{(file) => renderItem(file)}</For>
        </ItemGroup>
      </Show>

      <Show when={rejected().length > 0}>
        <ItemGroup class={slots.itemGroup()} type="rejected">
          <For each={rejected()}>
            {(rejection) => renderItem(rejection.file, rejection.errors)}
          </For>
        </ItemGroup>
      </Show>
    </>
  );
}

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

function ClearTrigger(props: FileUploadClearTriggerProps): JSX.Element {
  return <FileUploadPrimitive.ClearTrigger {...props} />;
}
// #endregion

export type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadTriggerProps,
} from "@ark-ui/solid";

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
