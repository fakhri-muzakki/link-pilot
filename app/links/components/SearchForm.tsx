import type { Session } from "@supabase/supabase-js";
import { Search } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import type { LinkItem as LinkItemType } from "../type";

interface SearchFormProps {
  session: Session | null;
  setLinks: React.Dispatch<React.SetStateAction<LinkItemType[]>>;
}

const SearchForm = memo(function SearchForm({
  session,
  setLinks,
}: SearchFormProps) {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(
    async (value: string) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/links/search?search=${value}`,
          {
            headers: {
              Authorization: `Bearer ${session?.access_token}`,
            },
          },
        );

        const data = await res.json();

        setLinks(data.data);
      } catch (error) {
        console.error("Search failed:", error);
      }
    },
    [session?.access_token, setLinks],
  );

  useEffect(() => {
    if (search === "") return;

    const delayDebounce = setTimeout(() => {
      handleSearch(search);
    }, 400); // 400ms delay

    return () => clearTimeout(delayDebounce);
  }, [search, handleSearch]);

  return (
    <div className="relative w-full md:w-80">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search links..."
        className="w-full rounded-xl bg-[#111111] border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-blue-500 transition"
      />
    </div>
  );
});

export default SearchForm;
