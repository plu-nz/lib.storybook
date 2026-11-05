# Design system agent instructions

Read `README.md`, the PLUNZ shared `CONTEXT.md`, and the architecture, localization, and package manager decisions before changing shared behavior.

- `src/styles.css` owns shared tokens and component styles. `src/theme.tsx` scopes accent and corner shape. `src/components/` contains reusable SolidJS primitives. `src/stories/` documents behavior in Storybook. `.storybook/` configures the preview.
- Use only colors from the Darkppuccin source palette. Keep components independent of app routes, storage, networking, and product copy. Make labels and error text props so consuming apps localize them.
- Preserve semantic HTML, visible focus, keyboard access, minimum 44px primary touch targets, and responsive layouts. Scope styles to `.plz-` classes and `.plz-theme`.
- Use pnpm only. Install: `pnpm install --frozen-lockfile`; check: `pnpm check`; build package: `pnpm build`; run stories: `pnpm storybook`; build stories: `pnpm build:storybook`.
- When adding a public prop, provide a Storybook control or representative story and document its effect. Before completion, run the package and Storybook builds, review variants and disabled/error states, and test a consuming app before migrating it.
- Every directory needs a `README.md` index.
