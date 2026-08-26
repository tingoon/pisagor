import { ark } from "@ark-ui/react/factory";
import { FileIcon } from "@phosphor-icons/react";
import {
  type FileVariantProps,
  fileActionsVariants,
  fileContentVariants,
  fileMediaVariants,
  fileMetaVariants,
  fileNameVariants,
  fileSizeVariants,
  fileVariants,
} from "@pisagor/styles/ui/file";
import type { ComponentProps, ReactNode } from "react";
import { Format } from "../format";

// #region Types
export interface FileRootProps extends ComponentProps<typeof ark.div>, FileVariantProps {}

export interface FileMediaProps extends ComponentProps<typeof ark.div> {
  /**
   * Media presentation.
   *
   * @defaultValue "icon"
   */
  variant?: "icon" | "image";
}

export interface FileNameProps extends ComponentProps<typeof ark.div> {}

export interface FileMetaProps extends ComponentProps<typeof ark.div> {}

export interface FileSizeProps extends Omit<ComponentProps<typeof ark.div>, "children"> {
  /** File size in bytes. */
  value: number;
}

export interface FileActionsProps extends ComponentProps<typeof ark.div> {}

export interface FileContentProps extends ComponentProps<typeof ark.div> {}

export interface FileProps extends Omit<FileRootProps, "children" | "title"> {
  /** Display name for the file. */
  name: ReactNode;
  /** Optional subtitle (type, modified date, etc.). */
  meta?: ReactNode;
  /** Size in bytes; rendered with `Format.Byte` when set. */
  size?: number;
  /** Leading media; defaults to a file icon. */
  media?: ReactNode;
  /** Trailing actions (download, remove, …). */
  actions?: ReactNode;
}
// #endregion

// #region Parts
export function FileRoot({ className, ...rest }: FileRootProps) {
  return (
    <ark.div {...rest} className={fileVariants({ className })} data-part="root" data-scope="file" />
  );
}

export function FileMedia({ variant = "icon", className, children, ...rest }: FileMediaProps) {
  return (
    <ark.div
      {...rest}
      className={fileMediaVariants({ className, variant })}
      data-part="media"
      data-scope="file"
      data-variant={variant}
    >
      {children ?? <FileIcon />}
    </ark.div>
  );
}

export function FileContent({ className, ...rest }: FileContentProps) {
  return (
    <ark.div
      {...rest}
      className={fileContentVariants({ className })}
      data-part="content"
      data-scope="file"
    />
  );
}

export function FileName({ className, ...rest }: FileNameProps) {
  return (
    <ark.div
      {...rest}
      className={fileNameVariants({ className })}
      data-part="name"
      data-scope="file"
    />
  );
}

export function FileMeta({ className, ...rest }: FileMetaProps) {
  return (
    <ark.div
      {...rest}
      className={fileMetaVariants({ className })}
      data-part="meta"
      data-scope="file"
    />
  );
}

export function FileSize({ value, className, ...rest }: FileSizeProps) {
  return (
    <ark.div
      {...rest}
      className={fileSizeVariants({ className })}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={value} />
    </ark.div>
  );
}

export function FileActions({ className, ...rest }: FileActionsProps) {
  return (
    <ark.div
      {...rest}
      className={fileActionsVariants({ className })}
      data-part="actions"
      data-scope="file"
    />
  );
}
// #endregion

// #region Shorthand
export function FileShorthand({ name, meta, size, media, actions, ...rest }: FileProps) {
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
// #endregion

// #region Display Names
FileRoot.displayName = "File.Root";
FileMedia.displayName = "File.Media";
FileContent.displayName = "File.Content";
FileName.displayName = "File.Name";
FileMeta.displayName = "File.Meta";
FileSize.displayName = "File.Size";
FileActions.displayName = "File.Actions";
FileShorthand.displayName = "File";
// #endregion
