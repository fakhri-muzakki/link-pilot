import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const CancelButton = async () => {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      {session && (
        <Link
          href={"/links"}
          // onClick={() => history.back()}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-medium transition w-full sm:w-auto"
        >
          Cancel
        </Link>
      )}
    </>
  );
};

export default CancelButton;
