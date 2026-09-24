import FileActions from "./file-actions.svelte";
import FileContent from "./file-content.svelte";
import FileMedia from "./file-media.svelte";
import FileMeta from "./file-meta.svelte";
import FileName from "./file-name.svelte";
import FileRoot from "./file-root.svelte";
import FileShorthand from "./file-shorthand.svelte";
import FileSize from "./file-size.svelte";

export const File = Object.assign(FileShorthand, {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
});
