import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
  framework: 'storybook-solidjs-vite',
  stories: ['../src/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
};

export default config;
