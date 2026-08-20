import { useMergedRef, useUncontrolled } from "@pisagor/react-hooks";
import type { ChangeEvent, ChangeEventHandler, Ref } from "react";
import { useCallback, useRef } from "react";

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

  const [currentValue, setCurrentValue] = useUncontrolled({
    defaultValue: defaultValue !== undefined ? String(defaultValue) : undefined,
    finalValue: "",
    onChange: onValueChange,
    value: value !== undefined ? String(value) : undefined,
  });

  const canClear =
    clearable && type !== "file" && !disabled && !readOnly && currentValue.length > 0;

  const handleChange = useCallback(
    (event: ChangeEvent<ClearableElement>) => {
      setCurrentValue(event.target.value);
      onChange?.(event);
    },
    [onChange, setCurrentValue],
  );

  const handleClear = useCallback(() => {
    const element = inputRef.current;
    if (!element || !canClear) {
      return;
    }

    setCurrentValue("");

    const prototype =
      element instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
    setter?.call(element, "");
    element.dispatchEvent(new Event("input", { bubbles: true }));

    if (onChange) {
      const event = {
        currentTarget: element,
        target: element,
      } as ChangeEvent<ClearableElement>;

      onChange(event);
    }

    element.focus();
  }, [canClear, onChange, setCurrentValue]);

  return {
    canClear,
    handleChange,
    handleClear,
    mergedRef,
  };
}
