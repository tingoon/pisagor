import { Badge, Spinner } from "@pisagor/react";
export function WithSpinner() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="destructive">
        <Spinner />
        Deleting
      </Badge>
      <Badge variant="outline">
        Generating <Spinner />
      </Badge>
    </div>
  );
}
