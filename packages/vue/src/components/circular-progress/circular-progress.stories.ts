import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { CircularProgress } from "@pisagor/vue/circular-progress";
import { onMounted, ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how far along a task is on a circular track, including indeterminate loading when the duration is unknown.",
      },
    },
  },
  title: "Components/Feedback/Circular Progress",
});

export const Default = meta.story({
  render: () => ({
    components: { CircularProgress },
    setup() {
      const progress = ref(24);

      onMounted(() => {
        setTimeout(() => {
          progress.value = 72;
        }, 500);
      });

      return { progress };
    },
    template: '<CircularProgress :value="progress" />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { CircularProgress },
    template: `
      <div class="flex flex-wrap items-center gap-6">
        <CircularProgress :size="24" :value="35" />
        <CircularProgress :size="32" :value="62" />
        <CircularProgress :size="40" :value="84" />
      </div>
    `,
  }),
});

export const Thickness = meta.story({
  render: () => ({
    components: { CircularProgress },
    template: `
      <div class="flex flex-wrap items-center gap-6">
        <CircularProgress :size="24" :thickness="2" :value="35" />
        <CircularProgress :size="66" :thickness="6" :value="62" />
        <CircularProgress :size="100" :thickness="8" :value="84" />
      </div>
    `,
  }),
});

export const WithValue = meta.story({
  render: () => ({
    components: { CircularProgress },
    template: `
      <CircularProgress
        is-value-visible
        :size="66"
        :thickness="5"
        :value="66"
      />
    `,
  }),
});

export const Indeterminate = meta.story({
  render: () => ({
    components: { CircularProgress },
    template: `
      <div class="flex flex-col items-center gap-2">
        <span class="font-medium text-sm">Establishing connection...</span>
        <CircularProgress indeterminate />
      </div>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, CircularProgress, PhMinus, PhPlus },
    setup() {
      const value = ref(55);

      return { value };
    },
    template: `
      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-2">
          <Button size="icon-sm" variant="outline" @click="value = Math.max(0, value - 10)">
            <PhMinus />
          </Button>
          <Button size="icon-sm" variant="outline" @click="value = Math.min(100, value + 10)">
            <PhPlus />
          </Button>
        </div>
        <CircularProgress :value="value" />
      </div>
    `,
  }),
});
