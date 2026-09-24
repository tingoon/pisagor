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
import { FileUpload as FileUploadPrimitive, useFileUploadContext } from "@ark-ui/solid/file-upload";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes/file-upload";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { UploadIcon, XIcon } from "../../internal/icons";
import { Button } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import {
  FileUploadContext,
  FileUploadItemContext,
  useFileUpload,
  useFileUploadItem,
} from "./file-upload.context";

type FormControlVariant = "primary" | "secondary";

export interface FileUploadItemRootProps extends FileUploadItemProps {
  itemRecipe?: typeof fileUploadItemRecipe;
}

export type FileUploadListProps = Omit<FileUploadItemRootProps, "file">;

export interface FileUploadRootProps extends FileUploadPrimitiveRootProps {
  onValueChange?: (value: File[]) => void;
  recipe?: typeof fileUploadRecipe;
}

export interface FileUploadDropzoneProps extends FileUploadPrimitiveDropzoneProps {
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
  const slots = () => (local.recipe ?? fileUploadRecipe)();

  return (
    <FileUploadContext value={{ slots: slots() }}>
      <FileUploadPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        onFileChange={(details) => {
          local.onFileChange?.(details);
          local.onValueChange?.(details.acceptedFiles);
        }}
      >
        {local.children}
        <FileUploadPrimitive.HiddenInput />
      </FileUploadPrimitive.Root>
    </FileUploadContext>
  );
}

export function FileUploadTrigger(props: FileUploadTriggerProps): JSX.Element {
  return <FileUploadPrimitive.Trigger {...props} />;
}

export function FileUploadDropzone(props: FileUploadDropzoneProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const { slots } = useFileUpload();

  return (
    <FileUploadPrimitive.Dropzone
      {...rest}
      class={cn(
        formControlZoneRecipe({ surfaceVariant, variant: variant() }),
        slots.dropzone(),
        local.class,
      )}
      data-variant={variant()}
    />
  );
}

export function FileUploadDropzoneIcon(props: FileUploadDropzoneIconProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFileUpload();

  return (
    <ark.div
      {...rest}
      class={slots.dropzoneIcon({ class: cn(local.class) })}
      data-part="dropzone-icon"
      data-scope="file-upload"
    >
      {local.children ?? <UploadIcon />}
    </ark.div>
  );
}

export function FileUploadTitle(props: FileUploadTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUpload();
  return (
    <ark.div
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadDescription(props: FileUploadDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUpload();
  return (
    <ark.div
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="title"
      data-scope="file-upload"
    />
  );
}

export function FileUploadHelper(props: FileUploadHelperProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUpload();
  return (
    <ark.div
      {...rest}
      class={slots.helper({ class: cn(local.class) })}
      data-part="dropzone-helper"
      data-scope="file-upload"
    />
  );
}

export function FileUploadItemGroup(props: FileUploadItemGroupProps): JSX.Element {
  return <FileUploadPrimitive.ItemGroup {...props} />;
}

export function FileUploadList(props: FileUploadListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "itemRecipe"]);
  const fileUpload = useFileUploadContext();
  const { slots } = useFileUpload();
  const itemRecipe = () => local.itemRecipe ?? fileUploadItemRecipe;
  const itemSlots = () => itemRecipe()();
  const files = () => fileUpload().acceptedFiles;

  return (
    <Show when={files().length > 0}>
      <FileUploadItemGroup class={slots.itemGroup()}>
        <For each={files()}>
          {(file) => {
            const isImage = () => file.type.startsWith("image/");
            const extension = () => file.name.split(".").pop();
            return (
              <FileUploadItem
                {...rest}
                class={itemSlots().listItem({ class: cn(local.class) })}
                file={file}
                itemRecipe={itemRecipe()}
              >
                <FileUploadItemPreview
                  class={itemSlots().listPreview()}
                  type={isImage() ? "image/*" : ".*"}
                >
                  <Show
                    fallback={<span class={itemSlots().extension()}>{extension()}</span>}
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
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? fileUploadItemRecipe)();

  return (
    <FileUploadItemContext value={{ slots: slots() }}>
      <FileUploadPrimitive.Item {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </FileUploadPrimitive.Item>
    </FileUploadItemContext>
  );
}

export function FileUploadItemPreview(props: FileUploadItemPreviewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUploadItem();
  return (
    <FileUploadPrimitive.ItemPreview {...rest} class={slots.preview({ class: cn(local.class) })} />
  );
}

export function FileUploadItemPreviewImage(props: FileUploadItemPreviewImageProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUploadItem();
  return (
    <FileUploadPrimitive.ItemPreviewImage
      {...rest}
      class={slots.previewImage({ class: cn(local.class) })}
    />
  );
}

export function FileUploadItemName(props: FileUploadItemNameProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUploadItem();
  return <FileUploadPrimitive.ItemName {...rest} class={slots.name({ class: cn(local.class) })} />;
}

export function FileUploadItemSize(props: FileUploadItemSizeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUploadItem();
  return (
    <FileUploadPrimitive.ItemSizeText {...rest} class={slots.size({ class: cn(local.class) })} />
  );
}

export function FileUploadItemDeleteTrigger(props: FileUploadItemDeleteTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileUploadItem();
  return (
    <FileUploadPrimitive.ItemDeleteTrigger
      {...rest}
      class={slots.deleteTrigger({ class: cn(local.class) })}
    />
  );
}

export function FileUploadClearTrigger(props: FileUploadClearTriggerProps): JSX.Element {
  return <FileUploadPrimitive.ClearTrigger {...props} />;
}
