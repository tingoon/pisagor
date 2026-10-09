import type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodeRootProps as QrCodePrimitiveRootProps,
} from "@ark-ui/solid/qr-code";
import { QrCode as QrCodePrimitive } from "@ark-ui/solid/qr-code";
import type { QrCodeProps as BaseQrCodeRootProps } from "@pisagor/props";
import { qrCodeRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useQrCode,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "QrCode", recipe: qrCodeRecipe });
// #endregion

export interface LocalQrCodeRootProps
  extends QrCodePrimitiveRootProps,
    BaseQrCodeRootProps {}

export type QrCodeDownloadProps = QrCodeDownloadTriggerProps;

const QrCodeRootProvider: Component<LocalQrCodeRootProps> = withProvider(
  QrCodePrimitive.Root,
  { name: "Root", slot: "base" },
);

export function QrCodeRoot(props: LocalQrCodeRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <QrCodeRootProvider {...rest}>
      {local.children ?? <QrCodeFrame />}
    </QrCodeRootProvider>
  );
}

export function QrCodeFrame(props: QrCodeFrameProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useQrCode();
  return (
    <QrCodePrimitive.Frame
      {...rest}
      class={styles.slots.frame({ class: local.class })}
    >
      <QrCodePrimitive.Pattern class={styles.slots.pattern()} />
    </QrCodePrimitive.Frame>
  );
}

export const QrCodeOverlay: Component<QrCodeOverlayProps> = withContext(
  QrCodePrimitive.Overlay,
  { name: "Overlay" },
);

export function QrCodeDownload(props: QrCodeDownloadProps): JSX.Element {
  return <QrCodePrimitive.DownloadTrigger {...props} />;
}

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodeRootProps,
} from "@ark-ui/solid/qr-code";

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
