import type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodeRootProps as QrCodePrimitiveRootProps,
} from "@ark-ui/solid/qr-code";
import { QrCode as QrCodePrimitive } from "@ark-ui/solid/qr-code";
import { qrCodeRecipe } from "@pisagor/recipes/qr-code";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { QrCodeContext, useQrCode } from "./qr-code.context";

export interface QrCodeRootProps extends QrCodePrimitiveRootProps {
  recipe?: typeof qrCodeRecipe;
}

export type QrCodeDownloadProps = QrCodeDownloadTriggerProps;

export function QrCodeRoot(props: QrCodeRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? qrCodeRecipe)();

  return (
    <QrCodeContext value={{ slots: slots() }}>
      <QrCodePrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children ?? <QrCodeFrame />}
      </QrCodePrimitive.Root>
    </QrCodeContext>
  );
}

export function QrCodeFrame(props: QrCodeFrameProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useQrCode();
  return (
    <QrCodePrimitive.Frame
      {...rest}
      class={slots.frame({ class: local.class })}
    >
      <QrCodePrimitive.Pattern class={slots.pattern()} />
    </QrCodePrimitive.Frame>
  );
}

export function QrCodeOverlay(props: QrCodeOverlayProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useQrCode();
  return (
    <QrCodePrimitive.Overlay
      {...rest}
      class={slots.overlay({ class: local.class })}
    />
  );
}

export function QrCodeDownload(props: QrCodeDownloadProps): JSX.Element {
  return <QrCodePrimitive.DownloadTrigger {...props} />;
}
