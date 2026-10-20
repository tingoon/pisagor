import { Dialog as DialogPrimitive, Portal } from "@ark-ui/react";
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
import type { DialogContract, DialogRootContract } from "@pisagor/contracts";
import { dialogRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Dialog",
  recipe: dialogRecipe,
});
// #endregion

// #region Types
export type DialogRootProps = DialogRootPrimitiveProps & DialogRootContract;

export type DialogHeaderProps = ComponentPropsWithRef<"div">;

export type DialogBodyProps = ComponentPropsWithRef<"div">;

export type DialogFooterProps = ComponentPropsWithRef<"div">;

export interface DialogProps
  extends
    Omit<DialogRootProps, "title">,
    Omit<DialogContract, "actions" | "description" | "title" | "trigger"> {
  actions?: ReactNode;
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
   * @defaultValue true
   */
  showCloseButton?: boolean;
  title?: ReactNode;
  trigger?: ReactNode;
}
// #endregion

// #region Parts
const Root = withProvider<DialogRootProps>(DialogPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Trigger = withContext<DialogTriggerProps>(DialogPrimitive.Trigger, {
  name: "Trigger",
});

const Backdrop = withContext<DialogBackdropProps>(DialogPrimitive.Backdrop, {
  name: "Backdrop",
});

const Positioner = withContext<DialogPositionerProps>(
  DialogPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DialogContentProps>(DialogPrimitive.Content, {
  name: "Content",
});

const Header = withContext<DialogHeaderProps>("div", { name: "Header" });

const Title = withContext<DialogTitleProps>(DialogPrimitive.Title, {
  name: "Title",
});

const Description = withContext<DialogDescriptionProps>(
  DialogPrimitive.Description,
  { name: "Description" },
);

const Body = withContext<DialogBodyProps>("div", { name: "Body" });

const Footer = withContext<DialogFooterProps>("div", { name: "Footer" });

const CloseTrigger = withContext<DialogCloseTriggerProps>(
  DialogPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<DialogCloseTriggerProps>(
  DialogPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "inline" },
);
// #endregion

// #region Shorthand
export function DialogShorthand({
  actions,
  children,
  classNames,
  description,
  modal = true,
  scrollFade = false,
  showCloseButton = true,
  title,
  trigger,
  ...rest
}: DialogProps) {
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

export type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogPositionerProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react";

export const Dialog = Object.assign(DialogShorthand, {
  Backdrop,
  Body,
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
