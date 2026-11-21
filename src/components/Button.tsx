import { omit } from 'solid-js';
import type { JSX } from '@solidjs/web';
import type { Accent } from '../theme';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Determines fill and border treatment. */
  variant?: 'solid' | 'outline' | 'ghost';
  /** Uses the nearest Theme accent unless set explicitly. */
  accent?: Accent;
  size?: 'sm' | 'md';
}

export function Button(props: ButtonProps) {
  const local = props;
  const rest = omit(props, 'variant', 'accent', 'size', 'class', 'children');
  return <button {...rest} class={`plz-button plz-button--${local.variant ?? 'solid'} plz-button--${local.size ?? 'md'} ${local.class ?? ''}`} data-plz-accent={local.accent}>{local.children}</button>;
}
