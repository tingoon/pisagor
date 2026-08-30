import { computed, type MaybeRefOrGetter, ref, toValue } from "vue";

type ClearableElement = HTMLInputElement | HTMLTextAreaElement;

export type ClearableChangeEvent = Event & {
  currentTarget: ClearableElement;
  target: ClearableElement;
};

interface UseClearableInputOptions {
  clearable?: MaybeRefOrGetter<boolean>;
  defaultValue?: string | number | readonly string[];
  disabled?: MaybeRefOrGetter<boolean | undefined>;
  onChange?: (event: ClearableChangeEvent) => void;
  onValueChange?: (value: string) => void;
  readOnly?: MaybeRefOrGetter<boolean | undefined>;
  type?: MaybeRefOrGetter<string | undefined>;
  value?: MaybeRefOrGetter<string | number | readonly string[] | undefined>;
}

export function useClearableInput(options: UseClearableInputOptions) {
  const inputRef = ref<ClearableElement | null>(null);
  const isControlled = computed(() => toValue(options.value) !== undefined);
  const internalValue = ref(options.defaultValue !== undefined ? String(options.defaultValue) : "");

  const currentValue = computed(() =>
    isControlled.value ? String(toValue(options.value) ?? "") : internalValue.value,
  );

  const canClear = computed(
    () =>
      toValue(options.clearable) &&
      toValue(options.type) !== "file" &&
      !toValue(options.disabled) &&
      !toValue(options.readOnly) &&
      currentValue.value.length > 0,
  );

  function handleChange(event: Event) {
    const target = event.target as ClearableElement;

    if (!isControlled.value) {
      internalValue.value = target.value;
    }

    options.onChange?.(event as ClearableChangeEvent);
    options.onValueChange?.(target.value);
  }

  function handleClear() {
    const element = inputRef.value;

    if (!element || !canClear.value) {
      return;
    }

    if (!isControlled.value) {
      internalValue.value = "";
    }

    const prototype =
      element instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
    setter?.call(element, "");
    element.dispatchEvent(new Event("input", { bubbles: true }));

    if (options.onChange || options.onValueChange) {
      const event = {
        currentTarget: element,
        target: element,
      } as ClearableChangeEvent;

      options.onChange?.(event);
      options.onValueChange?.("");
    }

    element.focus();
  }

  return {
    canClear,
    handleChange,
    handleClear,
    inputRef,
  };
}
