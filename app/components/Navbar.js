// src/components/Navbar.jsx
"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-3xl border-2 border-slate-900 bg-slate-50/90 dark:bg-slate-900/90 dark:border-slate-700 backdrop-blur-xl shadow-lg transition-colors duration-500">
      <div className="flex items-center justify-between px-6 py-3">
        <a
          href="/"
          className="text-xl font-black tracking-tighter text-slate-950 dark:text-white"
        >
          KURT IMPERIAL
        </a>

        {/* Desktop links */}
        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors md:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 stroke-[3]" />
          ) : (
            <Bars3Icon className="h-6 w-6 stroke-[3]" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t-2 border-slate-900 dark:border-slate-700 px-6 py-4 md:hidden">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-black text-slate-800 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
