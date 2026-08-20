import { Prose } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Prose,
  parameters: {
    docs: {
      description: {
        component:
          "Styles long-form written content with readable typography for articles and documentation.",
      },
    },
  },
  title: "Components/Data Display/Prose",
});

export const Default = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <div class="w-[28rem] overflow-hidden rounded-xl border bg-card p-6">
        <Prose>
          <h1>Readable typography, styled consistently</h1>
          <p>
            Prose is intended for long-form content so headings, lists, and links look great without
            manual class tuning.
          </p>
          <ul>
            <li>Clean spacing</li>
            <li>Accessible defaults</li>
            <li>Tailwind + token-driven styles</li>
          </ul>
        </Prose>
      </div>
    `,
  }),
});

export const List = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
      </Prose>
    `,
  }),
});

export const Separator = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <p>First section of content.</p>
        <hr />
        <p>Second section after the divider.</p>
      </Prose>
    `,
  }),
});

export const A = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <p>
          Read more <a href="https://example.com/about-the-joke-tax">about the joke tax</a> in the
          kingdom archives.
        </p>
      </Prose>
    `,
  }),
});

export const Blockquote = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <blockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay
          for the privilege."
        </blockquote>
      </Prose>
    `,
  }),
});

export const Details = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <details>
          <summary>How did the joke tax end?</summary>
          <p>
            The king repealed the tax after seeing how much happier his subjects were. Jokester was
            declared a hero.
          </p>
        </details>
      </Prose>
    `,
  }),
});

export const Dl = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <dl>
          <dt>Joke Tax</dt>
          <dd>A levy on humor imposed by the king.</dd>
          <dt>Jokester</dt>
          <dd>The court jester who led the revolt.</dd>
        </dl>
      </Prose>
    `,
  }),
});

export const H1 = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
      </Prose>
    `,
  }),
});

export const H2 = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <h2>The People of the Kingdom</h2>
      </Prose>
    `,
  }),
});

export const H3 = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <h3>The Joke Tax</h3>
      </Prose>
    `,
  }),
});

export const H4 = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <h4>People stopped telling jokes</h4>
      </Prose>
    `,
  }),
});

export const H5 = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <h4>People stopped telling jokes</h4>
      </Prose>
    `,
  }),
});

export const H6 = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <h4>People stopped telling jokes</h4>
      </Prose>
    `,
  }),
});

export const InlineCode = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <code>@pisagor/vue/button</code>
      </Prose>
    `,
  }),
});

export const Kbd = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <p>
          Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your work.
        </p>
      </Prose>
    `,
  }),
});

export const Mark = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <p>
          The king's <mark>brilliant plan</mark> was to tax jokes in the kingdom.
        </p>
      </Prose>
    `,
  }),
});

export const Media = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <figure>
          <img alt="Placeholder" height="200" src="/images/placeholder.svg" width="200" />
          <figcaption>A description of the image.</figcaption>
        </figure>
      </Prose>
    `,
  }),
});

export const NotProse = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose class="space-y-10">
        <div>
          <h1>Davy Jones' locker</h1>

          <p>
            Davy Jones' locker is a metaphor for the oceanic abyss, the final resting place of drowned
            sailors and travellers
          </p>
        </div>
        <hr />

        <div class="not-prose">
          <h1>Davy Jones' locker</h1>

          <p>
            Davy Jones' locker is a metaphor for the oceanic abyss, the final resting place of drowned
            sailors and travellers
          </p>
        </div>
      </Prose>
    `,
  }),
});

export const Ol = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <ol>
          <li>First, gather the ingredients.</li>
          <li>Then, mix them together.</li>
          <li>Finally, bake for 30 minutes.</li>
        </ol>
      </Prose>
    `,
  }),
});

export const P = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <p>
          The king, seeing how much happier his subjects were, realized the error of his ways and
          repealed the joke tax.
        </p>
      </Prose>
    `,
  }),
});

export const Small = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <small>
          Never underestimate the power of a good laugh and always be careful of bad ideas.
        </small>
      </Prose>
    `,
  }),
});

export const HtmlTable = meta.story({
  render: () => ({
    components: { Prose },
    template: `
      <Prose>
        <table>
          <thead>
            <tr>
              <th>King's Treasury</th>
              <th>People's happiness</th>
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
    `,
  }),
});

export const HtmlTrusted = meta.story({
  render: () => ({
    components: { Prose },
    setup() {
      return {
        html: `
          <h2>Trusted HTML</h2>
          <p>Rendered via the <code>html</code> prop for CMS-style markup.</p>
        `,
      };
    },
    template: `
      <div class="w-[28rem] overflow-hidden rounded-xl border bg-card p-6">
        <Prose :html="html" />
      </div>
    `,
  }),
});
