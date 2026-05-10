"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const INITIAL: ContactState | null = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Sending…
        </>
      ) : (
        <>
          Send message
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState(submitContact, INITIAL);

  return (
    <form action={action} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="w-full rounded-md border border-border/70 bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full rounded-md border border-border/70 bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? Any timeline or scope details help."
          className="w-full resize-y rounded-md border border-border/70 bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Honeypot — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {state ? (
          <div
            role="status"
            aria-live="polite"
            className={
              state.ok
                ? "flex items-center gap-2 text-xs text-emerald-400"
                : "flex items-center gap-2 text-xs text-rose-400"
            }
          >
            {state.ok ? (
              <CheckCircle2 size={14} />
            ) : (
              <AlertCircle size={14} />
            )}
            <span>{state.message}</span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">
            I usually reply within 1–2 business days.
          </span>
        )}
        <SubmitButton />
      </div>
    </form>
  );
}
