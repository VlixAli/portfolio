/**
 * Per-technology metadata used by the Technologies section:
 * brand color (for the chip background/border/text) and optional
 * icon path from /public/tech-icons (devicon set).
 */

export type TechMeta = {
  /** Readable text/border color on white backgrounds */
  color: string;
  /** Icon file name under /public/tech-icons, if available */
  icon?: string;
};

const ICONS = {
  java: "/tech-icons/java.svg",
  php: "/tech-icons/php.svg",
  csharp: "/tech-icons/csharp.svg",
  javascript: "/tech-icons/javascript.svg",
  spring: "/tech-icons/spring.svg",
  hibernate: "/tech-icons/hibernate.svg",
  quarkus: "/tech-icons/quarkus.svg",
  laravel: "/tech-icons/laravel.svg",
  rabbitmq: "/tech-icons/rabbitmq.svg",
  docker: "/tech-icons/docker.svg",
  kubernetes: "/tech-icons/kubernetes.svg",
  gitlab: "/tech-icons/gitlab.svg",
  mysql: "/tech-icons/mysql.svg",
  postgresql: "/tech-icons/postgresql.svg",
  redis: "/tech-icons/redis.svg",
  aws: "/tech-icons/aws.svg",
  azure: "/tech-icons/azure.svg",
  linux: "/tech-icons/linux.svg",
  windows: "/tech-icons/windows8.svg",
  git: "/tech-icons/git.svg",
  github: "/tech-icons/github.svg",
  jira: "/tech-icons/jira.svg",
  maven: "/tech-icons/maven.svg",
} as const;

const NEUTRAL = "#52525b";

export const TECH_META: Record<string, TechMeta> = {
  // Programming Languages
  Java: { color: "#b07219", icon: ICONS.java },
  PHP: { color: "#777bb4", icon: ICONS.php },
  "C#": { color: "#512bd4", icon: ICONS.csharp },
  JavaScript: { color: "#c89211", icon: ICONS.javascript },

  // Frameworks & Technology
  "Spring Boot": { color: "#6db33f", icon: ICONS.spring },
  Hibernate: { color: "#59666c", icon: ICONS.hibernate },
  Quarkus: { color: "#4695eb", icon: ICONS.quarkus },
  Laravel: { color: "#f05236", icon: ICONS.laravel },
  Eloquent: { color: "#f05236" },
  "RESTful Services": { color: NEUTRAL },
  SOAP: { color: NEUTRAL },

  // Messaging & DevOps
  RabbitMQ: { color: "#ff6600", icon: ICONS.rabbitmq },
  "Azure Service Bus": { color: "#0078d4", icon: ICONS.azure },
  Docker: { color: "#2496ed", icon: ICONS.docker },
  Kubernetes: { color: "#326ce5", icon: ICONS.kubernetes },
  "GitLab CI/CD": { color: "#fc6d26", icon: ICONS.gitlab },

  // Databases
  MySQL: { color: "#4479a1", icon: ICONS.mysql },
  PostgreSQL: { color: "#4169e1", icon: ICONS.postgresql },
  Redis: { color: "#dc382d", icon: ICONS.redis },

  // Cloud & Platform
  AWS: { color: "#e88500", icon: ICONS.aws },
  Azure: { color: "#0078d4", icon: ICONS.azure },
  Linux: { color: "#b8930c", icon: ICONS.linux },
  Windows: { color: "#0078d6", icon: ICONS.windows },

  // Testing & Tools
  JUnit: { color: "#26a0d0" },
  Mockito: { color: NEUTRAL },
  Git: { color: "#f05032", icon: ICONS.git },
  GitHub: { color: "#18181b", icon: ICONS.github },
  GitLab: { color: "#fc6d26", icon: ICONS.gitlab },
  "Azure DevOps": { color: "#0078d4", icon: ICONS.azure },
  Jira: { color: "#0052cc", icon: ICONS.jira },
  Maven: { color: "#c71a36", icon: ICONS.maven },
  "Claude Code": { color: "#d97757" },
  OpenCode: { color: "#157c3c" },
};

/** Convert a hex color like #4479a1 to an rgba() string with the given alpha. */
export function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Style object for a technology chip, mirroring the reference site. */
export function techChipStyle(color: string): {
  backgroundColor: string;
  borderColor: string;
  color: string;
} {
  return {
    backgroundColor: hexToRgba(color, 0.08),
    borderColor: hexToRgba(color, 0.25),
    color,
  };
}
