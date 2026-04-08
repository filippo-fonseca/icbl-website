export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  image?: string;
  link?: string;
  category: "publication" | "award" | "event" | "media" | "announcement";
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "New NIH R01 Grant Awarded for Cardiomyopathy Research",
    date: "2024-03-15",
    summary: "The lab has been awarded a 5-year R01 grant to study the molecular mechanisms of hypertrophic cardiomyopathy using integrated computational and experimental approaches.",
    category: "award",
  },
  {
    id: "2",
    title: "Paper Published in Circulation Research",
    date: "2024-02-01",
    summary: "Our latest work on computational analysis of inherited cardiomyopathy mutations has been published in Circulation Research.",
    category: "publication",
  },
  {
    id: "3",
    title: "Dr. Campbell Delivers Keynote at BMES Annual Meeting",
    date: "2023-10-15",
    summary: "Dr. Campbell presented our recent findings on cardiac mechanobiology at the Biomedical Engineering Society Annual Meeting in Seattle.",
    category: "event",
  },
  {
    id: "4",
    title: "Yale Hosts Cardiovascular Tissue Engineering Symposium",
    date: "2023-09-20",
    summary: "The lab co-organized a symposium bringing together leading researchers in cardiac tissue engineering, biomaterials, and regenerative medicine.",
    category: "event",
  },
  {
    id: "5",
    title: "Heart Cells' Environment a Potentially Major Factor in Heart Disease",
    date: "2019-07-15",
    summary: "New research from our lab reveals how the scaffold supporting heart cells could play a crucial role in disease development, challenging traditional views of cardiomyopathy.",
    category: "media",
    link: "https://news.yale.edu/",
  },
  {
    id: "6",
    title: "Emily Thompson Receives AHA Predoctoral Fellowship",
    date: "2023-08-01",
    summary: "Congratulations to Emily on receiving the American Heart Association Predoctoral Fellowship for her research on cardiac extracellular matrix.",
    category: "award",
  },
];
