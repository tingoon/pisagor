import { spinnerRecipe } from "@pisagor/recipes/spinner";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface SpinnerProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  recipe?: typeof spinnerRecipe;
}

export function Spinner(props: SpinnerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe", "aria-label", "aria-hidden"]);
  const recipe = () => local.recipe ?? spinnerRecipe;

  return (
    <svg
      {...rest}
      aria-hidden={local["aria-hidden"]}
      aria-label={local["aria-hidden"] ? undefined : (local["aria-label"] ?? "Loading")}
      class={recipe()({ class: cn(local.class) })}
      data-part="root"
      data-scope="spinner"
      fill="none"
      role="status"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm84.852,43.148a8,8,0,0,1,0,11.314L198.627,108.686a8,8,0,1,1-11.314-11.314l22.225-22.224A8,8,0,0,1,220.852,75.148ZM224,128a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h32A8,8,0,0,1,224,128Zm-28.686,60.686a8,8,0,0,1-11.314,0l-22.225-22.225a8,8,0,0,1,11.314-11.313l22.225,22.224A8,8,0,0,1,195.314,188.686ZM128,224a8,8,0,0,1-8-8V184a8,8,0,0,1,16,0v32A8,8,0,0,1,128,224ZM68.686,195.314a8,8,0,0,1-11.314,0,8,8,0,0,1,0-11.314l22.225-22.225a8,8,0,1,1,11.313,11.314ZM40,136H72a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16ZM75.148,68.686,97.372,90.91A8,8,0,1,1,86.059,102.225L63.834,80A8,8,0,0,1,75.148,68.686Z"
        fill="currentColor"
      />
    </svg>
  );
}
