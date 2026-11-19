import { omit } from 'solid-js';
import type { JSX } from '@solidjs/web';

export interface CardProps extends JSX.HTMLAttributes<HTMLElement> {
  /** Raised uses a slightly lighter Darkppuccin surface. */
  surface?: 'base' | 'raised';
  padding?: 'sm' | 'md';
}

export function Card(props: CardProps) {
  const local = props;
  const rest = omit(props, 'surface', 'padding', 'class', 'children');
  return <section {...rest} class={`plz-card plz-card--${local.surface ?? 'base'} plz-card--${local.padding ?? 'md'} ${local.class ?? ''}`}>{local.children}</section>;
}
