# Supabase Integration Guidelines

WAYPOINT uses Supabase as its primary Backend-as-a-Service (BaaS) and PostgreSQL database.

---

## 1. Creating a Supabase Project

1. Log into your [Supabase Dashboard](https://app.supabase.com).
2. Click **New Project** and name it `waypoint-workspace`.
3. Set a strong database password and select your preferred region.
4. Once provisioned, navigate to **Project Settings > API**.

---

## 2. API Keys & Environment Variables

Retrieve the following credentials from your Supabase Dashboard:

| Parameter | Location in Supabase | Used In |
|---|---|---|
| Project URL | Project Settings > API > Project URL | `frontend/.env` & `backend/.env` |
| Anon / Public Key | Project Settings > API > Project API keys (`anon` / `public`) | `frontend/.env` & `backend/.env` |
| Service Role Key | Project Settings > API > Project API keys (`service_role` / secret) | `backend/.env` ONLY (never expose on frontend) |

---

## 3. Scope for Upcoming Implementation Phases

In the next steps after this foundation:
1. **Database Schema:** Tables for `workspaces`, `projects`, `tasks`, `tickets`, `team_members`, `discussions`, and `meetings`.
2. **Row Level Security (RLS):** Policies enforcing workspace-level isolation per team member.
3. **Authentication:** Supabase Auth for login, session restoration, and password management.
4. **Realtime Subscriptions:** Listening to `postgres_changes` on tasks and notifications.
5. **Storage:** Buckets for project file attachments and avatars.
