import type { createFormCreator } from "@tanstack/svelte-form";

type BaseAppFormApi = ReturnType<
  ReturnType<typeof createFormCreator>["createAppForm"]
>;

export type AppFormApi = Pick<BaseAppFormApi, "AppForm" | "handleSubmit">;
