<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerAreaProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { withContext } from "./color-picker.context";

  type Props = ColorPickerAreaProps & {
    /**
     * Whether to overlay a dot grid on the area.
     *
     * @defaultValue false
     */
    showDots?: boolean;
  };

  let {
    children,
    class: className,
    showDots = false,
    ...rest
  }: Props = $props();
  const part = withContext(
    () => ({
      ...rest,
      class: cn(
        {
          "after:rounded-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
            showDots,
        },
        className,
      ),
    }),
    { name: "Area" },
  );
</script>

<ColorPickerPrimitive.Area {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Area>
