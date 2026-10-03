/**
 * Organisation facts. Source of truth:
 *  - KGWF_CSR_Partnership.pdf (CSR)
 *  - KGWF Banner.pdf (Banner)
 *  - Donation receipt / UPI card images (Receipt, UPI)
 *  - MainDraft KGWF CorporateCapabilityStatement.docx (Capability)
 *
 * Items marked `verify` conflict across those sources and are listed in REVIEW.md.
 */

export const site = {
  name: 'Kalindi Global Welfare Foundation',
  shortName: 'KGWF',
  tagline: 'Helping, because we can.',
  motto: 'कर्मण्येवाधिकारस्ते',
  city: 'Jaipur, Rajasthan',
  description:
    'Kalindi Global Welfare Foundation is a registered charitable organisation based in Jaipur, committed to empowering underserved communities through education, skill development, sustainability, and community-led development.',

  vision:
    'To build empowered, inclusive, and resilient communities where every individual has access to opportunities for learning, growth, and sustainable development.',
  mission:
    'To create lasting social impact through education, leadership, skill development, environmental stewardship, community engagement, and collaborative partnerships that empower individuals to become contributors to society.',

  contact: {
    phone: '+91 88002 86459',
    phoneHref: 'tel:+918800286459',
    whatsapp: '+91 99287 86459',
    whatsappHref: 'https://wa.me/919928786459',
    email: 'kalindiglobal@gmail.com',
    emailHref: 'mailto:kalindiglobal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vibhutimangal',
  },

  /** CSR document + banner. The UPI card and donation receipt show a different address — see REVIEW.md #01. */
  address: {
    lines: ['141, Krishna Vihar', 'Gopalpura Bypass', 'Jaipur, Rajasthan 302015'],
    verify: 'Address differs across sources (receipt/UPI card: 120, Vishveshwariya Nagar, Gopalpura Bypass, Jaipur 302018).',
  },

  registration: {
    cin: 'U88900RJ2024NPL093189',
    pan: 'AAKCK8811A',
    tan: 'JPRK08371G',
    reg12A: 'AAKCK8811AE20241',
    reg80G: 'AAKCK8811AF20241',
    reg80GVerify: 'CSR document says “80G Approval No”; donation receipt says “Provisional Registration No. under section 80G”.',
    companyType: 'Section 8 company under the Companies Act, 2013',
    itReturns: 'Filed for the last two financial years',
  },

  bank: {
    accountName: 'M/S Kalindi Global Welfare Foundation',
    bank: 'ICICI Bank',
    accountNumber: '675205601656',
    ifsc: 'ICIC0006752',
    upiId: 'MSKALINDIGLOBALWELFAREFOUNDATION.eazypay@icici',
  },
} as const

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'CSR & Partnerships', to: '/csr-partnerships' },
  { label: 'Corporate / Learning', to: '/corporate-learning' },
] as const

export const pathway = ['Support', 'Skills', 'Confidence', 'Opportunity', 'Independence', 'Community impact'] as const

export const whyWeDoThis = {
  opening:
    'We are not professional fundraisers. We are practitioners — a military officer, corporate professionals, educators, and community leaders — who choose to invest our time, skills, and personal resources because we see the gap, and we have the ability to bridge it.',
  body:
    'We work with local communities to raise confident, capable children. We put sewing machines in the hands of women so they never have to depend on anyone. We teach photography to kids who’ve never held a camera. We clean neighbourhoods alongside the people who live there. We plant trees, distribute food, counsel college students, and train youth for jobs — because we can. And because someone should.',
  closing: 'Every rupee, every hour, every effort comes from conviction — not obligation.',
}

export const whoWeAre = [
  'Kalindi Global Welfare Foundation is a registered charitable organisation based in Jaipur, committed to empowering underserved communities through education, skill development, sustainability, and community-led development.',
  'Founded and led by Squadron Leader Vibhuti Mangal (Retd.) — an Indian Air Force veteran, Global IT & Automation leader at Amazon, and former Professor of Practice — KGWF brings together military discipline, corporate rigour, academic depth, and grassroots compassion.',
  'We are funded and run by a committed group of family, friends, veterans, and professionals who believe that meaningful social transformation happens when individuals are equipped with knowledge, opportunity, and confidence.',
]
