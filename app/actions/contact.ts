"use server";

import { Resend } from "resend";
import { profile } from "@/lib/data";

export type ContactState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  // Honeypot — bots fill hidden fields; humans don't.
  if (honeypot) {
    return { ok: true, message: "Thanks — your message has been received." };
  }

  if (name.length < 2) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return {
      ok: false,
      message: "Please write a slightly longer message (10+ characters).",
    };
  }
  if (message.length > 5000) {
    return { ok: false, message: "Message is too long (max 5000 chars)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress =
    process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    // Graceful fallback when email isn't configured (e.g. local dev).
    // Log to the server so the developer can see the submission.
    console.info("[contact] RESEND_API_KEY not set — submission received:", {
      name,
      email,
      message,
    });
    return {
      ok: true,
      message:
        "Thanks! Your message was received. (Email delivery is not yet configured — please also email me directly.)",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [profile.email],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [
        `From: ${name} <${email}>`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return {
        ok: false,
        message: "Something went wrong sending your message. Please email me directly.",
      };
    }

    return {
      ok: true,
      message: "Thanks! Your message is on its way. I'll get back to you soon.",
    };
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return {
      ok: false,
      message: "Something went wrong. Please email me directly.",
    };
  }
}
