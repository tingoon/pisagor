import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { Button, type ButtonProps } from "../button";
import type {
  DialogBodyProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "../dialog";
import { Dialog } from "../dialog";
import { useDialog } from "../dialog/dialog.context";

export type AlertDialogRootProps = DialogRootProps;

export interface AlertDialogActionProps
  extends DialogCloseTriggerProps,
    Omit<ButtonProps, "variant"> {
  variant?: "default" | "destructive";
}

export interface AlertDialogCancelProps
  extends DialogCloseTriggerProps,
    Omit<ButtonProps, "variant"> {}

export interface AlertDialogProps
  extends Omit<AlertDialogRootProps, "children" | "title"> {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  trigger?:
    | JSX.Element
    | ((props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element);
}

export function AlertDialogRoot(props: AlertDialogRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);
  return (
    <Dialog.Root {...rest} role="alertdialog">
      {local.children}
    </Dialog.Root>
  );
}

export function AlertDialogTrigger(props: DialogTriggerProps): JSX.Element {
  return <Dialog.Trigger {...props} />;
}

export function AlertDialogContent(props: DialogContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["bottomStickOnMobile", "children"]);
  const bottomStickOnMobile = () => local.bottomStickOnMobile ?? true;

  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner bottomStickOnMobile={bottomStickOnMobile()}>
        <Dialog.Content
          {...rest}
          bottomStickOnMobile={bottomStickOnMobile()}
          showCloseButton={false}
        >
          {local.children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
}

export function AlertDialogBody(props: DialogBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDialog();

  return (
    <Dialog.Body
      {...rest}
      class={slots.alertBody({ class: local.class })}
      data-part="body"
      data-scope="alert-dialog"
    />
  );
}

export function AlertDialogHeader(props: DialogHeaderProps): JSX.Element {
  return (
    <Dialog.Header {...props} data-part="header" data-scope="alert-dialog" />
  );
}

export function AlertDialogTitle(props: DialogTitleProps): JSX.Element {
  return <Dialog.Title {...props} />;
}

export function AlertDialogDescription(
  props: DialogDescriptionProps,
): JSX.Element {
  return <Dialog.Description {...props} />;
}

export function AlertDialogCloseTrigger(
  props: DialogCloseTriggerProps,
): JSX.Element {
  return <Dialog.CloseTrigger {...props} />;
}

export function AlertDialogFooter(props: DialogFooterProps): JSX.Element {
  return (
    <Dialog.Footer {...props} data-part="footer" data-scope="alert-dialog" />
  );
}

export function AlertDialogAction(props: AlertDialogActionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant"]);
  return <Button {...rest} variant={local.variant ?? "default"} />;
}

export function AlertDialogCancel(props: AlertDialogCancelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["asChild", "class"]);
  return (
    <AlertDialogCloseTrigger
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: local.class })}
          {...rest}
          variant="outline"
        />
      )}
    />
  );
}

export function AlertDialogShorthand(props: AlertDialogProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "description",
    "title",
    "trigger",
  ]);

  return (
    <AlertDialogRoot {...rest}>
      <Show when={local.trigger !== undefined}>
        <AlertDialogTrigger
          asChild={(triggerProps) => {
            if (typeof local.trigger === "function") {
              return local.trigger(triggerProps());
            }
            return (
              <span {...triggerProps()} style={{ display: "contents" }}>
                {local.trigger}
              </span>
            );
          }}
        />
      </Show>

      <AlertDialogContent>
        <Show
          when={local.title !== undefined || local.description !== undefined}
        >
          <AlertDialogHeader>
            <Show when={local.title !== undefined}>
              <AlertDialogTitle>{local.title}</AlertDialogTitle>
            </Show>
            <Show when={local.description !== undefined}>
              <AlertDialogDescription>
                {local.description}
              </AlertDialogDescription>
            </Show>
          </AlertDialogHeader>
        </Show>
        <Show when={local.actions !== undefined}>
          <AlertDialogFooter>{local.actions}</AlertDialogFooter>
        </Show>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
