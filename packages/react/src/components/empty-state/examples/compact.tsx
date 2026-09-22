import { EmptyState } from "..";

export function Compact() {
  return (
    <EmptyState
      className="p-6"
      description="You're all caught up. New notifications will appear here."
      title="No notifications"
    />
  );
}
