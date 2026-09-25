import { useState } from "react";
import { InputOTP } from "..";

export function Controlled() {
  const [value, setValue] = useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-muted-foreground text-sm">
        Enter the code 1234
      </p>
      <InputOTP onValueChange={setValue} value={value}>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Slot index={3} />
      </InputOTP>
      <p className="text-center text-muted-foreground text-sm">
        {isCorrect ? "✅" : "❌"}
      </p>
    </div>
  );
}
