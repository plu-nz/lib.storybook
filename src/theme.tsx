import type { JSX } from 'solid-js';

export type Accent = 'orange' | 'blue' | 'green' | 'red';
export type Shape = 'square' | 'rounded';
export interface ThemeProps {
  /** Uses one of the approved Darkppuccin accent colors. */
  accent?: Accent;
  /** Controls corner shape for all nested components. */
  shape?: Shape;
  children: JSX.Element;
  class?: string;
}

export function Theme(props: ThemeProps) {
  return <div class={`plz-theme ${props.class ?? ''}`} data-plz-accent={props.accent ?? 'green'} data-plz-shape={props.shape ?? 'square'}>{props.children}</div>;
}
