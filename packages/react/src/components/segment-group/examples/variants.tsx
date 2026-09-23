import { SegmentGroup } from "..";

export function Variants() {
  const items = ["Profile", "Account", "Security", "Notifications"];

  return (
    <div className="flex flex-col gap-2">
      <SegmentGroup.Root className="rounded-lg" defaultValue="Profile" variant="default">
        {items.map((item) => (
          <SegmentGroup.Item className="px-2 py-1.5 text-sm" key={item} value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
      <SegmentGroup.Root defaultValue="Profile" variant="underline">
        {items.map((item) => (
          <SegmentGroup.Item className="px-2 py-1.5 text-sm" key={item} value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
      <SegmentGroup.Root defaultValue="Profile" orientation="vertical" variant="underline">
        {items.map((item) => (
          <SegmentGroup.Item className="px-2 py-1.5 text-sm" key={item} value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}
