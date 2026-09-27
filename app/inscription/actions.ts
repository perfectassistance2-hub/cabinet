"use server";

import { envoyerNotificationCabinet, envoyerConfirmationExpediteur, emailTemplate } from "@/lib/email";

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

  const nom = String(formData.get("nom")).trim();
  const prenom = String(formData.get("prenom")).trim();
  const fonction = String(formData.get("fonction") ?? "").trim();
  const institution = String(formData.get("institution")).trim();
  const pays = String(formData.get("pays")).trim();
  const email = String(formData.get("email")).trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const formationSouhaitee = String(formData.get("formationSouhaitee") ?? "").trim();
  const seminaireCode = String(formData.get("seminaireCode") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Merci de saisir une adresse email valide." };
  }

  try {
    await envoyerNotificationCabinet({
      sujet: `Nouvelle demande d'inscription — ${prenom} ${nom}`,
      replyTo: email,
      html: emailTemplate(
        "Nouvelle demande d'inscription",
        `
          ${seminaireCode ? `<p><strong>Séminaire concerné :</strong> ${seminaireCode}</p>` : ""}
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Prénom :</strong> ${prenom}</p>
          <p><strong>Fonction :</strong> ${fonction || "Non renseignée"}</p>
          <p><strong>Institution :</strong> ${institution}</p>
          <p><strong>Pays :</strong> ${pays}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
          <p><strong>Formation souhaitée :</strong> ${formationSouhaitee || "Non renseignée"}</p>
          <p><strong>Message :</strong></p>
          <p>${message ? message.replace(/\n/g, "<br />") : "Aucun message"}</p>
        `
      ),
    });
  } catch {
    return {
      status: "error",
      message: "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement par email.",
    };
  }

  await envoyerConfirmationExpediteur({
    to: email,
    sujet: "Nous avons bien reçu votre demande d'inscription — Cabinet Perfect Assistance",
    html: emailTemplate(
      "Merci pour votre demande d'inscription",
      `
        <p>Bonjour ${prenom} ${nom},</p>
        <p>Nous avons bien reçu votre demande d'inscription${seminaireCode ? ` au séminaire <strong>${seminaireCode}</strong>` : ""}. Notre équipe vous contactera dans les plus brefs délais pour finaliser votre inscription.</p>
        <p><strong>Récapitulatif de votre demande :</strong></p>
        <p>
          Institution : ${institution}<br />
          Pays : ${pays}<br />
          ${formationSouhaitee ? `Formation souhaitée : ${formationSouhaitee}<br />` : ""}
        </p>
        <p>Cordialement,<br />L'équipe Cabinet Perfect Assistance</p>
      `
    ),
  });

  return {
    status: "success",
    message: "Votre demande d'inscription a bien été envoyée. Notre équipe vous recontactera rapidement.",
  };
}
