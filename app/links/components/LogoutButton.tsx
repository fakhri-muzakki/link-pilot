import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const handleClick = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();

    redirect("/login");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm transition"
    >
      <LogOut size={16} />
      Logout
    </button>
  );
};

export default LogoutButton;
