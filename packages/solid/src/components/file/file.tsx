import { ark } from "@ark-ui/solid/factory";
import { type FileVariantProps, fileRecipe } from "@pisagor/recipes/file";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { FileIcon } from "../../internal/icons";
import { Format } from "../format";
import { FileContext, useFile } from "./file.context";

export interface FileRootProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof fileRecipe;
}

export interface FileMediaProps extends ComponentProps<typeof ark.div>, FileVariantProps {}
export type FileNameProps = ComponentProps<typeof ark.div>;
export type FileMetaProps = ComponentProps<typeof ark.div>;

export interface FileSizeProps extends Omit<ComponentProps<typeof ark.div>, "children"> {
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

export function FileRoot(props: FileRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? fileRecipe)();
  return (
    <FileContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="file"
      >
        {local.children}
      </ark.div>
    </FileContext>
  );
}

export function FileMedia(props: FileMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const { slots } = useFile();
  const variant = () => local.variant ?? "icon";
  return (
    <ark.div
      {...rest}
      class={slots.media({ class: cn(local.class), variant: variant() })}
      data-part="media"
      data-scope="file"
      data-variant={variant()}
    >
      {local.children ?? <FileIcon />}
    </ark.div>
  );
}

export function FileContent(props: FileContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFile();
  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="content"
      data-scope="file"
    />
  );
}

export function FileName(props: FileNameProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFile();
  return (
    <ark.div
      {...rest}
      class={slots.name({ class: cn(local.class) })}
      data-part="name"
      data-scope="file"
    />
  );
}

export function FileMeta(props: FileMetaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFile();
  return (
    <ark.div
      {...rest}
      class={slots.meta({ class: cn(local.class) })}
      data-part="meta"
      data-scope="file"
    />
  );
}

export function FileSize(props: FileSizeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "class"]);
  const { slots } = useFile();
  return (
    <ark.div
      {...rest}
      class={slots.size({ class: cn(local.class) })}
      data-part="size"
      data-scope="file"
    >
      <Format.Byte value={local.value} />
    </ark.div>
  );
}

export function FileActions(props: FileActionsProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFile();
  return (
    <ark.div
      {...rest}
      class={slots.actions({ class: cn(local.class) })}
      data-part="actions"
      data-scope="file"
    />
  );
}

export function FileShorthand(props: FileProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "name", "actions", "media", "meta"]);
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
