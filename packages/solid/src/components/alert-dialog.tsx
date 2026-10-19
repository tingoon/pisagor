import {
  Dialog as AlertDialogPrimitive,
  type HTMLArkProps,
} from "@ark-ui/solid";
import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogPositionerProps,
  DialogRootProps as DialogRootPrimitiveProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/solid";
import type {
  AlertDialogContract,
  AlertDialogRootContract,
} from "@pisagor/contracts";
import { alertDialogRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { type DialogTriggerRender, renderTrigger } from "./dialog";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "AlertDialog",
  recipe: alertDialogRecipe,
});
// #endregion

// #region Types
export type AlertDialogRootProps = DialogRootPrimitiveProps &
  AlertDialogRootContract;

export type AlertDialogHeaderProps = HTMLArkProps<"div">;

export type AlertDialogBodyProps = HTMLArkProps<"div">;

export type AlertDialogFooterProps = HTMLArkProps<"div">;

export interface AlertDialogActionProps extends Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @defaultValue "default"
   */
  variant?: "default" | "destructive";
}

export type AlertDialogCancelProps = Omit<ButtonProps, "variant">;

export interface AlertDialogProps
  extends
    Omit<AlertDialogRootProps, "title">,
    Omit<AlertDialogContract, "actions" | "description" | "title" | "trigger"> {
  /** Footer action area. */
  actions?: JSX.Element;
  /** Supporting copy in the header. */
  description?: JSX.Element;
  /**
   * Whether to add a fade effect to the body scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /**
   * Whether to show a close button at the top end corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
  /** Alert dialog title. */
  title?: JSX.Element;
  /** Trigger that opens the alert dialog (render fn preferred). */
  trigger?: DialogTriggerRender;
}
// #endregion

// #region Parts
const Root = withProvider<AlertDialogRootProps>(AlertDialogPrimitive.Root, {
  defaultProps: { role: "alertdialog" },
  name: "Root",
  slot: "base",
});

// Zag looks triggers up by `[data-scope="dialog"]`, so keep the Ark scope.
const Trigger = withContext<DialogTriggerProps>(AlertDialogPrimitive.Trigger, {
  defaultProps: { "data-scope": "dialog" },
  name: "Trigger",
});

const Backdrop = withContext<DialogBackdropProps>(
  AlertDialogPrimitive.Backdrop,
  { name: "Backdrop" },
);

const Positioner = withContext<DialogPositionerProps>(
  AlertDialogPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DialogContentProps>(AlertDialogPrimitive.Content, {
  name: "Content",
});

const Header = withContext<AlertDialogHeaderProps>("div", { name: "Header" });

const Title = withContext<DialogTitleProps>(AlertDialogPrimitive.Title, {
  name: "Title",
});

const Description = withContext<DialogDescriptionProps>(
  AlertDialogPrimitive.Description,
  { name: "Description" },
);

const Body = withContext<AlertDialogBodyProps>("div", { name: "Body" });

const Footer = withContext<AlertDialogFooterProps>("div", { name: "Footer" });

const CloseTrigger = withContext<DialogCloseTriggerProps>(
  AlertDialogPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<DialogCloseTriggerProps>(
  AlertDialogPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "inline" },
);

/** Confirming action: a close trigger rendered as a `Button`. */
function Action(props: AlertDialogActionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant"]);

  return (
    <CloseTrigger
      asChild={(triggerProps) => (
        <Button {...triggerProps(rest)} variant={local.variant ?? "default"} />
      )}
    />
  );
}

/** Dismissing action: a close trigger rendered as an outline `Button`. */
function Cancel(props: AlertDialogCancelProps): JSX.Element {
  return (
    <CloseTrigger
      asChild={(triggerProps) => (
        <Button {...triggerProps(props)} variant="outline" />
      )}
    />
  );
}
// #endregion

// #region Shorthand
export function AlertDialogShorthand(props: AlertDialogProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "actions",
    "children",
    "classNames",
    "description",
    "modal",
    "scrollFade",
    "showCloseButton",
    "title",
    "trigger",
  ]);
  const modal = () => local.modal ?? true;
  const hasHeader = () =>
    local.title !== undefined || local.description !== undefined;

  return (
    <Root {...rest} modal={modal()}>
      <Show when={local.trigger !== undefined}>
        <Trigger
          asChild={renderTrigger(local.trigger)}
          class={local.classNames?.trigger}
        />
      </Show>

      <Portal>
        <Show when={modal()}>
          <Backdrop class={local.classNames?.backdrop} />
        </Show>

        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Show when={hasHeader()}>
              <Header class={local.classNames?.header}>
                <Show when={local.title !== undefined}>
                  <Title class={local.classNames?.title}>{local.title}</Title>
                </Show>

                <Show when={local.description !== undefined}>
                  <Description class={local.classNames?.description}>
                    {local.description}
                  </Description>
                </Show>
              </Header>
            </Show>

            <Show when={local.children !== undefined}>
              <ScrollArea scrollFade={local.scrollFade ?? false}>
                <Body class={local.classNames?.body}>{local.children}</Body>
              </ScrollArea>
            </Show>

            <Show when={local.actions !== undefined}>
              <Footer class={local.classNames?.footer}>{local.actions}</Footer>
            </Show>

            <Show when={local.showCloseButton ?? false}>
              <InlineCloseTrigger
                asChild={(triggerProps) => (
                  <Button
                    {...triggerProps()}
                    aria-label={m("dialog.close")}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <XIcon />
                  </Button>
                )}
                class={local.classNames?.inline}
              />
            </Show>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export type {
  DialogBackdropProps as AlertDialogBackdropProps,
  DialogCloseTriggerProps as AlertDialogCloseTriggerProps,
  DialogContentProps as AlertDialogContentProps,
  DialogDescriptionProps as AlertDialogDescriptionProps,
  DialogPositionerProps as AlertDialogPositionerProps,
  DialogTitleProps as AlertDialogTitleProps,
  DialogTriggerProps as AlertDialogTriggerProps,
} from "@ark-ui/solid";

export const AlertDialog = Object.assign(AlertDialogShorthand, {
  Action,
  Backdrop,
  Body,
  Cancel,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
});
