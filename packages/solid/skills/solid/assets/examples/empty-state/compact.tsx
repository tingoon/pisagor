/** @jsxImportSource solid-js */
import { EmptyState } from "@pisagor/solid/empty-state";

export function Compact() {
  return (
    <EmptyState
      class="p-6"
      description="You're all caught up. New notifications will appear here."
      title="No notifications"
    />
  );
}
