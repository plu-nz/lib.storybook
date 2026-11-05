import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Theme } from '../theme';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    accent: { control: 'select', options: ['orange', 'blue', 'green', 'red'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: { children: 'Start focus', variant: 'solid', accent: 'green', size: 'md', disabled: false },
  render: args => <Theme><Button {...args} /></Theme>,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Disabled: Story = { args: { disabled: true } };
