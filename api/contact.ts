import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

let resendClient: Resend | null = null;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  resendClient ??= new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

function parseBody(body: unknown) {
  if (typeof body === 'string') {
    return JSON.parse(body);
  }

  return body;
}

export default async function handler(
  request: { method?: string; body?: unknown },
  response: { status: (code: number) => { json: (body: unknown) => void }; setHeader?: (name: string, value: string) => void },
) {
  if (request.method !== 'POST') {
    response.setHeader?.('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const parsed = schema.safeParse(parseBody(request.body));
  if (!parsed.success) {
    return response.status(400).json({ error: 'Invalid form submission.' });
  }

  try {
    const resend = getResend();
    const to = process.env.CONTACT_EMAIL || 'mayank.chandak21@gmail.com';

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to,
      replyTo: parsed.data.email,
      subject: `[Portfolio] ${parsed.data.subject}`,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to send message.';
    return response.status(500).json({ error: message });
  }
}
