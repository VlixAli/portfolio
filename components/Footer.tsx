import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-lg pb-8 text-center font-mono text-xs text-muted">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
