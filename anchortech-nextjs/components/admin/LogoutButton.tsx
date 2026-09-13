"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="font-mono text-sm text-anchor-ink/60 underline decoration-anchor-ink/30 underline-offset-4"
    >
      log out
    </button>
  );
}
