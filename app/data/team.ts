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
    image: "/team/campbell.png",
    bio: "Dr. Campbell leads the Integrative Cardiac Biomechanics Laboratory at Yale University. His research focuses on understanding cardiac muscle function through computational and experimental approaches, with the goal of improving diagnosis and treatment for inherited heart disease.",
    email: "stuart.campbell@yale.edu",
    scholar: "https://scholar.google.com/citations?user=Y2SzgkQAAAAJ&hl=en&oi=ao",
    linkedin: "https://www.linkedin.com/in/stuart-campbell-1886508/",
  },
  {
    id: "michele-zanetti",
    name: "Lorem Ipsum, Ph.D.",
    role: "postdoc",
    title: "Postdoctoral Associate",
    image: "/team/michele-zanetti.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "xia-li",
    name: "Xia Li",
    role: "postdoc",
    title: "Lab Manager & Research Scientist",
    image: "/team/xia-li.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    linkedin: "https://www.linkedin.com/in/xia-li/",
  },
  {
    id: "andres-cubero",
    name: "Andrés Cubero Cruz",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/andres-cubero.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    linkedin: "https://www.linkedin.com/in/andres-cubero-cruz/",
  },
  {
    id: "alexis-tensfeldt",
    name: "Alexis Tensfeldt",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/alexis-tensfeldt.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    linkedin: "https://www.linkedin.com/in/alexis-tensfeldt/",
  },
  {
    id: "xianmu-li",
    name: "Xianmu Li",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/xianmu-li.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "placeholder-grad-1",
    name: "Lorem Ipsum",
    role: "graduate",
    title: "Ph.D. Candidate",
    image: "/team/placeholder.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "placeholder-grad-2",
    name: "Lorem Ipsum",
    role: "graduate",
    title: "Ph.D. Student",
    image: "/team/placeholder.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "filippo-fonseca",
    name: "Filippo Fonseca",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    image: "/team/filippo-fonseca.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    linkedin: "https://www.linkedin.com/in/filippofonseca/",
  },
  {
    id: "placeholder-undergrad-1",
    name: "Lorem Ipsum",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    image: "/team/placeholder.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quia non numquam eius modi tempora incidunt ut labore.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "placeholder-undergrad-2",
    name: "Lorem Ipsum",
    role: "undergraduate",
    title: "Undergraduate Researcher",
    image: "/team/placeholder.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus.",
    linkedin: "https://www.linkedin.com/",
  },
];

export const alumniMembers: TeamMember[] = [
  {
    id: "alumni-1",
    name: "Lorem Ipsum",
    role: "alumni",
    title: "Former Postdoc → Assistant Professor",
  },
  {
    id: "alumni-2",
    name: "Lorem Ipsum",
    role: "alumni",
    title: "Former Ph.D. → Industry Scientist",
  },
  {
    id: "alumni-3",
    name: "Lorem Ipsum",
    role: "alumni",
    title: "Former Ph.D. → Research Scientist",
  },
  {
    id: "alumni-4",
    name: "Lorem Ipsum",
    role: "alumni",
    title: "Former Undergrad → Medical School",
  },
];
