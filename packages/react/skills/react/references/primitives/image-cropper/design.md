Image Cropper lets people define a crop region, adjust zoom, and preview the result before saving or uploading. It turns ambiguous “pick a photo” steps into a confident, WYSIWYG selection.

Use it in avatars, cover images, and asset pipelines where aspect ratio and framing matter.

## Best practices

**Show the crop boundary clearly.** Use a dimmed mask outside the selection and a visible aspect ratio so people understand what will be kept.

**Default to a sensible aspect ratio.** Match the destination (circle avatar, 16:9 banner) and explain if the ratio is fixed.

**Keep manipulation direct.** Pan and zoom should track the pointer continuously; avoid animating only after the gesture ends.

**Offer undo and reset.** Let people recover from a bad crop without re-uploading the original file.

**Confirm before destructive replace.** When cropping replaces an existing image, summarize the action and preserve the previous asset until commit succeeds.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show live preview inside the crop frame with clear Save and Cancel actions.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Upload and crop silently without showing which pixels will be discarded.</figcaption>
</figure>
</div>

## Accessibility

Provide keyboard alternatives for nudging the crop region and zoom where possible. Describe the crop purpose in labels (“Profile photo”, “Cover image”).

## Related patterns

| Need | Prefer |
| --- | --- |
| Crop before upload | **Image Cropper** |
| Pick any file from disk | [File Input](/react/components/file-input/design) |
| Drag-and-drop upload area | [File Upload](/react/components/file-upload/design) |
| Display-only media box | [Aspect Ratio](/react/components/aspect-ratio/design) |
