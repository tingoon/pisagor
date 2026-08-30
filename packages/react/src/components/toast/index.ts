import { ToasterRoot, ToastItem, toast } from "./toast";

export type {
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToastTitleProps,
} from "@ark-ui/react/toast";

export type {
  ToasterProps,
  ToasterRootProps,
  ToastItemProps,
  ToastItemRootProps,
} from "./toast";
export { toast };

export const Toaster = Object.assign(ToasterRoot, {
  Item: ToastItem,
});
