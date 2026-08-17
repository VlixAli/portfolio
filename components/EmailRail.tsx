import { profile } from "@/lib/data";

export default function EmailRail() {
  return (
    <div className="fixed bottom-0 right-6 z-40 hidden flex-col items-center md:flex xl:right-12">
      <a
        href={`mailto:${profile.email}`}
        className="block p-2.5 font-mono text-xs tracking-widest text-foreground transition-all duration-200 hover:-translate-y-1 hover:text-accent [writing-mode:vertical-lr]"
      >
        {profile.email}
      </a>
      <div className="mt-5 h-28 w-[1.5px] bg-foreground/30" />
    </div>
  );
}
