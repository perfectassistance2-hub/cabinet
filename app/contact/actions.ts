"use server";

import { envoyerNotificationCabinet, envoyerConfirmationExpediteur, emailTemplate } from "@/lib/email";

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
  const telephone = String(formData.get("telephone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!nom || !email || !message) {
    return { status: "error", message: "Merci de compléter tous les champs obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Merci de saisir une adresse email valide." };
  }

  try {
    await envoyerNotificationCabinet({
      sujet: `Nouveau message de contact — ${nom}`,
      replyTo: email,
      html: emailTemplate(
        "Nouveau message de contact",
        `
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
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
    sujet: "Nous avons bien reçu votre message — Cabinet Perfect Assistance",
    html: emailTemplate(
      "Merci de nous avoir contactés",
      `
        <p>Bonjour ${nom},</p>
        <p>Nous avons bien reçu votre message et nous vous en remercions. Notre équipe reviendra vers vous dans les plus brefs délais.</p>
        <p><strong>Récapitulatif de votre message :</strong></p>
        <p style="white-space: pre-line;">${message.replace(/\n/g, "<br />")}</p>
        <p>Cordialement,<br />L'équipe Cabinet Perfect Assistance</p>
      `
    ),
  });

  return {
    status: "success",
    message: "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.",
  };
}
