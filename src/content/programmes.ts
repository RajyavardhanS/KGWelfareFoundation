/** The five focus areas, from the CSR Partnership document (“What we do”). */

export type ProgrammeGroup = { title: string; items: string[] }

export type Programme = {
  slug: string
  number: string
  title: string
  shortTitle: string
  line: string
  summary: string
  image: string
  imageAlt: string
  /** True when the image is an illustration standing in for a missing photograph. */
  illustrative?: boolean
  accent: 'navy' | 'sage' | 'paper'
  groups: ProgrammeGroup[]
  supportNeeded: string[]
  gallery: { src: string; alt: string }[]
}

export const programmes: Programme[] = [
  {
    slug: 'education',
    number: '01',
    title: 'Education & Future-Building',
    shortTitle: 'Education',
    line: 'Raising future-ready children and guiding the next generation toward meaningful careers.',
    summary:
      'From school bags and stationery to weekend tutoring, digital literacy and college counselling — support that follows a child from the classroom toward a career.',
    image: '/images/community/kits-girls.jpg',
    imageAlt: 'A KGWF volunteer handing education kits to schoolgirls in uniform',
    accent: 'navy',
    groups: [
      {
        title: 'What we do',
        items: [
          'School support for underserved children',
          'Education kit distribution — school bags, books, and stationery',
          'Weekend mentoring, tutoring, and learning sessions',
          'Digital literacy and AI awareness programmes',
          'College career counselling and higher education guidance',
          'Leadership and personality development workshops for students',
          'Photography, painting, and creative expression workshops',
        ],
      },
    ],
    supportNeeded: ['Learning kits, books and stationery', 'Laptops and projectors for digital literacy', 'Volunteer tutors and career mentors'],
    gallery: [
      { src: '/images/community/kits-children.jpg', alt: 'Children receiving school kits' },
      { src: '/images/community/classroom.jpg', alt: 'A KGWF facilitator addressing a classroom' },
      { src: '/images/community/ai-awareness.jpg', alt: 'An AI awareness session for students' },
    ],
  },
  {
    slug: 'skills-livelihoods',
    number: '02',
    title: 'Skill Development & Livelihoods',
    shortTitle: 'Skills & Livelihoods',
    line: 'Equipping youth and women with practical skills that lead to independence and dignity.',
    summary:
      'Hands-on training that turns into income: silai machines and tailoring for women, and job-readiness, communication and digital skills for young people.',
    image: '/images/illustrations/silai-training.svg',
    imageAlt: 'Illustration of a sewing machine with fabric and thread',
    illustrative: true,
    accent: 'paper',
    groups: [
      {
        title: 'Women’s Empowerment',
        items: [
          'Silai (sewing/tailoring) machine distribution and hands-on training',
          'Saree stitching, blouse design, and clothing alteration',
          'Crochet, embroidery, and textile craft',
          'Painting, handcraft, and creative work',
          'Repair and mending skills',
          'Micro-entrepreneurship readiness',
        ],
      },
      {
        title: 'Youth & Professional Upskilling',
        items: [
          'Corporate readiness and interview preparation',
          'Soft skills, communication, and presentation training',
          'Technology training and digital tool proficiency',
          'Photography and creative media skills',
          'Knowledge transfer sessions by industry professionals',
          'Entrepreneurship awareness and business basics',
        ],
      },
    ],
    supportNeeded: ['Sewing machines and training materials', 'Placement and internship linkages', 'Industry trainers for skill sessions'],
    gallery: [
      { src: '/images/community/women-community.jpg', alt: 'Women at a KGWF community gathering' },
      { src: '/images/illustrations/mentoring.svg', alt: 'Illustration of a mentoring conversation' },
    ],
  },
  {
    slug: 'sustainability',
    number: '03',
    title: 'Sustainability & Environment',
    shortTitle: 'Sustainability',
    line: 'Building an environmentally conscious community, one drive at a time.',
    summary:
      'Plantation and cleaning drives run with the people who live in the neighbourhood, alongside awareness campaigns on waste and conservation.',
    image: '/images/illustrations/plantation-drive.svg',
    imageAlt: 'Illustration of a sapling being planted and watered',
    illustrative: true,
    accent: 'sage',
    groups: [
      {
        title: 'What we do',
        items: [
          'Plantation drives — trees planted with active community participation',
          'Cleaning drives — neighbourhood, school, and public area clean-ups',
          'Environmental awareness campaigns and green workshops',
          'Circular economy and responsible waste management',
          'Resource conservation and sustainable community practices',
        ],
      },
    ],
    supportNeeded: ['Saplings and seeds for plantation drives', 'Clean-up equipment', 'Employee volunteering teams'],
    gallery: [
      { src: '/images/illustrations/clean-up-drive.svg', alt: 'Illustration of a neighbourhood clean-up drive' },
      { src: '/images/community/hillside-drive.jpg', alt: 'Volunteers on a hillside during an outdoor drive' },
    ],
  },
  {
    slug: 'community-wellness',
    number: '04',
    title: 'Community Wellness & Outreach',
    shortTitle: 'Community Wellness',
    line: 'Working alongside local communities to uplift, nourish, and strengthen.',
    summary:
      'Food drives, hygiene and sanitation awareness, wellbeing sessions and support during festivals and crises — always alongside local families and elders.',
    image: '/images/community/food-drive.jpg',
    imageAlt: 'Food being served during a KGWF community food distribution drive',
    accent: 'navy',
    groups: [
      {
        title: 'What we do',
        items: [
          'Food distribution drives — nourishing underserved families',
          'Health, hygiene, and sanitation awareness sessions',
          'Morale upliftment and mental wellness programmes',
          'Community engagement with local families and elders',
          'Festival, emergency, and crisis support',
          'Trekking and outdoor leadership for youth',
        ],
      },
    ],
    supportNeeded: ['Food supplies and clothing', 'Hygiene kits', 'Volunteers for community drives'],
    gallery: [
      { src: '/images/community/women-community.jpg', alt: 'Women and a child at a community gathering' },
      { src: '/images/community/kids-wellbeing.jpg', alt: 'Young children during a group wellbeing activity' },
      { src: '/images/community/hillside-drive.jpg', alt: 'Youth on an outdoor trek' },
    ],
  },
  {
    slug: 'volunteerism',
    number: '05',
    title: 'Volunteerism & Leadership',
    shortTitle: 'Volunteerism',
    line: 'Every individual can become an agent of change.',
    summary:
      'Volunteering here is participation, not charity: employees, veterans, students and professionals giving time and know-how where it counts.',
    image: '/images/community/students-outdoors.jpg',
    imageAlt: 'Students seated outdoors during a KGWF session',
    accent: 'navy',
    groups: [
      {
        title: 'What we do',
        items: [
          'Employee volunteering programmes for corporate teams',
          'Youth leadership development',
          'Veteran-led mentoring and guidance',
          'Community volunteering drives',
          'Social leadership and collaborative impact initiatives',
        ],
      },
    ],
    supportNeeded: ['Employee volunteering partnerships', 'Mentors and trainers', 'Venue access for sessions'],
    gallery: [
      { src: '/images/community/community-gathering.jpg', alt: 'Community members and volunteers gathered outdoors' },
      { src: '/images/illustrations/mentoring.svg', alt: 'Illustration of a mentoring conversation' },
    ],
  },
]

export const getProgramme = (slug?: string) => programmes.find((p) => p.slug === slug)
