export {};

declare global {
  interface ErrorConstructor {
    captureStackTrace?(
      target: object,
      constructorOpt?: (...args: unknown[]) => unknown,
    ): void;
  }
}
