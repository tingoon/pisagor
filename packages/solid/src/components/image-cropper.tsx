import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/solid";
import type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperRootProps as ImageCropperRootPrimitiveProps,
  ImageCropperSelectionProps,
  ImageCropperViewportProps,
} from "@ark-ui/solid";
import type {
  ImageCropperContract,
  ImageCropperRootContract,
} from "@pisagor/contracts";
import { imageCropperRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ImageCropper",
  recipe: imageCropperRecipe,
});
// #endregion

// #region Types
export type ImageCropperRootProps = ImageCropperRootPrimitiveProps &
  ImageCropperRootContract;

const handlePositions = ["n", "e", "s", "w", "ne", "se", "sw", "nw"] as const;

export interface ImageCropperProps
  extends Omit<ImageCropperRootProps, "children">, ImageCropperContract {
  /** Image URL. */
  src: string;
  /** Image alt text. */
  alt?: string;
  /**
   * Which grid lines to show inside the selection.
   *
   * @defaultValue "both"
   */
  axis?: "horizontal" | "vertical" | "both" | "none";
}
// #endregion

// #region Parts
const Root = withProvider<ImageCropperRootProps>(ImageCropperPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Viewport = withContext<ImageCropperViewportProps>(
  ImageCropperPrimitive.Viewport,
  { name: "Viewport" },
);

const Image = withContext<ImageCropperImageProps>(ImageCropperPrimitive.Image, {
  name: "Image",
});

const Selection = withContext<ImageCropperSelectionProps>(
  ImageCropperPrimitive.Selection,
  { name: "Selection" },
);

/** Resize handle with its visual grip. */
function Handle(props: ImageCropperHandleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

  return (
    <ImageCropperPrimitive.Handle
      {...rest}
      class={styles.slots.handle({ class: local.class })}
    >
      <Show
        fallback={<span aria-hidden class={styles.slots.handleGrip()} />}
        when={local.children}
      >
        {local.children}
      </Show>
    </ImageCropperPrimitive.Handle>
  );
}

const Grid = withContext<ImageCropperGridProps>(ImageCropperPrimitive.Grid, {
  name: "Grid",
});
// #endregion

// #region Shorthand
export function ImageCropperShorthand(props: ImageCropperProps): JSX.Element {
  const [local, rest] = splitProps(props, ["alt", "axis", "classNames", "src"]);
  const axis = () => local.axis ?? "both";

  return (
    <Root {...rest}>
      <Viewport class={local.classNames?.viewport}>
        <Image
          alt={local.alt}
          class={local.classNames?.image}
          src={local.src}
        />

        <Selection class={local.classNames?.selection}>
          <Show when={axis() === "horizontal" || axis() === "both"}>
            <Grid axis="horizontal" class={local.classNames?.grid} />
          </Show>
          <Show when={axis() === "vertical" || axis() === "both"}>
            <Grid axis="vertical" class={local.classNames?.grid} />
          </Show>

          <For each={handlePositions}>
            {(position) => (
              <Handle class={local.classNames?.handle} position={position} />
            )}
          </For>
        </Selection>
      </Viewport>
    </Root>
  );
}
// #endregion

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperSelectionProps,
  ImageCropperViewportProps,
} from "@ark-ui/solid";

export const ImageCropper = Object.assign(ImageCropperShorthand, {
  Grid,
  Handle,
  Image,
  Root,
  Selection,
  Viewport,
});
