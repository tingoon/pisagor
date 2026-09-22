import type {
  InputGroupAddonRecipeFn,
  InputGroupAddonVariantProps,
  InputGroupButtonRecipeFn,
  InputGroupButtonVariantProps,
  InputGroupControlRecipeFn,
  InputGroupTextareaControlRecipeFn,
  InputGroupTextRecipeFn,
} from "@pisagor/recipes/input-group";

/** InputGroupAddon props. */
export interface InputGroupAddonProps extends InputGroupAddonVariantProps {
  /**
   * Style recipe override.
   * @defaultValue inputGroupAddonRecipe
   */
  recipe?: InputGroupAddonRecipeFn;
}

/** InputGroupButton props. */
export interface InputGroupButtonProps extends InputGroupButtonVariantProps {
  /**
   * Style recipe override.
   * @defaultValue inputGroupButtonRecipe
   */
  recipe?: InputGroupButtonRecipeFn;
}

/** InputGroupText props. */
export interface InputGroupTextProps {
  /**
   * Style recipe override.
   * @defaultValue inputGroupTextRecipe
   */
  recipe?: InputGroupTextRecipeFn;
}

/** InputGroupControl props. */
export interface InputGroupControlProps {
  /**
   * Style recipe override.
   * @defaultValue inputGroupControlRecipe
   */
  recipe?: InputGroupControlRecipeFn;
}

/** InputGroupTextareaControl props. */
export interface InputGroupTextareaControlProps {
  /**
   * Style recipe override.
   * @defaultValue inputGroupTextareaControlRecipe
   */
  recipe?: InputGroupTextareaControlRecipeFn;
}
