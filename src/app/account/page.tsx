import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Account</h1>
      <p>Welcome back, {data.user.email}</p>
    </div>
  );
}
