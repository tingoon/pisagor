import { Dialog as DialogPrimitive, type HTMLArkProps } from "@ark-ui/solid";
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
import type { DialogContract, DialogRootContract } from "@pisagor/contracts";
import { dialogRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon, createSlotRecipeContext } from "../internal";
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

export type DialogHeaderProps = HTMLArkProps<"div">;

export type DialogBodyProps = HTMLArkProps<"div">;

export type DialogFooterProps = HTMLArkProps<"div">;

/**
 * Shorthand trigger: a render fn (preferred) or JSX wrapped in `display:
 * contents`.
 */
export type DialogTriggerRender =
  | JSX.Element
  | ((props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element);

export interface DialogProps
  extends
    Omit<DialogRootProps, "title">,
    Omit<DialogContract, "actions" | "description" | "title" | "trigger"> {
  actions?: JSX.Element;
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
  title?: JSX.Element;
  trigger?: DialogTriggerRender;
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

// #region Helpers
/** Renders a shorthand `trigger` through Ark's Solid `asChild`. */
export function renderTrigger(
  trigger: DialogTriggerRender,
): NonNullable<DialogTriggerProps["asChild"]> {
  return (triggerProps) => {
    if (typeof trigger === "function") {
      return trigger(triggerProps());
    }

    return (
      <span {...triggerProps()} style={{ display: "contents" }}>
        {trigger}
      </span>
    );
  };
}
// #endregion

// #region Shorthand
export function DialogShorthand(props: DialogProps): JSX.Element {
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

            <Show when={local.showCloseButton ?? true}>
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
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogPositionerProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/solid";

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
