# LexHUB Frontend

A modern React application built with TypeScript, Vite, and Tailwind CSS.

## Tech Stack

### Frontend Framework & Language
- **React 18.3.1** - Modern React library for building user interfaces
- **TypeScript 5.5.3** - Adds static type checking to JavaScript
- **React Router DOM 7.7.1** - Client-side routing for single-page applications

### Build Tool & Development Environment
- **Vite 5.4.2** - Fast build tool and development server
- **@vitejs/plugin-react** - Vite plugin for React support

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS post-processor (used by Tailwind)
- **Autoprefixer 10.4.18** - Automatically adds vendor prefixes to CSS
- **Lucide React 0.344.0** - Beautiful & consistent icon library

### Code Quality & Development Tools
- **ESLint 9.9.1** - JavaScript/TypeScript linter
- **eslint-plugin-react-hooks** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** - ESLint plugin for React Fast Refresh
- **TypeScript ESLint 8.3.0** - TypeScript-specific ESLint rules

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

## Project Structure

```
lexhub-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Features

- ⚡ **Fast Development** with Vite's lightning-fast HMR
- 🎨 **Modern Styling** with Tailwind CSS utility classes
- 🔧 **Type Safety** with TypeScript
- 🧭 **Client-side Routing** with React Router
- 🎯 **Beautiful Icons** with Lucide React
- 📏 **Code Quality** with ESLint and TypeScript ESLint
- 🏗️ **Modern Build** with optimized production builds

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and ensure no errors
5. Submit a pull request

## License

This project is private and proprietary.
