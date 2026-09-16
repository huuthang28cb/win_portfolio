"use client"

import { useState, FormEvent } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"

interface ContactFormProps {
  dict: any
}

export function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("sending")

    // Simulate API call — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1400))
    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Message sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {dict.contact.form_name}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            placeholder="John Doe"
            className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {dict.contact.form_email}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            placeholder="you@company.com"
            className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {dict.contact.form_subject}
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
          placeholder="New project idea"
          className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {dict.contact.form_message.replace("...", "")}
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          placeholder={dict.contact.form_message}
          className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      <button
        id="contact-submit"
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 shadow-sm"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {dict.contact.form_submit}
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}
