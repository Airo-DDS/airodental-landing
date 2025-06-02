import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// IMPORTANT: The Resend API key will be set via an environment variable (process.env.RESEND_API_KEY)
// This code assumes that variable is available in the deployment environment.
const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration for where emails are sent
const TO_EMAIL_ADDRESS = 'haloweave@gmail.com'; // Target email address
const FROM_EMAIL_ADDRESS = 'Airodental Inquiry <onboarding@resend.dev>'; // Sender email, using Resend's default for unverified domains

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, practice, phone } = body;

    // Basic validation
    if (!name || !email || !practice) {
      return NextResponse.json({ error: 'Missing required fields: Name, Email, and Practice Name are required.' }, { status: 400 });
    }

    const { error: resendError } = await resend.emails.send({
      from: FROM_EMAIL_ADDRESS,
      to: [TO_EMAIL_ADDRESS],
      subject: `New Airodental Contact: ${name} from ${practice}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { padding: 20px; border: 1px solid #eee; border-radius: 5px; max-width: 600px; margin: 20px auto; }
            h1 { color: #C33764; } /* Airodental Pink */
            p { margin-bottom: 10px; }
            strong { color: #09474C; } /* Airodental Teal */
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Contact Form Submission</h1>
            <p>You have received a new message from the Airodental contact form:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Practice Name:</strong> ${practice}</p>
            <p><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
          </div>
        </body>
        </html>
      `,
    });

    if (resendError) {
      console.error('Resend API Error:', resendError);
      return NextResponse.json({ error: 'Error sending email via Resend.', details: resendError.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Thank you! Your message has been sent successfully.' }, { status: 200 });

  } catch (err) {
    console.error('API Route Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred processing your request.';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
} 