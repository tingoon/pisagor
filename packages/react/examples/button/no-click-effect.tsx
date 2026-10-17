import source from "./no-click-effect.tsx?raw";
import { Button } from "@pisagor/react";

export function NoClickEffect() {
  return <Button clickEffect={false}>Button</Button>;
}

export { source as NoClickEffectSource };
