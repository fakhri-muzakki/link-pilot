"use client";

import { useState } from "react";
import { Plus, Search, LogOut } from "lucide-react";

import LinkFormModal from "./components/LinkFormModal";
import type { LinkItem as LinkItemType } from "./type";
import type { LinkFormData } from "./schema";
import LinkItem from "./components/LinkItem";
import LinkDetailModal from "./components/LinkDetailModal";

interface LinksPageProps {
  links: LinkItemType[];
  statsSection: React.ReactNode;
}

export default function LinksPage({ links, statsSection }: LinksPageProps) {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [selectedLink, setSelectedLink] = useState<LinkItemType | null>(null);

  const [detailOpen, setDetailOpen] = useState(false);

  const openDetail = async (link: LinkItemType): Promise<void> => {
    setSelectedLink(link);
    setDetailOpen(true);
  };

  function closeDetail() {
    setDetailOpen(false);
    setSelectedLink(null);
  }
  function openCreateModal() {
    setModalMode("create");
    setSelectedLink(null);
    setModalOpen(true);
  }

  const openEditModal = async (link: LinkItemType): Promise<void> => {
    setModalMode("edit");
    setSelectedLink(link);
    setModalOpen(true);
    setOpenMenu(null);
  };

  const handleSubmit = async (values: LinkFormData): Promise<void> => {
    console.log("submit:", values);

    // create mode
    if (modalMode === "create") {
      // call POST /links
    }

    // edit mode
    if (modalMode === "edit") {
      // call PATCH /links/:id
    }

    setModalOpen(false);
  };

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Navbar */}
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="text-xl font-semibold tracking-tight">
              LinkPilot<span className="text-blue-500">.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={openCreateModal}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium transition"
              >
                <Plus size={16} />
                New Link
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm transition">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-semibold">Your Links</h1>
              <p className="text-gray-400 mt-2">
                Manage short URLs, monitor performance, and organize campaigns.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                placeholder="Search links..."
                className="w-full rounded-xl bg-[#111111] border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          {statsSection}

          {/* List */}
          <div className="space-y-4">
            {links.map((item) => (
              <LinkItem
                key={item.id}
                item={item}
                openEditModal={openEditModal}
                openMenu={openMenu}
                openDetail={openDetail}
                setOpenMenu={setOpenMenu}
              />
            ))}
          </div>

          {modalOpen && (
            <LinkFormModal
              open={modalOpen}
              mode={modalMode}
              onClose={() => setModalOpen(false)}
              onSubmit={handleSubmit}
              initialData={
                selectedLink
                  ? {
                      title: selectedLink.title,
                      originalUrl: selectedLink.originalUrl,
                      customAlias: selectedLink.slug,
                    }
                  : undefined
              }
            />
          )}
        </section>
      </main>

      <LinkDetailModal
        onClose={closeDetail}
        open={detailOpen}
        data={selectedLink ? selectedLink : undefined}
      />
    </>
  );
}
