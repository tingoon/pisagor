File Upload lets people choose files with drag-and-drop or a picker and shows upload progress and previews. It supports workflows where transferring files is a primary task, not a single hidden input.

Prefer File Upload for dashboards, attachments, and media intake. Prefer [File Input](/solid/components/file-input/design) for compact forms where a native picker alone is enough.

## Best practices

**Make both drop and browse available.** A drop zone with an explicit Browse button covers pointer and keyboard paths.

**Show progress per file.** Individual bars or rows communicate which uploads succeed, fail, or remain queued.

**Validate early.** Reject disallowed types and sizes at drop time with actionable messages; keep rejected files out of the success list.

**Allow remove and retry.** Let people cancel in-flight uploads, remove completed items before submit, and retry failures without re-selecting everything.

**Preview when it helps.** Thumbnails for images and icons for documents aid verification; skip previews for sensitive content unless required.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Provide a drop zone, file rows with progress, and Retry on failed uploads.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide upload failures behind a generic “Something went wrong” with no per-file detail.</figcaption>
</figure>
</div>

## Completion

When uploads must finish before submit, disable the primary button until required files complete or explain which attachments are optional. After submit, show [File](/solid/components/file/design) rows for persisted attachments.

## Related patterns

| Need | Prefer |
| --- | --- |
| Drop zone + progress + previews | **File Upload** |
| Minimal form picker | [File Input](/solid/components/file-input/design) |
| Attachment row UI | [File](/solid/components/file/design) |
| Form labels and errors | [Field](/solid/components/field/design) |
