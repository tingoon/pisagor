import type { createFormHook } from "@tanstack/react-form";

type BaseAppFormApi = ReturnType<ReturnType<typeof createFormHook>["useAppForm"]>;

export type AppFormApi = Pick<BaseAppFormApi, "AppForm" | "handleSubmit">;
