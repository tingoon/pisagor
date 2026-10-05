import { ark } from "@ark-ui/solid/factory";
import type { ButtonProps as BaseButtonProps } from "@pisagor/props";
import { buttonRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Spinner } from "../spinner";

export interface ButtonProps
  extends ComponentProps<typeof ark.button>,
    BaseButtonProps {}

export function Button(props: ButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "clickEffect",
    "loading",
    "pill",
    "size",
    "variant",
    "disabled",
    "type",
    "children",
    "recipe",
    "class",
  ]);

  const slots = () =>
    (local.recipe ?? buttonRecipe)({
      clickEffect: local.clickEffect ?? true,
      loading: local.loading ?? false,
      pill: local.pill ?? false,
      size: local.size ?? "md",
      variant: local.variant ?? "default",
    });

  const loading = () => local.loading ?? false;

  return (
    <ark.button
      {...rest}
      aria-busy={loading() || undefined}
      class={slots().base({ class: local.class })}
      data-part="root"
      data-scope="button"
      data-size={local.size ?? "md"}
      data-state={loading() ? "loading" : "idle"}
      data-variant={local.variant ?? "default"}
      disabled={Boolean(local.disabled || loading())}
      type={local.type ?? "button"}
    >
      <Show fallback={local.children} when={loading()}>
        <span aria-hidden="true" class={slots().hidden()}>
          {local.children}
        </span>
        <span class={slots().srOnly()}>{local.children}</span>
        <span class={slots().spinner()}>
          <Spinner aria-hidden="true" />
        </span>
      </Show>
    </ark.button>
  );
}
