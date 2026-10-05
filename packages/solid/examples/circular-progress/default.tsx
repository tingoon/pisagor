import { CircularProgress } from "@pisagor/solid";
import { createSignal, onCleanup, onMount } from "solid-js";

export function Default() {
  const [progress, setProgress] = createSignal(24);

  onMount(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return <CircularProgress value={progress()} />;
}
