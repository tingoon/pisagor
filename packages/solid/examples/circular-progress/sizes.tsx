/** @jsxImportSource solid-js */
import { CircularProgress } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <CircularProgress size={24} value={35} />
      <CircularProgress size={32} value={62} />
      <CircularProgress size={40} value={84} />
    </div>
  );
}
