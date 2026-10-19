import type { SkeletonRootContract } from "@pisagor/contracts";
import { skeletonRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { For, splitProps } from "solid-js";

export interface SkeletonTextProps
  extends ComponentProps<"div">, SkeletonRootContract {
  lines?: number;
}

export type SkeletonRootProps = ComponentProps<"div"> & SkeletonRootContract;

export type SkeletonCircleProps = ComponentProps<"div"> & SkeletonRootContract;

export function SkeletonRoot(props: SkeletonRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "size", "class"]);
  const slots = () =>
    (local.recipe ?? skeletonRecipe)({ size: local.size ?? "md" });

  return (
    <div
      {...rest}
      class={slots().base({ class: local.class })}
      data-part="root"
      data-scope="skeleton"
    />
  );
}

export function SkeletonCircle(props: SkeletonCircleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "size", "class"]);
  const slots = () =>
    (local.recipe ?? skeletonRecipe)({ size: local.size ?? "md" });

  return (
    <div
      {...rest}
      class={slots().circle({ class: local.class })}
      data-part="circle"
      data-scope="skeleton"
    />
  );
}

export function SkeletonText(props: SkeletonTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["lines", "recipe", "size", "class"]);
  const slots = () =>
    (local.recipe ?? skeletonRecipe)({ size: local.size ?? "md" });
  const lines = () => local.lines ?? 2;

  return (
    <div
      {...rest}
      class={slots().text({ class: local.class })}
      data-part="text"
      data-scope="skeleton"
    >
      <For each={Array.from({ length: lines() }, (_, index) => index)}>
        {(index) => <div class={slots().line()} data-index={index} />}
      </For>
    </div>
  );
}

export const Skeleton = Object.assign(SkeletonRoot, {
  Circle: SkeletonCircle,
  Text: SkeletonText,
});
