import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter once
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// List of recipient emails
const recipientEmails = ["davepro012@gmail.com", "davidtmoses5@gmail.com"];

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Create email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipientEmails.join(", "), // Join all emails with comma
      subject: "New Form Submission",
      html: `
        <h1>New Form Submission</h1>
        <p><strong>Username:</strong> ${formData.username}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${
          formData.message
            ? `<p><strong>Message:</strong> ${formData.message}</p>`
            : ""
        }
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Form submitted and emails sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Error processing submission",
      },
      { status: 500 }
    );
  }
}
