import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

const getToken = async () => {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
};

export default getToken;
