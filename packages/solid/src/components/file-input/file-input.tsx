import { ark } from "@ark-ui/solid/factory";
import { fileInputRecipe } from "@pisagor/recipes/file-input";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createSignal, splitProps } from "solid-js";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  type InputGroupTextProps,
} from "../input-group/input-group-core";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { FileInputContext, useFileInput } from "./file-input.context";

type FormControlVariant = "primary" | "secondary";
type FileInputVariantProps = FormControlGroupShellVariantProps;

type NativeFileInputProps = Omit<
  ComponentProps<"input">,
  "defaultValue" | "onChange" | "size" | "type" | "value"
>;

type FileInputRootProps = ComponentProps<typeof ark.div> &
  FileInputVariantProps & {
    disabled?: boolean;
    recipe?: typeof fileInputRecipe;
  };

export interface FileInputProps extends NativeFileInputProps, FileInputVariantProps {
  invalid?: boolean;
  browseLabel?: string;
  placeholder?: string;
  onChange?: (event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }) => void;
  onFilesChange?: (files: globalThis.File[]) => void;
  onValueChange?: (files: globalThis.File[]) => void;
  recipe?: typeof fileInputRecipe;
}

interface FileInputControlProps extends ComponentProps<"input"> {}
interface FileInputLabelProps extends InputGroupTextProps {}

function getSelectedFiles(input: HTMLInputElement): globalThis.File[] {
  return input.files ? Array.from(input.files) : [];
}

function formatFileLabel(files: globalThis.File[]): string | undefined {
  if (files.length === 0) return undefined;
  if (files.length === 1) return files[0]?.name;
  return `${files.length} files selected`;
}

function FileInputRoot(props: FileInputRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "disabled",
    "children",
    "recipe",
    "class",
  ]);
  const surfaceVariant = useFormControlSurface();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = () => (local.recipe ?? fileInputRecipe)();

  return (
    <FileInputContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={formControlGroupShellRecipe({
          class: cn(local.class),
          size: size(),
          surfaceVariant,
          variant: variant(),
        })}
        data-disabled={local.disabled ? true : undefined}
        data-part="root"
        data-scope="file-input"
        data-size={size()}
        data-variant={variant()}
        role="group"
      >
        {local.children}
      </ark.div>
    </FileInputContext>
  );
}

function FileInputControl(props: FileInputControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useFileInput();
  return (
    <input
      {...rest}
      class={slots.control({ class: local.class })}
      data-part="control"
      data-scope="file-input"
      type="file"
    />
  );
}

function FileInputLabel(props: FileInputLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFileInput();
  return (
    <InputGroupText {...rest} class={slots.label({ class: local.class })}>
      {local.children}
    </InputGroupText>
  );
}

export function FileInput(props: FileInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "accept",
    "disabled",
    "invalid",
    "multiple",
    "name",
    "required",
    "browseLabel",
    "capture",
    "id",
    "placeholder",
    "ref",
    "onChange",
    "onFilesChange",
    "onValueChange",
    "recipe",
    "class",
  ]);

  let inputEl: HTMLInputElement | undefined;
  const [fileLabel, setFileLabel] = createSignal<string>();

  const openPicker = () => inputEl?.click();

  const changeHandler = (
    event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
  ) => {
    local.onChange?.(event);
    const files = getSelectedFiles(event.currentTarget);
    local.onFilesChange?.(files);
    local.onValueChange?.(files);
    setFileLabel(formatFileLabel(files));
  };

  return (
    <FileInputRoot
      class={local.class}
      disabled={local.disabled}
      recipe={local.recipe}
      size={local.size}
      variant={local.variant}
    >
      <FileInputControl
        {...rest}
        accept={local.accept}
        aria-invalid={local.invalid || undefined}
        capture={local.capture}
        data-invalid={local.invalid || undefined}
        disabled={local.disabled}
        id={local.id}
        multiple={local.multiple}
        name={local.name}
        onChange={changeHandler}
        ref={(el) => {
          inputEl = el;
          if (typeof local.ref === "function") local.ref(el);
        }}
        required={local.required}
      />
      <InputGroupAddon align="inline-start">
        <InputGroupButton disabled={local.disabled} onClick={openPicker} type="button">
          {local.browseLabel ?? "Choose file"}
        </InputGroupButton>
      </InputGroupAddon>
      <FileInputLabel onClick={local.disabled ? undefined : openPicker}>
        {fileLabel() ?? local.placeholder ?? "No file chosen"}
      </FileInputLabel>
    </FileInputRoot>
  );
}
