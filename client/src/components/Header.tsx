import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Cross, Sun, Moon, Menu } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="mr-2 sm:mr-3">
                  <svg width="32" height="32" viewBox="0 0 40 40" className="text-blue-800 dark:text-yellow-500 sm:w-10 sm:h-10">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" stroke="currentColor" strokeWidth="2" />
                    <text x="20" y="16" textAnchor="middle" className="fill-white dark:fill-gray-900 text-xs font-bold">HU-JA</text>
                    <text x="20" y="26" textAnchor="middle" className="fill-white dark:fill-gray-900 text-xs font-bold">MBO</text>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    HU-JAMBO
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight hidden sm:block">
                    www.hu-jambo.com
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                Faith Activities ▼
              </span>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Spiritual Growth
                  </div>
                  <Link href="/worship" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    🎵 Worship
                  </Link>
                  <Link href="/reading" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    📖 Reading
                  </Link>
                  <Link href="/meditation" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    🧘 Meditation
                  </Link>
                  <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Community
                  </div>
                  <Link href="/games" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    🎮 Games
                  </Link>
                  <Link href="/testimonies" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    💝 Testimonies
                  </Link>
                  <Link href="/prayers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    🙏 Prayers
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                Along Activities ▼
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/testimony-along" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  💝 Testimony Along
                </Link>
                <Link href="/pray-along" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  🙏 Pray Along
                </Link>
                <Link href="/sing-along" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  🎵 Sing Along
                </Link>
                <Link href="/read-along" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  📖 Read Along
                </Link>
                <Link href="/meditate-along" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  🧘 Meditate Along
                </Link>
                <Link href="/game-along" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  🎮 Game Along
                </Link>
              </div>
            </div>
            <Link href="/donate" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Donate
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex items-center mb-8 mt-4">
                  <div className="mr-3">
                    <svg width="32" height="32" viewBox="0 0 40 40" className="text-blue-800 dark:text-yellow-500">
                      <defs>
                        <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <circle cx="20" cy="20" r="18" fill="url(#logoGradientMobile)" stroke="currentColor" strokeWidth="2" />
                      <text x="20" y="16" textAnchor="middle" className="fill-white dark:fill-gray-900 text-xs font-bold">HU-JA</text>
                      <text x="20" y="26" textAnchor="middle" className="fill-white dark:fill-gray-900 text-xs font-bold">MBO</text>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      HU-JAMBO
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                      www.hu-jambo.com
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col space-y-4">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Faith Activities</p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400 dark:text-gray-500 px-2 mb-1">Spiritual Growth</p>
                      <Link href="/worship" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🎵 Worship
                      </Link>
                      <Link href="/reading" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        📖 Reading
                      </Link>
                      <Link href="/meditation" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🧘 Meditation
                      </Link>
                      <p className="text-xs text-gray-400 dark:text-gray-500 px-2 mb-1 mt-3">Community</p>
                      <Link href="/games" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🎮 Games
                      </Link>
                      <Link href="/testimonies" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        💝 Testimonies
                      </Link>
                      <Link href="/prayers" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🙏 Prayers
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Along Activities</p>
                    <div className="space-y-1">
                      <Link href="/testimony-along" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        💝 Testimony Along
                      </Link>
                      <Link href="/pray-along" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🙏 Pray Along
                      </Link>
                      <Link href="/sing-along" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🎵 Sing Along
                      </Link>
                      <Link href="/read-along" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        📖 Read Along
                      </Link>
                      <Link href="/meditate-along" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🧘 Meditate Along
                      </Link>
                      <Link href="/game-along" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-2 block text-sm">
                        🎮 Game Along
                      </Link>
                    </div>
                  </div>
                  
                  <Link href="/donate" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 font-medium">
                    💖 Donate
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Language Dropdown - Responsive sizing */}
            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-20 sm:w-32 text-sm touch-target">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="sw">Kiswahili</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>

            {/* Dark/Light Mode Toggle - Enhanced for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors touch-target"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
