import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { FileProps as BaseFileRootProps } from "@pisagor/props";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { FileIcon, createSlotRecipeContext } from "../internal";
import { Format } from "./format";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
// #endregion

export interface FileRootProps extends HTMLArkProps<"div">, BaseFileRootProps {}

export interface FileMediaProps extends HTMLArkProps<"div">, FileVariantProps {}
export type FileNameProps = HTMLArkProps<"div">;
export type FileMetaProps = HTMLArkProps<"div">;

export interface FileSizeProps extends Omit<HTMLArkProps<"div">, "children"> {
  value: number;
}

export type FileActionsProps = HTMLArkProps<"div">;
export type FileContentProps = HTMLArkProps<"div">;

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
  const styles = useStyles();
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
  const styles = useStyles();

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

const fileParts = {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
};

export const FileItem = Object.assign(FileShorthand, fileParts);

/** @deprecated Use `FileItem`. `File` shadows the global `File` constructor. */
export const File = Object.assign(FileShorthand, fileParts);
