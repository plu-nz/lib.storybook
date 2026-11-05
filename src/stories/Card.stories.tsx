import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Theme } from '../theme';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: { surface: { control: 'select', options: ['base', 'raised'] }, padding: { control: 'select', options: ['sm', 'md'] } },
  args: { surface: 'base', padding: 'md' },
  render: args => <Theme accent="blue"><Card {...args} style={{ width: 'min(90vw, 340px)' }}><h2 style={{ margin: '0 0 8px' }}>Your next session</h2><p style={{ margin: '0 0 20px', color: 'var(--plz-muted)' }}>Take a moment to focus.</p><Button>Begin</Button></Card></Theme>,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Raised: Story = { args: { surface: 'raised' } };
