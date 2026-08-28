import {
  inputGroupControlVariants,
  inputGroupTextareaControlVariants,
} from "@pisagor/recipes/input-group";
import { cn } from "../../internal/utils";
import { Input, type InputProps } from "../input/input";
import { Textarea, type TextareaProps } from "../textarea/textarea";

// #region Parts
export function InputGroupInput({ className, classNames, ...rest }: InputProps) {
  return (
    <Input
      {...rest}
      className={inputGroupControlVariants({ className })}
      classNames={{
        ...classNames,
        clearableRoot: cn(inputGroupControlVariants(), classNames?.clearableRoot),
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
        rootLayout: cn(inputGroupTextareaControlVariants(), classNames?.rootLayout),
      }}
    />
  );
}
// #endregion

// #region Display Names
InputGroupInput.displayName = "InputGroup.Input";
InputGroupTextarea.displayName = "InputGroup.Textarea";
// #endregion
