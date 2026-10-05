import { Badge, Spinner } from "@pisagor/solid";
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
