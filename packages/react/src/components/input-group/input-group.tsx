import {
  inputGroupControlVariants,
  inputGroupTextareaControlVariants,
} from "@pisagor/styles/ui/input-group";
import { cn } from "@pisagor/utils";
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
InputGroupInput.displayName = "InputGroup.Input";

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
InputGroupTextarea.displayName = "InputGroup.Textarea";
// #endregion
