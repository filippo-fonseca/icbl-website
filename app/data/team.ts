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
    bio: "Dr. Campbell leads the Integrative Cardiac Biomechanics Laboratory at Yale University. His research focuses on understanding cardiac muscle function through computational and experimental approaches, with the goal of improving treatment for heart disease.",
    email: "stuart.campbell@yale.edu",
    scholar: "https://scholar.google.com/citations?user=example",
  },
  {
    id: "postdoc-1",
    name: "Dr. Sarah Chen",
    role: "postdoc",
    title: "Postdoctoral Associate",
    bio: "Investigating molecular mechanisms of inherited cardiomyopathies using computational modeling and stem cell-derived cardiomyocytes.",
  },
  {
    id: "postdoc-2",
    name: "Dr. Michael Rodriguez",
    role: "postdoc",
    title: "Postdoctoral Associate",
    bio: "Developing multiscale computational models of cardiac tissue mechanics and electrophysiology.",
  },
  {
    id: "grad-1",
    name: "Emily Thompson",
    role: "graduate",
    title: "Ph.D. Candidate",
    bio: "Studying the role of extracellular matrix in cardiac mechanobiology.",
  },
  {
    id: "grad-2",
    name: "James Park",
    role: "graduate",
    title: "Ph.D. Candidate",
    bio: "Investigating cardiomyocyte heterogeneity and its implications for cardiac function.",
  },
  {
    id: "grad-3",
    name: "Aisha Patel",
    role: "graduate",
    title: "Ph.D. Candidate",
    bio: "Developing computational models of sarcomere dynamics in disease states.",
  },
  {
    id: "undergrad-1",
    name: "David Kim",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    bio: "Contributing to image analysis pipelines for cardiac tissue characterization.",
  },
];

export const alumniMembers: TeamMember[] = [
  {
    id: "alumni-1",
    name: "Dr. Jennifer Walsh",
    role: "alumni",
    title: "Former Postdoc → Assistant Professor, Stanford University",
  },
  {
    id: "alumni-2",
    name: "Dr. Robert Lee",
    role: "alumni",
    title: "Former Ph.D. Student → Scientist, Genentech",
  },
];
