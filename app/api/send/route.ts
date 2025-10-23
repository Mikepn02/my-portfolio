import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const data = await resend.emails.send({
            from: 'Your Portfolio <onboarding@resend.dev>',
            to: 'nzaberamikepeter@gmail.com',
            subject: `New message from ${name}: ${subject}`,
            html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        if (error instanceof Error) {
            console.error('Email send error:', error);
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }
        console.error('Unknown error:', error);
        return NextResponse.json({ success: false, error: 'Unknown error occurred' }, { status: 500 });
    }

}
