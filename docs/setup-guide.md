# WAYPOINT Setup Guide

This guide walks you through setting up and running the WAYPOINT workspace locally.

---

## 1. Prerequisites

- **Node.js**: v18.0.0 or later (v20+ or v24+ recommended)
- **npm**: v9.0.0 or later
- **Git**

---

## 2. Quick Start

### Step 1: Install Dependencies

Run the install command inside both `frontend` and `backend` directories:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

---

### Step 2: Configure Environment Variables

#### Frontend Environment (`frontend/.env`)
Copy the example environment file:

```bash
cd frontend
cp .env.example .env
```

Contents of `frontend/.env`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_API_URL=http://localhost:5000/api
```

#### Backend Environment (`backend/.env`)
Copy the example environment file:

```bash
cd backend
cp .env.example .env
```

Contents of `backend/.env`:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

> **Note:** The application shell runs out-of-the-box in local development mode even before you plug in live Supabase credentials.

---

### Step 3: Run the Development Servers

Open two terminal windows:

#### Terminal 1 — Frontend:
```bash
cd frontend
npm run dev
```
The application shell will be accessible at: **`http://localhost:5173`**

#### Terminal 2 — Backend:
```bash
cd backend
npm run dev
```
The API server will be accessible at: **`http://localhost:5000`**  
Health Check endpoint: **`http://localhost:5000/api/health`**

---

## 3. Production Build Validation

To verify production builds:

```bash
# Build frontend
cd frontend
npm run build

# Build backend
cd ../backend
npm run build
```
