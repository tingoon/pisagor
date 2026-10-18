import { Alert } from "@pisagor/solid";
import { SparkleIcon } from "@pisagor/solid/icons";

export function WithIcon() {
  return (
    <Alert
      description="Icons can be added to alerts to provide visual context and improve user experience."
      icon={<SparkleIcon />}
      title="New feature available"
    />
  );
}
