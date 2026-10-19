import type { FileContract, FileRootContract } from "@pisagor/contracts";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { FileIcon, createSlotRecipeContext } from "../internal";
import { Format } from "./format";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
// #endregion

export interface FileRootProps
  extends ComponentProps<"div">, FileRootContract {}

export interface FileMediaProps
  extends ComponentProps<"div">, FileVariantProps {}
export type FileNameProps = ComponentProps<"div">;
export type FileMetaProps = ComponentProps<"div">;

export interface FileSizeProps extends Omit<ComponentProps<"div">, "children"> {
  value: number;
}

export type FileActionsProps = ComponentProps<"div">;
export type FileContentProps = ComponentProps<"div">;

export interface FileProps
  extends Omit<FileRootProps, "children">, FileContract {
  size?: number;
  meta?: JSX.Element;
  name: JSX.Element;
  actions?: JSX.Element;
  media?: JSX.Element;
}

export const FileRoot: Component<FileRootProps> =
  withProvider<FileRootContract>("div", {
    name: "Root",
    slot: "base",
  });

export function FileMedia(props: FileMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const styles = useStyles();
  const variant = () => local.variant ?? "icon";

  return (
    <div
      {...rest}
      class={styles.slots.media({ class: local.class, variant: variant() })}
      data-part="media"
      data-scope="file"
      data-variant={variant()}
    >
      {local.children ?? <FileIcon />}
    </div>
  );
}

export const FileContent: Component<FileContentProps> = withContext("div", {
  name: "Content",
});

export const FileName: Component<FileNameProps> = withContext("div", {
  name: "Name",
});

export const FileMeta: Component<FileMetaProps> = withContext("div", {
  name: "Meta",
});

export function FileSize(props: FileSizeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "class"]);
  const styles = useStyles();

  return (
    <div
      {...rest}
      class={styles.slots.size({ class: local.class })}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={local.value} />
    </div>
  );
}

export const FileActions: Component<FileActionsProps> = withContext("div", {
  name: "Actions",
});

export function FileShorthand(props: FileProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "name",
    "meta",
    "actions",
    "media",
  ]);

  return (
    <FileRoot {...rest}>
      <FileMedia>{local.media}</FileMedia>
      <FileContent>
        <FileName>{local.name}</FileName>
        <Show when={local.meta}>
          <FileMeta>{local.meta}</FileMeta>
        </Show>
        <Show when={local.size !== undefined}>
          <FileSize value={local.size!} />
        </Show>
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
