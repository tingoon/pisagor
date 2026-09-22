import { Rating } from "..";

export function CustomColor() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Rating className="text-info" count={5} defaultValue={4} />
      <Rating className="text-success" count={5} defaultValue={4} />
    </div>
  );
}
