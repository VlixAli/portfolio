"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";

export default function Avatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <Image
      src={profile.photo}
      alt={`Photo of ${profile.name}`}
      width={160}
      height={160}
      priority
      onError={() => setFailed(true)}
      className="h-36 w-36 shrink-0 rounded-full border-4 border-background object-cover ring-1 ring-line md:h-44 md:w-44"
    />
  );
}
