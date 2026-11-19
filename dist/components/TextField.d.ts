import type { JSX } from '@solidjs/web';
export interface TextFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: string;
    error?: string;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
