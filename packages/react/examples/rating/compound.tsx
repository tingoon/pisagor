import source from "./compound.tsx?raw";
import { StarIcon } from "@phosphor-icons/react";
import { Rating } from "@pisagor/react";

export function Compound() {
  return (
    <Rating.Root count={5} defaultValue={3}>
      <Rating.Control>
        <Rating.Context>
          {({ items }) =>
            items.map((item) => (
              <Rating.Item index={item} key={item}>
                <Rating.ItemContext>
                  {({ highlighted }) => (
                    <Rating.Indicator
                      data-highlighted={highlighted ? "" : undefined}
                    >
                      <StarIcon data-bg="" />
                      <StarIcon data-fg="" fill="currentColor" />
                    </Rating.Indicator>
                  )}
                </Rating.ItemContext>
              </Rating.Item>
            ))
          }
        </Rating.Context>
        <Rating.HiddenInput />
      </Rating.Control>
    </Rating.Root>
  );
}

export { source as CompoundSource };
