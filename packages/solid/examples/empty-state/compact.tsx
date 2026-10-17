import { EmptyState } from "@pisagor/solid";

export function Compact() {
  return (
    <EmptyState
      class="p-6"
      description="You're all caught up. New notifications will appear here."
      title="No notifications"
    />
  );
}
