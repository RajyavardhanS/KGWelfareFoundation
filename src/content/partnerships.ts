/** CSR & partnership content — CSR Partnership document, pages 4–5. */

export const partnerReasons = [
  { title: 'Credible leadership', text: 'Military (IAF), corporate (Amazon), academic, and social sector experience in the founding team.' },
  {
    title: 'Advisory board with institutional strength',
    text: 'RPS officer, RAS officer, retired PMO, Chartered Accountant, and military strategist on the advisory panel.',
    verify: 'Named advisors are not listed with RPS / RAS roles in the source.',
  },
  { title: 'Implementation capability', text: 'We design, execute, monitor, and report — not just propose.' },
  { title: 'Employee engagement', text: 'Ready-to-deploy volunteering programmes for your teams.' },
  { title: 'Measurable outcomes', text: 'Impact reporting aligned with your CSR priorities and annual disclosures.' },
  { title: 'Transparent governance', text: 'Section 12A and 80G registered. IT returns filed. Full financial accountability.' },
  { title: 'Flexible execution', text: 'Programmes across education, skills, sustainability, health, and community development.' },
  { title: 'Grassroots presence', text: 'Deep relationships with local communities in Jaipur.' },
] as { title: string; text: string; verify?: string }[]

export const partnerFormats = [
  { title: 'CSR Funding', text: 'Scale programmes in education, skill development, women’s empowerment and sustainability.', icon: 'funding' },
  { title: 'Volunteering', text: 'Ready-to-run employee volunteering — let your teams contribute time and expertise.', icon: 'volunteer' },
  { title: 'In-Kind Support', text: 'Laptops, projectors, sewing machines, learning kits, craft materials, seeds, venue access.', icon: 'box' },
  { title: 'Mentorship', text: 'Industry professionals for skill sessions, career mentoring and knowledge transfer.', icon: 'mentor' },
] as const

export const supportNeeded = [
  { title: 'CSR Funding & Grants', text: 'For scaling programmes in education, skill development, women’s empowerment, and sustainability.' },
  { title: 'Infrastructure & Equipment', text: 'Laptops, projectors, sewing machines, training materials, learning kits, venue access.' },
  { title: 'Industry Mentors & Trainers', text: 'Professionals willing to volunteer time for skill sessions, career mentoring, and knowledge transfer.' },
  { title: 'Placement & Internship Linkages', text: 'For youth and women completing our skill development programmes.' },
  { title: 'Employee Volunteering Partnerships', text: 'Let your teams contribute time and expertise to community impact.' },
  { title: 'In-Kind Contributions', text: 'Craft materials, books, clothing, food supplies, seeds for plantation drives.' },
]

export const partnerProcess = [
  { title: 'Design', text: 'Co-create a programme aligned with your CSR priorities — education, skills, sustainability, health or community development.' },
  { title: 'Execute', text: 'KGWF runs it on the ground with communities, volunteers and your employees.' },
  { title: 'Monitor', text: 'Track participation and progress throughout delivery.' },
  { title: 'Report', text: 'Impact reporting aligned with your CSR priorities and annual disclosures.' },
]

export const partnerIdeas = [
  'Sponsor a school initiative',
  'Fund a women’s skill cohort',
  'Run a green drive',
  'Donate sewing machines',
  'Engage your employees in purposeful volunteering',
]

export const supportModes = [
  { id: 'donate', title: 'Donate', text: 'Give by UPI or bank transfer. Receipts are issued for every donation.', cta: 'Donate now' },
  { id: 'volunteer', title: 'Volunteer', text: 'Join a plantation drive, a food drive, a clean-up or a learning session.', cta: 'Volunteer with us' },
  { id: 'mentor', title: 'Mentor', text: 'Share your skills — career guidance, communication, technology, creative media.', cta: 'Become a mentor' },
  { id: 'sponsor', title: 'Sponsor equipment', text: 'Sewing machines, laptops, projectors and learning kits that go straight to programmes.', cta: 'Sponsor equipment' },
  { id: 'organisation', title: 'Partner as an organisation', text: 'CSR funding, co-created programmes and employee engagement.', cta: 'Partner with KGWF' },
  { id: 'in-kind', title: 'In-kind support', text: 'Books, clothing, craft materials, food supplies and seeds.', cta: 'Offer in-kind support' },
] as const
