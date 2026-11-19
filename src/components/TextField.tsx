import { createUniqueId, omit } from 'solid-js';
import type { JSX } from '@solidjs/web';

export interface TextFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function TextField(props: TextFieldProps) {
  const generatedId = createUniqueId();
  const local = props;
  const rest = omit(props, 'label', 'hint', 'error', 'id', 'class', 'aria-describedby', 'aria-invalid');
  const id = () => typeof local.id === 'string' ? local.id : generatedId;
  const hintId = () => `${id()}-hint`;
  const errorId = () => `${id()}-error`;
  const describedBy = () => [local['aria-describedby'], local.hint ? hintId() : '', local.error ? errorId() : ''].filter(Boolean).join(' ') || undefined;
  return <div class={`plz-field ${local.class ?? ''}`}>
    <label class="plz-field__label" for={id()}>{local.label}</label>
    <input {...rest} id={id()} class="plz-field__input" aria-describedby={describedBy()} aria-invalid={local.error ? 'true' : local['aria-invalid']} />
    {local.hint && <p id={hintId()} class="plz-field__hint">{local.hint}</p>}
    {local.error && <p id={errorId()} class="plz-field__error">{local.error}</p>}
  </div>;
}
