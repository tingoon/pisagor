export type VariantClassNames<
  TVariants extends (...args: never[]) => Record<string, (...args: never[]) => string>,
> = Partial<{ [K in keyof ReturnType<TVariants>]: string }>;

export type WithTestId = {
  /**
   * Test id forwarded to `data-testid`.
   * Prefer role/label queries; use `data-scope` / `data-part` for structural targeting.
   */
  testId?: string;
};
