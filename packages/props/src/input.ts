import type {
  InputRecipeFn,
  InputRootRecipeFn,
  InputRootVariantProps,
} from "@pisagor/recipes/input";

/** InputRoot props. */
export interface InputRootProps extends InputRootVariantProps {
  /**
   * Style recipe override.
   * @defaultValue inputRootRecipe
   */
  recipe?: InputRootRecipeFn;
}

/** Input props. */
export interface InputProps extends InputRootVariantProps {
  /**
   * Style recipe override.
   * @defaultValue inputRecipe
   */
  recipe?: InputRecipeFn;
}
