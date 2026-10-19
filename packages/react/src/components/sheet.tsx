import { Dialog as DialogPrimitive, Portal } from "@ark-ui/react";
import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogRootProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type { SheetContract, SheetRootContract } from "@pisagor/contracts";
import { sheetRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import type { DialogBodyProps, DialogFooterProps } from "./dialog";
import { Dialog } from "./dialog";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Sheet",
  recipe: sheetRecipe,
});
// #endregion

// #region Types
export type SheetRootProps = DialogRootProps & SheetRootContract;

export type SheetPositionerProps = DialogPositionerProps;

export type SheetContentProps = DialogContentProps;

export type SheetBodyProps = DialogBodyProps;

export type SheetFooterProps = DialogFooterProps;

export interface SheetProps extends SheetRootProps, SheetContract {
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
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /** Sheet title. */
  title?: ReactNode;
  /** Trigger content that opens the sheet. */
  trigger?: ReactNode;
}

export type {
  DialogBackdropProps as SheetBackdropProps,
  DialogCloseTriggerProps as SheetCloseTriggerProps,
  DialogDescriptionProps as SheetDescriptionProps,
  DialogHeaderProps as SheetHeaderProps,
  DialogTitleProps as SheetTitleProps,
  DialogTriggerProps as SheetTriggerProps,
} from "./dialog";
// #endregion

// #region Parts
// Sheet is a Dialog with edge placement: the root also opens Dialog's styles
// context, so shared parts (header, title, …) are Dialog's own and the
// sheet-specific slots layer on top of them.
const Root = withProvider<SheetRootProps>(Dialog.Root, {
  name: "Root",
  slot: "base",
});

const Positioner = withContext<SheetPositionerProps>(
  DialogPrimitive.Positioner,
  { defaultProps: { "data-scope": "dialog" }, name: "Positioner" },
);

const Content = withContext<SheetContentProps>(DialogPrimitive.Content, {
  defaultProps: { "data-scope": "dialog" },
  name: "Content",
});

const Body = withContext<SheetBodyProps>(Dialog.Body, { name: "Body" });

const Footer = withContext<SheetFooterProps>(Dialog.Footer, {
  name: "Footer",
});

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<DialogCloseTriggerProps>(
  DialogPrimitive.CloseTrigger,
  {
    defaultProps: { "data-scope": "dialog" },
    name: "CloseTrigger",
    slot: "inline",
  },
);
// #endregion

// #region Shorthand
export function SheetShorthand({
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
}: SheetProps) {
  const { m } = useLocale();
  const hasHeader = title !== undefined || description !== undefined;

  return (
    <Root {...rest} modal={modal}>
      {trigger !== undefined && (
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      )}

      <Portal>
        {modal && <Dialog.Backdrop />}

        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {hasHeader && (
              <Dialog.Header>
                {title !== undefined && <Dialog.Title>{title}</Dialog.Title>}

                {description !== undefined && (
                  <Dialog.Description>{description}</Dialog.Description>
                )}
              </Dialog.Header>
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
                  aria-label={m("sheet.close")}
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

export const Sheet = Object.assign(SheetShorthand, {
  Backdrop: Dialog.Backdrop,
  Body,
  CloseTrigger: Dialog.CloseTrigger,
  Content,
  Description: Dialog.Description,
  Footer,
  Header: Dialog.Header,
  Positioner,
  Root,
  Title: Dialog.Title,
  Trigger: Dialog.Trigger,
});
