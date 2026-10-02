---
title: Color Picker
description: "Lets users choose a color visually and fine-tune it with sliders or numeric channel inputs."
api: compound
taxonomy: standard
---

## When to use

- Choose and fine-tune a color with area, sliders, channels, or a compact swatch trigger.
- Prefer a popover picker when the control sits in a dense form; prefer inline when color is the main task.
- Keep contrast readable when the chosen color is applied to text or UI chrome.

## Import

```tsx
import { ColorPicker } from "@pisagor/react";
```

Style with `@pisagor/recipes/color-picker` — no app-level `tv()`.

## Examples

### Variants

Choose picker chrome to match compact forms or larger editing panels.

:::example Variants

### Custom Spacing

Adjust spacing when the picker sits in a denser layout.

:::example CustomSpacing

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

### Input Controlled

Control channel inputs from the parent for synced color editors.

:::example InputControlled

### Disabled

Show that color cannot be changed. Prefer explaining why nearby.

:::example Disabled

### Invalid

Surface an invalid color value that needs correction.

:::example Invalid

### Input With Popover

Open channel editing in a popover attached to a trigger.

:::example InputWithPopover

### Input With Swatch Preview

Pair inputs with a swatch so typed values stay visually grounded.

:::example InputWithSwatchPreview

### Popover Disabled

Show an unavailable popover trigger when color editing is blocked.

:::example PopoverDisabled

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

### Slider Controlled

Drive slider channels from the parent when color state lives above the picker.

:::example SliderControlled

### Slider Disabled

Show that slider channels are unavailable. Prefer explaining why nearby.

:::example SliderDisabled

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

### Swatch Picker Controlled

Drive the selected swatch from the parent when palette state lives above.

:::example SwatchPickerControlled

### Swatch Picker Custom Indicator

Customize the selected-swatch indicator to match brand chrome.

:::example SwatchPickerCustomIndicator

### Swatch Picker Custom Radius

Override swatch corner radius when geometry should match nearby controls.

:::example SwatchPickerCustomRadius

### Swatch Picker Custom Size

Resize swatches when the palette needs denser or larger targets.

:::example SwatchPickerCustomSize

### Swatch Picker Disabled

Show that swatch picking is unavailable. Prefer explaining why nearby.

:::example SwatchPickerDisabled

### Swatch Picker

Pick from predefined swatches when freeform color picking is unnecessary.

:::example SwatchPicker

### Clearable

Offer a clear control when users often need to remove the selected color.

:::example Clearable

### Default

Pick a color with the full visual picker surface.

:::example Default
