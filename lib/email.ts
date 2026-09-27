import { Resend } from "resend";
import siteConfig from "@/data/site-config.json";

const DESTINATAIRE_CABINET = siteConfig.fr.coordonnees.email;
const EXPEDITEUR = process.env.EMAIL_FROM ?? "Cabinet Perfect Assistance <onboarding@resend.dev>";

async function envoyer(params: {
  to: string;
  sujet: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log(
      `RESEND_API_KEY absente — email non envoyé (mode local) : "${params.sujet}" -> ${params.to}`
    );
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: EXPEDITEUR,
    to: [params.to],
    subject: params.sujet,
    html: params.html,
    replyTo: params.replyTo,
  });

  if (error) {
    console.error("Échec de l'envoi Resend :", error);
    throw new Error("Échec de l'envoi de l'email");
  }
}

/** Notifie le Cabinet d'une nouvelle soumission de formulaire. Doit réussir pour que l'action soit un succès. */
export async function envoyerNotificationCabinet(params: {
  sujet: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  await envoyer({ to: DESTINATAIRE_CABINET, sujet: params.sujet, html: params.html, replyTo: params.replyTo });
}

/** Confirme à l'expéditeur la bonne réception de sa demande. Best-effort : ne doit jamais faire échouer l'action. */
export async function envoyerConfirmationExpediteur(params: {
  to: string;
  sujet: string;
  html: string;
}): Promise<void> {
  try {
    await envoyer({ to: params.to, sujet: params.sujet, html: params.html, replyTo: DESTINATAIRE_CABINET });
  } catch (error) {
    console.error("Échec de l'envoi de l'email de confirmation :", error);
  }
}

/** Habillage HTML commun aux emails envoyés depuis le site. */
export function emailTemplate(titre: string, contenuHtml: string): string {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto;">
      <div style="background-color: #0a2554; padding: 20px 24px;">
        <span style="color: #ffffff; font-size: 16px; font-weight: bold;">${siteConfig.fr.nomCabinet}</span>
      </div>
      <div style="padding: 24px; background-color: #ffffff; color: #2b3532;">
        <h2 style="color: #0a2554; margin-top: 0;">${titre}</h2>
        ${contenuHtml}
      </div>
      <div style="padding: 16px 24px; background-color: #f7f8f7; color: #52605c; font-size: 12px;">
        ${siteConfig.fr.nomCabinet} — ${siteConfig.fr.coordonnees.adresse}<br />
        ${siteConfig.fr.coordonnees.email} · ${siteConfig.fr.coordonnees.telephone}
      </div>
    </div>
  `;
}
