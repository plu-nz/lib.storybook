import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Theme } from '../theme';
import { TextField } from '../components/TextField';

const meta = {
  title: 'Components/Text field',
  component: TextField,
  args: { label: 'Bill name', placeholder: 'Dinner with friends', hint: 'Optional' },
  render: args => <Theme><div style={{ width: 'min(90vw, 320px)', padding: '20px' }}><TextField {...args} /></div></Theme>,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Error: Story = { args: { error: 'Enter a name to continue.', hint: undefined } };
export const Disabled: Story = { args: { disabled: true } };
