# PLUNZ design system

Shared SolidJS components and Darkppuccin design tokens for PLUNZ web apps. The initial library contains `Theme`, `Button`, `TextField`, and `Card`. Storybook documents their variants and lets designers change component props interactively.

Colors come from the [Darkppuccin source palette](https://github.com/xonha/dotfiles/blob/main/omarchy/themes/darkppuccin/colors.toml). Accent choices are orange, blue, green, and red. `Theme` also selects square or rounded corners; the default is square. Components are scoped under `.plz-theme` so an app can adopt them gradually. Product copy and business behavior remain in each app.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm storybook
pnpm build:storybook
```

Storybook runs at `http://localhost:6006`. The package is not published to a registry. Git dependencies run the `prepare` build with the pinned pnpm version, so apps can install a commit from this repository and import its built output.

## Use in a SolidJS app

```tsx
import { Theme, Button } from '@plunz/design-system';
import '@plunz/design-system/styles.css';

<Theme accent="orange" shape="square"><Button variant="solid">Continue</Button></Theme>
```

Use `Theme` once around the adopted area. Pass `accent` to a specific `Button` when it needs a different approved color. Text fields own their label, hint, and error association. Keep labels and errors localized in the consuming app.

See [source](src/README.md), [stories](src/stories/README.md), [components](src/components/README.md), [Storybook configuration](.storybook/README.md), and [agent instructions](AGENTS.md).
