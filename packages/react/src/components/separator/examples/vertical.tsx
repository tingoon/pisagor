import { Separator } from "..";

export function Vertical() {
  return (
    <div className="flex h-5 items-center gap-2 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  );
}
