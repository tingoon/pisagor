export type VariantClassNames<T extends string> = Partial<Record<Exclude<T, "base">, string>>;

export type WithTestId = {
  /**
   * Test id forwarded to `data-testid`.
   * Prefer role/label queries; use `data-scope` / `data-part` for structural targeting.
   */
  testId?: string;
};
