import ProviderLocale from "./locale.svelte";
import ProviderMotion from "./motion.svelte";
import ProviderRoot from "./provider.svelte";
import ProviderTranslations from "./translations.svelte";

export type {
  LocaleConfig,
  MessageKey,
  MotionConfig,
  ProviderContextValue,
  TranslationsConfig,
} from "./context";
export {
  useLocale,
  useMessageResolver,
  useMotion,
  useProvider,
  useProviderValue,
  useTranslation,
  useTranslations,
} from "./context";

export const Provider = Object.assign(ProviderRoot, {
  Locale: ProviderLocale,
  Motion: ProviderMotion,
  Translations: ProviderTranslations,
});
