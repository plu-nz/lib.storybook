import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Theme } from '../theme';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { TextField } from '../components/TextField';

const meta = {
  title: 'Foundation/Theme',
  component: Theme,
  argTypes: {
    accent: { control: 'select', options: ['orange', 'blue', 'green', 'red'] },
    shape: { control: 'select', options: ['square', 'rounded'] },
  },
  args: { accent: 'green', shape: 'square' },
  render: args => <Theme {...args}><Card style={{ width: 'min(90vw, 360px)' }}><div style={{ display: 'grid', gap: '16px' }}><strong>Theme controls</strong><TextField label="Project name" placeholder="A small app" hint="Change the accent and shape in Controls." /><Button>Continue</Button></div></Card></Theme>,
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
