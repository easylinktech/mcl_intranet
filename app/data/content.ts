export type Article = {
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  featured?: boolean;
};
export const articles: Article[] = [
  {
    title: "Building a stronger tomorrow, together.",
    category: "Company news",
    date: "28 Oct 2026",
    summary:
      "From the production floor to every team behind the scenes, our people make progress possible. This month, we celebrate the ideas, collaboration and dedication that keep MCL moving forward.",
    image: "/images/crowns-hero.png",
    featured: true,
  },
  {
    title: "Small actions. A safer workplace.",
    category: "Health & safety",
    date: "27 Oct 2026",
    summary:
      "Our safety refresh starts this November. Join your department briefing, check your protective equipment and help us make every shift a safe one.",
    image: "/safety.jpg",
  },
  {
    title: "Celebrating the people behind our quality",
    category: "Our people",
    date: "25 Oct 2026",
    summary:
      "Meet the teams whose care and attention go into every closure. Thank you to our quality and production colleagues for bringing our standards to life every day.",
    image: "/team.jpg",
  },
];
export const documents = [
  {
    name: "Employee handbook",
    category: "Human Resources",
    size: "2.4 MB",
    description:
      "Your guide to working at MCL, employee benefits and workplace policies.",
  },
  {
    name: "Leave application guide",
    category: "Human Resources",
    size: "840 KB",
    description:
      "How to plan and request annual leave through your line manager.",
  },
  {
    name: "Workplace safety guidelines",
    category: "Health & Safety",
    size: "1.8 MB",
    description:
      "Wear appropriate PPE, report hazards and follow all approved site procedures.",
  },
  {
    name: "IT acceptable use policy",
    category: "Information Technology",
    size: "560 KB",
    description:
      "Protect your password, lock your workstation and report suspicious messages to IT.",
  },
  {
    name: "Quality assurance checklist",
    category: "Quality Assurance",
    size: "720 KB",
    description:
      "A working checklist for quality briefings and production handovers.",
  },
];
export const events = [
  {
    day: "02",
    month: "NOV",
    title: "Monthly team briefing",
    time: "8:30 AM – 9:00 AM",
    place: "Main conference room",
    category: "Company",
  },
  {
    day: "06",
    month: "NOV",
    title: "Safety first: refresher session",
    time: "10:00 AM – 11:00 AM",
    place: "Training room",
    category: "Training",
  },
  {
    day: "13",
    month: "NOV",
    title: "Friday wellness walk",
    time: "4:00 PM – 5:00 PM",
    place: "Main reception",
    category: "Wellbeing",
  },
];
