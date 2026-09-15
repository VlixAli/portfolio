export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const siteUrl = "https://ali-eldiasty-portfolio.vercel.app";

export const profile = {
  name: "Ali Eldiasty",
  slogan: "I bring your ideas to reality!",
  title: "Backend Software Engineer",
  tagline:
    "Backend Software Engineer with 2+ years of experience building Java microservices with Spring Boot and Quarkus, focused on scalability, reliability, and performance.",
  about:
    "Backend Software Engineer with 2+ years of experience building Java microservices with Spring Boot and Quarkus. \
Experienced in distributed systems, asynchronous messaging, Redis caching, PostgreSQL, Docker, and AWS/Azure cloud \
environments. Built and integrated airline booking systems with Amadeus, Air Arabia, and Aegean, with a focus on \
scalability, reliability, and performance.",
  email: "ali.m.eldiasty@gmail.com",
  phone: "+201280600741",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/ali-eldiasty",
  github: "https://github.com/VlixAli",
  photo: "/1.jpeg",
};

export const experience: Experience[] = [
  {
    company: "Hilbertech",
    role: "Mid Level Software Engineer",
    period: "08/2026 — Present",
    location: "(Remote), Italy",
    summary: "Backend engineer improving data consistency and reliability under parallel processing.",
    highlights: [
      "Resolved a concurrency issue where multiple microservices simultaneously updated shared Redis-cached responses, improving data consistency and reliability under parallel processing.",
    ],
  },
  {
    company: "Hilbertech",
    role: "Software Engineer",
    period: "07/2024 — 08/2026",
    location: "(Remote), Italy",
    summary: "Backend engineer building and scaling enterprise flight booking platforms.",
    highlights: [
      "Developed backend services for Flight-Fusion and Dreamnfly, enterprise flight booking platforms used by travel agencies to search, book, and manage airline reservations.",
      "Integrated multiple airline and payment providers including Amadeus, Air Arabia, Aegean Airlines, and Nexi using REST and SOAP APIs.",
      "Containerized and deployed Java/Quarkus microservices across AWS and Azure using Docker and GitLab CI/CD.",
      "Reduced container memory utilization from ~80% to ~15% by migrating JVM deployments to Quarkus Native, improving scalability and reducing infrastructure costs.",
    ],
  },
  {
    company: "Fawry",
    role: "Back End Intern",
    period: "07/2022 — 09/2022",
    location: "Cairo, Egypt",
    summary: "Backend development internship focused on API development and sales management.",
    highlights: [
      "Developed backend APIs using Java and Spring Boot as part of a sales management system internship project.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Java", "PHP", "C#", "JavaScript"],
  },
  {
    category: "Frameworks & Technology",
    items: [
      "Spring Boot",
      "Hibernate",
      "Quarkus",
      "Laravel",
      "Eloquent",
      "RESTful Services",
      "SOAP",
    ],
  },
  {
    category: "Messaging & DevOps",
    items: ["RabbitMQ", "Azure Service Bus", "Docker", "Kubernetes", "GitLab CI/CD"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Cloud & Platform",
    items: ["AWS", "Azure", "Linux", "Windows"],
  },
  {
    category: "Testing & Tools",
    items: ["JUnit", "Mockito", "Git", "GitHub", "GitLab", "Azure DevOps", "Jira", "Maven", "Claude Code", "OpenCode"],
  },
];

export const projects: Project[] = [
  {
    title: "Sales Management System",
    description:
      "Built a sales management system using Spring Boot, Spring Security, MySQL, JWT authentication, and JPA. \
Implemented order and refund management, authentication, search functionality, and role-based authorization.",
    tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JUnit", "Mockito", "JWT"],
    links: {
      github: "https://github.com/VlixAli/Sales-Management-System",
    },
  },
  {
    title: "Full Stack Multi-Vendor E-Commerce Website",
    description:
      "Developed administrative and vendor dashboards for a multi-vendor e-commerce platform, facilitating product management, user oversight, and sales monitoring.",
    tech: ["PHP", "Laravel", "Tailwind", "MySQL", "Bootstrap"],
    links: {
      github: "https://github.com/VlixAli/Mutli-vendor-E-Commerce",
    },
  },
  {
    title: "Travel Agency",
    description:
      "Implemented a role-based access control system within a travel agency API, enabling admins to create users, manage travels and tours, editors to modify travels, and users to view tours and travels with filtering capabilities.",
    tech: ["PHP", "Laravel", "MySQL"],
    links: {
      github: "https://github.com/VlixAli/Travel-Agency-Api",
    },
  },
];
