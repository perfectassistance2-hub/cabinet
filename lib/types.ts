export type Theme = {
  slug: string;
  theme: string;
  nb_cycles: number;
  description: string;
};

export type Formation = {
  code: string;
  titre: string;
  themeSlug: string;
  duree: string;
};

export type Seminaire = {
  code: string;
  titre: string;
  themeSlug: string;
  ville: string;
  modalite: "Présentiel" | "Distanciel";
  duree: string;
  dateDebut: string;
  dateFin: string;
  dateLimiteInscription: string;
};

export type Temoignage = {
  nom: string;
  fonction: string;
  photo: string;
  citation: string;
};

export type HistoriqueEntry = {
  annee: number;
  resume: string;
  nb_sessions: number;
  nb_participants: number;
};

export type Stat = {
  label: string;
  value: string;
  suffix?: string;
};

export type SiteConfig = {
  fr: {
    nomCabinet: string;
    slogan: string;
    bandeauGeo: string;
    coordonnees: {
      adresse: string;
      email: string;
      telephone: string;
      telephoneWhatsapp: string;
    };
    reseauxSociaux: {
      linkedin: string;
      facebook: string;
      twitter: string;
    };
    mentionLegale: string;
  };
  couleurs: {
    primaire: string;
    primaireFonce: string;
    accent: string;
    accentFonce: string;
    neutre: string;
  };
};
