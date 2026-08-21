/**
 * Makes the given keys required on `T` without changing other optionality.
 */
export type SetRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
