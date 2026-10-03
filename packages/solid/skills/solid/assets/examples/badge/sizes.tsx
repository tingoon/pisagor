/** @jsxImportSource solid-js */
import { Badge } from "@pisagor/solid/badge";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}
