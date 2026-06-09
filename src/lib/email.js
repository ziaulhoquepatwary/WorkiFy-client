import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, subject, text }) => {
    try {
        const data = await resend.emails.send({
            from: 'WorkiFy <onboarding@resend.dev>',
            to: to,
            subject: subject,
            text: text,
        });

        return data;
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error;
    }
};