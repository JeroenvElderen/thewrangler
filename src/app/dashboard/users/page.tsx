import { getDashboardUsers } from "@/lib/supabase/users";
import UsersManager from "../_components/users-manager";

export default async function UsersPage() {
  const users = await getDashboardUsers();

  return <UsersManager users={users} />;
}
