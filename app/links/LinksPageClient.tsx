"use client";

import { useEffect, useState } from "react";

import LinkFormModal from "./components/LinkFormModal";
import type { LinkItem as LinkItemType } from "./type";
import type { LinkFormData } from "./schema";
import LinkItem from "./components/LinkItem";
import LinkDetailModal from "./components/LinkDetailModal";
import { createClient } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";
import SearchForm from "./components/SearchForm";
import Navbar from "../components/Navbar";

interface LinksPageProps {
  links: LinkItemType[];
  statsSection: React.ReactNode;
}

export default function LinksPage({
  links: initialData,
  statsSection,
}: LinksPageProps) {
  const [links, setLinks] = useState<LinkItemType[]>(initialData);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const supabase = createClient();

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        throw new Error("");
      }

      setSession(session);
    };

    getSession();
  }, []);

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
    if (!session) return;
    // create mode
    if (modalMode === "create") {
      // call POST /links
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        throw new Error("Session is not found");
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/links`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          original_url: values.originalUrl,
          custom_alias: values.customAlias || "",
        }),
      });

      if (!res) {
        throw new Error("Error pada saat fetch");
      }

      const json = await res.json();

      const date = new Date(json.data.createdAt);

      const formatted = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      setLinks((prev) => [{ ...json.data, createdAt: formatted }, , ...prev]);
    }

    // edit mode
    const slug = values.customAlias
      ? values.customAlias.replace(/\s+/g, "-")
      : undefined;

    if (modalMode === "edit" && selectedLink) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/links/${selectedLink.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: values.title,
            original_url: values.originalUrl,
            custom_alias: slug || "",
          }),
        },
      );

      if (!res) {
        throw new Error("Error pada saat fetch");
      }

      setLinks((prev) =>
        prev.map((p) => {
          return p.id == selectedLink.id
            ? { ...p, ...values, slug: slug ?? p.slug }
            : p;
        }),
      );
    }

    setModalOpen(false);
  };

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Navbar */}
        <Navbar openCreateModal={openCreateModal} />

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

            <SearchForm session={session} setLinks={setLinks} />
          </div>

          {statsSection}

          {/* List */}
          <div className="space-y-4">
            {links.map((item) => (
              <LinkItem
                key={item.id}
                item={item}
                setLinks={setLinks}
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
