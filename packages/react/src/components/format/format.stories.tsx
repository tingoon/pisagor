import preview from "#/storybook/preview";
import { Format } from "..";

const meta = preview.meta({
  component: Format.Number,
  parameters: {
    docs: {
      description: {
        component:
          "Formats numbers, bytes, and relative times for display so values read naturally in the user locale.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Format",
});

export const Default = meta.story({
  render: () => (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-sm">File size</span>
      <span className="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
        <Format.Byte value={120_000} />
      </span>
    </div>
  ),
});

export const ByteUnitDisplay = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Long: </span>
        <Format.Byte unitDisplay="long" value={1_500_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Short: </span>
        <Format.Byte unitDisplay="short" value={1_500_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Narrow: </span>
        <Format.Byte unitDisplay="narrow" value={1_500_000} />
      </div>
    </div>
  ),
});

export const ByteUnitSystem = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Decimal (1000): </span>
        <Format.Byte unitSystem="decimal" value={1024} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Binary (1024): </span>
        <Format.Byte unitSystem="binary" value={1024} />
      </div>
    </div>
  ),
});

export const Byte = meta.story({
  render: () => (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-sm">File size</span>
      <span className="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
        <Format.Byte value={120_000} />
      </span>
    </div>
  ),
});

export const NumberCompact = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">1.2M: </span>
        <Format.Number notation="compact" value={1_200_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">120K: </span>
        <Format.Number notation="compact" value={120_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Downloads: </span>
        <Format.Number notation="compact" value={1_234_567} />
        <span className="text-muted-foreground text-sm"> per month</span>
      </div>
    </div>
  ),
});

export const NumberCurrency = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">USD: </span>
        <Format.Number currency="USD" style="currency" value={99.99} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">EUR: </span>
        <Format.Number currency="EUR" style="currency" value={99.99} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">BRL: </span>
        <Format.Number currency="BRL" style="currency" value={99.99} />
      </div>
    </div>
  ),
});

export const NumberPercent = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Default: </span>
        <Format.Number style="percent" value={0.75} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">With decimals: </span>
        <Format.Number minimumFractionDigits={2} style="percent" value={0.7567} />
      </div>
    </div>
  ),
});

export const NumberStory = meta.story({
  render: () => (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-muted-foreground text-sm">Downloads</span>
      <span className="font-medium text-foreground tabular-nums tracking-tight">
        <Format.Number value={1_234_567} />
      </span>
      <span className="text-muted-foreground text-sm">per month</span>
    </div>
  ),
});

export const RelativeTimeShort = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Long: </span>
        <Format.RelativeTime style="long" value={new Date("2025-05-05")} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Short: </span>
        <Format.RelativeTime style="short" value={new Date("2025-05-05")} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Narrow: </span>
        <Format.RelativeTime style="narrow" value={new Date("2025-05-05")} />
      </div>
    </div>
  ),
});

export const RelativeTime = meta.story({
  render: () => (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-muted-foreground text-sm">Last updated</span>
      <span className="font-medium text-foreground tabular-nums tracking-tight">
        <Format.RelativeTime value={new Date("2025-05-05")} />
      </span>
    </div>
  ),
});
