const MOIS_FR = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

export function formatDateFr(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MOIS_FR[month - 1]} ${year}`;
}

export function formatDateRangeFr(startIso: string, endIso: string): string {
  const [ys, ms, ds] = startIso.split("-").map(Number);
  const [ye, me, de] = endIso.split("-").map(Number);
  if (ys === ye && ms === me) {
    return `${ds} - ${de} ${MOIS_FR[me - 1]} ${ye}`;
  }
  return `${formatDateFr(startIso)} au ${formatDateFr(endIso)}`;
}
