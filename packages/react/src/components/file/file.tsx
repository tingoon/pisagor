import { ark } from "@ark-ui/react/factory";
import { FileIcon } from "@phosphor-icons/react";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes/file";
import type { ComponentProps, ReactNode } from "react";
import { Format } from "../format";
import { FileContext, useFile } from "./file.context";

// #region Types
export type FileRootProps = ComponentProps<typeof ark.div>;

export interface FileMediaProps extends ComponentProps<typeof ark.div>, FileVariantProps {}

export type FileNameProps = ComponentProps<typeof ark.div>;

export type FileMetaProps = ComponentProps<typeof ark.div>;

export interface FileSizeProps extends Omit<ComponentProps<typeof ark.div>, "children"> {
  /** File size in bytes. */
  value: number;
}

export type FileActionsProps = ComponentProps<typeof ark.div>;

export type FileContentProps = ComponentProps<typeof ark.div>;

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

// #region Parts
export function FileRoot({ children, className, ...rest }: FileRootProps) {
  const slots = fileRecipe();

  return (
    <FileContext value={{ slots }}>
      <ark.div {...rest} className={slots.base({ className })} data-part="root" data-scope="file">
        {children}
      </ark.div>
    </FileContext>
  );
}

export function FileMedia({ variant = "icon", children, className, ...rest }: FileMediaProps) {
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

export function FileContent({ className, ...rest }: FileContentProps) {
  const { slots } = useFile();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="file"
    />
  );
}

export function FileName({ className, ...rest }: FileNameProps) {
  const { slots } = useFile();

  return (
    <ark.div {...rest} className={slots.name({ className })} data-part="name" data-scope="file" />
  );
}

export function FileMeta({ className, ...rest }: FileMetaProps) {
  const { slots } = useFile();

  return (
    <ark.div {...rest} className={slots.meta({ className })} data-part="meta" data-scope="file" />
  );
}

export function FileSize({ value, className, ...rest }: FileSizeProps) {
  const { slots } = useFile();

  return (
    <ark.div {...rest} className={slots.size({ className })} data-part="size" data-scope="file">
      <Format.Byte value={value} />
    </ark.div>
  );
}

export function FileActions({ className, ...rest }: FileActionsProps) {
  const { slots } = useFile();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className })}
      data-part="actions"
      data-scope="file"
    />
  );
}
// #endregion

// #region Shorthand
export function FileShorthand({ size, name, actions, media, meta, ...rest }: FileProps) {
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
