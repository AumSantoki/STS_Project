export interface SimpleWordsCard {
  sectionId: string;
  title: string;
  subtitle: string;
  summary: string;
  analogies: {
    label: string;
    description: string;
  }[];
}

export const SIMPLE_WORDS_DATA: Record<string, SimpleWordsCard> = {
  journey: {
    sectionId: "journey-section",
    title: "In simple words: The Journey of Data",
    subtitle: "What actually happens when you tap your screen?",
    summary:
      "When you click a link, your phone turns your message into radio waves (invisible energy). Cables in your street carry this message to giant wires under the sea. The message races around the world through glass threads in less than a second to fetch your answer.",
    analogies: [
      {
        label: "Radio Waves",
        description: "Your phone sends invisible signals through the air to your Wi-Fi box or cell tower.",
      },
      {
        label: "Glass Threads",
        description: "Laser light flashes billions of times every second inside tubes thinner than a hair.",
      },
      {
        label: "Ocean Crossing",
        description: "The signals cross the ocean floor along thick armored cables to reach computers in other countries.",
      },
    ],
  },
  hardware: {
    sectionId: "physical-internet",
    title: "In simple words: The Hardware Atlas",
    subtitle: "The real machines powering cyberspace",
    summary:
      "The internet is not a magic cloud in the sky. It is made of real physical objects you can touch. These include ocean cables, concrete landing stations on beaches, warehouse-sized computer centers, and big cooling towers that stop machines from melting.",
    analogies: [
      {
        label: "Submarine Cables",
        description: "Heavy waterproof garden hoses that carry light beams across ocean bottoms.",
      },
      {
        label: "Cable Landing Stations",
        description: "Secure buildings on the beach where sea cables plug into land networks.",
      },
      {
        label: "Data Centres",
        description: "Giant libraries packed with thousands of computers running all day and night.",
      },
    ],
  },
  people: {
    sectionId: "people-behind",
    title: "In simple words: The People Who Keep It Running",
    subtitle: "The human workers behind the screen",
    summary:
      "Thousands of real workers keep the internet alive every day. Ship captains pull up broken cables from stormy oceans. Fiber splicers join tiny glass strands in rainy streets. Deep-sea divers and climbing crews risk their lives so your videos load without stopping.",
    analogies: [
      {
        label: "Cable Ship Crew",
        description: "Sailors who find and fix broken ocean cables during big ocean storms.",
      },
      {
        label: "Fiber Splicer",
        description: "Technicians who melt and fuse glass threads thinner than human hair with microscope tools.",
      },
      {
        label: "Tower Climber",
        description: "Riggers who climb hundreds of feet in high winds to fix radio antennas.",
      },
    ],
  },
  research: {
    sectionId: "pedagogical-context",
    title: "In simple words: Why This Matters",
    subtitle: "The hidden environmental and human cost",
    summary:
      "Every video, game, and search consumes real electricity and fresh water for cooling. Also, more than 2 billion people cannot afford or reach this network. Understanding the physical internet helps us protect our planet and build a fairer world.",
    analogies: [
      {
        label: "Electricity & Water",
        description: "Data centers use as much power as entire countries and need water to cool hot chips.",
      },
      {
        label: "Digital Divide",
        description: "One in four people on Earth still has no internet access due to poverty and missing cables.",
      },
      {
        label: "Geopolitics",
        description: "Countries protect these undersea cables because cutting them can knock an entire nation offline.",
      },
    ],
  },
};
