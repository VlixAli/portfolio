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
  title: "Software Engineer",
  tagline:
    "Backend software engineer with 2 years of experience building and scaling microservice-based systems across Java and Spring Boot, with a strong focus on AI agents, data platforms, and cloud infrastructure.",
  about:
    "Backend Software Engineer with 2 years of experience building high-performance Java microservices using Spring Boot \
and Quarkus. Experienced in cloud-native development on Azure and AWS, distributed messaging systems, Redis caching, \
PostgreSQL, and large-scale airline booking integrations including Amadeus, Air Arabia, and Aegean. Passionate about \
scalable backend architecture and performance optimization.",
  email: "ali.m.eldiasty@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-eldiasty-",
  github: "https://github.com/VlixAli",
  photo: "/1.jpeg",
};

export const experience: Experience[] = [
  {
    company: "Hilbertech",
    role: "Software Engineer",
    period: "July 2024 — Present",
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
    period: "July 2022 — Sep 2022",
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
