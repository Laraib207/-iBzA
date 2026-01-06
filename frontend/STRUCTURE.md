# Frontend Project Structure Tree

```
frontend/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── middleware.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── TODO.md
├── .env.local                  # Environment variables
│
├── app/
│   ├── layout.tsx              # Global layout (fonts, bg, providers)
│   ├── page.tsx                # Home page (Landing)
│   ├── favicon.ico
│   │
│   ├── auth/
│   │   ├── layout.jsx          # Auth background / glass wrapper
│   │   │
│   │   ├── login/
│   │   │   └── page.jsx        # Login UI + API call
│   │   │
│   │   └── signup/
│   │       └── page.jsx        # Signup UI + API call
│   │
│   ├── dashboard/              # Protected area (future)
│   │   └── page.tsx
│   │
│   └── components/             # Reusable UI components
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Button.jsx          # (future)
│       └── Input.jsx           # (future)
│
├── lib/
│   └── api.js                  # Backend API bridge
│
├── src/
│   └── lib/
│       └── api.js              # Duplicate (to be consolidated)
│
├── styles/
│   └── globals.css             # Global styles
│
├── public/
│   ├── logo.svg                # (future)
│   ├── bg/                     # (future)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── tailwind.config.js          # Tailwind configuration
```

## Directory Descriptions

| Folder/File | Purpose |
|-------------|---------|
| `app/` | Next.js App Router pages and layouts |
| `app/layout.tsx` | Root layout with global providers |
| `app/page.tsx` | Landing/Home page |
| `app/auth/` | Authentication pages (login, signup) |
| `app/auth/layout.jsx` | Auth-specific background styling |
| `app/dashboard/` | Protected dashboard area |
| `app/components/` | Reusable React components |
| `lib/` | Utility functions and API handlers |
| `styles/` | Global CSS styles |
| `public/` | Static assets (images, icons) |
| `middleware.ts` | Route protection and auth redirects |

## Key Files

- `lib/api.js` - Centralized API functions for backend communication
- `.env.local` - Environment variables (NEXT_PUBLIC_API_URL)
- `tailwind.config.js` - Tailwind CSS customization

