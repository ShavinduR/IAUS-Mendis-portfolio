import {
  Award,
  Beaker,
  Brain,
  ChefHat,
  Cog,
  FlaskConical,
  GraduationCap,
  Leaf,
  Medal,
  Microscope,
  ScrollText,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Site-wide settings: edit these to update links across the whole page.
// ---------------------------------------------------------------------------
// Files in /public are served under the deploy base path (e.g. GitHub Pages).
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const site = {
  name: 'Umesha Sathsarani Mendis',
  shortName: 'Umesha',
  role: 'Food Technologist',
  // Files below live in /public with exactly these names.
  cvUrl: asset(encodeURI('UMESHA SATHSARANI CV.pdf')),
  cvFileName: 'UMESHA SATHSARANI CV.pdf',
  email: 'umeshasathsaranimendis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/umesha-sathsarani-321a71265/',
  portrait: {
    src: asset('3.jpeg'),
    alt: 'Portrait of Umesha Sathsarani Mendis',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export const hero = {
  greeting: 'Hello, I am',
  name: 'Umesha Sathsarani Mendis',
  title: 'Food Technologist | Gold Medalist | Aspiring Graduate Researcher',
  description:
    'A First-Class Honours graduate in Biosystems Technology with a profound passion for food processing innovations and quality assurance. Recognized as the Most Outstanding Graduate with the highest departmental GPA of 3.78. Dedicated to advancing global food science through rigorous academic research and sustainable product development.',
}

export const highlights = [
  { icon: GraduationCap, value: '3.78', label: 'Highest Departmental GPA' },
  { icon: Medal, value: 'Gold', label: 'Most Outstanding Graduate' },
  { icon: Award, value: '5×', label: "Dean's List Certificates" },
  { icon: ScrollText, value: 'ICIET', label: '2025 Published Abstract' },
]

export const about = {
  heading: 'Academic Excellence Meets Industrial Innovation',
  paragraphs: [
    'I am an academically driven Food Technologist and a recent First-Class graduate from the University of Sri Jayewardenepura, Sri Lanka, specializing in Food Processing Technology. Throughout my academic journey, I have maintained an unwavering commitment to excellence, which culminated in receiving the Gold Medal for the Most Outstanding Graduate and being awarded five consecutive Dean’s List certificates.',
    'My core research interests lie in food product development, process optimization, and sustainable value addition. I have successfully conducted research on utilizing processing waste for high-value products, such as pineapple cider enriched with natural flavors, and have hands-on experience in designing food processing machinery.',
    'Currently, I bridge the gap between academia and industry. As an Assistant Manager in Quality and Production at Canalley Scientific Pvt Ltd, I oversee rigorous food quality analyses. Simultaneously, I serve as a Temporary Demonstrator at both the University of Sri Jayewardenepura and the University of Vocational Technology, where I guide undergraduate students.',
  ],
  education: {
    degree: 'B.Sc. (Hons) in Biosystems Technology',
    institution: 'University of Sri Jayewardenepura, Sri Lanka',
    specialization: 'Food Processing Technology',
    years: '2021 – 2025',
    result: 'First Class Honours · GPA 3.78',
  },
  interests: [
    'Food Product Development',
    'Process Optimization',
    'Sustainable Value Addition',
    'Food Quality Assurance',
  ],
}

// `image` is optional: projects without one get an illustrated cover.
// `focus` sets which part of the photo stays visible when it is cropped.
export const research = [
  {
    title: 'Sustainable Cider Production (from Pineapple Waste)',
    description:
      'Utilized processing waste of Pineapple for cider production, innovatively enriched with natural cinnamon and cardamom flavors. Published abstract at ICIET 2025.',
    tag: 'Published · ICIET 2025',
    icon: FlaskConical,
    image: asset('2.jpeg'),
    imageAlt: 'Umesha examining a sample under a microscope in the food science laboratory',
    focus: 'object-[50%_35%]',
    cover: 'from-emerald-700 via-emerald-600 to-teal-500',
  },
  {
    title: 'Food Engineering & Machinery Development',
    description:
      'Applied engineering principles to design and develop a small-scale milk emulsification machine and a shrimp coating machine optimized for sugar wax applications.',
    tag: 'Process Engineering',
    icon: Cog,
    image: null,
    cover: 'from-slate-800 via-slate-700 to-emerald-700',
  },
  {
    title: 'Culinary Innovations',
    description:
      'Formulated a low-cost mango-flavored bubble tea using local mango varieties. Developed pomelo juice wine and introduced a mixed-flour pasta using food-grade hibiscus extraction colorings.',
    tag: 'Product Development',
    icon: ChefHat,
    image: null,
    cover: 'from-rose-400 via-rose-300 to-amber-200',
  },
  {
    title: 'Eco-Friendly Edible Coatings',
    description:
      'Conducted advanced research on agricultural preservation, including the development of an edible coating for mangoes using Soap Nut extract and a flower preservation coating utilizing beeswax.',
    tag: 'Post-Harvest Preservation',
    icon: Leaf,
    image: null,
    cover: 'from-lime-700 via-emerald-600 to-emerald-400',
  },
]

export const experience = [
  {
    role: 'Assistant Manager (Quality and Production) & Trainee Scientist',
    org: 'Canalley Scientific Pvt Ltd',
    period: 'Aug 2026 – Present',
    current: true,
    description:
      'Food product quality assurance, proximate and microbial analysis for industrial clients, and management of outsourced projects.',
  },
  {
    role: 'Temporary Demonstrator',
    org: 'University of Vocational Technology',
    period: 'Aug 2026 – Present',
    current: true,
    description:
      'Laboratory practical facilitation and undergraduate final-year research mentoring.',
  },
  {
    role: 'Temporary Demonstrator',
    org: 'University of Sri Jayewardenepura',
    period: 'Sep 2025 – Aug 2026',
    current: false,
    description:
      'Mentored students, guided workshop modules, and served as co-editor for the ‘BST Elevator Talk’ Magazine.',
  },
  {
    role: 'Research Trainee (6-Month Internship)',
    org: 'National Institute of Post Harvest Management',
    period: '2024 – 2025',
    current: false,
    description:
      'Specialized in post-harvest processing methodologies and preservation.',
  },
]

export const skills = [
  {
    category: 'Lab & QC',
    icon: Microscope,
    items: ['Proximate Analysis', 'Microbial Analysis', 'Traffic Light System Testing'],
  },
  {
    category: 'R&D',
    icon: Beaker,
    items: ['Food Machinery Design', 'Process Optimization', 'Edible Coatings'],
  },
  {
    category: 'Soft Skills',
    icon: Brain,
    items: ['Project Management', 'Academic Writing', 'Team Leadership'],
  },
]
