import {
  FileUpload as FileUploadPrimitive,
  useFileUploadContext,
} from "@ark-ui/solid";
import type {
  FileUploadClearTriggerProps,
  FileUploadDropzoneProps,
  FileUploadItemDeleteTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps as FileUploadItemPrimitiveProps,
  FileUploadItemSizeTextProps,
  FileUploadLabelProps,
  FileUploadRootProps as FileUploadRootPrimitiveProps,
  FileUploadTriggerProps,
} from "@ark-ui/solid";
import type {
  FileUploadContract,
  FileUploadItemRootContract,
  FileUploadRootContract,
} from "@pisagor/contracts";
import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { UploadIcon, XIcon, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { type DialogTriggerRender, renderTrigger } from "./dialog";
import { type MessageKey, useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
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
export type FileUploadRootProps = FileUploadRootPrimitiveProps &
  FileUploadRootContract & {
    /** Called with the accepted files whenever the selection changes. */
    onValueChange?: (value: File[]) => void;
  };

export type FileUploadItemProps = FileUploadItemPrimitiveProps &
  FileUploadItemRootContract;

export interface FileUploadProps
  extends Omit<FileUploadRootProps, "children" | "title">, FileUploadContract {
  /**
   * Clear-all trigger. A render function receives the trigger props; plain
   * content is wrapped.
   */
  clearTrigger?: DialogTriggerRender;
  /** Secondary text in the dropzone. */
  description?: JSX.Element;
  /**
   * Whether to render the dropzone. When `false`, only `trigger` and the file
   * list render.
   *
   * @defaultValue true
   */
  dropzone?: boolean;
  /** Helper text at the bottom of the dropzone. */
  helper?: JSX.Element;
  /**
   * Dropzone icon. Pass `null` to hide it.
   *
   * @defaultValue <UploadIcon />
   */
  icon?: JSX.Element;
  /** Visible label rendered above the dropzone. */
  label?: JSX.Element;
  /**
   * Whether to render the accepted and rejected file list.
   *
   * @defaultValue true
   */
  showList?: boolean;
  /** Primary text in the dropzone. */
  title?: JSX.Element;
  /**
   * File picker trigger. A render function receives the trigger props; plain
   * content is wrapped.
   */
  trigger?: DialogTriggerRender;
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
};
// #endregion

// #region Parts
const RootBase = withProvider<FileUploadRootPrimitiveProps>(
  FileUploadPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; renders the hidden input and passes accepted files to `onValueChange`. */
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

const Label = withContext<FileUploadLabelProps>(FileUploadPrimitive.Label, {
  name: "Label",
});

const Dropzone = withContext<FileUploadDropzoneProps>(
  FileUploadPrimitive.Dropzone,
  { name: "Dropzone" },
);

const Trigger = withContext<FileUploadTriggerProps>(
  FileUploadPrimitive.Trigger,
  { name: "Trigger" },
);

const ClearTriggerBase = withContext<FileUploadClearTriggerProps>(
  FileUploadPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

/** Clear trigger with a localized default `aria-label`. */
function ClearTrigger(props: FileUploadClearTriggerProps): JSX.Element {
  const { m } = useLocale();

  return (
    <ClearTriggerBase aria-label={m("fileUpload.clearFiles")} {...props} />
  );
}

const ItemGroup = withContext<FileUploadItemGroupProps>(
  FileUploadPrimitive.ItemGroup,
  { name: "ItemGroup" },
);

const Item = withItemProvider<FileUploadItemProps>(FileUploadPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const ItemPreview = withItemContext<FileUploadItemPreviewProps>(
  FileUploadPrimitive.ItemPreview,
  { name: "ItemPreview", slot: "preview" },
);

const ItemPreviewImage = withItemContext<FileUploadItemPreviewImageProps>(
  FileUploadPrimitive.ItemPreviewImage,
  { name: "ItemPreviewImage", slot: "previewImage" },
);

const ItemName = withItemContext<FileUploadItemNameProps>(
  FileUploadPrimitive.ItemName,
  { name: "ItemName", slot: "name" },
);

const ItemSizeText = withItemContext<FileUploadItemSizeTextProps>(
  FileUploadPrimitive.ItemSizeText,
  { name: "ItemSizeText", slot: "sizeText" },
);

const ItemDeleteTriggerBase = withItemContext<FileUploadItemDeleteTriggerProps>(
  FileUploadPrimitive.ItemDeleteTrigger,
  { name: "ItemDeleteTrigger", slot: "deleteTrigger" },
);

/** Item delete trigger with a localized default `aria-label`. */
function ItemDeleteTrigger(
  props: FileUploadItemDeleteTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return (
    <ItemDeleteTriggerBase aria-label={m("fileUpload.removeFile")} {...props} />
  );
}
// #endregion

// #region Shorthand
function FileList(
  props: Pick<FileUploadProps, "classNames" | "itemClassNames">,
): JSX.Element {
  const { m } = useLocale();
  const fileUpload = useFileUploadContext();
  const itemSlots = fileUploadItemRecipe();

  const renderItem = (file: File, errors?: readonly string[]) => {
    const isImage = file.type.startsWith("image/");

    return (
      <Item
        class={itemSlots.listItem({ class: props.itemClassNames?.listItem })}
        file={file}
      >
        <ItemPreview
          class={itemSlots.listPreview({
            class: props.itemClassNames?.listPreview,
          })}
          type={isImage ? "image/*" : ".*"}
        >
          <Show
            fallback={
              <span
                class={itemSlots.extension({
                  class: props.itemClassNames?.extension,
                })}
              >
                {file.name.split(".").pop()}
              </span>
            }
            when={isImage}
          >
            <ItemPreviewImage class={props.itemClassNames?.previewImage} />
          </Show>
        </ItemPreview>
        <div
          class={itemSlots.content({ class: props.itemClassNames?.content })}
        >
          <ItemName class={props.itemClassNames?.name} />
          <ItemSizeText class={props.itemClassNames?.sizeText} />
          <For each={errors}>
            {(code) => (
              <div
                class={itemSlots.error({ class: props.itemClassNames?.error })}
              >
                {m(`fileUpload.error.${code}` as MessageKey) ?? code}
              </div>
            )}
          </For>
        </div>
        <ItemDeleteTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps({
                class: itemSlots.deleteButton({
                  class: props.itemClassNames?.deleteButton,
                }),
              })}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon aria-hidden />
            </Button>
          )}
          class={props.itemClassNames?.deleteTrigger}
        />
      </Item>
    );
  };

  return (
    <>
      <Show when={fileUpload().acceptedFiles.length > 0}>
        <ItemGroup class={props.classNames?.itemGroup}>
          <For each={fileUpload().acceptedFiles}>
            {(file) => renderItem(file)}
          </For>
        </ItemGroup>
      </Show>
      <Show when={fileUpload().rejectedFiles.length > 0}>
        <ItemGroup class={props.classNames?.itemGroup} type="rejected">
          <For each={fileUpload().rejectedFiles}>
            {(rejection) => renderItem(rejection.file, rejection.errors)}
          </For>
        </ItemGroup>
      </Show>
    </>
  );
}

function DropzoneText(props: {
  children: JSX.Element;
  class?: string;
  slot: "description" | "dropzoneIcon" | "helper" | "title";
}): JSX.Element {
  const styles = useStyles();

  return (
    <div class={styles.slots[props.slot]({ class: props.class })}>
      {props.children}
    </div>
  );
}

export function FileUploadShorthand(props: FileUploadProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "clearTrigger",
    "description",
    "dropzone",
    "helper",
    "icon",
    "itemClassNames",
    "label",
    "showList",
    "title",
    "trigger",
  ]);
  const icon = () => ("icon" in local ? local.icon : <UploadIcon />);

  const TriggerNode = () => (
    <Show when={local.trigger}>
      {(trigger) => (
        <Trigger
          asChild={renderTrigger(trigger())}
          class={local.classNames?.trigger}
        />
      )}
    </Show>
  );

  return (
    <Root {...rest}>
      <Show when={local.label}>
        <Label class={local.classNames?.label}>{local.label}</Label>
      </Show>
      <Show when={local.clearTrigger}>
        {(clearTrigger) => (
          <ClearTrigger
            asChild={renderTrigger(clearTrigger())}
            class={local.classNames?.clearTrigger}
          />
        )}
      </Show>
      <Show fallback={<TriggerNode />} when={local.dropzone ?? true}>
        <Dropzone class={local.classNames?.dropzone}>
          <Show when={icon()}>
            <DropzoneText
              class={local.classNames?.dropzoneIcon}
              slot="dropzoneIcon"
            >
              {icon()}
            </DropzoneText>
          </Show>
          <Show when={local.title}>
            <DropzoneText class={local.classNames?.title} slot="title">
              {local.title}
            </DropzoneText>
          </Show>
          <Show when={local.description}>
            <DropzoneText
              class={local.classNames?.description}
              slot="description"
            >
              {local.description}
            </DropzoneText>
          </Show>
          <TriggerNode />
          <Show when={local.helper}>
            <DropzoneText class={local.classNames?.helper} slot="helper">
              {local.helper}
            </DropzoneText>
          </Show>
        </Dropzone>
      </Show>
      <Show when={local.showList ?? true}>
        <FileList
          classNames={local.classNames}
          itemClassNames={local.itemClassNames}
        />
      </Show>
    </Root>
  );
}
// #endregion

export const FileUpload = Object.assign(FileUploadShorthand, {
  ClearTrigger,
  Context: FileUploadPrimitive.Context,
  Dropzone,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  Label,
  Root,
  Trigger,
});
