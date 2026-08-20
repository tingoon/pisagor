import { PhMoon, PhSun } from "@phosphor-icons/vue";
import { Button, Swap } from "@pisagor/vue";
import { h, reactive } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Swap,
  parameters: {
    docs: {
      description: {
        component:
          "Swaps between two pieces of content with a transition, such as play and pause icons.",
      },
    },
  },
  title: "Components/Actions/Swap",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, Swap },
    setup() {
      const state = reactive({ swap: false });
      const toggle = () => {
        state.swap = !state.swap;
      };
      const renderOff = () => h(PhSun);
      const renderOn = () => h(PhMoon);

      return { renderOff, renderOn, state, toggle };
    },
    template: `
      <Button @click="toggle" size="icon-lg" variant="outline">
        <Swap :off="renderOff()" :on="renderOn()" :swap="state.swap" />
      </Button>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Button, Swap },
    setup() {
      const state = reactive({
        blur: false,
        fade: false,
        flip: false,
        rotate: false,
        scale: false,
      });
      const toggle = (variant: keyof typeof state) => {
        state[variant] = !state[variant];
      };
      const renderOff = () => h(PhSun);
      const renderOn = () => h(PhMoon);

      return { renderOff, renderOn, state, toggle };
    },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Button @click="toggle('fade')" size="icon-lg" variant="outline">
          <Swap :off="renderOff()" :on="renderOn()" :swap="state.fade" variant="fade" />
        </Button>
        <Button @click="toggle('blur')" size="icon-lg" variant="outline">
          <Swap :off="renderOff()" :on="renderOn()" :swap="state.blur" variant="blur" />
        </Button>
        <Button @click="toggle('flip')" size="icon-lg" variant="outline">
          <Swap :off="renderOff()" :on="renderOn()" :swap="state.flip" variant="flip" />
        </Button>
        <Button @click="toggle('rotate')" size="icon-lg" variant="outline">
          <Swap :off="renderOff()" :on="renderOn()" :swap="state.rotate" variant="rotate" />
        </Button>
        <Button @click="toggle('scale')" size="icon-lg" variant="outline">
          <Swap :off="renderOff()" :on="renderOn()" :swap="state.scale" variant="scale" />
        </Button>
      </div>
    `,
  }),
});
