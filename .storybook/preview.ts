import type { Preview } from 'storybook-solidjs-vite';
import '../src/styles.css';

// Tinta backgrounds so the canvas matches the Theme mode.
const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: { options: { dark: { name: 'Tinta dark', value: '#0f0f0f' }, light: { name: 'Tinta light', value: '#f7f7f9' } } },
  },
  initialGlobals: { backgrounds: { value: 'dark' } },
};

export default preview;
