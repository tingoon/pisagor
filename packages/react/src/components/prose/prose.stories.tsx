import { Prose, ScrollArea } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Prose,
  parameters: {
    docs: {
      description: {
        component:
          "Styles long-form written content with readable typography for articles, docs, and markdown.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Prose",
});

export const Default = meta.story({
  render: () => (
    <div className="overflow-hidden">
      <ScrollArea className="h-[350px] rounded-xl border">
        <Prose className="p-8">
          <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who spent all day
            lounging on his throne. One day, his advisors came to him with a problem: the kingdom
            was running out of money.
          </p>
          <h2>The King&apos;s Plan</h2>
          <p>
            The king thought long and hard, and finally came up with{" "}
            <a href="https://example.com/prose">a brilliant plan</a>: he would tax the jokes in the
            kingdom.
          </p>
          <blockquote>
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only
            fair that they should pay for the privilege.&quot;
          </blockquote>
          <h3>The Joke Tax</h3>
          <p>
            The king&apos;s subjects were not amused. They grumbled and complained, but the king was
            firm:
          </p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there
            was one person who refused to let the king&apos;s foolishness get him down: a court
            jester named Jokester.
          </p>
          <h3>Jokester&apos;s Revolt</h3>
          <p>
            Jokester began sneaking into the castle in the middle of the night and leaving jokes all
            over the place: under the king&apos;s pillow, in his soup, even in the royal toilet. The
            king was furious, but he couldn&apos;t seem to stop Jokester.
          </p>
          <p>
            And then, one day, the people of the kingdom discovered that the jokes left by Jokester
            were so funny that they couldn&apos;t help but laugh. And once they started laughing,
            they couldn&apos;t stop.
          </p>
          <h3>The People&apos;s Rebellion</h3>
          <p>
            The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and
            puns again, and soon the entire kingdom was in on the joke.
          </p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>King&apos;s Treasury</th>
                  <th>People&apos;s happiness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Empty</td>
                  <td>Overflowing</td>
                </tr>
                <tr>
                  <td>Modest</td>
                  <td>Satisfied</td>
                </tr>
                <tr>
                  <td>Full</td>
                  <td>Ecstatic</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The king, seeing how much happier his subjects were, realized the error of his ways and
            repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever
            after.
          </p>
          <p>
            The moral of the story is: never underestimate the power of a good laugh and always be
            careful of bad ideas.
          </p>
        </Prose>
      </ScrollArea>
    </div>
  ),
});

export const List = meta.story({
  render: () => (
    <Prose>
      <ul>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
    </Prose>
  ),
});

export const Separator = meta.story({
  render: () => (
    <Prose>
      <p>First section of content.</p>
      <hr />
      <p>Second section after the divider.</p>
    </Prose>
  ),
});

export const A = meta.story({
  render: () => (
    <Prose>
      <p>
        Read more <a href="https://example.com/about-the-joke-tax">about the joke tax</a> in the
        kingdom archives.
      </p>
    </Prose>
  ),
});

export const Blockquote = meta.story({
  render: () => (
    <Prose>
      <blockquote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay
        for the privilege."
      </blockquote>
    </Prose>
  ),
});

export const Details = meta.story({
  render: () => (
    <Prose>
      <details>
        <summary>How did the joke tax end?</summary>
        <p>
          The king repealed the tax after seeing how much happier his subjects were. Jokester was
          declared a hero.
        </p>
      </details>
    </Prose>
  ),
});

export const Dl = meta.story({
  render: () => (
    <Prose>
      <dl>
        <dt>Joke Tax</dt>
        <dd>A levy on humor imposed by the king.</dd>
        <dt>Jokester</dt>
        <dd>The court jester who led the revolt.</dd>
      </dl>
    </Prose>
  ),
});

export const H1 = meta.story({
  render: () => (
    <Prose>
      <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
    </Prose>
  ),
});

export const H2 = meta.story({
  render: () => (
    <Prose>
      <h2>The People of the Kingdom</h2>
    </Prose>
  ),
});

export const H3 = meta.story({
  render: () => (
    <Prose>
      <h3>The Joke Tax</h3>
    </Prose>
  ),
});

export const H4 = meta.story({
  render: () => (
    <Prose>
      <h4>People stopped telling jokes</h4>
    </Prose>
  ),
});

export const H5 = meta.story({
  render: () => (
    <Prose>
      <h4>People stopped telling jokes</h4>
    </Prose>
  ),
});

export const H6 = meta.story({
  render: () => (
    <Prose>
      <h4>People stopped telling jokes</h4>
    </Prose>
  ),
});

export const InlineCode = meta.story({
  render: () => (
    <Prose>
      <code>@pisagor/react/button</code>
    </Prose>
  ),
});

export const Kbd = meta.story({
  render: () => (
    <Prose>
      <p>
        Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your work.
      </p>
    </Prose>
  ),
});

export const Mark = meta.story({
  render: () => (
    <Prose>
      <p>
        The king&apos;s <mark>brilliant plan</mark> was to tax jokes in the kingdom.
      </p>
    </Prose>
  ),
});

export const Media = meta.story({
  render: () => (
    <Prose>
      <figure>
        <img alt="Placeholder" height={200} src="/images/placeholder.svg" width={200} />
        <figcaption>A description of the image.</figcaption>
      </figure>
    </Prose>
  ),
});

export const NotProse = meta.story({
  render: () => (
    <Prose className="space-y-10">
      <div>
        <h1>Davy Jones' locker</h1>

        <p>
          Davy Jones' locker is a metaphor for the oceanic abyss, the final resting place of drowned
          sailors and travellers
        </p>
      </div>
      <hr />

      <div className="not-prose">
        <h1>Davy Jones' locker</h1>

        <p>
          Davy Jones' locker is a metaphor for the oceanic abyss, the final resting place of drowned
          sailors and travellers
        </p>
      </div>
    </Prose>
  ),
});

export const Ol = meta.story({
  render: () => (
    <Prose>
      <ol>
        <li>First, gather the ingredients.</li>
        <li>Then, mix them together.</li>
        <li>Finally, bake for 30 minutes.</li>
      </ol>
    </Prose>
  ),
});

export const P = meta.story({
  render: () => (
    <Prose>
      <p>
        The king, seeing how much happier his subjects were, realized the error of his ways and
        repealed the joke tax.
      </p>
    </Prose>
  ),
});

export const Small = meta.story({
  render: () => (
    <Prose>
      <small>
        Never underestimate the power of a good laugh and always be careful of bad ideas.
      </small>
    </Prose>
  ),
});

export const HtmlTable = meta.story({
  render: () => (
    <Prose>
      <table>
        <thead>
          <tr>
            <th>King&apos;s Treasury</th>
            <th>People&apos;s happiness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empty</td>
            <td>Overflowing</td>
          </tr>
          <tr>
            <td>Modest</td>
            <td>Satisfied</td>
          </tr>
          <tr>
            <td>Full</td>
            <td>Ecstatic</td>
          </tr>
        </tbody>
      </table>
    </Prose>
  ),
});

export const Html = meta.story({
  render: () => (
    <Prose
      html={`
        <h2>Trusted HTML</h2>
        <p>Content rendered through the <code>html</code> prop for CMS markup.</p>
      `}
    />
  ),
});
