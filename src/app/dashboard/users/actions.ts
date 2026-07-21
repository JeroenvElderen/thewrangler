"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { dashboardRoles, normalizeRole, type DashboardRole } from "@/lib/supabase/users";

export type UserActionState = {
  ok?: boolean;
  message: string;
  setupLink?: string;
};

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function randomTemporaryPassword() {
  return `${crypto.randomUUID()}Aa1!`;
}

function roleValue(formData: FormData): DashboardRole {
  return normalizeRole(stringValue(formData, "role"));
}

function statusValue(formData: FormData) {
  return stringValue(formData, "status") === "Inactive" ? "Inactive" : "Active";
}

export async function createDashboardUser(
  _previousState: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  const name = stringValue(formData, "name");
  const email = stringValue(formData, "email").toLowerCase();
  const role = roleValue(formData);
  const status = statusValue(formData);

  if (!name || !email) {
    return { ok: false, message: "Name and email are required." };
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, message: "Supabase admin environment variables are not configured." };
  }

  const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
    email,
    password: randomTemporaryPassword(),
    email_confirm: true,
    user_metadata: { full_name: name, role },
    app_metadata: { role },
  });

  if (authError || !authUser.user) {
    return { ok: false, message: `Failed to create auth user: ${authError?.message ?? "No user returned."}` };
  }

  const { error: profileError } = await supabase.from("users").upsert({
    id: authUser.user.id,
    full_name: name,
    name,
    email,
    role,
    status,
    is_active: status === "Active",
    created_at: new Date().toISOString(),
  });

  if (profileError) {
    return { ok: false, message: `Auth user was created, but profile save failed: ${profileError.message}` };
  }

  const redirectTo = process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard` : undefined;
  const { data: recoveryData, error: recoveryError } = await supabase.auth.admin.generateLink({
    type: "recovery",
    email,
    options: redirectTo ? { redirectTo } : undefined,
  });

  revalidatePath("/dashboard/users");

  if (recoveryError) {
    return { ok: true, message: `${name} was created and email-confirmed. Ask them to use password reset to set a password.` };
  }

  return {
    ok: true,
    message: `${name} was created, email-confirmed, and can set a password with the setup link.`,
    setupLink: recoveryData.properties?.action_link,
  };
}

export async function updateDashboardUser(
  _previousState: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  const id = stringValue(formData, "id");
  const name = stringValue(formData, "name");
  const role = roleValue(formData);
  const status = statusValue(formData);

  if (!id || !name) {
    return { ok: false, message: "Select a user and provide a name before updating." };
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, message: "Supabase admin environment variables are not configured." };
  }

  const { error: authError } = await supabase.auth.admin.updateUserById(id, {
    user_metadata: { full_name: name, role },
    app_metadata: { role },
    ban_duration: status === "Inactive" ? "876000h" : "none",
  });

  if (authError) {
    return { ok: false, message: `Failed to update auth user: ${authError.message}` };
  }

  const { error } = await supabase
    .from("users")
    .update({ full_name: name, name, role, status, is_active: status === "Active" })
    .eq("id", id);

  if (error) {
    return { ok: false, message: `Failed to update user profile: ${error.message}` };
  }

  revalidatePath("/dashboard/users");
  return { ok: true, message: `${name} updated as ${role}.` };
}

export async function deleteDashboardUser(id: string): Promise<UserActionState> {
  if (!id) {
    return { ok: false, message: "Select a user before deleting." };
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, message: "Supabase admin environment variables are not configured." };
  }

  const { error: profileError } = await supabase.from("users").delete().eq("id", id);

  if (profileError) {
    return { ok: false, message: `Failed to delete user profile: ${profileError.message}` };
  }

  const { error: authError } = await supabase.auth.admin.deleteUser(id);

  if (authError) {
    return { ok: false, message: `Profile deleted, but auth user deletion failed: ${authError.message}` };
  }

  revalidatePath("/dashboard/users");
  return { ok: true, message: "User deleted." };
}

export { dashboardRoles };