import type { JSX } from '@solidjs/web';

export const accents = ['rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'orange', 'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'] as const;
export type Accent = (typeof accents)[number];
export type Mode = 'dark' | 'light' | 'system';
export type Shape = 'square' | 'rounded';
export interface ThemeProps {
  /** Uses one of the Tinta accent colors. */
  accent?: Accent;
  /** Tinta dark or light palette; system follows the device. */
  mode?: Mode;
  /** Controls corner shape for all nested components. */
  shape?: Shape;
  children: JSX.Element;
  class?: string;
}

export function Theme(props: ThemeProps) {
  return <div class={`plz-theme ${props.class ?? ''}`} data-plz-accent={props.accent ?? 'green'} data-plz-mode={props.mode ?? 'dark'} data-plz-shape={props.shape ?? 'square'}>{props.children}</div>;
}
