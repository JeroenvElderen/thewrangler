import { users as fallbackUsers } from "@/app/dashboard/_components/data";
import { getSupabaseClient } from "./cars";

export const dashboardRoles = ["Owner", "Administrator", "Editor", "Viewer"] as const;
export type DashboardRole = (typeof dashboardRoles)[number];

export type DashboardUser = {
  id: string;
  name: string;
  email: string;
  role: DashboardRole;
  status: "Active" | "Inactive";
  lastSignInAt?: string | null;
  createdAt?: string | null;
};

type UserRow = {
  id?: string | number;
  full_name?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  status?: string | null;
  is_active?: boolean | null;
  last_sign_in_at?: string | null;
  created_at?: string | null;
};

export const fallbackDashboardUsers: DashboardUser[] = fallbackUsers.map((user) => ({
  id: user[1],
  name: user[0],
  email: user[1],
  role: normalizeRole(user[2]),
  status: user[3] === "Inactive" ? "Inactive" : "Active",
}));

export function normalizeRole(role?: string | null): DashboardRole {
  if (role && dashboardRoles.includes(role as DashboardRole)) {
    return role as DashboardRole;
  }

  return "Viewer";
}

export function mapUser(row: UserRow): DashboardUser {
  const email = row.email ?? "unknown@thewrangler.com";

  return {
    id: String(row.id ?? email),
    name: row.full_name ?? row.name ?? email.split("@")[0] ?? "Unknown user",
    email,
    role: normalizeRole(row.role),
    status: row.status === "Inactive" || row.is_active === false ? "Inactive" : "Active",
    lastSignInAt: row.last_sign_in_at,
    createdAt: row.created_at,
  };
}

export async function getDashboardUsers() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return fallbackDashboardUsers;
  }

  const { data, error } = await supabase
    .from("users")
    .select("id, full_name, name, email, role, status, is_active, last_sign_in_at, created_at")
    .order("full_name", { ascending: true });

  if (error || !data?.length) {
    return fallbackDashboardUsers;
  }

  return (data as UserRow[]).map(mapUser);
}