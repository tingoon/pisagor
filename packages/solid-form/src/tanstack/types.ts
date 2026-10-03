import type { createFormHook } from "@tanstack/solid-form";

type BaseAppFormApi = ReturnType<
  ReturnType<typeof createFormHook>["useAppForm"]
>;

export type AppFormApi = Pick<BaseAppFormApi, "AppForm" | "handleSubmit">;
