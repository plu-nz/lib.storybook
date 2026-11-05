import { splitProps, type JSX } from 'solid-js';

export interface LinkButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** A link styled like a Button, preserving native navigation behavior. */
  variant?: 'solid' | 'outline' | 'ghost';
  accent?: 'orange' | 'blue' | 'green' | 'red';
  size?: 'sm' | 'md';
  href: string;
}

export function LinkButton(props: LinkButtonProps) {
  const [local, rest] = splitProps(props, ['variant', 'accent', 'size', 'class', 'children']);
  return <a {...rest} class={`plz-button plz-button--${local.variant ?? 'solid'} plz-button--${local.size ?? 'md'} ${local.class ?? ''}`} data-plz-accent={local.accent}>{local.children}</a>;
}
