export type VariantClassNames<
  TVariants extends (...args: never[]) => Record<string, (...args: never[]) => string>,
> = Partial<{ [K in keyof ReturnType<TVariants>]: string }>;

export interface WithTestId {
  /**
   * Sets `data-testid` on the component root (or its primary visible element for headless compounds).
   * Prefer `getByRole` / `getByLabelText` for sub-parts; use `data-scope` / `data-part` for structural targeting.
   * When both `testId` and `data-testid` are passed, `data-testid` wins.
   */
  testId?: string;
}
