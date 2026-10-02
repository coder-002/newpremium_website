import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FIELDS = [
  ["name", "Name"],
  ["designation", "Designation"],
  ["institution", "Institution"],
  ["institution_type", "Institution type"],
  ["branches", "Branches"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["product", "Product"],
  ["message", "Message"],
] as const;
const REQUIRED = ["name", "phone", "institution"];
const MAX_LEN = 4000;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden honeypot field; pretend success so they don't retry.
  if (String(form.get("company_website") ?? "").trim()) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(FIELDS.map(([key]) => [key, String(form.get(key) ?? "").trim().slice(0, MAX_LEN)]));
  if (REQUIRED.some((key) => !data[key])) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? data.email : undefined;

  const rows = FIELDS.filter(([key]) => data[key]);
  const text = rows.map(([key, label]) => `${label}: ${data[key]}`).join("\n");
  const html = `<h2 style="font-family:sans-serif;color:#0A2540">New demo request</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([key, label]) => `<tr><td style="padding:6px 12px 6px 0;color:#6B7280;vertical-align:top">${label}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(data[key])}</td></tr>`)
    .join("")}</table>`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Premium Technologies Website" <${GMAIL_USER}>`,
      to: CONTACT_TO || GMAIL_USER,
      replyTo,
      subject: `New Demo Request — ${data.institution}${data.product ? ` (${data.product})` : ""}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
