export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const profile = {
  name: "Your Name",
  title: "Backend Engineer",
  tagline:
    "Backend engineer with experience building and scaling travel, flight search, and reservation systems. Replace this with your own one-to-two sentence introduction.",
  about:
    "Write a short paragraph about yourself here: your background, what you enjoy working on, and the kind of engineering problems you care about.\n\nAdd a second paragraph with more detail, such as experience with cloud platforms, APIs, and large-scale systems.",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/yourhandle",
  github: "https://github.com/yourhandle",
};

export const experience: Experience[] = [
  {
    company: "Air Arabia",
    role: "Backend Engineer",
    period: "Jan 2023 — Present",
    summary:
      "Describe your role here: the teams you worked with, the systems you built or maintained, and the impact you had.",
    highlights: [
      "Key achievement or responsibility in bullet form",
      "Another achievement, e.g. a system you designed or a metric you improved",
      "A technology or integration you introduced",
    ],
  },
  {
    company: "Amadeus",
    role: "Software Engineer",
    period: "Jun 2020 — Dec 2022",
    summary:
      "Describe your role here: the teams you worked with, the systems you built or maintained, and the impact you had.",
    highlights: [
      "Key achievement or responsibility in bullet form",
      "Another achievement, e.g. a system you designed or a metric you improved",
      "A technology or integration you introduced",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "SQL", "JavaScript"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Quarkus",
      "REST APIs",
      "Microservices",
      "Kafka",
      "Redis",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
];

export const projects: Project[] = [
  {
    title: "Flight Search Engine",
    description:
      "Describe this project: the problem it solves, your role, and what it achieved.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "NDC Integration",
    description:
      "Describe this project: the problem it solves, your role, and what it achieved.",
    tech: ["Quarkus", "Kafka", "Redis"],
  },
  {
    title: "API Gateway",
    description:
      "Describe this project: the problem it solves, your role, and what it achieved.",
    tech: ["Azure", "AWS", "Docker"],
  },
];
