import source from "./compound.tsx?raw";
import { Slider } from "@pisagor/solid";

export function Compound() {
  return (
    <Slider.Root class="w-64" defaultValue={[40]}>
      <Slider.Header>
        <Slider.Label>Volume</Slider.Label>
        <Slider.Value />
      </Slider.Header>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
    </Slider.Root>
  );
}

export { source as CompoundSource };
