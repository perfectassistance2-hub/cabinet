"use server";

export type InscriptionState = {
  status: "idle" | "success" | "error";
  message: string;
};

const CHAMPS_REQUIS = ["nom", "prenom", "email", "institution", "pays"] as const;

export async function submitInscription(
  _prevState: InscriptionState,
  formData: FormData
): Promise<InscriptionState> {
  for (const champ of CHAMPS_REQUIS) {
    if (!String(formData.get(champ) ?? "").trim()) {
      return { status: "error", message: "Merci de compléter tous les champs obligatoires." };
    }
  }

  const email = String(formData.get("email"));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Merci de saisir une adresse email valide." };
  }

  // TODO: brancher l'envoi réel (email / CRM) une fois le prestataire choisi.
  console.log("Nouvelle demande d'inscription :", Object.fromEntries(formData));

  return {
    status: "success",
    message: "Votre demande d'inscription a bien été envoyée. Notre équipe vous recontactera rapidement.",
  };
}
