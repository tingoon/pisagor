import { useMediaQuery } from "@mantine/hooks";
import { Provider } from "@pisagor/react";
import type { Decorator } from "@storybook/react-vite";
import { useEffect } from "react";
import { reconcileFocusPrototype } from "../../src/lib/reconcile-focus-prototype";

export const AppDecorator: Decorator = (Story, context) => {
  // Storybook loaders patch focus before render; reconcile before Zag mounts.
  reconcileFocusPrototype();

  const theme = context.globals.theme ?? "system";
  const direction = context.globals.direction ?? "ltr";
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)", false);

  useEffect(() => {
    const isDark = theme === "dark" || (theme === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, [prefersDark, theme]);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  const locale = direction === "rtl" ? "ar-SA" : "en-US";

  return (
    <div className="bg-background text-foreground" dir={direction}>
      <Provider locale={locale}>
        <Story />
      </Provider>
    </div>
  );
};
