import { InputOTP } from "@pisagor/vue/input-otp";
import { Surface } from "@pisagor/vue/surface";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          "Collects one-time passcodes as separate digits so users can enter and review verification codes.",
      },
    },
  },
  subcomponents: {
    Separator: InputOTP.Separator,
    Slot: InputOTP.Slot,
  },
  title: "Components/Forms/Input OTP",
});

export const Default = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP>
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Separator />
        <InputOTP.Slot :index="3" />
        <InputOTP.Slot :index="4" />
        <InputOTP.Slot :index="5" />
      </InputOTP>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <div class="flex flex-col gap-2">
        <InputOTP variant="primary">
          <InputOTP.Slot :index="0" />
          <InputOTP.Slot :index="1" />
          <InputOTP.Slot :index="2" />
          <InputOTP.Separator />
          <InputOTP.Slot :index="3" />
          <InputOTP.Slot :index="4" />
          <InputOTP.Slot :index="5" />
        </InputOTP>
        <InputOTP variant="secondary">
          <InputOTP.Slot :index="0" />
          <InputOTP.Slot :index="1" />
          <InputOTP.Slot :index="2" />
          <InputOTP.Separator />
          <InputOTP.Slot :index="3" />
          <InputOTP.Slot :index="4" />
          <InputOTP.Slot :index="5" />
        </InputOTP>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { InputOTP, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <InputOTP variant="primary">
            <InputOTP.Slot :index="0" />
            <InputOTP.Slot :index="1" />
            <InputOTP.Slot :index="2" />
            <InputOTP.Separator />
            <InputOTP.Slot :index="3" />
            <InputOTP.Slot :index="4" />
            <InputOTP.Slot :index="5" />
          </InputOTP>
          <InputOTP variant="secondary">
            <InputOTP.Slot :index="0" />
            <InputOTP.Slot :index="1" />
            <InputOTP.Slot :index="2" />
            <InputOTP.Separator />
            <InputOTP.Slot :index="3" />
            <InputOTP.Slot :index="4" />
            <InputOTP.Slot :index="5" />
          </InputOTP>
        </div>
      </Surface>
    `,
  }),
});

export const BlurOnComplete = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP :blurOnComplete="true">
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const CustomSize = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP class="*:data-[slot=input-otp-input]:size-12 *:data-[slot=input-otp-input]:text-lg">
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const FourDigits = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP>
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const Mask = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP :mask="true">
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const Separator = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP>
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Separator />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
        <InputOTP.Separator />
        <InputOTP.Slot :index="4" />
        <InputOTP.Slot :index="5" />
      </InputOTP>
    `,
  }),
});

export const WithPlaceholder = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP placeholder="○">
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { InputOTP },
    template: `
      <InputOTP :defaultValue="['1', '2', '3', '4']" :disabled="true">
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { InputOTP },
    setup() {
      const value = ref([""]);
      const isCorrect = () => value.value.join("") === "1234";
      const onValueChange = (next: string[]) => {
        value.value = next;
      };
      return { isCorrect, onValueChange, value };
    },
    template: `
      <InputOTP :invalid="!isCorrect()" :onValueChange="onValueChange" :value="value">
        <InputOTP.Slot :index="0" />
        <InputOTP.Slot :index="1" />
        <InputOTP.Slot :index="2" />
        <InputOTP.Slot :index="3" />
      </InputOTP>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { InputOTP },
    setup() {
      const value = ref([""]);
      const isCorrect = () => value.value.join("") === "1234";
      const onValueChange = (next: string[]) => {
        value.value = next;
      };
      return { isCorrect, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <p class="text-center text-muted-foreground text-sm">Enter the code 1234</p>
        <InputOTP :onValueChange="onValueChange" :value="value">
          <InputOTP.Slot :index="0" />
          <InputOTP.Slot :index="1" />
          <InputOTP.Slot :index="2" />
          <InputOTP.Slot :index="3" />
        </InputOTP>
        <p class="text-center text-muted-foreground text-sm">{{ isCorrect() ? "✅" : "❌" }}</p>
      </div>
    `,
  }),
});
