/** @jsxImportSource solid-js */

import { Progress } from "@pisagor/solid";
import { createSignal, onCleanup, onMount } from "solid-js";

export function Default() {
  const [progress, setProgress] = createSignal(13);

  onMount(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return <Progress value={progress()} />;
}
