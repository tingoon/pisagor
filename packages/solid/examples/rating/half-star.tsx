import source from "./half-star.tsx?raw";
import { Rating } from "@pisagor/solid";

export function HalfStar() {
  return <Rating allowHalf defaultValue={3.5} />;
}

export { source as HalfStarSource };
