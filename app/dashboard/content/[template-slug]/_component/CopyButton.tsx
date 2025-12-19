"use client";

import { Button } from "@/components/ui/button";

export default function CopyButton({
  text,
}: {
  text: string;
}) {
  return (
    <Button
      size="sm"
      className="bg-white text-black hover:bg-gray-200"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      Copy
    </Button>
  );
}
