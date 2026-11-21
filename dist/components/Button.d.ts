import type { JSX } from '@solidjs/web';
import type { Accent } from '../theme';
export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Determines fill and border treatment. */
    variant?: 'solid' | 'outline' | 'ghost';
    /** Uses the nearest Theme accent unless set explicitly. */
    accent?: Accent;
    size?: 'sm' | 'md';
}
export declare function Button(props: ButtonProps): JSX.Element;
