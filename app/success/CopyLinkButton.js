"use client";

import { useState } from "react";

export default function CopyLinkButton({ value }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="button button--secondary" type="button" onClick={copyLink}>
      {copied ? "Copied" : "Copy Link"}
    </button>
  );
}
