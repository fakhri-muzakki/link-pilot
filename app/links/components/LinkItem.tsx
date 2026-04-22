import {
  BarChart3,
  Eye,
  Link2,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import MenuItem from "./MenuItem";
import type { LinkItem } from "../type";

type LinkItemProps = {
  item: LinkItem;
  setOpenMenu: React.Dispatch<React.SetStateAction<number | null>>;
  openMenu: number | null;
  openEditModal: (link: LinkItem) => Promise<void>;
  openDetail: (link: LinkItem) => Promise<void>;
};

const LinkItem = ({
  item,
  setOpenMenu,
  openMenu,
  openEditModal,
  openDetail,
}: LinkItemProps) => {
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
                LinkPilot.app/r/{item.slug}
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
              <MenuItem icon={<BarChart3 size={16} />} label="Analytics" />

              <MenuItem
                icon={<Pencil size={16} />}
                label="Update"
                onClick={() => openEditModal(item)}
              />

              <MenuItem icon={<Trash2 size={16} />} label="Delete" danger />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
