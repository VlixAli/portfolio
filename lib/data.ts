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
  name: "Ali Eldiasty.\nI bring your ideas to reality!",
  title: "Software Engineer",
  tagline: "I am a software engineer with 2 years of experience building and scaling microservice-based systems across Java and spring boot - with a strong focus on AI agents, data platforms, and cloud infrastructure",
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
      "Deployed and maintained containerized applications on AWS and Azure using Docker and GitLab CI/CD pipelines.",
      "Reduced container memory consumption from approximately 80% to 15% by migrating JVM deployments to Quarkus Native executables, significantly improving scalability and lowering infrastructure costs.",
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
    category: "Languages",
    items: ["Java", "PHP", "C#", "JavaScript"],
  },
  {
    category: "Frameworks & Technologies",
    items: [
      "Spring (Core, Boot, Security, Data),",
      "Hibernate", 
      "Quarkus", 
      "JUnit", 
      "Mockito", 
      "Laravel", 
      "Eloquent", 
      "RESTful Services", 
      "SOAP"
    ],
  },
  {
    category: "Messaging & Caching",
    items: ["RabbitMQ", "Azure Service Bus", "Redis"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & infrastructure",
    items: ["Azure", "AWS", "Docker", "GitLab CI", "Azure DevOps"],
  },
  {
    category: "Testing & Tools",
    items: ["JUnit", "Mockito", "Git", "GitHub", "GitLab", "Jira", "Maven", "Claude Code", "OpenCode"],
  },
  {
    category: "Conceptual knowledge",
    items: ["Algorithms", "Data Structures", "SOLID Principles", "Object Oriented Programming", "Database",
 "designing concepts", "Object-relational mapping ORM", "Microservice", "Unit & Integration Testing", "CI/CD"],
  }
];

export const projects: Project[] = [
  {
    title: "Sales Management System",
    description:
      "Built a sales management system using Spring Boot, Spring Security, MySQL, JWT authentication, and JPA. \
Implemented order and refund management, authentication, search functionality, and role-based authorization.",
    tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JUnit", "Mockito", "JWT"],
  },
  {
    title: "Full Stack Mutli-Vendor E-Commerce website",
    description:
      "Developed administrative and vendor dashboards for a multi-vendor e-commerce platform, facilitating product management, user oversight, and sales monitoring.",
    tech: ["PHP", "Laravel", "Tailwind", "MySQL", "Bootstrap"],
  },
  {
    title: "Travel Agency",
    description:
      "Implemented a role-based access control system within a travel agency API, enabling admins to create users, manage travels and tours, editors to modify travels, and users to view tours and travels with filtering capabilities.",
    tech: ["PHP", "Laravel", "MySQL"],
  },
];
