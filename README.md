# 🌿 Fresh Harvests Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Fresh Harvests is a modern, responsive grocery e-commerce frontend built with **Next.js 15**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. It provides a seamless shopping experience for fresh fruits and vegetables, featuring dynamic product pages, OAuth authentication, and SEO optimization.

---

#### Live url: https://fresh-harvests-frontend.vercel.app/

---

## 📌 Features

- Dynamic product pages with detailed information and related products
- Responsive sidebar navigation with submenus
- User authentication via Google and Facebook OAuth
- Redux Toolkit & RTK Query for global state and API handling
- Cookies-based session persistence
- SEO-ready metadata for product pages and home page
- Integration with Shadcn UI and React Icons for accessible and modern UI components

---

## 🛠️ Technologies Used

- **Frontend:** Next.js 15 (App Router)
- **State Management:** Redux Toolkit, RTK Query
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Authentication:** NextAuth.js (Google/Facebook/Github)
- **UI Components:** Shadcn UI, React Icons
- **Utilities:** js-cookie, clsx
- **TypeScript** for type safety

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mdnuruzzamannirob/fresh-harvests-frontend.git
cd fresh-harvests-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000
in your browser.

## 🌐 Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
NEXT_PUBLIC_BASE_URL=https://api-fresh-harvest.code-commando.com
NEXT_PUBLIC_API_URL=https://api-fresh-harvest.code-commando.com/api/v1

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=super-secret-key

GOOGLE_CLIENT_ID=1092904804932-b7l61d1rrv5q1fsuisj3psnud8nvirc2.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

GITHUB_CLIENT_ID=Ov23likkkdvtVbYIYqjp
GITHUB_CLIENT_SECRET=308e1b01e714e4b63f8ade32dc694881ca20001d

FACEBOOK_CLIENT_ID=facebook-client-id
FACEBOOK_CLIENT_SECRET=facebook-client-secret
```

## 📁 Project Structure

```
/src
 /app
   /products/[id]     # Dynamic product pages
   layout.tsx         # Main layout with sidebar
   page.ts            # Home page
 /components
   /home              # Home section
   /products          # ProductCard & ProductDetails
   /ui                # Reusable UI components (Drawer, Dialog, Button)
 /store
   /features/auth     # Redux auth slice & types
 /hooks               # Reusable hooks
 /lib                 # API calls (getProductsServer, getProductServer)
 /constants           # Sidebar menu items
 /types               # TypeScript interfaces
 /styles              # Global CSS
```

## 🔑 Authentication Flow

- **OAuth Providers:** Google, Facebook
- **Redux:** Stores user data and token
- **Cookies:** Token persisted in cookies for session continuity
- **Sidebar:** Shows user info (name, email, profile) when logged in and logout button

---

## ⚙️ Redux Integration

- **authApi:** RTK Query slice for login, registration, and profile fetching
- **authSlice:** Stores authentication state (`token` & `user`)
- **Logout:** Clears Redux state and cookies

---

## 📄 SEO

- Dynamic metadata for each product page
- Open Graph and Twitter Card tags for social media sharing
- SEO-ready home page metadata

---

## 🧪 Development Tools

- ESLint & Prettier for code quality
- TypeScript for type safety
- PostCSS & Tailwind CSS for styling
- React Icons and Shadcn UI for accessible components

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
