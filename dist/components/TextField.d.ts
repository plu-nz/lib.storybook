import { type JSX } from 'solid-js';
export interface TextFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: string;
    error?: string;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
