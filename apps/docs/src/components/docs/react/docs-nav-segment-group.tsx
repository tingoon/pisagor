import { SegmentGroup } from "@pisagor/react";

export interface DocsNavSegmentItem {
  href: string;
  label: string;
  value: string;
}

interface DocsNavSegmentGroupProps {
  "aria-label"?: string;
  className?: string;
  items: DocsNavSegmentItem[];
  size?: "sm" | "md" | "lg";
  value: string;
}

/**
 * Link-backed `SegmentGroup` for docs chrome (surface switch, section tabs).
 * Astro has no SegmentGroup — React is the fallback per package priority.
 */
export function DocsNavSegmentGroup({
  "aria-label": ariaLabel,
  className,
  items,
  size = "sm",
  value,
}: DocsNavSegmentGroupProps) {
  return (
    <SegmentGroup
      aria-label={ariaLabel}
      className={className}
      items={items.map(({ label, value: itemValue }) => ({
        label,
        value: itemValue,
      }))}
      onValueChange={(next) => {
        const item = items.find((entry) => entry.value === next);
        if (!item || item.value === value) return;
        window.location.assign(item.href);
      }}
      size={size}
      value={value}
    />
  );
}
