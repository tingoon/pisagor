/**
 * Merge named option getters with `$props()` rest so TanStack Table's
 * `$effect.pre` sync re-reads live prop values instead of init-time snapshots.
 *
 * Pass rest via a getter (`() => restOptions`) so Svelte does not warn about
 * capturing the initial rest object.
 */
export function reactiveTableOptions<T extends object>(
  named: T,
  getRest: () => object,
): T {
  return new Proxy(named, {
    get(target, prop, receiver) {
      if (Reflect.getOwnPropertyDescriptor(target, prop)) {
        return Reflect.get(target, prop, receiver);
      }
      return Reflect.get(getRest(), prop);
    },
    getOwnPropertyDescriptor(target, prop) {
      const own = Reflect.getOwnPropertyDescriptor(target, prop);
      if (own) return own;
      if (prop in getRest()) {
        return {
          configurable: true,
          enumerable: true,
          get() {
            return Reflect.get(getRest(), prop);
          },
        };
      }
      return undefined;
    },
    has(target, prop) {
      return (
        Reflect.getOwnPropertyDescriptor(target, prop) !== undefined ||
        prop in getRest()
      );
    },
    ownKeys(target) {
      return [
        ...new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(getRest())]),
      ];
    },
  });
}
