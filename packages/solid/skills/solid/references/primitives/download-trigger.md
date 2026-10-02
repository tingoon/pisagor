---
title: Download Trigger
description: "Starts a file download when activated so users can save content without leaving the page."
api: closed
taxonomy: primitive
---

## When to use

- Start a download from a control without navigating away.
- Use a promise-based source when the file is generated asynchronously.
- Label the trigger with the file type or purpose so users know what they get.

## Import

```tsx
import { DownloadTrigger } from "@pisagor/solid";
```

## Examples

### Download Svg

Download SVG content when the file is vector markup.

:::example DownloadSvg

### With Promise

Resolve a promise for the file payload when generation is asynchronous.

:::example WithPromise

### Default

Start a download from a control without navigating away.

:::example Default
