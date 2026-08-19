export {};

declare global {
  interface ErrorConstructor {
    captureStackTrace?(target: object, constructorOpt?: (...args: unknown[]) => unknown): void;
  }
}

declare module "react" {
  interface CSSProperties {
    [customProperty: `--${string}`]: string | number | undefined;
  }
}

declare module "@pisagor/react/styles";
declare module "@pisagor/tokens/styles";
