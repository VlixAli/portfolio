"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { profile, projects } from "@/lib/data";

type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

type GitHubEvent = {
  type: string;
  repo: { name: string };
  created_at: string;
};

const LANGUAGE_COLORS: Record<string, string> = {
  Java: "#b07219",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  PHP: "#4F5D95",
  "C#": "#178600",
  C: "#555555",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  Kotlin: "#A97BFF",
  SQL: "#e38c00",
  Lua: "#000080",
};

const BAR_STYLES = [
  { track: "bg-brand-100", fill: "bg-brand-500" },
  { track: "bg-zinc-100", fill: "bg-zinc-700" },
  { track: "bg-sky-100", fill: "bg-sky-500" },
  { track: "bg-amber-100", fill: "bg-amber-500" },
  { track: "bg-rose-100", fill: "bg-rose-500" },
];

function describeEvent(type: string): string {
  switch (type) {
    case "PushEvent":
      return "Pushed to";
    case "CreateEvent":
      return "Created";
    case "PullRequestEvent":
      return "Pull request on";
    case "IssuesEvent":
      return "Issue on";
    case "WatchEvent":
      return "Starred";
    case "ForkEvent":
      return "Forked";
    case "DeleteEvent":
      return "Deleted branch from";
    case "PublicEvent":
      return "Made public";
    default:
      return "Activity in";
  }
}

function relativeDate(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHub(): Promise<void> {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUser}`),
          fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
        const userData = (await userRes.json()) as GitHubUser;
        const repoData = (await reposRes.json()) as GitHubRepo[];
        if (cancelled) return;
        setUser(userData);
        setRepos(repoData);

        const eventsRes = await fetch(
          `https://api.github.com/users/${profile.githubUser}/events/public?per_page=12`,
        );
        if (eventsRes.ok) {
          const eventData = (await eventsRes.json()) as GitHubEvent[];
          if (!cancelled) setEvents(eventData.filter((e) => e.type !== "WatchEvent").slice(0, 6));
        }
        if (!cancelled) setState("ready");
      } catch {
        if (!cancelled) setState("error");
      }
    }

    void fetchGitHub();
    const preventInterval = setInterval(fetchGitHub, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(preventInterval);
    };
  }, []);

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const languageCounts = new Map<string, number>();
  repos.forEach((repo) => {
    if (repo.language) {
      languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
    }
  });
  const languages = [...languageCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const languageTotal = languages.reduce((sum, [, count]) => sum + count, 0) || 1;

  return (
    <section id="github" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            GitHub Overview
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">GitHub Stats</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            A live snapshot of my open-source activity, pulled directly from
            GitHub. Repositories, stars, followers, and the languages I reach
            for most, updated automatically as I ship new work.
          </p>
        </Reveal>

        {state === "loading" && (
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-xl bg-zinc-900" />
            ))}
          </div>
        )}

        {state === "error" && (
          <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 text-center">
            <p className="text-zinc-300">
              Couldn&apos;t load live GitHub stats right now (API rate limit or
              network issue).
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-400 hover:underline"
            >
              Visit my GitHub profile
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </div>
        )}

        {state === "ready" && user && (
          <>
            {/* Stats tiles */}
            <div className="mt-12 grid gap-4 sm:grid-cols-4">
              {[
                { label: "Repositories", value: user.public_repos },
                { label: "Total Stars", value: totalStars },
                { label: "Followers", value: user.followers },
                { label: "Following", value: user.following },
              ].map((stat, index) => (
                <Reveal key={stat.label} delay={index * 80}>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
                    <p className="text-3xl font-bold text-brand-400">{stat.value}</p>
                    <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Profile + languages + activity */}
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <Reveal>
                <div className="flex h-full flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.avatar_url}
                    alt={`${user.name ?? user.login} avatar`}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="h-24 w-24 rounded-full border-2 border-brand-400/50"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{user.name ?? user.login}</h3>
                  <a
                    href={`https://github.com/${user.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-brand-400"
                  >
                    @{user.login}
                  </a>
                  {user.bio && <p className="mt-3 text-sm leading-6 text-zinc-400">{user.bio}</p>}
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-400 hover:underline"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Open GitHub
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="h-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
                  <h3 className="text-base font-semibold">Top Languages</h3>
                  <div className="mt-5 space-y-5">
                    {languages.map(([language, count], index) => {
                      const pct = Math.round((count / languageTotal) * 100);
                      const style = BAR_STYLES[index % BAR_STYLES.length];
                      const color = LANGUAGE_COLORS[language] ?? "#a1a1aa";
                      return (
                        <div key={language}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 text-zinc-200">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                              {language}
                            </span>
                            <span className="text-zinc-500">{pct}%</span>
                          </div>
                          <div className={`mt-2 h-2 rounded-full ${style.track}`}>
                            <div
                              className={`h-2 rounded-full ${style.fill}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="h-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
                  <h3 className="text-base font-semibold">Contribution Activity</h3>
                  <div className="mt-5 space-y-4">
                    {events.length === 0 && (
                      <p className="text-sm text-zinc-500">No recent public activity.</p>
                    )}
                    {events.map((event, index) => (
                      <div
                        key={`${event.repo.name}-${event.created_at}-${index}`}
                        className="flex gap-3 text-sm"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                        <div>
                          <p className="text-zinc-300">
                            {describeEvent(event.type)}{" "}
                            <span className="font-medium text-white">{event.repo.name}</span>
                          </p>
                          <p className="text-xs text-zinc-500">{relativeDate(event.created_at)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Featured repositories */}
            <Reveal>
              <h3 className="mt-14 text-2xl font-bold">Featured Repositories</h3>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={(index % 3) * 100} className="h-full">
                  <a
                    href={project.links?.github ?? profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:-translate-y-1 hover:border-brand-400/40"
                  >
                    <h4 className="text-base font-semibold text-brand-400">{project.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
                      View repository
                      <ExternalLinkIcon className="h-4 w-4" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
