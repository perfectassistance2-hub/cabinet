"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <div>
        <label htmlFor="nom" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Nom *
        </label>
        <input id="nom" name="nom" required className="input" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Email *
        </label>
        <input id="email" name="email" type="email" required className="input" />
      </div>
      <div>
        <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Téléphone
        </label>
        <input id="telephone" name="telephone" type="tel" className="input" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Message *
        </label>
        <textarea id="message" name="message" rows={5} required className="input" />
      </div>

      {state.status !== "idle" && (
        <p
          className={`rounded-md p-3 text-sm ${
            state.status === "success"
              ? "bg-brand-teal-50 text-brand-teal-700"
              : "bg-brand-orange-50 text-brand-orange-700"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-600 disabled:opacity-60"
        >
          {pending ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </div>
    </form>
  );
}
