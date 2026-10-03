/** @jsxImportSource solid-js */
import { HeartIcon } from "@pisagor/solid/icons";
import { Rating } from "@pisagor/solid/rating";

export function CustomIcon() {
  return <Rating allowHalf class="text-destructive" icon={<HeartIcon />} />;
}
