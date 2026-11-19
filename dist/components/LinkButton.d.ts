import type { JSX } from '@solidjs/web';
export interface LinkButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** A link styled like a Button, preserving native navigation behavior. */
    variant?: 'solid' | 'outline' | 'ghost';
    accent?: 'orange' | 'blue' | 'green' | 'red';
    size?: 'sm' | 'md';
    href: string;
}
export declare function LinkButton(props: LinkButtonProps): JSX.Element;
