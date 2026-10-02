---
title: Carousel
description: "Steps through slides or images so users can browse one item at a time without leaving the page."
api: compound-shorthand
taxonomy: standard
aliases:
  - slideshow
---

## When to use

- Browse a sequence of slides or images one focus at a time.
- Prefer Carousel when order and paging matter; prefer a plain grid when all items should be visible at once.
- Provide clear previous/next or thumbnail controls so motion is intentional, not surprising.

## Import

```tsx
import { Carousel } from "@pisagor/solid";
```

Style with `@pisagor/recipes/carousel` — no app-level `tv()`.

## Examples

### Default

Step through slides with previous and next controls.

:::example Default

### Autoplay

Advance slides automatically when the carousel is ambient, not critical reading.

:::example Autoplay

### Loop

Wrap from last to first when continuous browsing should not stop at the end.

:::example Loop

### Mouse Drag

Let users drag slides when pointer gestures feel more direct than buttons alone.

:::example MouseDrag

### Orientation Horizontal

Scroll slides left to right for the common carousel pattern.

:::example OrientationHorizontal

### Orientation Vertical

Scroll slides top to bottom when vertical paging fits the layout.

:::example OrientationVertical

### Spacing

Adjust gaps between slides to match density.

:::example Spacing

### Slides Per Page

Show more than one slide at a time when comparison matters.

:::example SlidesPerPage

### Thumbnail Indicator Vertical

Stack thumbnails vertically beside the main slide.

:::example ThumbnailIndicatorVertical

### Thumbnail Indicator

Use thumbnails so users can jump to a specific slide.

:::example ThumbnailIndicator

### Controlled

Drive the active slide from the parent when other UI depends on it.

:::example Controlled

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound
