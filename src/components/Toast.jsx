"use client";
import { useEffect, useState } from "react";

export default function Toast({ toast, setToast, duration = 4000 }) {
  const [visible, setVisible] = useState(!!toast);

  useEffect(() => {
    setVisible(!!toast);
    if (!toast) return;
    const t = setTimeout(() => {
      setVisible(false);
      setToast?.("");
    }, duration);
    return () => clearTimeout(t);
  }, [toast, setToast, duration]);

  if (!toast || !visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-full bg-neutral-900 text-white px-4 py-2 shadow-xl border border-white/10 text-sm">
        {toast}
      </div>
    </div>
  );
}
