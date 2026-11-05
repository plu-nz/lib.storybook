import type { Preview } from 'storybook-solidjs-vite';
import '../src/styles.css';

const preview: Preview = {
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
};

export default preview;
