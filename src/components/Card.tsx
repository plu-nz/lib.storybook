import { splitProps, type JSX } from 'solid-js';

export interface CardProps extends JSX.HTMLAttributes<HTMLElement> {
  /** Raised uses a slightly lighter Darkppuccin surface. */
  surface?: 'base' | 'raised';
  padding?: 'sm' | 'md';
}

export function Card(props: CardProps) {
  const [local, rest] = splitProps(props, ['surface', 'padding', 'class', 'children']);
  return <section {...rest} class={`plz-card plz-card--${local.surface ?? 'base'} plz-card--${local.padding ?? 'md'} ${local.class ?? ''}`}>{local.children}</section>;
}
