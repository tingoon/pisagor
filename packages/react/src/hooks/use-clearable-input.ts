import { useMergedRef } from "@pisagor/react-hooks";
import type { ChangeEvent, ChangeEventHandler, Ref } from "react";
import { useCallback, useRef, useState } from "react";

type ClearableElement = HTMLInputElement | HTMLTextAreaElement;

interface UseClearableInputOptions {
  clearable?: boolean;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<ClearableElement>;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  ref?: Ref<ClearableElement>;
}

export function useClearableInput(options: UseClearableInputOptions) {
  const {
    clearable = false,
    value,
    defaultValue,
    onChange,
    onValueChange,
    disabled,
    readOnly,
    type,
    ref: forwardedRef,
  } = options;

  const inputRef = useRef<ClearableElement>(null);
  const mergedRef = useMergedRef(inputRef, forwardedRef);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(() =>
    defaultValue !== undefined ? String(defaultValue) : "",
  );

  const currentValue = isControlled ? String(value ?? "") : internalValue;

  const canClear =
    clearable && type !== "file" && !disabled && !readOnly && currentValue.length > 0;

  const handleChange = useCallback(
    (event: ChangeEvent<ClearableElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
      onValueChange?.(event.target.value);
    },
    [isControlled, onChange, onValueChange],
  );

  const handleClear = useCallback(() => {
    const element = inputRef.current;
    if (!element || !canClear) {
      return;
    }

    if (!isControlled) {
      setInternalValue("");
    }

    const prototype =
      element instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
    setter?.call(element, "");
    element.dispatchEvent(new Event("input", { bubbles: true }));

    if (onChange || onValueChange) {
      const event = {
        currentTarget: element,
        target: element,
      } as ChangeEvent<ClearableElement>;

      onChange?.(event);
      onValueChange?.("");
    }

    element.focus();
  }, [canClear, isControlled, onChange, onValueChange]);

  return {
    canClear,
    handleChange,
    handleClear,
    mergedRef,
  };
}
