import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function RootPage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // If user is authenticated, send them to dashboard
  if (user && !error) {
    redirect("/dashboard");
  }

  // If no user, send to login
  redirect("/login");
}
