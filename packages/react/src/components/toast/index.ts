import { ToasterRoot, ToastItem, toast } from "./toast";

export type {
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToasterProps,
  ToasterRootProps,
  ToastItemProps,
  ToastItemRootProps,
  ToastTitleProps,
} from "./toast";
export { toast };

export const Toaster = Object.assign(ToasterRoot, {
  Item: ToastItem,
});
