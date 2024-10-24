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

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipientEmails.join(", "),
      subject: "New Form Submission",
      html: `
        <div style="background-color: #ffffff; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #1d4ed8; padding: 20px; border-radius: 8px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Form Submission</h1>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff; border: 1px solid #1d4ed8; border-radius: 8px; margin-top: 20px;">
            <div style="margin-bottom: 15px;">
              <p style="color: #1d4ed8; font-weight: bold; margin-bottom: 5px;">Username:</p>
              <p style="color: #000000; margin: 0;">${formData.username}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="color: #1d4ed8; font-weight: bold; margin-bottom: 5px;">Email:</p>
              <p style="color: #000000; margin: 0;">${formData.email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="color: #1d4ed8; font-weight: bold; margin-bottom: 5px;">Message:</p>
              <p style="color: #000000; margin: 0;">${formData.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #1d4ed8; border-radius: 8px;">
            <p style="color: #ffffff; margin: 0;">This is an automated message from your website form submission</p>
          </div>
        </div>
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
