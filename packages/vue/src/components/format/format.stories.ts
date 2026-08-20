import { Format } from "@pisagor/vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Format,
  parameters: {
    docs: {
      description: {
        component:
          "Formats byte counts, numbers, and relative dates in a consistent, accessible way.",
      },
    },
  },
  title: "Components/Data Display/Format",
});

export const Default = meta.story({
  render: () => ({
    components: { Format },
    setup() {
      return {
        relativeDate: new Date(Date.now() - 1000 * 60 * 15),
      };
    },
    template: `
      <div class="flex flex-col gap-4">
        <p class="text-sm">
          <Format.Byte :value="2048" unit="byte" /> bytes
        </p>
        <p class="text-sm">
          <Format.Number :value="12345.67" notation="compact" /> units
        </p>
        <p class="text-sm">
          <Format.RelativeTime :value="relativeDate" /> ago
        </p>
      </div>
    `,
  }),
});

export const ByteUnitDisplay = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-muted-foreground text-sm">Long: </span>
          <Format.Byte :value="1500000" unit-display="long" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">Short: </span>
          <Format.Byte :value="1500000" unit-display="short" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">Narrow: </span>
          <Format.Byte :value="1500000" unit-display="narrow" />
        </div>
      </div>
    `,
  }),
});

export const ByteUnitSystem = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-muted-foreground text-sm">Decimal (1000): </span>
          <Format.Byte :value="1024" unit-system="decimal" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">Binary (1024): </span>
          <Format.Byte :value="1024" unit-system="binary" />
        </div>
      </div>
    `,
  }),
});

export const Byte = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="flex flex-col gap-1">
        <span class="text-muted-foreground text-sm">File size</span>
        <span class="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
          <Format.Byte :value="120000" />
        </span>
      </div>
    `,
  }),
});

export const NumberCompact = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-muted-foreground text-sm">1.2M: </span>
          <Format.Number :value="1200000" notation="compact" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">120K: </span>
          <Format.Number :value="120000" notation="compact" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">Downloads: </span>
          <Format.Number :value="1234567" notation="compact" />
          <span class="text-muted-foreground text-sm"> per month</span>
        </div>
      </div>
    `,
  }),
});

export const NumberCurrency = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-muted-foreground text-sm">USD: </span>
          <Format.Number currency="USD" style="currency" :value="99.99" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">EUR: </span>
          <Format.Number currency="EUR" style="currency" :value="99.99" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">BRL: </span>
          <Format.Number currency="BRL" style="currency" :value="99.99" />
        </div>
      </div>
    `,
  }),
});

export const NumberPercent = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-muted-foreground text-sm">Default: </span>
          <Format.Number style="percent" :value="0.75" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">With decimals: </span>
          <Format.Number :minimum-fraction-digits="2" style="percent" :value="0.7567" />
        </div>
      </div>
    `,
  }),
});

export const NumberStory = meta.story({
  render: () => ({
    components: { Format },
    template: `
      <div class="inline-flex items-baseline gap-1">
        <span class="text-muted-foreground text-sm">Downloads</span>
        <span class="font-medium text-foreground tabular-nums tracking-tight">
          <Format.Number :value="1234567" />
        </span>
        <span class="text-muted-foreground text-sm">per month</span>
      </div>
    `,
  }),
});

export const RelativeTimeShort = meta.story({
  render: () => ({
    components: { Format },
    setup() {
      return {
        date: new Date("2025-05-05"),
      };
    },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-muted-foreground text-sm">Long: </span>
          <Format.RelativeTime :value="date" style="long" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">Short: </span>
          <Format.RelativeTime :value="date" style="short" />
        </div>
        <div>
          <span class="text-muted-foreground text-sm">Narrow: </span>
          <Format.RelativeTime :value="date" style="narrow" />
        </div>
      </div>
    `,
  }),
});

export const RelativeTime = meta.story({
  render: () => ({
    components: { Format },
    setup() {
      return {
        date: new Date("2025-05-05"),
      };
    },
    template: `
      <div class="inline-flex items-baseline gap-1">
        <span class="text-muted-foreground text-sm">Last updated</span>
        <span class="font-medium text-foreground tabular-nums tracking-tight">
          <Format.RelativeTime :value="date" />
        </span>
      </div>
    `,
  }),
});
