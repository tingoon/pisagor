import { Rating } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <Rating defaultValue={3} size="sm" />
      <Rating defaultValue={3} size="md" />
      <Rating defaultValue={3} size="lg" />
    </div>
  );
}
