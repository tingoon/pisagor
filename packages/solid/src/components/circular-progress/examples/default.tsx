import { createSignal, onCleanup, onMount } from "solid-js";
import { CircularProgress } from "../index";

export function Default() {
  const [progress, setProgress] = createSignal(24);

  onMount(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return <CircularProgress value={progress()} />;
}
