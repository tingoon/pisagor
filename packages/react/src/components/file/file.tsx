import { ark } from "@ark-ui/react/factory";
import { FileIcon } from "@phosphor-icons/react";
import {
  fileActionsVariants,
  fileContentVariants,
  fileMediaVariants,
  fileMetaVariants,
  fileNameVariants,
  fileSizeVariants,
  fileVariants,
} from "@pisagor/styles/ui/file";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";
import { Format } from "../format";

// #region Variants

// #endregion

// #region Types
type FileVariantProps = VariantProps<typeof fileVariants>;

export interface FileRootProps
  extends ComponentProps<typeof ark.div>,
    FileVariantProps,
    WithTestId {}

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

// #region Components
export function FileRoot({ className, testId, ...rest }: FileRootProps) {
  return (
    <ark.div
      {...rest}
      className={cn(fileVariants(), className)}
      data-part="root"
      data-scope="file"
      data-testid={testId}
    />
  );
}
FileRoot.displayName = "File.Root";

export function FileMedia({ variant = "icon", className, children, ...rest }: FileMediaProps) {
  return (
    <ark.div
      {...rest}
      className={cn(fileMediaVariants({ variant }), className)}
      data-part="media"
      data-scope="file"
      data-variant={variant}
    >
      {children ?? <FileIcon />}
    </ark.div>
  );
}
FileMedia.displayName = "File.Media";

export function FileContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(fileContentVariants(), className)}
      data-part="content"
      data-scope="file"
    />
  );
}
FileContent.displayName = "File.Content";

export function FileName({ className, ...rest }: FileNameProps) {
  return (
    <ark.div
      {...rest}
      className={cn(fileNameVariants(), className)}
      data-part="name"
      data-scope="file"
    />
  );
}
FileName.displayName = "File.Name";

export function FileMeta({ className, ...rest }: FileMetaProps) {
  return (
    <ark.div
      {...rest}
      className={cn(fileMetaVariants(), className)}
      data-part="meta"
      data-scope="file"
    />
  );
}
FileMeta.displayName = "File.Meta";

export function FileSize({ value, className, ...rest }: FileSizeProps) {
  return (
    <ark.div
      {...rest}
      className={cn(fileSizeVariants(), className)}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={value} />
    </ark.div>
  );
}
FileSize.displayName = "File.Size";

export function FileActions({ className, ...rest }: FileActionsProps) {
  return (
    <ark.div
      {...rest}
      className={cn(fileActionsVariants(), className)}
      data-part="actions"
      data-scope="file"
    />
  );
}
FileActions.displayName = "File.Actions";

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
FileShorthand.displayName = "File";
// #endregion
