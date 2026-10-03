/**
 * Impact figures. Community programme figures and Learning & Leadership (corporate)
 * figures are never mixed without a vertical label.
 */

export type Vertical = 'community' | 'founder' | 'learning'

export type Metric = {
  value: string
  label: string
  vertical: Vertical
  source: string
  verify?: string
}

export const verticalLabel: Record<Vertical, string> = {
  community: 'Community programmes',
  founder: 'Founder-led initiatives',
  learning: 'Learning & Leadership',
}

export const communityMetrics: Metric[] = [
  {
    value: '3,000+',
    label: 'Rural youth & women upskilled through KGWF programmes',
    vertical: 'community',
    source: 'Capability Statement — Impact at Scale',
  },
  {
    value: '1,200+',
    label: 'Rural students reached through a Government of Rajasthan partnership',
    vertical: 'community',
    source: 'Capability Statement — Impact at Scale',
    verify: 'Case Study 3 places “3,000+ youth” under the Government of Rajasthan programme; Impact at Scale lists 3,000+ and 1,200+ separately.',
  },
]

export const founderMetrics: Metric[] = [
  {
    value: '20,000+',
    label: 'Students taught tech & life skills in slum and rural communities, over 15 years',
    vertical: 'founder',
    source: 'Capability Statement — Social Impact & Nation Building',
    verify: 'Long-run figure that may predate KGWF’s 2024 incorporation. Confirm attribution (KGWF vs. founder’s prior work).',
  },
  {
    value: '10,000+',
    label: 'Students reached through self-defence initiatives',
    vertical: 'founder',
    source: 'Capability Statement — Women Empowerment & Safety',
    verify: 'Confirm attribution (KGWF vs. founder’s prior work).',
  },
]

export const learningMetrics: Metric[] = [
  { value: '10,000+', label: 'Professionals influenced & trained globally', vertical: 'learning', source: 'Capability Statement — Impact at Scale' },
  { value: '5,000+', label: 'Engineering & MBA students mentored', vertical: 'learning', source: 'Capability Statement — Impact at Scale' },
  { value: '2,500+', label: 'Employees upskilled in AI, Cloud & Agile programmes', vertical: 'learning', source: 'Capability Statement — Impact at Scale' },
  { value: '12+', label: 'Countries reached through workshops & events', vertical: 'learning', source: 'Capability Statement — Impact at Scale' },
  { value: '150+', label: 'PMI certification achievers mentored (PMP® & PMI-ACP®)', vertical: 'learning', source: 'Capability Statement — Impact at Scale' },
  {
    value: '15+',
    label: 'Years of experience across defence, technology & corporate leadership',
    vertical: 'learning',
    source: 'Capability Statement — Impact at Scale',
    verify: 'The same document also states “20+ Years of Experience”.',
  },
]

/** Illustrative design framework — explicitly NOT an official KGWF methodology. */
export const impactSteps = [
  { title: 'Identify', text: 'See the gap with the community, not for it — through schools, families and local leaders.' },
  { title: 'Engage', text: 'Work alongside local families, schools and elders so programmes belong to the people they serve.' },
  { title: 'Equip', text: 'Put the right tools in the right hands: kits, sewing machines, training, mentors.' },
  { title: 'Enable', text: 'Build the confidence and linkages that turn a new skill into a livelihood.' },
  { title: 'Follow through', text: 'Monitor, report and come back — impact is measured over time, not on the day.' },
]
