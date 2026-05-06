# 🚀 Link Shortener & QR Generator (Frontend)

Aplikasi web modern untuk membuat short link dan QR code secara praktis. Dibangun dengan **Next.js App Router** dan fokus pada pengalaman pengguna yang cepat, minimal, dan responsif.

---

## ✨ Features

- 🔗 Short URL management
- 🎯 Custom alias
- 📊 Analytics dashboard (charts)
- 📷 QR code preview & download
- 🔍 Search & filter links
- ⚡ Optimistic UI (instant update)
- 🔐 Authentication via Supabase

---

## 🧱 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS + custom dark SaaS theme
- **Form Handling**: React Hook Form + Valibot
- **State**: React (local state)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Auth**: Supabase
- **Notifications**: React Hot Toast

---

## 📁 Project Structure

```
app/
 ├── (auth)/
 ├── links/
 │   ├── page.tsx
 │   ├── components/
 │   ├── schema/
 │   └── type/
 ├── analytics/
 ├── components/
 └── lib/
```

---

## ⚙️ Environment Variables

Buat file `.env.local`:

```
NEXT_PUBLIC_API_URL=http://192.168.18.11:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NODE_ENV="development"
DATABASE_URL=""

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🔗 API Integration

Frontend terhubung ke backend melalui REST API:

- `GET /api/links`
- `POST /api/links`
- `PUT /api/links/:id`
- `GET /api/links/search`
- `GET /api/analytics/:id`

---

## 🎨 UI Design

- Dark SaaS Minimal theme
- Fokus pada readability & spacing
- Micro interaction (hover, transition)
- Modal-based interaction (create/edit/detail)

---

## 📸 Preview

Tambahkan screenshot di folder `/public`:

```
/public
 ├── preview.png
 ├── links.png
 ├── analytics.png
 ├── modal.png
```

---

## 🚀 Deployment

Deploy dengan:

- Vercel (recommended)

---

## 💡 Notes

Project ini dibuat untuk:

- Portfolio backend & frontend integration
- Latihan real-world system (bukan sekadar CRUD)
- Simulasi produk seperti Bitly

---
