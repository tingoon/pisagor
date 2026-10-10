import { ark } from "@ark-ui/react/factory";
import { FileIcon } from "@phosphor-icons/react";
import type { FileProps as BaseFileRootProps } from "@pisagor/props";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Format } from "./format";

// #region Context
const {
  useStyles: useFile,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
// #endregion

// #region Parts
export const FileRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<ComponentProps<typeof ark.div> & BaseFileRootProps>;

export function FileMedia({
  variant = "icon",
  children,
  className,
  ...rest
}: ComponentProps<typeof ark.div> & FileVariantProps) {
  const { slots } = useFile();

  return (
    <ark.div
      {...rest}
      className={slots.media({ className, variant })}
      data-part="media"
      data-scope="file"
      data-variant={variant}
    >
      {children ?? <FileIcon />}
    </ark.div>
  );
}

export const FileContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const FileName = withContext(ark.div, {
  name: "Name",
  slot: "name",
});

export const FileMeta = withContext(ark.div, {
  name: "Meta",
  slot: "meta",
});

export function FileSize({
  value,
  className,
  ...rest
}: Omit<ComponentProps<typeof ark.div>, "children"> & {
  value: number;
}) {
  const { slots } = useFile();

  return (
    <ark.div
      {...rest}
      className={slots.size({ className })}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={value} />
    </ark.div>
  );
}

export const FileActions = withContext(ark.div, {
  name: "Actions",
  slot: "actions",
});
// #endregion

// #region Types
export type FileRootProps = ComponentProps<typeof FileRoot>;
export type FileMediaProps = ComponentProps<typeof FileMedia>;
export type FileNameProps = ComponentProps<typeof FileName>;
export type FileMetaProps = ComponentProps<typeof FileMeta>;
export type FileSizeProps = ComponentProps<typeof FileSize>;
export type FileActionsProps = ComponentProps<typeof FileActions>;
export type FileContentProps = ComponentProps<typeof FileContent>;

export interface FileProps extends Omit<FileRootProps, "children" | "title"> {
  /** Size in bytes; rendered with `Format.Byte` when set. */
  size?: number;
  /** Optional subtitle (type, modified date, etc.). */
  meta?: ReactNode;
  /** Display name for the file. */
  name: ReactNode;
  /** Trailing actions (download, remove, …). */
  actions?: ReactNode;
  /** Leading media; defaults to a file icon. */
  media?: ReactNode;
}
// #endregion

// #region Shorthand
export function FileShorthand({
  size,
  name,
  actions,
  media,
  meta,
  ...rest
}: FileProps) {
  return (
    <FileRoot {...rest}>
      <FileMedia>{media}</FileMedia>

      <FileContent>
        <FileName>{name}</FileName>

        {meta ? <FileMeta>{meta}</FileMeta> : null}

        {size !== undefined ? <FileSize value={size} /> : null}
      </FileContent>

      {actions ? <FileActions>{actions}</FileActions> : null}
    </FileRoot>
  );
}

FileMedia.displayName = "File.Media";
FileSize.displayName = "File.Size";
FileShorthand.displayName = "File";
// #endregion

export const File = Object.assign(FileShorthand, {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
});
