import { SegmentGroup } from "@pisagor/solid";

export function Compound() {
  const items = ["Profile", "Account", "Security", "Notifications"];

  return (
    <SegmentGroup.Root class="rounded-lg" defaultValue="Profile">
      <SegmentGroup.Indicator />
      {items.map((item) => (
        <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
          <SegmentGroup.ItemText>{item}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
