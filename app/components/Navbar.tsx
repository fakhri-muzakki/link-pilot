"use client";

import { useState } from "react";
import { Menu, X, Plus, LogOut, Link2 } from "lucide-react";
import LogoutButton from "../links/components/LogoutButton";

export default function Navbar({
  openCreateModal,
}: {
  openCreateModal?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-semibold tracking-tight">
            LinkPilot<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {openCreateModal && (
              <button
                onClick={openCreateModal}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium transition"
              >
                <Plus size={16} />
                New Link
              </button>
            )}

            <LogoutButton />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl absolute w-full">
            <div className="px-6 py-4 space-y-3">
              <a
                href="/links"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <Link2 size={16} />
                Links
              </a>
              {openCreateModal && (
                <button
                  onClick={() => {
                    openCreateModal();
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                >
                  <Plus size={16} />
                  New Link
                </button>
              )}

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
