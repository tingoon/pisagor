import { ToasterRoot, ToastItem, toast } from "./toast";

export type { ToasterProps, ToastItemProps } from "./toast";
export { toast };

export const Toaster = Object.assign(ToasterRoot, {
  Item: ToastItem,
});
