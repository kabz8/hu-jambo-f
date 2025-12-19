import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Sun, Moon, Menu, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";
import { BrandLogo } from "./BrandLogo";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-[#0b0b0b] text-white shadow-sm border-b border-[#2d1f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <BrandLogo withText size="lg" className="mr-2 sm:mr-3" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <span className="text-white/80 hover:text-[#a47551] transition-colors cursor-pointer inline-flex items-center">
                Faith Activities
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#14100c] rounded-md shadow-lg border border-[#2d1f14] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-white/60 uppercase tracking-wide">
                    Spiritual Growth
                  </div>
                  <Link href="/worship" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Worship
                  </Link>
                  <Link href="/reading" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Reading
                  </Link>
                  <Link href="/meditation" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Meditation
                  </Link>
                  <div className="border-t border-[#2d1f14] my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-white/60 uppercase tracking-wide">
                    Community
                  </div>
                  <Link href="/games" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Games
                  </Link>
                  <Link href="/testimonies" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Testimonies
                  </Link>
                  <Link href="/prayers" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Prayers
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="text-white/80 hover:text-[#a47551] transition-colors cursor-pointer inline-flex items-center">
                Along Activities
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#14100c] rounded-md shadow-lg border border-[#2d1f14] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/testimony-along" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Testimony Along
                </Link>
                <Link href="/pray-along" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Pray Along
                </Link>
                <Link href="/sing-along" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Sing Along
                </Link>
                <Link href="/read-along" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Read Along
                </Link>
                <Link href="/meditate-along" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Meditate Along
                </Link>
                <Link href="/game-along" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  Game Along
                </Link>
              </div>
            </div>
            <Link href="/courses" className="text-white/80 hover:text-[#a47551] transition-colors">
              Courses
            </Link>
            <Link href="/donate" className="text-white/80 hover:text-[#a47551] transition-colors">
              Donate
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/5">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-[#0f0b09] text-white border-[#2d1f14]">
                <div className="flex items-center mb-8 mt-4">
                  <BrandLogo withText size="lg" className="mr-3" />
                </div>
                <nav className="flex flex-col space-y-4">
                  <div className="border-b border-[#2d1f14] pb-4">
                    <p className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wide">Faith Activities</p>
                    <div className="space-y-1">
                      <p className="text-xs text-white/50 px-2 mb-1">Spiritual Growth</p>
                      <Link href="/worship" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Worship
                      </Link>
                      <Link href="/reading" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Reading
                      </Link>
                      <Link href="/meditation" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Meditation
                      </Link>
                      <p className="text-xs text-white/50 px-2 mb-1 mt-3">Community</p>
                      <Link href="/games" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Games
                      </Link>
                      <Link href="/testimonies" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Testimonies
                      </Link>
                      <Link href="/prayers" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Prayers
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-b border-[#2d1f14] pb-4">
                    <p className="text-sm font-medium text-white/60 mb-3 uppercase tracking-wide">Along Activities</p>
                    <div className="space-y-1">
                      <Link href="/testimony-along" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Testimony Along
                      </Link>
                      <Link href="/pray-along" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Pray Along
                      </Link>
                      <Link href="/sing-along" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Sing Along
                      </Link>
                      <Link href="/read-along" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Read Along
                      </Link>
                      <Link href="/meditate-along" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Meditate Along
                      </Link>
                      <Link href="/game-along" className="text-white/80 hover:text-white transition-colors py-2 px-2 block text-sm">
                        Game Along
                      </Link>
                    </div>
                  </div>
                  
                  <Link href="/courses" className="text-white/80 hover:text-white transition-colors py-2 font-medium">
                    Courses
                  </Link>
                  <Link href="/donate" className="text-white/80 hover:text-white transition-colors py-2 font-medium">
                    Donate
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Language Dropdown - Responsive sizing */}
            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-20 sm:w-32 text-sm touch-target bg-[#14100c] border-[#2d1f14] text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0f0b09] border-[#2d1f14] text-white">
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
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors touch-target border border-[#2d1f14]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-white" />
              ) : (
                <Sun className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
