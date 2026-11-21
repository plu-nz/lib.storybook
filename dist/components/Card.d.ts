import { type JSX } from 'solid-js';
export interface CardProps extends JSX.HTMLAttributes<HTMLElement> {
    /** Raised uses a slightly lighter Tinta surface. */
    surface?: 'base' | 'raised';
    padding?: 'sm' | 'md';
}
export declare function Card(props: CardProps): JSX.Element;
