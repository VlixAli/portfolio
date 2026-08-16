import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <p className="text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
