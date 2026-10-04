/** @jsxImportSource solid-js */
import { Rating } from "@pisagor/solid/rating";

export function CustomColor() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Rating class="text-info" count={5} defaultValue={4} />
      <Rating class="text-success" count={5} defaultValue={4} />
    </div>
  );
}
