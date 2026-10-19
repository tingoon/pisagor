<script lang="ts">
  import { Portal, useColorPickerContext } from "@ark-ui/svelte";
  import type { ColorPickerContract } from "@pisagor/contracts";
  import { EyedropperIcon, XIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button.svelte";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./color-picker.context";
  import ColorPickerArea from "./color-picker-area.svelte";
  import ColorPickerAreaBackground from "./color-picker-area-background.svelte";
  import ColorPickerAreaThumb from "./color-picker-area-thumb.svelte";
  import ColorPickerChannelSlider from "./color-picker-channel-slider.svelte";
  import ColorPickerChannelSliderThumb from "./color-picker-channel-slider-thumb.svelte";
  import ColorPickerChannelSliderTrack from "./color-picker-channel-slider-track.svelte";
  import ColorPickerClearTrigger from "./color-picker-clear-trigger.svelte";
  import ColorPickerContent from "./color-picker-content.svelte";
  import ColorPickerControl from "./color-picker-control.svelte";
  import ColorPickerEyeDropperTrigger from "./color-picker-eye-dropper-trigger.svelte";
  import ColorPickerInput from "./color-picker-input.svelte";
  import ColorPickerPositioner from "./color-picker-positioner.svelte";
  import ColorPickerRoot from "./color-picker-root.svelte";
  import ColorPickerSwatchPreview from "./color-picker-swatch-preview.svelte";
  import ColorPickerTransparencyGrid from "./color-picker-transparency-grid.svelte";
  import ColorPickerTrigger from "./color-picker-trigger.svelte";
  import ColorPickerView from "./color-picker-view.svelte";

  type Props = Omit<ComponentProps<typeof ColorPickerRoot>, "children"> &
    ColorPickerContract & {
      /**
       * Popover content; defaults to the area, eye dropper, hue and alpha
       * sliders.
       */
      children?: Snippet;
      /**
       * Whether to show a clear button when a color is set.
       *
       * @defaultValue false
       */
      clearable?: boolean;
      /** Visual shell variant of the input group. */
      variant?: "primary" | "secondary";
    };

  let {
    children,
    classNames,
    clearable = false,
    value = $bindable(),
    variant,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

{#snippet clearTrigger()}
  {@const api = useColorPickerContext()}
  {@const controlProps = api().getControlProps() as {
    disabled?: boolean;
    readOnly?: boolean;
  }}
  {#if !controlProps.disabled && !controlProps.readOnly && api().value.getChannelValue("alpha") !== 0}
    <InputGroup.Addon align="inline-end">
      <ColorPickerClearTrigger class={classNames?.clearTrigger}>
        {#snippet asChild(props)}
          <InputGroup.Button
            {...props()}
            aria-label={m("colorPicker.clearColor")}
            size="icon-xs"
            variant="ghost"
          >
            <XIcon />
          </InputGroup.Button>
        {/snippet}
      </ColorPickerClearTrigger>
    </InputGroup.Addon>
  {/if}
{/snippet}

{#snippet defaultContent()}
  {@const styles = useStyles()}
  <ColorPickerArea class={classNames?.area}>
    <ColorPickerAreaBackground class={classNames?.areaBackground} />
    <ColorPickerAreaThumb class={classNames?.areaThumb} />
  </ColorPickerArea>
  <ColorPickerView class={classNames?.view} format="hsla">
    <div class={styles.slots.channelRow({ class: classNames?.channelRow })}>
      <ColorPickerEyeDropperTrigger class={classNames?.eyeDropperTrigger}>
        {#snippet asChild(props)}
          <Button {...props()} size="icon-md" variant="outline">
            <EyedropperIcon />
          </Button>
        {/snippet}
      </ColorPickerEyeDropperTrigger>
      <div
        class={styles.slots.channelStack({ class: classNames?.channelStack })}
      >
        {#each ["hue", "alpha"] as const as channel (channel)}
          <ColorPickerChannelSlider {channel} class={classNames?.channelSlider}>
            {#if channel === "alpha"}
              <ColorPickerTransparencyGrid
                class={classNames?.transparencyGrid}
              />
            {/if}
            <ColorPickerChannelSliderTrack
              class={classNames?.channelSliderTrack}
            />
            <ColorPickerChannelSliderThumb
              class={classNames?.channelSliderThumb}
            />
          </ColorPickerChannelSlider>
        {/each}
      </div>
    </div>
  </ColorPickerView>
{/snippet}

<ColorPickerRoot {...rest} bind:value>
  <ColorPickerControl class={classNames?.control}>
    <InputGroup {variant}>
      <ColorPickerTrigger class={classNames?.trigger}>
        {#snippet asChild(props)}
          <InputGroup.Addon {...props()}>
            <ColorPickerSwatchPreview class={classNames?.inputSwatch} />
          </InputGroup.Addon>
        {/snippet}
      </ColorPickerTrigger>
      <ColorPickerInput class={classNames?.channelInput}>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} />
        {/snippet}
      </ColorPickerInput>
      {#if clearable}
        {@render clearTrigger()}
      {/if}
    </InputGroup>
  </ColorPickerControl>

  <Portal>
    <ColorPickerPositioner class={classNames?.positioner}>
      <ColorPickerContent class={classNames?.content}>
        {#if children}
          {@render children()}
        {:else}
          {@render defaultContent()}
        {/if}
      </ColorPickerContent>
    </ColorPickerPositioner>
  </Portal>
</ColorPickerRoot>
