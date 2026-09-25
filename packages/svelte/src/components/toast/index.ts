import { toast } from "./toast";
import ToastItem from "./toast-item.svelte";
import ToasterRoot from "./toaster.svelte";

export type { CreateToasterReturn, ToastOptions } from "@ark-ui/svelte/toast";
export { toast };

export const Toaster = Object.assign(ToasterRoot, {
  Item: ToastItem,
});
