import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.json();
  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }
  if (formData.subject.length < 3) {
    return NextResponse.json(
      { error: "Subject must be at least 3 characters long." },
      { status: 400 }
    );
  }
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.NEXT_PUBLIC_EMAIL_TO || "srnegi141@gmail.com",
      subject: formData.subject,
      react: EmailTemplate({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }) as React.JSX.Element,
    });

    if (error) {
      console.error("Error sending email line 46:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error sending email line 52:", error);
    return Response.json({ error }, { status: 500 });
  }
}
