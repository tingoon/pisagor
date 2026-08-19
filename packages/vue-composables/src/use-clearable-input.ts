import { computed, ref } from "vue";
import { type PossibleRef, useMergedRef } from "./use-merged-ref";

type ClearableElement = HTMLInputElement | HTMLTextAreaElement;

interface UseClearableInputOptions {
  clearable?: boolean;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: (event: Event) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  ref?: PossibleRef<ClearableElement>;
}

/**
 * Manages clearable text input state, change handlers, and merged template refs.
 */
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

  const inputRef = ref<ClearableElement | null>(null);
  const mergedRef = useMergedRef(inputRef, forwardedRef);
  const isControlled = value !== undefined;
  const internalValue = ref(defaultValue !== undefined ? String(defaultValue) : "");

  const currentValue = computed(() => (isControlled ? String(value ?? "") : internalValue.value));

  const canClear = computed(
    () => clearable && type !== "file" && !disabled && !readOnly && currentValue.value.length > 0,
  );

  const handleChange = (event: Event) => {
    const target = event.target as ClearableElement;

    if (!isControlled) {
      internalValue.value = target.value;
    }

    onChange?.(event);
    onValueChange?.(target.value);
  };

  const handleClear = () => {
    const element = inputRef.value;
    if (!element || !canClear.value) {
      return;
    }

    if (!isControlled) {
      internalValue.value = "";
    }

    const prototype =
      element instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
    setter?.call(element, "");
    element.dispatchEvent(new Event("input", { bubbles: true }));

    if (onChange || onValueChange) {
      onChange?.({ currentTarget: element, target: element } as unknown as Event);
      onValueChange?.("");
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
