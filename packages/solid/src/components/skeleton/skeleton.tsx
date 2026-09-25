import { ark } from "@ark-ui/solid/factory";
import { skeletonRecipe } from "@pisagor/recipes/skeleton";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, splitProps } from "solid-js";

export interface SkeletonTextProps extends ComponentProps<typeof ark.div> {
  lines?: number;
  recipe?: typeof skeletonRecipe;
}

export interface SkeletonRootProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof skeletonRecipe;
}

export interface SkeletonCircleProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof skeletonRecipe;
}

export function SkeletonRoot(props: SkeletonRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = () => (local.recipe ?? skeletonRecipe)();

  return (
    <ark.div
      {...rest}
      class={slots().base({ class: cn(local.class) })}
      data-part="root"
      data-scope="skeleton"
    />
  );
}

export function SkeletonCircle(props: SkeletonCircleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = () => (local.recipe ?? skeletonRecipe)();

  return (
    <ark.div
      {...rest}
      class={slots().circle({ class: cn(local.class) })}
      data-part="circle"
      data-scope="skeleton"
    />
  );
}

export function SkeletonText(props: SkeletonTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["lines", "recipe", "class"]);
  const slots = () => (local.recipe ?? skeletonRecipe)();
  const lines = () => local.lines ?? 2;

  return (
    <ark.div
      {...rest}
      class={slots().text({ class: cn(local.class) })}
      data-part="text"
      data-scope="skeleton"
    >
      <For each={Array.from({ length: lines() }, (_, index) => index)}>
        {(index) => <div class={slots().line()} data-index={index} />}
      </For>
    </ark.div>
  );
}
