/**
 * Stories from the field. No beneficiary names or quotes are invented:
 * titles describe the activity, and narrative copy KGWF has not yet supplied is marked `pending`.
 */

export type Story = {
  slug: string
  category: string
  programme: string
  title: string
  intro: string
  image: string
  imageAlt: string
  /** What the source material establishes about this activity. */
  facts: string[]
  pending: true
}

export const stories: Story[] = [
  {
    slug: 'education-kit-distribution',
    category: 'Education',
    programme: 'education',
    title: 'Education Kit Distribution',
    intro: 'School bags, books and stationery for children who would otherwise start the year without them.',
    image: '/images/community/kits-girls.jpg',
    imageAlt: 'A KGWF volunteer handing education kits to schoolgirls',
    facts: [
      'Part of KGWF’s school support for underserved children.',
      'Kits include school bags, books and stationery.',
      'Distributed in schools alongside KGWF volunteers.',
    ],
    pending: true,
  },
  {
    slug: 'rural-learning-programme',
    category: 'Education · Digital literacy',
    programme: 'education',
    title: 'Rural Learning Programme',
    intro: 'Digital learning classes in government schools — and a first look at the tools that shape modern work.',
    image: '/images/community/classroom.jpg',
    imageAlt: 'A KGWF facilitator addressing students in a classroom',
    facts: [
      'Digital learning classes delivered for rural students in partnership with the Government of Rajasthan.',
      'Sessions cover digital literacy and AI awareness.',
    ],
    pending: true,
  },
  {
    slug: 'community-food-distribution',
    category: 'Community Wellness',
    programme: 'community-wellness',
    title: 'Community Food Distribution Drive',
    intro: 'Nourishing underserved families — served side by side with the neighbourhood.',
    image: '/images/community/food-drive.jpg',
    imageAlt: 'Food being served during a community distribution drive',
    facts: ['Food distribution drives are a regular part of KGWF’s community outreach.', 'Run with local families and volunteers.'],
    pending: true,
  },
  {
    slug: 'ai-awareness-for-students',
    category: 'Education · AI awareness',
    programme: 'education',
    title: 'AI Awareness for Students',
    intro: 'How a machine-learning model learns — explained in plain language to students in an auditorium.',
    image: '/images/community/ai-awareness.jpg',
    imageAlt: 'A speaker explaining machine learning to students in an auditorium',
    facts: ['Part of KGWF’s digital literacy and AI awareness programmes.'],
    pending: true,
  },
  {
    slug: 'community-skills-initiative',
    category: 'Skills & Livelihoods',
    programme: 'skills-livelihoods',
    title: 'Community Skills Initiative',
    intro: 'Sewing machines and hands-on training, so that women never have to depend on anyone.',
    image: '/images/illustrations/silai-training.svg',
    imageAlt: 'Illustration of a sewing machine with fabric and thread',
    facts: ['Silai (sewing/tailoring) machine distribution with hands-on training.', 'Includes saree stitching, blouse design, alteration and micro-entrepreneurship readiness.'],
    pending: true,
  },
  {
    slug: 'community-gathering',
    category: 'Community Wellness',
    programme: 'community-wellness',
    title: 'Working Alongside Local Families',
    intro: 'Community engagement with local families and elders — the starting point for every programme.',
    image: '/images/community/women-community.jpg',
    imageAlt: 'Women and a child at a KGWF community gathering',
    facts: ['Community engagement with local families and elders.', 'Festival, emergency and crisis support.'],
    pending: true,
  },
]

export const getStory = (slug?: string) => stories.find((s) => s.slug === slug)

export const gallery = [
  { src: '/images/community/kits-girls.jpg', alt: 'Education kits being handed to schoolgirls' },
  { src: '/images/community/food-drive.jpg', alt: 'Community food distribution' },
  { src: '/images/community/kids-wellbeing.jpg', alt: 'Young children during a group activity' },
  { src: '/images/community/women-community.jpg', alt: 'Women at a community gathering' },
  { src: '/images/community/classroom.jpg', alt: 'A classroom session' },
  { src: '/images/community/students-outdoors.jpg', alt: 'Students seated outdoors during a session' },
  { src: '/images/community/kits-children.jpg', alt: 'Children receiving school kits' },
  { src: '/images/community/community-gathering.jpg', alt: 'Community members and volunteers gathered outdoors' },
  { src: '/images/community/hillside-drive.jpg', alt: 'Volunteers on a hillside' },
  { src: '/images/community/ai-awareness.jpg', alt: 'AI awareness session' },
  { src: '/images/community/women-achievers-award.jpg', alt: 'Women Achievers Award 2023' },
  { src: '/images/community/felicitation.jpg', alt: 'A felicitation ceremony' },
  { src: '/images/community/recognition.jpg', alt: 'A recognition at a community event' },
  { src: '/images/community/keynote.jpg', alt: 'A keynote talk on stage' },
  { src: '/images/community/broadcast.jpg', alt: 'A televised panel discussion' },
]
