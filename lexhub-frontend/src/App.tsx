import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Github, Menu } from 'lucide-react'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">LexHUB</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </nav>
              <div className="md:hidden">
                <Menu className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="text-center">
        <Home className="mx-auto h-12 w-12 text-gray-400" />
        <h2 className="mt-2 text-lg font-medium text-gray-900">Welcome to LexHUB</h2>
        <p className="mt-1 text-sm text-gray-500">
          A modern React application with TypeScript, Tailwind CSS, and React Router
        </p>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="text-center">
        <Github className="mx-auto h-12 w-12 text-gray-400" />
        <h2 className="mt-2 text-lg font-medium text-gray-900">About LexHUB</h2>
        <p className="mt-1 text-sm text-gray-500">
          Built with React 18.3.1, TypeScript 5.5.3, Vite 5.4.2, and Tailwind CSS 3.4.1
        </p>
      </div>
    </div>
  )
}

export default App
