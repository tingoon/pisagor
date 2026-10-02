---
title: Format
description: "Formats numbers, bytes, and relative times so values read naturally in the user's locale."
api: compound
taxonomy: primitive
---

## When to use

- Display numbers, bytes, and relative times in a locale-friendly way.
- Prefer Format helpers over hand-rolled string concatenation for currency, percent, and file sizes.
- Pick compact or short variants when space is tight.

## Import

```tsx
import { Format } from "@pisagor/solid";
```

## Examples

### Default

Format a value for readable display.

:::example Default

### Byte Unit Display

Choose how byte units are labeled in the output.

:::example ByteUnitDisplay

### Byte Unit System

Switch between binary and decimal byte systems.

:::example ByteUnitSystem

### Byte

Format a byte size for storage and download labels.

:::example Byte

### Number Compact

Shorten large numbers when space is tight.

:::example NumberCompact

### Number Currency

Format money with the correct currency style.

:::example NumberCurrency

### Number Percent

Format a ratio as a percentage.

:::example NumberPercent

### Number Story

Format a general number for display.

:::example NumberStory

### Relative Time Short

Show a short relative time such as 2h.

:::example RelativeTimeShort

### Relative Time

Show a fuller relative time such as 2 hours ago.

:::example RelativeTime
