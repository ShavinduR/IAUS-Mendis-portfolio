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
export const site = {
  name: 'Umesha Sathsarani Mendis',
  shortName: 'Umesha Mendis',
  // Drop the CV you want to share publicly into /public using this file name.
  cvUrl: '/Umesha_Sathsarani_Mendis_CV.pdf',
  email: 'umeshasathsaranimendis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/umesha-sathsarani-321a71265',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
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

// `image` is optional: set it to a path in /public (e.g. '/research/cider.jpg')
// to replace the illustrated cover with a real photograph.
export const research = [
  {
    title: 'Sustainable Cider Production',
    description:
      'Utilized processing waste of Pineapple for cider production, innovatively enriched with natural cinnamon and cardamom flavors. Published abstract at ICIET 2025.',
    tag: 'Published · ICIET 2025',
    icon: FlaskConical,
    image: null,
    cover: 'from-emerald-700 via-emerald-600 to-teal-500',
  },
  {
    title: 'Food Machinery Development',
    description:
      'Applied engineering principles by designing a small-scale milk emulsification machine and developing a shrimp coating machine optimized for sugar wax applications.',
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
      'Overseeing food product quality assurance, executing critical analyses including Proximate and Microbial Analysis for industrial clients.',
  },
  {
    role: 'Temporary Demonstrator',
    org: 'University of Vocational Technology',
    period: 'Aug 2026 – Present',
    current: true,
    description:
      'Facilitating laboratory practicals and guiding final-year undergraduate research projects.',
  },
  {
    role: 'Temporary Demonstrator',
    org: 'University of Sri Jayewardenepura',
    period: 'Sep 2025 – Aug 2026',
    current: false,
    description:
      'Mentored students in the Faculty of Technology and actively contributed as a Co-editor for the BST Elevator Talk Magazine.',
  },
  {
    role: 'Research Trainee (Internship)',
    org: 'National Institute of Post Harvest Management',
    period: '2024 – 2025 (6 Months)',
    current: false,
    description:
      'Actively participated in national-level research projects, gaining specialized experience in post-harvest preservation techniques.',
  },
]

export const skills = [
  {
    category: 'Laboratory & Quality Control',
    icon: Microscope,
    items: [
      'Proximate Analysis',
      'Microbial Analysis',
      'Traffic Light System Testing',
      'Quality Control Standards',
    ],
  },
  {
    category: 'Research & Development',
    icon: Beaker,
    items: [
      'Food Machinery Design',
      'Process Optimization',
      'Edible Coatings Development',
      'Sustainable Value Addition',
    ],
  },
  {
    category: 'Professional Skills',
    icon: Brain,
    items: ['Project Management', 'Critical Thinking', 'Academic Writing', 'Team Leadership'],
  },
]
