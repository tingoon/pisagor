File Input captures one or more files with native file-picker behavior styled to match other form controls. It is the lightweight choice when drag-and-drop and progress UI are not required.

Prefer File Input for simple forms that need a browser file picker inside [Field](/react/components/field/design). Prefer [File Upload](/react/components/file-upload/design) when people expect drop zones, previews, multi-step progress, or rich error recovery.

## Best practices

**State accept rules clearly.** Use the `accept` attribute and helper text to document allowed types and size limits before the picker opens.

**Support multiple files only when needed.** Single-file pickers simplify validation; multi-select should show how many files are allowed.

**Validate after selection.** Reject oversize or wrong-type files with field-level errors, not only silent ignore.

**Do not reset unrelated form state.** Changing the file input should not clear the rest of the form unless the user expects a fresh draft.

**Style the label, not the opaque input.** Hide the raw input visually if needed but keep a keyboard-activatable Choose file control with an accessible name.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use File Input in a Field with “PDF only, max 10 MB” helper text.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use File Input alone for a marketing upload page that promises drag-and-drop and upload progress.</figcaption>
</figure>
</div>

## Mobile

Native pickers differ by platform; avoid custom tricks that block camera or photo library when those sources are expected for your use case.

## Related patterns

| Need | Prefer |
| --- | --- |
| Simple styled file picker in a form | **File Input** |
| Drag-and-drop and upload progress | [File Upload](/react/components/file-upload/design) |
| Show selected files in a list | [File](/react/components/file/design) |
| Label and validation | [Field](/react/components/field/design) |
