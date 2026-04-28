"use server";

import { Resend } from "resend";
import { SERVICES, type ServiceSlug } from "@/lib/services";

export interface ContactFormResult {
  ok: boolean;
  message: string;
}

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  specialty?: string;
  message: string;
}

/**
 * Server action: validates submissions and forwards them to DJ via Resend.
 *
 * Env vars required:
 *   RESEND_API_KEY    — your Resend API key
 *   RESEND_FROM_EMAIL — the verified sender (e.g. hello@upwardphysio.com)
 *   CONTACT_TO_EMAIL  — destination inbox (defaults to dj@upwardphysio.com)
 */
export async function submitContact(
  payload: ContactPayload
): Promise<ContactFormResult> {
  // --- Server-side validation ---------------------------------------------
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const phone = payload.phone?.trim() || "";
  const specialtySlug = payload.specialty?.trim() as ServiceSlug | undefined;

  if (!name || name.length < 2) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return {
      ok: false,
      message: "Please share a few sentences about what you're looking for.",
    };
  }

  const specialty = specialtySlug
    ? SERVICES.find((s) => s.slug === specialtySlug)?.title
    : "Not specified";

  // --- Resend setup --------------------------------------------------------
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || "dj@upwardphysio.com";

  if (!apiKey || !fromEmail) {
    console.error("[contact] missing RESEND env vars");
    return {
      ok: false,
      message:
        "Email service isn't configured yet. Please email DJ directly while we get this fixed.",
    };
  }

  const resend = new Resend(apiKey);

  // --- Build email body ---------------------------------------------------
  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #292828;">
      <div style="border-bottom: 2px solid #05ad9e; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; color: #292828; font-size: 22px;">New Upward Physio enquiry</h1>
        <p style="margin: 4px 0 0; color: #69412b; font-size: 13px;">From upwardphysio.com</p>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 110px;">Name</td>
          <td style="padding: 8px 0; font-size: 15px;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #05ad9e; text-decoration: none;">${escapeHtml(email)}</a></td>
        </tr>
        ${phone ? `<tr>
          <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
          <td style="padding: 8px 0; font-size: 15px;">${escapeHtml(phone)}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Specialty</td>
          <td style="padding: 8px 0; font-size: 15px;">${escapeHtml(specialty || "Not specified")}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; padding: 20px; background: #f7f7f5; border-radius: 8px;">
        <p style="margin: 0 0 8px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: `Upward Physio Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New enquiry — ${specialty || "General"} — ${name}`,
      html,
    });

    if (result.error) {
      console.error("[contact] resend error", result.error);
      return {
        ok: false,
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return {
      ok: true,
      message: "Thanks — DJ will get back to you within one business day.",
    };
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return {
      ok: false,
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}

/** Minimal HTML escape for safety in the email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
