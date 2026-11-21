import type { JSX } from '@solidjs/web';
export declare const accents: readonly ["rosewater", "flamingo", "pink", "mauve", "red", "maroon", "orange", "yellow", "green", "teal", "sky", "sapphire", "blue", "lavender"];
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
export declare function Theme(props: ThemeProps): JSX.Element;
