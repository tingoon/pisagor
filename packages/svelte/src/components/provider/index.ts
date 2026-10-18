import ProviderLocale from "./locale.svelte";
import ProviderMotion from "./motion.svelte";
import ProviderRoot from "./provider.svelte";

export type {
  LocaleConfig,
  LocaleContextValue,
  MessageKey,
  MessageLookup,
  Messages,
  MotionConfig,
  ProviderContextValue,
} from "./context";
export { useLocale, useMotion, useProvider, useProviderValue } from "./context";

export const Provider = Object.assign(ProviderRoot, {
  Locale: ProviderLocale,
  Motion: ProviderMotion,
});
