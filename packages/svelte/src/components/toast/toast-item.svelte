<script lang="ts">
import type {
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToastOptions,
  ToastRootProps,
  ToastTitleProps,
} from "@ark-ui/svelte/toast";
import type { ToastItemProps as BaseToastItemProps } from "@pisagor/props";
import type { ToastItemRecipeSlot } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantClassNames } from "../../internal/types";
import ToastItemContent from "./toast-item-content.svelte";
import ToastItemRoot from "./toast-item-root.svelte";

type Props = Omit<ToastRootProps, "children"> & {
  /** Extra props forwarded to the toast actions container element */
  actionsProps?: Omit<HTMLAttributes<HTMLDivElement>, "class">;
  /** Extra props forwarded to the toast action trigger element */
  actionTriggerProps?: Omit<
    ToastActionTriggerProps,
    "asChild" | "children" | "class" | "onclick"
  >;
  /** Slot class names */
  classNames?: VariantClassNames<ToastItemRecipeSlot>;
  /** Extra props forwarded to the toast close trigger element */
  closeTriggerProps?: Omit<
    ToastCloseTriggerProps,
    "asChild" | "children" | "class"
  >;
  /** Extra props forwarded to the toast description element */
  descriptionProps?: Omit<ToastDescriptionProps, "children" | "class">;
  /** Extra props forwarded to the toast icon wrapper element */
  iconProps?: Omit<HTMLAttributes<HTMLDivElement>, "class">;
  /** Extra props forwarded to the toast title element */
  titleProps?: Omit<ToastTitleProps, "children" | "class">;
  /** The toast item data (accessor from `Toaster`) */
  toast: () => ToastOptions;
} & BaseToastItemProps;

let {
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  descriptionProps,
  iconProps,
  titleProps,
  toast: toastAccessor,
  classNames,
  ...rest
}: Props = $props();
</script>

<ToastItemRoot {...rest}>
  <ToastItemContent
    {actionsProps}
    {actionTriggerProps}
    {classNames}
    {closeTriggerProps}
    {descriptionProps}
    {iconProps}
    {titleProps}
    toast={toastAccessor()}
  />
</ToastItemRoot>
