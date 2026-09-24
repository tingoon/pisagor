import { type Accessor, createMemo, createSignal } from "solid-js";

type ClearableElement = HTMLInputElement | HTMLTextAreaElement;

interface UseClearableInputOptions<T extends ClearableElement> {
  clearable?: boolean;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: (event: Event & { currentTarget: T; target: T }) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  ref?: (el: T) => void;
}

export function useClearableInput<T extends ClearableElement>(
  options: UseClearableInputOptions<T>,
) {
  let inputEl: T | undefined;

  const isControlled = () => options.value !== undefined;
  const [uncontrolled, setUncontrolled] = createSignal(
    options.defaultValue !== undefined ? String(options.defaultValue) : "",
  );

  const currentValue: Accessor<string> = createMemo(() =>
    isControlled() ? String(options.value ?? "") : uncontrolled(),
  );

  const canClear = createMemo(
    () =>
      Boolean(options.clearable) &&
      options.type !== "file" &&
      !options.disabled &&
      !options.readOnly &&
      currentValue().length > 0,
  );

  const mergedRef = (el: T) => {
    inputEl = el;
    if (!isControlled() && options.defaultValue !== undefined && el.value === "") {
      el.value = String(options.defaultValue);
    }
    options.ref?.(el);
  };

  const handleChange = (event: Event & { currentTarget: T; target: T }) => {
    const next = event.currentTarget.value;
    if (!isControlled()) {
      setUncontrolled(next);
    }
    options.onValueChange?.(next);
    options.onChange?.(event);
  };

  const handleClear = () => {
    const element = inputEl;
    if (!element || !canClear()) {
      return;
    }

    if (!isControlled()) {
      setUncontrolled("");
    }
    options.onValueChange?.("");

    const prototype =
      element instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
    setter?.call(element, "");
    element.dispatchEvent(new Event("input", { bubbles: true }));

    if (options.onChange) {
      options.onChange({
        currentTarget: element,
        target: element,
      } as Event & { currentTarget: T; target: T });
    }

    element.focus();
  };

  return {
    canClear,
    handleChange,
    handleClear,
    mergedRef,
  };
}
