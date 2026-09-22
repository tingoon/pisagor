import {
  CheckCircleIcon,
  ChecksIcon,
  ClockCounterClockwiseIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { Alert } from "..";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Alert
        description="You can now start building your next great project."
        icon={<ChecksIcon />}
        title="Deployment successful"
        variant="default"
      />
      <Alert
        description="Your session has expired. Please log in again."
        icon={<WarningIcon />}
        title="Session expired"
        variant="destructive"
      />
      <Alert
        description="A new update is available. Review the update when you're ready."
        icon={<ClockCounterClockwiseIcon />}
        title="New update available"
        variant="info"
      />
      <Alert
        description="Your payment has been processed successfully. You will receive a receipt in your email."
        icon={<CheckCircleIcon />}
        title="Payment successful"
        variant="success"
      />
      <Alert
        description="Your storage is almost full. Consider upgrading your plan to avoid losing data."
        icon={<WarningIcon />}
        title="Storage almost full"
        variant="warning"
      />
    </div>
  );
}
