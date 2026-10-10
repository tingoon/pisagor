## Import

```tsx
import { ColorPicker } from "@pisagor/react";
```

## Anatomy

```tsx
<ColorPicker>
  <ColorPicker.Control>
    <ColorPicker.Trigger>
      <ColorPicker.SwatchPreview />
    </ColorPicker.Trigger>
    <ColorPicker.Input />
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.View>
      <ColorPicker.EyeDropperTrigger />
      <ColorPicker.ChannelSlider />
    </ColorPicker.View>
  </ColorPicker.Content>
</ColorPicker>
```

## Examples

### Default

Pick a color with the full visual picker surface.

:::example Default

### Variants

Choose picker chrome to match compact forms or larger editing panels.

:::example Variants

### Area Channels

Edit the 2D color area using specific channels for finer control.

:::example AreaChannels

### Area Dots

Show discrete dots on the area when quantized picks help.

:::example AreaDots

### Input Channel

Type a single channel value when precision matters more than dragging.

:::example InputChannel

### Input Compact

Use a compact channel input when space is limited.

:::example InputCompact

### Input With Popover

Open channel editing in a popover attached to a trigger.

:::example InputWithPopover

### Input With Swatch Preview

Pair inputs with a swatch so typed values stay visually grounded.

:::example InputWithSwatchPreview

### Popover Sliders Only

Offer sliders without the full area when a simpler editor is enough.

:::example PopoverSlidersOnly

### Popover With Channel Editing

Combine popover chrome with numeric channel fields.

:::example PopoverWithChannelEditing

### Popover With Swatch Picker

Pick from swatches inside a popover for predefined palettes.

:::example PopoverWithSwatchPicker

### Slider Alpha Channel

Adjust transparency with an alpha slider when opacity matters.

:::example SliderAlphaChannel

### Slider Hsba Channels

Edit HSBA channels with sliders when that color model fits the task.

:::example SliderHsbaChannels

### Slider Hsl Channels

Edit HSL channels with sliders when that color model fits the task.

:::example SliderHslChannels

### Slider Rgb Channels

Edit RGB channels with sliders when that color model fits the task.

:::example SliderRgbChannels

### Slider Vertical

Orient channel sliders vertically when the layout favors a tall editor.

:::example SliderVertical

### Swatch Picker

Pick from predefined swatches when freeform color picking is unnecessary.

:::example SwatchPicker

### Swatch Picker Custom Indicator

Customize the selected-swatch indicator to match brand chrome.

:::example SwatchPickerCustomIndicator

### Clearable

Offer a clear control when users often need to remove the selected color.

:::example Clearable

### Input Controlled

Control channel inputs from the parent for synced color editors.

:::example InputControlled

### Slider Controlled

Drive slider channels from the parent when color state lives above the picker.

:::example SliderControlled

### Swatch Picker Controlled

Drive the selected swatch from the parent when palette state lives above.

:::example SwatchPickerControlled

### Disabled

Show that color cannot be changed.

:::example Disabled

### Popover Disabled

Show an unavailable popover trigger when color editing is blocked.

:::example PopoverDisabled

### Slider Disabled

Show that slider channels are unavailable.

:::example SliderDisabled

### Swatch Picker Disabled

Show that swatch picking is unavailable.

:::example SwatchPickerDisabled

### Invalid

Surface an invalid color value that needs correction.

:::example Invalid

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Adjust spacing when the picker sits in a denser layout.

:::example CustomSpacing

Override swatch corner radius when geometry should match nearby controls.

:::example SwatchPickerCustomRadius

Resize swatches when the palette needs denser or larger targets.

:::example SwatchPickerCustomSize

### Custom recipe

Extend `colorPickerRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
