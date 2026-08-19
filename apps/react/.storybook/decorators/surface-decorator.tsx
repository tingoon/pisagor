import { Surface } from "@pisagor/react/surface";
import type { Decorator } from "@storybook/react-vite";
import type { PropsWithChildren } from "react";

function SurfacePanel({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="relative flex size-full items-center justify-center">
      <p className="absolute top-0 left-0 w-full p-4 text-center font-medium text-muted-foreground text-sm">
        {title}
      </p>
      {children}
    </div>
  );
}

export const SurfaceDecorator: Decorator = (Story) => (
  <div className="absolute inset-0 grid size-full min-h-svh w-full grid-cols-2">
    <SurfacePanel title="Normal">
      <Story />
    </SurfacePanel>
    <Surface padding="none" rounded={false} variant="secondary">
      <SurfacePanel title="On Surface">
        <Story />
      </SurfacePanel>
    </Surface>
  </div>
);
