import { HeartIcon } from "@phosphor-icons/react";
import { Rating } from "..";

export function CustomIcon() {
  return <Rating allowHalf className="text-destructive" icon={<HeartIcon />} />;
}
