import { type Accessor, createMemo, createSignal } from "solid-js";

export interface UseUncontrolledInput<T> {
  value?: T;
  defaultValue?: T;
  finalValue?: T;
  onChange?: (value: T, ...payload: unknown[]) => void;
}

/** Minimal Solid stand-in for Mantine `useUncontrolled`. */
export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange,
}: UseUncontrolledInput<T>): [
  Accessor<T>,
  (value: T, ...payload: unknown[]) => void,
] {
  const isControlled = () => value !== undefined;
  const [uncontrolled, setUncontrolled] = createSignal(
    (defaultValue !== undefined ? defaultValue : finalValue) as T,
  );

  const current = createMemo(() =>
    isControlled() ? (value as T) : uncontrolled(),
  );

  const setValue = (next: T, ...payload: unknown[]) => {
    if (!isControlled()) {
      setUncontrolled(() => next);
    }
    onChange?.(next, ...payload);
  };

  return [current, setValue];
}
