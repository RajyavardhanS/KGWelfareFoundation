/** Leadership & governance — titles exactly as listed in the CSR Partnership document. */

export type Person = { name: string; role: string; note?: string; initials: string; verify?: string }

export const founder = {
  name: 'Squadron Leader Vibhuti Mangal (Retd.)',
  role: 'Founder & Chief Advisor',
  portrait: '/images/founder/portrait.jpg',
  flightSuit: '/images/founder/flight-suit.jpg',
  roleVerify:
    'CSR document: “Global IT & Automation leader at Amazon” and “former Professor of Practice”. Capability Statement: “Global IT Manager at Amazon” and current “Professor of Practice”.',
  /** Short, story-led — not a CV. */
  story: [
    'Squadron Leader Vibhuti Mangal (Retd.) began in uniform, as an officer of the Indian Air Force — where discipline, precision and leadership under pressure are lived, not taught.',
    'Beyond service came a career in enterprise technology — as an IBM Business Technology Consultant, and in global IT operations, automation and AI adoption at Amazon, with teams across the US, EU, APAC and India.',
    'Through both careers the work kept returning to people — teaching as a Professor of Practice, mentoring students and professionals, and running rural upskilling programmes. KGWF is where that work now has a home.',
  ],
  chapters: [
    { title: 'Indian Air Force', text: 'Squadron Leader (Retd.)' },
    { title: 'IBM', text: 'Business Technology Consultant — enterprise systems, ERP, IT infrastructure' },
    { title: 'Amazon', text: 'Global IT & Automation leadership across US, EU, APAC and India' },
    { title: 'Academia', text: 'Professor of Practice; guest faculty at engineering and management institutes' },
    { title: 'KGWF', text: 'Founder — rural upskilling programmes across Rajasthan' },
  ],
  education: [
    'B.Tech in Computer Science (Honors)',
    'M.Tech in Aeronautical Engineering (Distinction)',
    'MBA in Business Analytics & IT',
    'Executive MBA, IIM Mumbai',
    'MA in Corporate Social Responsibility',
  ],
  certifications: ['PMP®', 'ITIL® 4', 'PSM®', 'Lean Six Sigma Green Belt', 'AWS Certified Cloud Practitioner', 'ServiceNow Administrator', 'OCJP SE6', 'RHCE', 'Power BI', 'Tableau', 'Oracle DB2', 'Certified WLP Trainer'],
  recognition: [
    'Amazon Most Talented Employee',
    'India Author Award 2021',
    'Social Impact Award',
    'IAF Excellence Awards',
    'Most Impactful DEI Leader',
    'Appreciation Letter from the Vice President of India',
    'Rajasthan Tourism Creative Award',
    'Best Conference Research Paper, TBMSD’25',
  ],
  roles: ['Business Technology Consultant', 'Leadership & Transformation Coach', 'Professor of Practice', 'PMI South Asia Champion', 'Author', 'Speaker', 'Mentor'],
}

export const board: Person[] = [
  { name: 'Vinod Kumar Mangal', role: 'Board of Directors', initials: 'VM' },
  { name: 'Darshna Mangal', role: 'Board of Directors', initials: 'DM' },
  { name: 'Rohit Gupta', role: 'Board of Directors', initials: 'RG' },
]

export const advisors: Person[] = [
  { name: 'Group Captain PK Agnihotri (Retd.)', role: 'Strategy Advisor', initials: 'PA' },
  { name: 'Group Captain Vikas Sareen (Retd.)', role: 'Governance & Compliance Advisor', initials: 'VS' },
  { name: 'Dr Dinesh Gupta', role: 'Medical Advisor', note: 'Retired PMO', initials: 'DG' },
  { name: 'CA Akshay Agrawal', role: 'Finance & Compliance Advisor', initials: 'AA' },
  { name: 'Proff (Dr) Abhineet Saxena', role: 'CSR Partnership Advisor', initials: 'AS', verify: 'Confirm spelling of title (“Proff” / “Prof.”).' },
]
