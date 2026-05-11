import {
  BarChart3,
  Eye,
  Link2,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import MenuItem from "./MenuItem";
import { useBaseUrl } from "@/hooks/useBaseUrl";
import type { LinkItem as LinkItemType } from "../type";
import Link from "next/link";

type LinkItemProps = {
  item: LinkItemType;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
  openMenu: string | null;
  setLinks: React.Dispatch<React.SetStateAction<LinkItemType[]>>;
  openEditModal: (link: LinkItemType) => Promise<void>;
  openDetail: (link: LinkItemType) => Promise<void>;
};

const LinkItem = ({
  item,
  setOpenMenu,
  openMenu,
  setLinks,
  openEditModal,
  openDetail,
}: LinkItemProps) => {
  const baseUrl = useBaseUrl();

  const handleClick = async (): Promise<void> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/links/${item.id}`,
      {
        method: "DELETE",
      },
    );

    if (!res) {
      throw new Error("Error pada saat fetch");
    }

    setLinks((prev) => prev.filter((p) => p.id !== item.id));
  };

  return (
    <div
      key={item.id}
      className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400">
              <Link2 size={18} />
            </div>

            <div className="min-w-0">
              <h3 className="font-medium truncate">{item.title}</h3>

              <p className="text-sm text-blue-400 truncate">
                {baseUrl}/r/{item.slug}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-400">
            <span>{item.clicks} clicks</span>
            <span>•</span>
            <span>Created {item.createdAt}</span>
          </div>
        </div>

        {/* Action Menu */}
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
          >
            <MoreHorizontal size={18} />
          </button>

          {openMenu === item.id && (
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-[#111111] shadow-2xl overflow-hidden z-10">
              <MenuItem
                icon={<Eye size={16} />}
                label="Detail"
                onClick={() => openDetail(item)}
              />
              <Link
                href={`/analytics/${item.id}`}
                prefetch={false}
                scroll={true}
                className="flex gap-x-2 px-4 hover:bg-white/5 transition py-3 text-sm"
              >
                <BarChart3 size={16} /> Analytics
              </Link>

              <MenuItem
                icon={<Pencil size={16} />}
                label="Update"
                onClick={() => openEditModal(item)}
              />

              <MenuItem
                icon={<Trash2 size={16} />}
                label="Delete"
                danger
                onClick={handleClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
