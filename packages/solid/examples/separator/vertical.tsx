/** @jsxImportSource solid-js */
import { Separator } from "@pisagor/solid";

export function Vertical() {
  return (
    <div class="flex h-5 items-center gap-2 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  );
}
