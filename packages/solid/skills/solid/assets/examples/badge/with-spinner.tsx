/** @jsxImportSource solid-js */
import { Spinner } from "@pisagor/solid";
import { Badge } from "@pisagor/solid/badge";
export function WithSpinner() {
  return (
    <div class="flex flex-wrap items-center gap-2">
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
