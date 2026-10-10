import { ark } from "@ark-ui/solid/factory";
import type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadDropzoneProps as FileUploadPrimitiveDropzoneProps,
  FileUploadRootProps as FileUploadPrimitiveRootProps,
  FileUploadTriggerProps,
} from "@ark-ui/solid/file-upload";
import {
  FileUpload as FileUploadPrimitive,
  useFileUploadContext,
} from "@ark-ui/solid/file-upload";
import type {
  FileUploadItemProps as BaseFileUploadItemRootProps,
  FileUploadProps as BaseFileUploadProps,
} from "@pisagor/props";
import {
  fileUploadItemRecipe,
  fileUploadRecipe,
  formControlZoneRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { UploadIcon, XIcon } from "../internal/icons";
import { Button } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: FileUploadStylesContext, useStyles: useFileUpload } =
  createSlotRecipeContext({ name: "FileUpload", recipe: fileUploadRecipe });

const { Context: FileUploadItemStylesContext, useStyles: useFileUploadItem } =
  createSlotRecipeContext({
    name: "FileUpload",
    recipe: fileUploadItemRecipe,
  });
// #endregion

type FormControlVariant = "primary" | "secondary";

export interface FileUploadItemRootProps
  extends FileUploadItemProps,
    BaseFileUploadItemRootProps {}

export type FileUploadListProps = Omit<FileUploadItemRootProps, "file">;

export interface FileUploadRootProps
  extends FileUploadPrimitiveRootProps,
    BaseFileUploadProps {
  onValueChange?: (value: File[]) => void;
}

export interface FileUploadDropzoneProps
  extends FileUploadPrimitiveDropzoneProps {
  variant?: FormControlVariant;
}

export type FileUploadItemPreviewImageProps = ComponentProps<
  typeof FileUploadPrimitive.ItemPreviewImage
>;
export type FileUploadItemSizeProps = FileUploadItemSizeTextProps;
export type FileUploadItemDeleteTriggerProps = ComponentProps<
  typeof FileUploadPrimitive.ItemDeleteTrigger
>;
export type FileUploadDropzoneIconProps = ComponentProps<typeof ark.div>;
export type FileUploadTitleProps = ComponentProps<typeof ark.div>;
export type FileUploadDescriptionProps = ComponentProps<typeof ark.div>;
export type FileUploadHelperProps = ComponentProps<typeof ark.div>;

export function FileUploadRoot(props: FileUploadRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "onFileChange",
    "onValueChange",
    "recipe",
    "class",
  ]);

  const slots = createMemo(() => (local.recipe ?? fileUploadRecipe)());

  return (
    <FileUploadStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <FileUploadPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        onFileChange={(details) => {
          local.onFileChange?.(details);
          local.onValueChange?.(details.acceptedFiles);
        }}
      >
        {local.children}
        <FileUploadPrimitive.HiddenInput />
      </FileUploadPrimitive.Root>
    </FileUploadStylesContext>
  );
}

export function FileUploadTrigger(props: FileUploadTriggerProps): JSX.Element {
  return <FileUploadPrimitive.Trigger {...props} />;
}

export function FileUploadDropzone(
  props: FileUploadDropzoneProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const styles = useFileUpload();

  return (
    <FileUploadPrimitive.Dropzone
      {...rest}
      class={cn(
        formControlZoneRecipe({ surfaceVariant, variant: variant() }),
        styles.slots.dropzone(),
        local.class,
      )}
      data-variant={variant()}
    />
  );
}

export function FileUploadDropzoneIcon(
  props: FileUploadDropzoneIconProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useFileUpload();

  return (
    <ark.div
      {...rest}
      class={styles.slots.dropzoneIcon({ class: local.class })}
      data-part="dropzone-icon"
      data-scope="file-upload"
    >
      {local.children ?? <UploadIcon />}
    </ark.div>
  );
}

export function FileUploadTitle(props: FileUploadTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUpload();

  return (
    <ark.div
      {...rest}
      class={styles.slots.title({ class: local.class })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadDescription(
  props: FileUploadDescriptionProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUpload();

  return (
    <ark.div
      {...rest}
      class={styles.slots.description({ class: local.class })}
      data-part="description"
      data-scope="file-upload"
    />
  );
}

export function FileUploadHelper(props: FileUploadHelperProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUpload();

  return (
    <ark.div
      {...rest}
      class={styles.slots.helper({ class: local.class })}
      data-part="dropzone-helper"
      data-scope="file-upload"
    />
  );
}

export function FileUploadItemGroup(
  props: FileUploadItemGroupProps,
): JSX.Element {
  return <FileUploadPrimitive.ItemGroup {...props} />;
}

export function FileUploadList(props: FileUploadListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe"]);
  const fileUpload = useFileUploadContext();
  const styles = useFileUpload();
  const recipe = () => local.recipe ?? fileUploadItemRecipe;
  const itemSlots = () => recipe()();
  const files = () => fileUpload().acceptedFiles;

  return (
    <Show when={files().length > 0}>
      <FileUploadItemGroup class={styles.slots.itemGroup()}>
        <For each={files()}>
          {(file) => {
            const isImage = () => file.type.startsWith("image/");
            const extension = () => file.name.split(".").pop();
            return (
              <FileUploadItem
                {...rest}
                class={itemSlots().listItem({ class: local.class })}
                file={file}
                recipe={recipe()}
              >
                <FileUploadItemPreview
                  class={itemSlots().listPreview()}
                  type={isImage() ? "image/*" : ".*"}
                >
                  <Show
                    fallback={
                      <span class={itemSlots().extension()}>{extension()}</span>
                    }
                    when={isImage()}
                  >
                    <FileUploadItemPreviewImage />
                  </Show>
                </FileUploadItemPreview>
                <div class={itemSlots().content()}>
                  <FileUploadItemName />
                  <FileUploadItemSize />
                </div>
                <FileUploadItemDeleteTrigger
                  asChild={(triggerProps) => (
                    <Button
                      {...triggerProps({ class: itemSlots().deleteButton() })}
                      aria-label="Remove file"
                      size="icon-xs"
                      variant="ghost"
                    >
                      <XIcon aria-hidden />
                    </Button>
                  )}
                />
              </FileUploadItem>
            );
          }}
        </For>
      </FileUploadItemGroup>
    </Show>
  );
}

export function FileUploadItem(props: FileUploadItemRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = createMemo(() => (local.recipe ?? fileUploadItemRecipe)());

  return (
    <FileUploadItemStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <FileUploadPrimitive.Item
        {...rest}
        class={slots().base({ class: local.class })}
      />
    </FileUploadItemStylesContext>
  );
}

export function FileUploadItemPreview(
  props: FileUploadItemPreviewProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemPreview
      {...rest}
      class={styles.slots.preview({ class: local.class })}
    />
  );
}

export function FileUploadItemPreviewImage(
  props: FileUploadItemPreviewImageProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemPreviewImage
      {...rest}
      class={styles.slots.previewImage({ class: local.class })}
    />
  );
}

export function FileUploadItemName(
  props: FileUploadItemNameProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemName
      {...rest}
      class={styles.slots.name({ class: local.class })}
    />
  );
}

export function FileUploadItemSize(
  props: FileUploadItemSizeProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemSizeText
      {...rest}
      class={styles.slots.size({ class: local.class })}
    />
  );
}

export function FileUploadItemDeleteTrigger(
  props: FileUploadItemDeleteTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useFileUploadItem();

  return (
    <FileUploadPrimitive.ItemDeleteTrigger
      {...rest}
      class={styles.slots.deleteTrigger({ class: local.class })}
    />
  );
}

export function FileUploadClearTrigger(
  props: FileUploadClearTriggerProps,
): JSX.Element {
  return <FileUploadPrimitive.ClearTrigger {...props} />;
}

export type {
  FileUploadClearTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadTriggerProps,
} from "@ark-ui/solid/file-upload";

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
