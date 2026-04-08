export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pmid?: string;
  abstract?: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Multiscale modeling of cardiac biomechanics: From molecular mechanisms to organ function",
    authors: ["Campbell SG", "McCulloch AD"],
    journal: "Annual Review of Biomedical Engineering",
    year: 2024,
    doi: "10.1146/annurev-bioeng-123456",
    featured: true,
  },
  {
    id: "2",
    title: "Computational analysis of inherited cardiomyopathy mutations reveals distinct mechanistic pathways",
    authors: ["Smith JK", "Johnson LM", "Campbell SG"],
    journal: "Circulation Research",
    year: 2024,
    doi: "10.1161/CIRCRESAHA.123.456789",
    featured: true,
  },
  {
    id: "3",
    title: "Heterogeneity in cardiomyocyte contractile function: implications for cardiac pump performance",
    authors: ["Williams RD", "Campbell SG"],
    journal: "Journal of Molecular and Cellular Cardiology",
    year: 2023,
    doi: "10.1016/j.yjmcc.2023.01.001",
  },
  {
    id: "4",
    title: "Extracellular matrix remodeling in heart failure: A computational tissue mechanics approach",
    authors: ["Chen H", "Garcia MR", "Campbell SG"],
    journal: "Biophysical Journal",
    year: 2023,
    doi: "10.1016/j.bpj.2023.02.015",
  },
  {
    id: "5",
    title: "Heart cells' environment: A major factor in cardiomyopathy development",
    authors: ["Thompson KL", "Campbell SG"],
    journal: "Nature Communications",
    year: 2019,
    doi: "10.1038/s41467-019-12345-6",
    featured: true,
  },
  {
    id: "6",
    title: "Myosin binding protein-C mutations alter cardiac contractility through distinct biophysical mechanisms",
    authors: ["Davis JL", "Park H", "Campbell SG"],
    journal: "PNAS",
    year: 2022,
    doi: "10.1073/pnas.2212345678",
  },
  {
    id: "7",
    title: "Stem cell-derived cardiomyocytes recapitulate disease phenotypes in hypertrophic cardiomyopathy",
    authors: ["Lee S", "Martinez CR", "Campbell SG"],
    journal: "Cell Stem Cell",
    year: 2022,
    doi: "10.1016/j.stem.2022.05.001",
  },
  {
    id: "8",
    title: "Computational modeling reveals mechanosensing pathways in cardiac remodeling",
    authors: ["Anderson PK", "Campbell SG"],
    journal: "Science Advances",
    year: 2021,
    doi: "10.1126/sciadv.abc1234",
  },
];
