import { Dialog as AlertDialogPrimitive, Portal } from "@ark-ui/react";
import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogPositionerProps,
  DialogRootProps as DialogRootPrimitiveProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type {
  AlertDialogContract,
  AlertDialogRootContract,
} from "@pisagor/contracts";
import { alertDialogRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
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

export type AlertDialogHeaderProps = ComponentPropsWithRef<"div">;

export type AlertDialogBodyProps = ComponentPropsWithRef<"div">;

export type AlertDialogFooterProps = ComponentPropsWithRef<"div">;

export interface AlertDialogActionProps
  extends DialogCloseTriggerProps, Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @defaultValue "default"
   */
  variant?: "default" | "destructive";
}

export type AlertDialogCancelProps = DialogCloseTriggerProps &
  Omit<ButtonProps, "variant">;

export interface AlertDialogProps
  extends
    Omit<AlertDialogRootProps, "title">,
    Omit<AlertDialogContract, "actions" | "description" | "title" | "trigger"> {
  /** Footer action area. */
  actions?: ReactNode;
  /** Supporting copy in the header. */
  description?: ReactNode;
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
  title?: ReactNode;
  /** Trigger content that opens the alert dialog. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
const Root = withProvider<AlertDialogRootProps>(AlertDialogPrimitive.Root, {
  defaultProps: { role: "alertdialog" },
  name: "Root",
  slot: "base",
});

const Trigger = withContext<DialogTriggerProps>(AlertDialogPrimitive.Trigger, {
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
function Action({ variant = "default", ...rest }: AlertDialogActionProps) {
  return (
    <CloseTrigger asChild>
      <Button {...rest} variant={variant} />
    </CloseTrigger>
  );
}

/** Dismissing action: a close trigger rendered as an outline `Button`. */
function Cancel(props: AlertDialogCancelProps) {
  return (
    <CloseTrigger asChild>
      <Button {...props} variant="outline" />
    </CloseTrigger>
  );
}
// #endregion

// #region Shorthand
export function AlertDialogShorthand({
  actions,
  children,
  classNames,
  description,
  modal = true,
  scrollFade = false,
  showCloseButton = false,
  title,
  trigger,
  ...rest
}: AlertDialogProps) {
  const { m } = useLocale();
  const hasHeader = title !== undefined || description !== undefined;

  return (
    <Root {...rest} modal={modal}>
      {trigger !== undefined && (
        <Trigger asChild className={classNames?.trigger}>
          {trigger}
        </Trigger>
      )}

      <Portal>
        {modal && <Backdrop className={classNames?.backdrop} />}

        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {hasHeader && (
              <Header className={classNames?.header}>
                {title !== undefined && (
                  <Title className={classNames?.title}>{title}</Title>
                )}

                {description !== undefined && (
                  <Description className={classNames?.description}>
                    {description}
                  </Description>
                )}
              </Header>
            )}

            {children !== undefined && (
              <ScrollArea scrollFade={scrollFade}>
                <Body className={classNames?.body}>{children}</Body>
              </ScrollArea>
            )}

            {actions !== undefined && (
              <Footer className={classNames?.footer}>{actions}</Footer>
            )}

            {showCloseButton && (
              <InlineCloseTrigger asChild className={classNames?.inline}>
                <Button
                  aria-label={m("dialog.close")}
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              </InlineCloseTrigger>
            )}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

// #region Display Names
Action.displayName = "AlertDialog.Action";
Cancel.displayName = "AlertDialog.Cancel";
// #endregion

export type {
  DialogBackdropProps as AlertDialogBackdropProps,
  DialogCloseTriggerProps as AlertDialogCloseTriggerProps,
  DialogContentProps as AlertDialogContentProps,
  DialogDescriptionProps as AlertDialogDescriptionProps,
  DialogPositionerProps as AlertDialogPositionerProps,
  DialogTitleProps as AlertDialogTitleProps,
  DialogTriggerProps as AlertDialogTriggerProps,
} from "@ark-ui/react";

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
