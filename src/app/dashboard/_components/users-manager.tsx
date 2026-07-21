"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { Edit3, Plus, Trash2, X } from "lucide-react";

import { getSupabaseClient } from "@/lib/supabase/cars";
import { getDashboardUsers, type DashboardUser } from "@/lib/supabase/users";
import styles from "../dashboard.module.css";
import {
  createDashboardUser,
  dashboardRoles,
  deleteDashboardUser,
  updateDashboardUser,
  type UserActionState,
} from "../users/actions";

type UsersManagerProps = {
  users: DashboardUser[];
};

const initialState: UserActionState = { message: "" };

const roleDescriptions: Record<string, string> = {
  Owner: "Full access, including assigning owner/admin roles and technical settings.",
  Administrator: "Can manage all dashboard content, inventory, media, users, and insights; no code or deployment access.",
  Editor: "Can manage inventory, page text, and media content.",
  Viewer: "Read-only dashboard visibility.",
};

export default function UsersManager({ users }: UsersManagerProps) {
  const [liveUsers, setLiveUsers] = useState(users);
  const [isRealtimeConnected, setIsRealtimeConnected] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<DashboardUser | null>(null);
  const [deleteState, setDeleteState] = useState<UserActionState>(initialState);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const [isDeleting, startDeleteTransition] = useTransition();
  const [createState, createFormAction, isCreating] = useActionState(createDashboardUser, initialState);
  const [updateState, updateFormAction, isUpdating] = useActionState(updateDashboardUser, initialState);
  const state = editingUser ? updateState : createState;
  const formAction = editingUser ? updateFormAction : createFormAction;
  const isPending = editingUser ? isUpdating : isCreating;

  function openCreateForm() {
    setEditingUser(null);
    setDeleteState(initialState);
    setIsFormOpen((current) => !current || editingUser !== null);
  }

  function openEditForm(user: DashboardUser) {
    setEditingUser(user);
    setDeleteState(initialState);
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
    setEditingUser(null);
  }

  function handleDelete(user: DashboardUser) {
    const confirmed = window.confirm(`Delete ${user.name}? This removes their dashboard profile and login.`);

    if (!confirmed) {
      return;
    }

    setDeletingUserId(user.id);
    setDeleteState(initialState);

    startDeleteTransition(async () => {
      const result = await deleteDashboardUser(user.id);
      setDeleteState(result);
      setDeletingUserId(null);

      if (result.ok) {
        setLiveUsers((currentUsers) => currentUsers.filter((currentUser) => currentUser.id !== user.id));

        if (editingUser?.id === user.id) {
          closeForm();
        }
      }
    });
  }

  useEffect(() => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return;
    }

    const refreshUsers = async () => {
      const nextUsers = await getDashboardUsers();
      setLiveUsers(nextUsers);
    };

    const channel = supabase
      .channel("dashboard-users-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "users" }, refreshUsers)
      .subscribe((status) => {
        setIsRealtimeConnected(status === "SUBSCRIBED");
      });

    return () => {
      setIsRealtimeConnected(false);
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <>
      <div className={styles.heroPanel}>
        <div>
          <p className={styles.eyebrow}>Team</p>
          <h1>Users</h1>
          <p>Manage realtime users, password setup, and owner-assigned dashboard roles.</p>
        </div>
        <button className={styles.primary} type="button" onClick={isFormOpen ? closeForm : openCreateForm}>
          {isFormOpen ? <X size={15} /> : <Plus size={15} />}
          {isFormOpen ? "Close Form" : "Add User"}
        </button>
      </div>

      {isFormOpen ? (
        <article className={styles.editorCard}>
          <div className={styles.cardHeader}>
            <div>
              <h2>{editingUser ? "Edit user" : "Create user"}</h2>
              <p className={styles.formHint}>
                New users are created as email-confirmed Supabase Auth users and receive a setup link to create their own password.
              </p>
            </div>
            <span className={isRealtimeConnected ? styles.liveBadge : styles.offlineBadge}>
              {isRealtimeConnected ? "Live data" : "Realtime connecting"}
            </span>
          </div>
          <form action={formAction} className={styles.userForm} key={editingUser?.id ?? "new-user"}>
            {editingUser ? <input name="id" type="hidden" value={editingUser.id} /> : null}
            <label>
              Name
              <input name="name" required placeholder="Jane Smith" defaultValue={editingUser?.name} />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="jane@thewrangler.com" defaultValue={editingUser?.email} disabled={Boolean(editingUser)} />
            </label>
            <label>
              Role
              <select name="role" defaultValue={editingUser?.role ?? "Viewer"}>
                {dashboardRoles.map((role) => <option key={role} value={role}>{role}</option>)}
              </select>
            </label>
            <label>
              Status
              <select name="status" defaultValue={editingUser?.status ?? "Active"}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
            <div className={styles.roleGuide}>
              {dashboardRoles.map((role) => <p key={role}><b>{role}</b>{roleDescriptions[role]}</p>)}
            </div>
            <div className={styles.formActions}>
              <button className={styles.primary} type="submit" disabled={isPending}>
                {isPending ? "Saving..." : editingUser ? "Update user" : "Create user"}
              </button>
              {state.message ? <p className={state.ok ? styles.successMessage : styles.errorMessage}>{state.message}</p> : null}
            </div>
            {state.setupLink ? <p className={styles.setupLink}>Password setup link: <a href={state.setupLink}>{state.setupLink}</a></p> : null}
          </form>
        </article>
      ) : null}

      {deleteState.message ? <p className={deleteState.ok ? styles.successMessage : styles.errorMessage}>{deleteState.message}</p> : null}

      <article className={styles.tableCard}>
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Last sign in</th><th>Actions</th></tr></thead>
          <tbody>
            {liveUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><span className={user.status === "Inactive" ? styles.draft : styles.published}>{user.status}</span></td>
                <td>{user.lastSignInAt ? new Date(user.lastSignInAt).toLocaleDateString() : "—"}</td>
                <td>
                  <div className={styles.rowActions}>
                    <button type="button" onClick={() => openEditForm(user)}><Edit3 size={14} /><span>Edit</span></button>
                    <button className={styles.deleteAction} type="button" disabled={isDeleting && deletingUserId === user.id} onClick={() => handleDelete(user)}>
                      <Trash2 size={14} /><span>{isDeleting && deletingUserId === user.id ? "Deleting" : "Delete"}</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}