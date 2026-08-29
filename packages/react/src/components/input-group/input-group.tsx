import {
  inputGroupControlRecipe,
  inputGroupTextareaControlRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "../../internal/utils";
import { Input, type InputProps } from "../input/input";
import { Textarea, type TextareaProps } from "../textarea/textarea";

// #region Parts
export function InputGroupInput({ className, classNames, ...rest }: InputProps) {
  return (
    <Input
      {...rest}
      className={inputGroupControlRecipe({ className })}
      classNames={{
        ...classNames,
        clearableRoot: cn(inputGroupControlRecipe(), classNames?.clearableRoot),
      }}
    />
  );
}

export function InputGroupTextarea({ classNames, ...rest }: TextareaProps) {
  return (
    <Textarea
      {...rest}
      classNames={{
        ...classNames,
        rootLayout: cn(inputGroupTextareaControlRecipe(), classNames?.rootLayout),
      }}
    />
  );
}
// #endregion

// #region Display Names
InputGroupInput.displayName = "InputGroup.Input";
InputGroupTextarea.displayName = "InputGroup.Textarea";
// #endregion
