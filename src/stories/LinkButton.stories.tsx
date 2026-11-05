import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Theme } from '../theme';
import { LinkButton } from '../components/LinkButton';

const meta = {
  title: 'Components/Link button',
  component: LinkButton,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    accent: { control: 'select', options: ['orange', 'blue', 'green', 'red'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: { href: '#apps', children: 'Explore apps', variant: 'solid', accent: 'green', size: 'md' },
  render: args => <Theme><LinkButton {...args} /></Theme>,
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
