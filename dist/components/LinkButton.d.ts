import { type JSX } from 'solid-js';
import type { Accent } from '../theme';
export interface LinkButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** A link styled like a Button, preserving native navigation behavior. */
    variant?: 'solid' | 'outline' | 'ghost';
    accent?: Accent;
    size?: 'sm' | 'md';
    href: string;
}
export declare function LinkButton(props: LinkButtonProps): JSX.Element;
