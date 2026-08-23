import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line/50 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 md:flex-row md:justify-between">
        <p className="font-mono text-xs tracking-wide text-muted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4 text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
        <p className="font-mono text-xs tracking-wide text-muted">
          Designed &amp; built by Ali Eldiasty
        </p>
      </div>
    </footer>
  );
}
