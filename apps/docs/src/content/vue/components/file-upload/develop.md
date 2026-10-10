## Import

```ts
import { FileUpload } from "@pisagor/vue";
```

## Anatomy

```vue
<FileUpload>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title />
    <FileUpload.Description />
    <FileUpload.Trigger />
    <FileUpload.Helper />
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
```

## Examples

### Default

Choose files with a dropzone and file picker.

:::example Default

### Variants

Choose upload surface emphasis to match the form.

:::example Variants

### Dropzone

Emphasize drag-and-drop as the primary way to add files.

:::example Dropzone

### Trigger

Open the file picker from an explicit trigger control.

:::example Trigger

### Multiple Files

Allow more than one file in a single upload.

:::example MultipleFiles

### Accepted File Types

Limit selectable types so users only pick suitable files.

:::example AcceptedFileTypes

### Directory Upload

Accept a folder when bulk directory import is required.

:::example DirectoryUpload

### Media Capture

Capture from camera or microphone when device media is the source.

:::example MediaCapture

### Custom Preview

Customize previews when default thumbnails are not enough.

:::example CustomPreview

### Clear Trigger

Clear selected files in one action.

:::example ClearTrigger

### Disabled

Show that upload is unavailable.

:::example Disabled

### Invalid

Surface rejected files or validation errors.

:::example Invalid

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Adjust spacing for denser or roomier upload regions.

:::example CustomSpacing

### Custom recipe

Extend `fileUploadRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
