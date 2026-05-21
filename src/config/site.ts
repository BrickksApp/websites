export const SITE = {
  name: 'A.S.P Aannemersbedrijf',
  title: 'A.S.P Aannemersbedrijf | Nieuwbouw & Renovatie Specialist',
  description: 'Specialist in schilderwerk, verbouwing, nieuwbouw & renovatie. Meer dan 25 jaar vakmanschap met BouwGarant zekerheid.',
  url: 'https://asp-aannemersbedrijf.com',
  socials: {
    twitter: '#',
    instagram: '#',
    linkedin: '#',
    facebook: '#',
  },
} as const;

export type SiteConfig = typeof SITE;
