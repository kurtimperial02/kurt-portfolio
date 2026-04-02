"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold text-cyan-400">
          Kurt Imperial
        </a>

        {/* Desktop links */}
        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 md:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-3 md:hidden">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
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
