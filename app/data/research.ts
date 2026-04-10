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
    shortDescription: "Discovering detailed disease mechanisms, predicting genotype-phenotype relationships, and improving clinical diagnostics and therapeutics.",
    fullDescription: `Inherited cardiomyopathies are life-threatening disorders that generally emerge in the teenage years or later in life. These conditions involve structural and functional changes to heart tissue stemming from genetic mutations. Our lab works to connect specific gene mutations with altered muscle behavior and diseased tissue development.

Our methodology combines computational modeling, tissue engineering, and clinical genetics approaches to advance diagnostic capabilities and therapeutic interventions. We engineer human heart tissues using CRISPR to study genetic cardiomyopathies, seeding human heart cells derived from stem cells onto decellularized tissue scaffolds to create functional models that mimic human muscle behavior.

Key questions we address:
• How do mutations in sarcomere proteins alter the fundamental mechanics of muscle contraction?
• Why do some mutation carriers develop severe disease while others remain asymptomatic?
• Can computational models help predict disease progression and guide treatment decisions?`,
  },
  {
    id: "cardiomyocyte-function",
    title: "Cardiomyocyte Function & Heterogeneity",
    shortDescription: "Characterizing cell-to-cell variation in the myocardium and studying the cellular signaling pathways that regulate muscle contraction.",
    fullDescription: `Isolated cardiac cells display significant variation in size, shape, and functional properties. Our recent findings demonstrate that these functional differences result from variations in protein phosphorylation levels. We investigate how this cellular heterogeneity affects overall heart function.

We also explore fundamental questions in cardiac muscle physiology using engineering-based approaches. Our investigations focus on the basis for the Frank-Starling relationship, the roles of various proteins in the regulation of muscle contraction, and how myofilament protein mutations influence cardiac performance. This work employs computational modeling and biomechanical measurements to address long-standing physiological questions.

Key questions we address:
• What is the extent of functional heterogeneity in normal and diseased hearts?
• How do variations in protein phosphorylation drive cell-to-cell differences?
• How does heterogeneity affect the heart's ability to generate coordinated contractions?`,
  },
  {
    id: "cardiac-mechanobiology",
    title: "Cardiac Tissue Mechanobiology",
    shortDescription: "Dissecting the role of biomechanical loads and extracellular matrix on cardiac remodeling and mechanotransduction.",
    fullDescription: `We investigate cellular and tissue responses to mechanical signals, including extracellular matrix properties and applied mechanical loads. This understanding proves essential for comprehending cardiac development, tissue maintenance, and disease mechanisms.

Our lab uses engineered tissue platforms and custom mechanical bioreactors to study these relationships. We start with thin slices of decellularized pig heart tissue—essentially, the natural scaffold of an organ stripped of its cells—and use that as a foundation. Human heart cells, derived from stem cells, are then seeded onto the matrix. With mechanical stimulation and hormone cues, the cells organize and mature, beating rhythmically and mimicking the behavior of human muscle.

Key questions we address:
• How do cardiomyocytes sense and respond to mechanical forces?
• What role does extracellular matrix remodeling play in heart failure progression?
• Can we develop biomaterial-based therapies to restore normal cardiac mechanics?`,
  },
];
