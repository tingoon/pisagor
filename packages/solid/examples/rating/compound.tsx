import source from "./compound.tsx?raw";
import { Rating } from "@pisagor/solid";
import { StarIcon } from "@pisagor/solid/icons";
import { For } from "solid-js";

export function Compound() {
  return (
    <Rating.Root count={5} defaultValue={3}>
      <Rating.Control>
        <Rating.Context>
          {(rating) => (
            <For each={rating().items}>
              {(item) => (
                <Rating.Item index={item}>
                  <Rating.ItemContext>
                    {(itemState) => (
                      <Rating.Indicator
                        data-highlighted={
                          itemState().highlighted ? "" : undefined
                        }
                      >
                        <StarIcon data-bg="" />
                        <StarIcon data-fg="" weight="fill" />
                      </Rating.Indicator>
                    )}
                  </Rating.ItemContext>
                </Rating.Item>
              )}
            </For>
          )}
        </Rating.Context>
        <Rating.HiddenInput />
      </Rating.Control>
    </Rating.Root>
  );
}

export { source as CompoundSource };
