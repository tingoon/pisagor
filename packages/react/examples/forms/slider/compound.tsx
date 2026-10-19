import { Slider } from "@pisagor/react";

export function Compound() {
  return (
    <Slider.Root className="w-64" defaultValue={[40]}>
      <Slider.Header>
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
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
