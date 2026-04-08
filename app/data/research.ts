export interface ResearchArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  publications?: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "inherited-cardiomyopathies",
    title: "Inherited Cardiomyopathies",
    shortDescription: "Understanding disease mechanisms and improving clinical approaches for genetic heart conditions.",
    fullDescription: `Inherited cardiomyopathies affect millions of people worldwide and are a leading cause of sudden cardiac death in young adults. Our lab uses computational modeling combined with experimental validation to understand how genetic mutations alter cardiac muscle function at multiple scales—from single molecules to the whole heart.

We develop sophisticated computer models that can predict how specific mutations affect sarcomere function, myocyte contraction, and ultimately cardiac pump performance. By integrating these predictions with data from patient-derived stem cells and clinical observations, we aim to improve risk stratification and develop targeted therapies.

Key questions we address:
• How do mutations in sarcomere proteins alter the fundamental mechanics of muscle contraction?
• Why do some mutation carriers develop severe disease while others remain asymptomatic?
• Can computational models help predict disease progression and guide treatment decisions?`,
  },
  {
    id: "cardiomyocyte-function",
    title: "Cardiomyocyte Function & Heterogeneity",
    shortDescription: "Examining cellular variation and understanding how individual cells contribute to whole-heart function.",
    fullDescription: `The heart contains billions of cardiomyocytes that must work together in precise coordination. Yet these cells are not identical—they vary in their size, shape, gene expression, and contractile properties. Our lab investigates how this cellular heterogeneity affects cardiac function in health and disease.

Using advanced imaging techniques, single-cell analysis, and computational modeling, we characterize the diversity of cardiomyocyte populations and determine how heterogeneity emerges during development and changes in disease states. This work has implications for understanding arrhythmias, heart failure, and the response to therapeutic interventions.

Key questions we address:
• What is the extent of functional heterogeneity in normal and diseased hearts?
• How does heterogeneity affect the heart's ability to generate coordinated contractions?
• Can targeting specific cardiomyocyte subpopulations improve therapeutic outcomes?`,
  },
  {
    id: "cardiac-mechanobiology",
    title: "Cardiac Tissue Mechanobiology",
    shortDescription: "Investigating how biomechanical loads and the extracellular matrix influence heart function.",
    fullDescription: `The heart is a mechanical organ, and the cells within it are constantly sensing and responding to mechanical forces. The extracellular matrix (ECM) that surrounds cardiomyocytes provides structural support and transmits mechanical signals that regulate cell behavior. Our lab studies how mechanical cues influence cardiac development, homeostasis, and disease progression.

We use engineered tissue platforms, advanced microscopy, and computational models to understand the bidirectional interactions between cardiomyocytes and their mechanical environment. This work is revealing how changes in ECM composition and stiffness contribute to heart failure and suggesting new therapeutic approaches targeting the cardiac microenvironment.

Key questions we address:
• How do cardiomyocytes sense and respond to mechanical forces?
• What role does ECM remodeling play in heart failure progression?
• Can we develop biomaterial-based therapies to restore normal cardiac mechanics?`,
  },
];
