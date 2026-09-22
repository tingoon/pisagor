import { SparkleIcon } from "@phosphor-icons/react";
import { Alert } from "..";

export function WithIcon() {
  return (
    <Alert
      description="Icons can be added to alerts to provide visual context and improve user experience."
      icon={<SparkleIcon />}
      title="New feature available"
    />
  );
}
