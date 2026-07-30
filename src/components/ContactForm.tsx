import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(values: ContactValues) {
  if (values.name.trim().length < 2) return 'Name must be at least 2 characters.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Enter a valid email address.';
  if (values.subject.trim().length < 2) return 'Subject must be at least 2 characters.';
  if (values.message.trim().length < 10) return 'Message must be at least 10 characters.';
  return '';
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [note, setNote] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationMessage = validate(values);
    if (validationMessage) {
      setStatus('error');
      setNote(validationMessage);
      return;
    }

    setStatus('loading');
    setNote('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const payload = await response.json() as { success?: boolean; error?: string };

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Message could not be sent.');
      }

      setStatus('success');
      setNote('Message sent.');
      setValues(initialValues);
      window.setTimeout(() => {
        setStatus('idle');
        setNote('');
      }, 3200);
    } catch (error) {
      setStatus('error');
      setNote(error instanceof Error ? error.message : 'Message could not be sent.');
    }
  }

  function update(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-field-grid">
        <label>
          <span>Name</span>
          <input value={values.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input value={values.email} onChange={(event) => update('email', event.target.value)} type="email" autoComplete="email" />
        </label>
      </div>

      <label>
        <span>Subject</span>
        <input value={values.subject} onChange={(event) => update('subject', event.target.value)} />
      </label>

      <label>
        <span>Message</span>
        <textarea value={values.message} onChange={(event) => update('message', event.target.value)} rows={7} />
      </label>

      <div className="contact-form-actions">
        <button type="submit" disabled={status === 'loading'}>
          <Send size={16} aria-hidden="true" />
          {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message sent' : 'Send message'}
        </button>
        {note && <p className={status === 'error' ? 'contact-note error' : 'contact-note'}>{note}</p>}
      </div>
    </form>
  );
}
