import {
  FileActions,
  FileContent,
  FileMedia,
  FileMeta,
  FileName,
  FileRoot,
  FileShorthand,
  FileSize,
} from "./file";

export type { FileMediaVariant, FileProps } from "./file";

export const File = Object.assign(FileShorthand, {
  Actions: FileActions,
  Content: FileContent,
  Media: FileMedia,
  Meta: FileMeta,
  Name: FileName,
  Root: FileRoot,
  Size: FileSize,
});
