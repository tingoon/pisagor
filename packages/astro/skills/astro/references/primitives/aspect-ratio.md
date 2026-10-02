---
title: Aspect Ratio
description: "Keeps media and embeds at a consistent width-to-height ratio as the layout resizes."
api: closed
taxonomy: primitive
---

## When to use

- Lock media or embeds to a known ratio so layouts do not jump as images load.
- Prefer Aspect Ratio for video, maps, and product media that must keep proportions.
- Avoid when the content height should grow with text rather than stay geometrically fixed.

## Import

```ts
import { AspectRatio } from "@pisagor/astro";
```

Style with `@pisagor/recipes/aspect-ratio` — no app-level `tv()`.

## Examples

### Default

Lock content to a ratio so media does not jump as it loads.

:::example Default

### Widescreen

A 16:9 frame for hero or landscape imagery that should stay cinematic.

:::example Widescreen

### Square

Use a 1:1 box for avatars, thumbnails, and tile media.

:::example Square

### Portrait

Use a portrait ratio for tall media such as mobile screenshots.

:::example Portrait

### Video

Use a widescreen ratio for video and cinematic embeds.

:::example Video

### Responsive

Keep the ratio while the box grows and shrinks with the layout.

:::example Responsive
