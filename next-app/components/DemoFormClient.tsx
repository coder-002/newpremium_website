"use client";

import { type FormEvent, useState } from "react";

type Option = { value: string; label: string };

export type DemoFormCopy = {
  title: string; subtitle: string;
  name: string; namePh: string; designation: string; designationPh: string;
  institution: string; institutionPh: string;
  institutionType: string; selectType: string; institutionTypes: Option[];
  branches: string; selectRange: string; branchRanges: Option[];
  phone: string; phoneHint: string; email: string;
  products: string; selectProduct: string; productOptions: Option[];
  message: string; messagePh: string; submit: string; sending: string; required: string; sendError: string;
  successTitle: string; successDesc: string; meantime: string;
};

export default function DemoFormClient({ copy }: { copy: DemoFormCopy }) {
  const [fields, setFields] = useState({ name: "", institution: "", phone: "", type: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sent = status === "sent";

  const filled = Object.values(fields).filter((v) => v.trim()).length;
  const dot2 = filled >= 2 ? "done" : "active";
  const dot3 = filled >= 4 ? "done" : filled >= 2 ? "active" : "";

  const set = (key: keyof typeof fields) => (e: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!fields.name.trim() || !fields.phone.trim() || !fields.institution.trim()) {
      alert(copy.required);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-card">
      <div id="form-body" style={sent ? { display: "none" } : undefined}>
        <div className="form-title">{copy.title}</div>
        <div className="form-subtitle">{copy.subtitle}</div>
        <div className="form-step-bar">
          <div className="form-step-dot done" />
          <div className={`form-step-dot ${dot2}`} />
          <div className={`form-step-dot ${dot3}`} />
        </div>
        <form id="demoForm" onSubmit={onSubmit}>
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="df-name">{copy.name}</label>
              <input id="df-name" className="form-input" type="text" name="name" placeholder={copy.namePh} required value={fields.name} onChange={set("name")} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="df-designation">{copy.designation}</label>
              <input id="df-designation" className="form-input" type="text" name="designation" placeholder={copy.designationPh} required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="df-institution">{copy.institution}</label>
            <input id="df-institution" className="form-input" type="text" name="institution" placeholder={copy.institutionPh} required value={fields.institution} onChange={set("institution")} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="df-type">{copy.institutionType}</label>
              <select id="df-type" className="form-select" name="institution_type" required value={fields.type} onChange={set("type")}>
                <option value="">{copy.selectType}</option>
                {copy.institutionTypes.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="df-branches">{copy.branches}</label>
              <select id="df-branches" className="form-select" name="branches" defaultValue="">
                <option value="">{copy.selectRange}</option>
                {copy.branchRanges.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="df-phone">{copy.phone}</label>
              <input id="df-phone" className="form-input" type="tel" name="phone" placeholder="+977 98XXXXXXXX" required value={fields.phone} onChange={set("phone")} />
              <div className="form-field-hint">{copy.phoneHint}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="df-email">{copy.email}</label>
              <input id="df-email" className="form-input" type="email" name="email" placeholder="info@yourinstitution.com" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="df-product">{copy.products}</label>
            <select id="df-product" className="form-select" name="product" defaultValue="">
              <option value="">{copy.selectProduct}</option>
              {copy.productOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="df-message">{copy.message}</label>
            <textarea id="df-message" className="form-textarea" name="message" placeholder={copy.messagePh} />
          </div>
          {status === "error" && <div className="form-error" role="alert">{copy.sendError}</div>}
          <button type="submit" className="form-submit" disabled={status === "sending"}>
            {status === "sending" ? copy.sending : copy.submit}
          </button>
        </form>
      </div>
      <div className="form-success" id="form-success" style={sent ? { display: "block" } : undefined}>
        <div className="form-success-icon">✅</div>
        <div className="form-success-title">{copy.successTitle}</div>
        <div className="form-success-desc">{copy.successDesc}</div>
        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "var(--surface)", borderRadius: 10, fontSize: "0.85rem", color: "var(--muted)" }}>
          {copy.meantime}{" "}
          <a href="tel:+9779801130700" style={{ color: "var(--blue)", fontWeight: 600 }}>+977 9801905102</a>
        </div>
      </div>
    </div>
  );
}
