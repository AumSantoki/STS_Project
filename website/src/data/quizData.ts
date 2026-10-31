export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What percentage of intercontinental internet data is carried by physical undersea cables rather than satellites?",
    options: ["About 50%", "Around 75%", "99%", "Less than 20%"],
    correctIndex: 2,
    explanation: "Undersea fiber optic cables carry 99% of all intercontinental data. Satellites carry only a tiny fraction (about 1%) for remote locations and ships.",
    source: "TeleGeography Submarine Telecoms Forum (verified)",
  },
  {
    id: 2,
    question: "Roughly how fast does light travel inside silica glass optical fiber cables?",
    options: ["300,000 km/s", "200,000 km/s", "50,000 km/s", "10,000 km/s"],
    correctIndex: 1,
    explanation: "Light travels at 300,000 km/s in empty space, but the glass core slows it down by roughly one third to approximately 200,000 km/s.",
    source: "ITU-T Optical Fibre Specifications (G.652 refractive index n ≈ 1.468)",
  },
  {
    id: 3,
    question: "What is the leading cause of undersea cable cuts and faults around the world?",
    options: ["Shark bites", "Volcanic eruptions", "Commercial fishing trawlers and ship anchors", "Pirate attacks"],
    correctIndex: 2,
    explanation: "Human maritime activity accounts for roughly 70% of all faults. Commercial fishing gear and dragging anchors frequently snag cables.",
    source: "ICPC (International Cable Protection Committee) Global Fault Database",
  },
  {
    id: 4,
    question: "What was the name of the first transatlantic fiber optic cable, switched on in 1988?",
    options: ["TAT-1", "MAREA", "TAT-8", "Apollo-11"],
    correctIndex: 2,
    explanation: "TAT-8 entered service in 1988 as the first submarine fiber-optic cable, capable of handling 40,000 phone calls simultaneously.",
    source: "IEEE History Center & France Telecom / AT&T archives",
  },
  {
    id: 5,
    question: "Approximately how many people on Earth still remain offline without internet access?",
    options: ["50 million", "500 million", "2.2 billion", "4.5 billion"],
    correctIndex: 2,
    explanation: "According to the UN telecommunications agency, around 2.2 billion people remain disconnected due to infrastructure, poverty, and geography.",
    source: "ITU (International Telecommunication Union) Facts and Figures",
  },
];

