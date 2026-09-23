import { Status } from "..";

export function CustomColor() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Status className="bg-amber-500" />
      <Status className="bg-teal-500" />
      <Status className="bg-purple-500" />
    </div>
  );
}
