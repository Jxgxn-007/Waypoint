# WAYPOINT Architecture Overview

WAYPOINT is a professional team project-management workspace tailored for small software development teams and client agencies. It provides a centralized command center for tracking client engagements, sprints, tasks, technical issues, team availability, and real-time project progress.

---

## 1. System Overview

```
┌──────────────────────────────────────────────────────────┐
│                   WAYPOINT Client App                    │
│            (React + TypeScript + Vite + Tailwind)        │
└────────────┬─────────────────────────────┬───────────────┘
             │                             │
             │ Direct Realtime / Auth      │ REST API
             ▼                             ▼
┌───────────────────────────┐  ┌───────────────────────────┐
│     Supabase Platform     │  │   WAYPOINT Backend API    │
│  - PostgreSQL Database    │  │  (Node.js + Express + TS) │
│  - Auth & Session Tokens  │  │  - Business logic / triage│
│  - Realtime Subscriptions │  │  - Webhook integrations   │
│  - Storage Buckets        │  │  - Supabase Admin SDK     │
└───────────────────────────┘  └─────────────┬─────────────┘
                                             │
                                             │ Service Role
                                             ▼
                               ┌───────────────────────────┐
                               │   PostgreSQL (Supabase)   │
                               └───────────────────────────┘
```

---

## 2. Frontend Architecture

The frontend is structured with feature-based scalability, modular UI primitives, and strict TypeScript boundaries.

```
frontend/src/
├── components/          # Reusable design system primitives
│   ├── common/          # Page headers, state placeholders, shell elements
│   └── ui/              # Tailwind + Radix-style UI tokens (Button, Card, Badge, Input, Avatar)
├── features/            # Domain-specific feature modules
├── layouts/             # App shell layout (Sidebar, Navbar, AppLayout container)
├── pages/               # Route entry points (Dashboard, Projects, Tasks, etc.)
├── routes/              # Centralized route definitions and navigation metadata
├── services/            # API clients and HTTP adapters
├── hooks/               # Custom application hooks (e.g., useSidebar)
├── lib/                 # Utility functions (cn helper, Supabase client)
└── types/               # TypeScript interfaces and domain models
```

### Key UI Features
- **Modern SaaS Aesthetics:** Clean, light palette with subtle borders, elevation tokens, and Inter typography.
- **Responsive Navigation:** Fixed desktop sidebar with collapsible mobile drawer.
- **Top Command Bar:** Dynamic breadcrumbs, global search placeholder, and connection status indicators.
- **Routing:** React Router v7 with modular placeholder views ready for subsequent feature implementation.

---

## 3. Backend Architecture

The backend follows an MVC-inspired layered architecture written in strict TypeScript.

```
backend/src/
├── config/              # Environment variable parsing and Supabase configuration
├── controllers/         # Request handling and response serialization
├── middleware/          # Request logging, 404 handler, and centralized error catching
├── routes/              # API route definitions and router mounting
├── services/            # Core business logic and health checks
├── utils/               # Reusable utilities (logging, formatting)
└── types/               # Type definitions and API contracts
```

### Endpoints Foundation
- `GET /` — API root status and version information.
- `GET /api/health` — System status, uptime, environment, and Supabase readiness.

---

## 4. Database & Authentication (Supabase)

Supabase handles primary relational data persistence, authentication, and realtime broadcasts:
- **PostgreSQL:** Multi-tenant project workspace data, tasks, tickets, and team rosters.
- **Authentication:** JWT-based identity management supporting email/password and OAuth.
- **Realtime:** Postgres Changes broadcasted directly to the frontend for real-time task movement and notifications.
- **Storage:** Secure file attachments for client deliverables and ticket logs.
