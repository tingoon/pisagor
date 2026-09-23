import { useEffect, useState } from "react";
import { CircularProgress } from "..";

export function Default() {
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return <CircularProgress value={progress} />;
}
