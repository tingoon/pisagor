import {
  inputGroupControlRecipe,
  inputGroupTextareaControlRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Input, type InputProps } from "../input/input";
import { Textarea, type TextareaProps } from "../textarea/textarea";

export function InputGroupInput(props: InputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "classNames"]);

  return (
    <Input
      {...rest}
      class={inputGroupControlRecipe({ class: cn(local.class) })}
      classNames={{
        ...local.classNames,
        clearableRoot: cn(inputGroupControlRecipe(), local.classNames?.clearableRoot),
      }}
    />
  );
}

export function InputGroupTextarea(props: TextareaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["classNames"]);

  return (
    <Textarea
      {...rest}
      classNames={{
        ...local.classNames,
        rootLayout: cn(inputGroupTextareaControlRecipe(), local.classNames?.rootLayout),
      }}
    />
  );
}
