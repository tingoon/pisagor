import { PhDownload, PhFish } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { Card } from "@pisagor/vue/card";
import { Input } from "@pisagor/vue/input";
import { QrCode } from "@pisagor/vue/qr-code";
import { computed, ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: QrCode,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a scannable QR code so users can open links or share data with a phone camera.",
      },
    },
  },
  subcomponents: {
    Download: QrCode.Download,
    Frame: QrCode.Frame,
    Overlay: QrCode.Overlay,
  },
  title: "Components/Marketing/QR Code",
});

export const Default = meta.story({
  render: () => ({
    components: { QrCode },
    template: `
      <QrCode value="https://example.com/docs">
        <QrCode.Frame />
      </QrCode>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { QrCode },
    template: `
      <div class="flex flex-wrap items-end justify-center gap-6">
        <QrCode class="[--qr-code-size:6rem]">
          <QrCode.Frame class="rounded-md border" />
        </QrCode>
        <QrCode class="[--qr-code-size:8rem]">
          <QrCode.Frame class="rounded-md border" />
        </QrCode>
      </div>
    `,
  }),
});

export const ErrorCorrection = meta.story({
  render: () => ({
    components: { QrCode },
    setup() {
      const eccLevels = ["L", "M", "Q", "H"] as const;
      return { eccLevels };
    },
    template: `
      <div class="flex flex-wrap items-center gap-6">
        <div class="flex flex-col items-center gap-2" v-for="ecc in eccLevels" :key="ecc">
          <QrCode
            class="[--qr-code-size:6rem]"
            :encoding="{ ecc }"
            value="https://example.com/docs"
          >
            <QrCode.Frame />
          </QrCode>
          <p class="text-muted-foreground text-sm">{{ ecc }}</p>
        </div>
      </div>
    `,
  }),
});

export const Overlay = meta.story({
  render: () => ({
    components: { PhFish, QrCode },
    template: `
      <QrCode value="https://example.com/docs">
        <QrCode.Frame />
        <QrCode.Overlay>
          <PhFish />
        </QrCode.Overlay>
      </QrCode>
    `,
  }),
});

export const Download = meta.story({
  render: () => ({
    components: { Button, Card, Input, PhDownload, QrCode },
    setup() {
      const qualityByLevel = { 0: "L", 20: "M", 40: "Q", 60: "H" } as const;

      const getQualityLevel = (length: number) => {
        if (length < 20) {
          return 0;
        }
        if (length < 40) {
          return 20;
        }
        if (length < 60) {
          return 40;
        }
        return 60;
      };

      const value = ref("");
      const qualityLabel = computed(
        () => qualityByLevel[getQualityLevel(value.value.length) as keyof typeof qualityByLevel],
      );

      return { qualityLabel, value };
    },
    template: `
      <QrCode :encoding="{ ecc: qualityLabel }" :value="value">
        <Card class="[--space:--spacing(6)]">
          <Card.Content class="flex flex-col justify-center gap-6">
            <Input v-model:value="value" placeholder="Generate a QR code" />
            <div class="flex flex-col items-center gap-2">
              <p class="font-medium text-muted-foreground text-sm">Live preview</p>
              <QrCode.Frame />
            </div>
            <div class="flex items-center gap-2">
              <QrCode.Download as-child file-name="qr-code" mime-type="image/png">
                <Button class="w-1/2" size="icon-md" variant="outline">
                  <PhDownload />
                  PNG
                </Button>
              </QrCode.Download>
              <QrCode.Download as-child file-name="qr-code" mime-type="image/svg+xml">
                <Button class="w-1/2" size="icon-md">
                  <PhDownload />
                  SVG
                </Button>
              </QrCode.Download>
            </div>
          </Card.Content>
        </Card>
      </QrCode>
    `,
  }),
});
