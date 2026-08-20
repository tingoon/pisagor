export type VariantClassNames<T extends string> = Partial<Record<Exclude<T, "base">, string>>;

export interface WithTestId {
  /**
   * Sets `data-testid` on the component root (or its primary visible element for headless compounds).
   * Prefer `getByRole` / `getByLabelText` for sub-parts; use `data-scope` / `data-part` for structural targeting.
   */
  testId?: string;
}
