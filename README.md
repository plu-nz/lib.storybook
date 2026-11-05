# PLUNZ Storybook and component library

Shared SolidJS components and Darkppuccin design tokens for PLUNZ web apps. The initial library contains `Theme`, `Button`, `LinkButton`, `TextField`, and `Card`. Storybook documents their variants and lets designers change component props interactively.

Colors come from the [Darkppuccin source palette](https://github.com/xonha/dotfiles/blob/main/omarchy/themes/darkppuccin/colors.toml). Accent choices are orange, blue, green, and red. `Theme` also selects square or rounded corners; the default is square. Components are scoped under `.plz-theme` so an app can adopt them gradually. Product copy and business behavior remain in each app.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm storybook
pnpm build:storybook
pnpm exec wrangler deploy --dry-run
pnpm deploy
```

The interactive Storybook is published at [storybook.plu.nz](https://storybook.plu.nz/), and runs locally at `http://localhost:6006`. The package is not published to a registry. Built files in `dist/` are committed so apps can install a pinned Git commit without rebuilding Storybook dependencies.

For a consuming app, run `pnpm add '@plunz/storybook@github:plu-nz/lib.storybook#<commit>'` and commit the resulting lockfile. The `<commit>` placeholder should be replaced with a reviewed revision from this repository.

## Use in a SolidJS app

```tsx
import { Theme, Button } from '@plunz/storybook';
import '@plunz/storybook/styles.css';

<Theme accent="orange" shape="square"><Button variant="solid">Continue</Button></Theme>
```

Use `Theme` once around the adopted area. Pass `accent` to a specific `Button` when it needs a different approved color. Text fields own their label, hint, and error association. Keep labels and errors localized in the consuming app. Wrangler publishes only the static Storybook site on the PLUNZ Cloudflare account; no API or database is required.

See [source](src/README.md), [stories](src/stories/README.md), [components](src/components/README.md), [Storybook configuration](.storybook/README.md), [CI](.github/README.md), and [agent instructions](AGENTS.md).
