"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!nom || !email || !message) {
    return { status: "error", message: "Merci de compléter tous les champs obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Merci de saisir une adresse email valide." };
  }

  // TODO: brancher l'envoi réel (email / CRM) une fois le prestataire choisi.
  console.log("Nouveau message de contact :", Object.fromEntries(formData));

  return {
    status: "success",
    message: "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.",
  };
}
