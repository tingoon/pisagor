File represents a file such as an upload or download with name, metadata, and optional actions. It gives attachments a consistent row identity in lists and forms.

Prefer File to show already-known files in a queue or history. Prefer [File Upload](/vue/components/file-upload/design) while people are choosing and transferring new files; prefer [File Input](/vue/components/file-input/design) for a minimal native picker wrapped in [Field](/vue/components/field/design).

## Best practices

**Lead with the file name.** Truncate long names in the middle or end with a tooltip or expand pattern for the full name.

**Show type and size when helpful.** Icons by MIME type and human-readable size set expectations before open or download.

**Expose clear actions.** Download, remove, preview, or retry upload should be labeled actions, not hidden-only icons.

**Reflect state.** Distinguish uploading, complete, and failed with status text and color that does not rely on color alone.

**Keep lists scannable.** Align actions on the trailing edge and use consistent row height across mixed file types.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> List each attachment with name, size, and Remove for items pending submit.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Show only a generic “Document” label without name or failure reason after a failed upload.</figcaption>
</figure>
</div>

## Security and privacy

Do not display paths from the user’s machine that leak personal directory structure unless necessary. For sensitive files, avoid preview thumbnails that might expose content on shared screens.

## Related patterns

| Need | Prefer |
| --- | --- |
| Display a known file row | **File** |
| Choose and upload with progress | [File Upload](/vue/components/file-upload/design) |
| Minimal native file picker | [File Input](/vue/components/file-input/design) |
| Save to disk | [Download Trigger](/vue/components/download-trigger/design) |
