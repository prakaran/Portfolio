"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { name, email, message } = formData;

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL || "your-email@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
