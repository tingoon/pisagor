import { Button } from "@pisagor/react";
import { useState } from "react";
import { Clipboard } from "..";
export function Controlled() {
  const [value, setValue] = useState("https://example.com/docs");

  return (
    <div className="flex flex-col gap-2">
      <Clipboard value={value} />
      <Button onClick={() => setValue("https://example.com/docs/alternate")} variant="secondary">
        Change URL
      </Button>
    </div>
  );
}
