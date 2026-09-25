"use client";

import { useActionState } from "react";
import { submitInscription, type InscriptionState } from "./actions";
import formations from "@/data/formations.json";
import type { Formation } from "@/lib/types";

const formationsData = formations as Formation[];

const initialState: InscriptionState = { status: "idle", message: "" };

export default function InscriptionForm({ seminaireInitial }: { seminaireInitial?: string }) {
  const [state, formAction, pending] = useActionState(submitInscription, initialState);

  return (
    <form action={formAction} className="grid gap-4 sm:grid-cols-2">
      {seminaireInitial && (
        <p className="sm:col-span-2 rounded-md bg-brand-teal-50 p-3 text-sm text-brand-teal-700">
          Inscription pour le séminaire <strong>{seminaireInitial}</strong>
          <input type="hidden" name="seminaireCode" value={seminaireInitial} />
        </p>
      )}
      <div>
        <label htmlFor="nom" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Nom *
        </label>
        <input id="nom" name="nom" required className="input" />
      </div>
      <div>
        <label htmlFor="prenom" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Prénom *
        </label>
        <input id="prenom" name="prenom" required className="input" />
      </div>
      <div>
        <label htmlFor="fonction" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Fonction
        </label>
        <input id="fonction" name="fonction" className="input" />
      </div>
      <div>
        <label htmlFor="institution" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Institution *
        </label>
        <input id="institution" name="institution" required className="input" />
      </div>
      <div>
        <label htmlFor="pays" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Pays *
        </label>
        <input id="pays" name="pays" required className="input" />
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
        <label
          htmlFor="formationSouhaitee"
          className="mb-1 block text-sm font-medium text-brand-neutral-800"
        >
          Formation souhaitée
        </label>
        <select id="formationSouhaitee" name="formationSouhaitee" defaultValue="" className="input">
          <option value="">Sélectionner une formation</option>
          {formationsData.map((formation) => (
            <option key={formation.code} value={formation.code}>
              {formation.code} — {formation.titre}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-neutral-800">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className="input" />
      </div>

      {state.status !== "idle" && (
        <p
          className={`sm:col-span-2 rounded-md p-3 text-sm ${
            state.status === "success"
              ? "bg-brand-teal-50 text-brand-teal-700"
              : "bg-brand-orange-50 text-brand-orange-700"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-600 disabled:opacity-60"
        >
          {pending ? "Envoi en cours..." : "Envoyer ma demande d'inscription"}
        </button>
      </div>
    </form>
  );
}
