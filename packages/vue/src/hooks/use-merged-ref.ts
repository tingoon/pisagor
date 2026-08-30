import type { Ref } from "vue";

export type PossibleRef<T> =
  | Ref<T | null | undefined>
  | ((instance: T | null) => void)
  | null
  | undefined;

type RefCleanup = undefined | (() => void);

/**
 * Assigns an element instance to a Vue template ref or callback ref.
 */
export function assignRef<T>(ref: PossibleRef<T>, value: T | null): RefCleanup {
  if (typeof ref === "function") {
    ref(value);
    return undefined;
  }

  if (ref != null) {
    ref.value = value;
  }
}

/**
 * Merges multiple template refs into a single callback ref.
 */
export function mergeRefs<T>(...refs: PossibleRef<T>[]): (instance: T | null) => RefCleanup {
  const cleanupMap = new Map<PossibleRef<T>, Exclude<RefCleanup, void>>();

  return (instance: T | null) => {
    for (const ref of refs) {
      const cleanup = assignRef(ref, instance);
      if (cleanup) {
        cleanupMap.set(ref, cleanup);
      }
    }

    if (cleanupMap.size === 0) {
      return;
    }

    return () => {
      for (const ref of refs) {
        const cleanup = cleanupMap.get(ref);
        if (typeof cleanup === "function") {
          cleanup();
        } else {
          assignRef(ref, null);
        }
      }
      cleanupMap.clear();
    };
  };
}

/**
 * Returns a callback ref that assigns the element to every provided ref.
 */
export function useMergedRef<T>(...refs: PossibleRef<T>[]): (instance: T | null) => RefCleanup {
  return mergeRefs(...refs);
}
