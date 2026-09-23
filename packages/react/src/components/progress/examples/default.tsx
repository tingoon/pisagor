import { useEffect, useState } from "react";
import { Progress } from "..";

export function Default() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} />;
}
