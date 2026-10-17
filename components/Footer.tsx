import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "GitHub Profile", href: `${profile.github}?tab=repositories`, external: true },
];

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-brand-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">{profile.name}</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-brand-100/80">
              Backend Software Engineer specialized in building scalable Java
              microservices with Spring Boot and Quarkus, deployed across AWS
              and Azure.
            </p>
            <div className="mt-5 flex items-center gap-4 text-brand-100/80">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="transition-colors hover:text-white"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-100/80 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-200">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-200">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-100/80 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-brand-100/80 transition-colors hover:text-white"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-brand-100/80 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-xs text-brand-100/70 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed &amp; built by Ali Eldiasty</p>
        </div>
      </div>
    </footer>
  );
}
