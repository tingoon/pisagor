import { ark } from "@ark-ui/solid/factory";
import type { FileProps as BaseFileRootProps } from "@pisagor/props";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { FileIcon } from "../internal/icons";
import { Format } from "./format";

// #region Context
const {
  useStyles: useFile,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "File", recipe: fileRecipe });
// #endregion

export interface FileRootProps
  extends ComponentProps<typeof ark.div>,
    BaseFileRootProps {}

export interface FileMediaProps
  extends ComponentProps<typeof ark.div>,
    FileVariantProps {}
export type FileNameProps = ComponentProps<typeof ark.div>;
export type FileMetaProps = ComponentProps<typeof ark.div>;

export interface FileSizeProps
  extends Omit<ComponentProps<typeof ark.div>, "children"> {
  value: number;
}

export type FileActionsProps = ComponentProps<typeof ark.div>;
export type FileContentProps = ComponentProps<typeof ark.div>;

export interface FileProps extends Omit<FileRootProps, "children" | "title"> {
  size?: number;
  meta?: JSX.Element;
  name: JSX.Element;
  actions?: JSX.Element;
  media?: JSX.Element;
}

export const FileRoot: Component<FileRootProps> = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export function FileMedia(props: FileMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const styles = useFile();
  const variant = () => local.variant ?? "icon";
  return (
    <ark.div
      {...rest}
      class={styles.slots.media({ class: local.class, variant: variant() })}
      data-part="media"
      data-scope="file"
      data-variant={variant()}
    >
      {local.children ?? <FileIcon />}
    </ark.div>
  );
}

export const FileContent: Component<FileContentProps> = withContext(ark.div, {
  name: "Content",
});

export const FileName: Component<FileNameProps> = withContext(ark.div, {
  name: "Name",
});

export const FileMeta: Component<FileMetaProps> = withContext(ark.div, {
  name: "Meta",
});

export function FileSize(props: FileSizeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "class"]);
  const styles = useFile();
  return (
    <ark.div
      {...rest}
      class={styles.slots.size({ class: local.class })}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={local.value} />
    </ark.div>
  );
}

export const FileActions: Component<FileActionsProps> = withContext(ark.div, {
  name: "Actions",
});

export function FileShorthand(props: FileProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "name",
    "actions",
    "media",
    "meta",
  ]);
  return (
    <FileRoot {...rest}>
      <FileMedia>{local.media}</FileMedia>
      <FileContent>
        <FileName>{local.name}</FileName>
        <Show when={local.meta}>
          <FileMeta>{local.meta}</FileMeta>
        </Show>
        {local.size !== undefined ? <FileSize value={local.size} /> : null}
      </FileContent>
      <Show when={local.actions}>
        <FileActions>{local.actions}</FileActions>
      </Show>
    </FileRoot>
  );
}

export const File = Object.assign(FileShorthand, {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
});
