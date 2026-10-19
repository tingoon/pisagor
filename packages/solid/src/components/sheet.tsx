import { Dialog as DialogPrimitive } from "@ark-ui/solid";
import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogRootProps,
} from "@ark-ui/solid";
import type { SheetContract, SheetRootContract } from "@pisagor/contracts";
import { sheetRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import type {
  DialogBodyProps,
  DialogFooterProps,
  DialogTriggerRender,
} from "./dialog";
import { Dialog, renderTrigger } from "./dialog";
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

export interface SheetProps
  extends Omit<SheetRootProps, "title">, SheetContract {
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
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /** Sheet title. */
  title?: JSX.Element;
  /** Trigger that opens the sheet (render fn preferred). */
  trigger?: DialogTriggerRender;
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
export function SheetShorthand(props: SheetProps): JSX.Element {
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
        <Dialog.Trigger asChild={renderTrigger(local.trigger)} />
      </Show>

      <Portal>
        <Show when={modal()}>
          <Dialog.Backdrop />
        </Show>

        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Show when={hasHeader()}>
              <Dialog.Header>
                <Show when={local.title !== undefined}>
                  <Dialog.Title>{local.title}</Dialog.Title>
                </Show>

                <Show when={local.description !== undefined}>
                  <Dialog.Description>{local.description}</Dialog.Description>
                </Show>
              </Dialog.Header>
            </Show>

            <Show when={local.children !== undefined}>
              <ScrollArea scrollFade={local.scrollFade ?? false}>
                <Body class={local.classNames?.body}>{local.children}</Body>
              </ScrollArea>
            </Show>

            <Show when={local.actions !== undefined}>
              <Footer class={local.classNames?.footer}>{local.actions}</Footer>
            </Show>

            <Show when={local.showCloseButton ?? true}>
              <InlineCloseTrigger
                asChild={(triggerProps) => (
                  <Button
                    {...triggerProps()}
                    aria-label={m("sheet.close")}
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
