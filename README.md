# Modern SaaS Dashboard

A clean, modern SaaS dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features a responsive sidebar navigation and topbar with excellent visual hierarchy and spacing.

## Features

- **Modern UI/UX**: Clean design with proper spacing and visual hierarchy
- **Responsive Layout**: Fixed sidebar with topbar navigation
- **Multiple Pages**: Dashboard, Analytics, Users, Settings, and more
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS with custom design tokens
- **Icon System**: Using Lucide React for beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- pnpm package manager

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The dashboard will automatically redirect to `/dashboard` route.

## Project Structure

```
dashboard/
├── app/
│   ├── dashboard/          # Dashboard routes
│   │   ├── analytics/      # Analytics page
│   │   ├── users/          # Users management
│   │   ├── settings/       # Settings page
│   │   ├── calendar/       # Calendar page
│   │   ├── messages/       # Messages page
│   │   ├── reports/        # Reports page
│   │   ├── notifications/  # Notifications page
│   │   ├── layout.tsx      # Dashboard layout with sidebar & topbar
│   │   └── page.tsx        # Main dashboard page
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (redirects to dashboard)
├── components/
│   ├── Sidebar.tsx         # Sidebar navigation component
│   └── Topbar.tsx          # Top navigation bar component
└── public/                 # Static assets

```

## Layout Components

### Sidebar (`components/Sidebar.tsx`)
- Fixed left sidebar with logo
- Navigation menu with active state
- User profile section at bottom
- Responsive icons from Lucide React

### Topbar (`components/Topbar.tsx`)
- Search bar with keyboard shortcut indicator
- Notification bell with live indicator
- Settings button
- User avatar with dropdown

### Dashboard Layout (`app/dashboard/layout.tsx`)
- Combines Sidebar and Topbar
- Main content area with proper spacing
- Maximum width container for readability

## Customization

### Colors
Edit CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Navigation
Add or modify navigation items in `components/Sidebar.tsx`:

```typescript
const navItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  // Add your items here
];
```

## Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library
- **React 18** - Latest React features

## Design Principles

1. **Clean Spacing**: Consistent padding and margins using Tailwind's spacing scale
2. **Visual Hierarchy**: Clear distinction between different UI elements
3. **Color System**: Semantic color tokens for maintainability
4. **Responsive Design**: Mobile-friendly layout (sidebar can be made collapsible)
5. **Accessibility**: Proper semantic HTML and ARIA labels

## License

MIT
