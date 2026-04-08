export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title?: string;
  image?: string;
  bio?: string;
  email?: string;
  scholar?: string;
  twitter?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "stuart-campbell",
    name: "Stuart G. Campbell, Ph.D.",
    role: "principal-investigator",
    title: "Associate Professor of Biomedical Engineering and Cellular & Molecular Physiology",
    image: "/team/stuart-campbell.jpg",
    bio: "Dr. Campbell leads the Integrative Cardiac Biomechanics Laboratory at Yale University. His research focuses on understanding cardiac muscle function through computational and experimental approaches, with the goal of improving diagnosis and treatment for inherited heart disease.",
    email: "stuart.campbell@yale.edu",
    scholar: "https://scholar.google.com/citations?user=Kqurq6MAAAAJ",
    linkedin: "https://www.linkedin.com/in/stuart-campbell-yale/",
  },
  {
    id: "michele-zanetti",
    name: "Michele Zanetti, Ph.D.",
    role: "postdoc",
    title: "Postdoctoral Associate",
    image: "/team/michele-zanetti.jpg",
    bio: "Investigating molecular mechanisms of inherited cardiomyopathies using computational modeling and experimental validation in stem cell-derived cardiomyocytes.",
    linkedin: "https://www.linkedin.com/in/michele-zanetti/",
  },
  {
    id: "xia-li",
    name: "Xia Li",
    role: "postdoc",
    title: "Lab Manager & Research Scientist",
    image: "/team/xia-li.jpg",
    bio: "Manages laboratory operations and conducts experimental research in cardiac tissue engineering and cell culture techniques.",
    linkedin: "https://www.linkedin.com/in/xia-li/",
  },
  {
    id: "andres-cubero",
    name: "Andrés Cubero Cruz",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/andres-cubero.jpg",
    bio: "Developing computational models of sarcomere dynamics to understand genotype-phenotype relationships in hypertrophic cardiomyopathy.",
    linkedin: "https://www.linkedin.com/in/andres-cubero-cruz/",
  },
  {
    id: "alexis-tensfeldt",
    name: "Alexis Tensfeldt",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/alexis-tensfeldt.jpg",
    bio: "Studying cardiomyocyte heterogeneity and cellular signaling pathways that regulate muscle contraction using single-cell approaches.",
    linkedin: "https://www.linkedin.com/in/alexis-tensfeldt/",
  },
  {
    id: "xianmu-li",
    name: "Xianmu Li",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/xianmu-li.jpg",
    bio: "Investigating the role of extracellular matrix mechanics in cardiac remodeling and mechanotransduction.",
    linkedin: "https://www.linkedin.com/in/xianmu-li/",
  },
  {
    id: "placeholder-grad-1",
    name: "Jordan Martinez",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/placeholder.jpg",
    bio: "Developing multiscale computational models linking molecular dynamics to tissue-level cardiac function.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "placeholder-grad-2",
    name: "Priya Sharma",
    role: "graduate",
    title: "Ph.D. Student",
    image: "/team/placeholder.jpg",
    bio: "Exploring therapeutic targets for dilated cardiomyopathy using patient-derived iPSC models.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "filippo-fonseca",
    name: "Filippo Fonseca",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    image: "/team/filippo-fonseca.jpg",
    bio: "Contributing to computational modeling pipelines and web development for lab infrastructure.",
    linkedin: "https://www.linkedin.com/in/filippofonseca/",
  },
  {
    id: "placeholder-undergrad-1",
    name: "Alex Chen",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    image: "/team/placeholder.jpg",
    bio: "Assisting with image analysis and data processing for cardiac tissue characterization.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "placeholder-undergrad-2",
    name: "Maya Johnson",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    image: "/team/placeholder.jpg",
    bio: "Supporting experimental protocols and cell culture maintenance in the lab.",
    linkedin: "https://www.linkedin.com/",
  },
];

export const alumniMembers: TeamMember[] = [
  {
    id: "alumni-1",
    name: "Dr. Jennifer Walsh",
    role: "alumni",
    title: "Former Postdoc → Assistant Professor",
  },
  {
    id: "alumni-2",
    name: "Dr. Robert Lee",
    role: "alumni",
    title: "Former Ph.D. → Industry Scientist",
  },
  {
    id: "alumni-3",
    name: "Dr. Amanda Torres",
    role: "alumni",
    title: "Former Ph.D. → Research Scientist",
  },
  {
    id: "alumni-4",
    name: "Christopher Nguyen",
    role: "alumni",
    title: "Former Undergrad → Medical School",
  },
];
