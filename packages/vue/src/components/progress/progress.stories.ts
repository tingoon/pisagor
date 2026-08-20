import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, Progress } from "@pisagor/vue";
import { onMounted, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how complete a task is along a track, including indeterminate loading when progress is unknown.",
      },
    },
  },
  title: "Components/Feedback/Progress",
});

export const Default = meta.story({
  render: () => ({
    components: { Progress },
    setup() {
      const progress = ref(13);

      onMounted(() => {
        setTimeout(() => {
          progress.value = 66;
        }, 500);
      });

      return { progress };
    },
    template: '<Progress :value="progress" />',
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Progress },
    template: '<Progress :value="60" />',
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Progress },
    template: `
      <div class="flex w-full items-center justify-center">
        <Progress class="h-64" orientation="vertical" :value="60" />
      </div>
    `,
  }),
});

export const WithLabel = meta.story({
  render: () => ({
    components: { Progress },
    template: `
      <Progress
        is-value-visible
        label="Upload progress"
        :value="66"
      />
    `,
  }),
});

export const Indeterminate = meta.story({
  render: () => ({
    components: { Progress },
    template: `
      <div class="flex w-full flex-col gap-2">
        <span class="font-medium text-sm">Establishing connection...</span>
        <Progress indeterminate />
      </div>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, PhMinus, PhPlus, Progress },
    setup() {
      const value = ref(50);

      return { value };
    },
    template: `
      <div class="flex w-full flex-col gap-2">
        <div class="flex items-center gap-2 font-medium text-sm">
          Controlled progress
          <div class="ml-auto flex gap-2">
            <Button size="icon-sm" variant="outline" @click="value = Math.max(0, value - 10)">
              <PhMinus />
            </Button>
            <Button size="icon-sm" variant="outline" @click="value = Math.min(100, value + 10)">
              <PhPlus />
            </Button>
          </div>
        </div>
        <Progress :value="value" />
      </div>
    `,
  }),
});
