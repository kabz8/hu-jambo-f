import { useLanguage } from "./LanguageProvider";
import { Link } from "wouter";
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-yellow-500">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" stroke="currentColor" strokeWidth="2" />
                  <text x="20" y="16" textAnchor="middle" className="fill-gray-900 text-xs font-bold">BFC</text>
                  <text x="20" y="26" textAnchor="middle" className="fill-gray-900 text-xs font-bold">.COM</text>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Biblicalfinancialcourses.com</h3>
                <p className="text-sm text-gray-400">www.biblicalfinancialcourses.com</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A community of faith where believers come together to worship, pray, study, and grow spiritually.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Faith Activities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/worship" className="text-gray-300 hover:text-white transition-colors">
                  🎵 Worship
                </Link>
              </li>
              <li>
                <Link href="/reading" className="text-gray-300 hover:text-white transition-colors">
                  📖 Reading
                </Link>
              </li>
              <li>
                <Link href="/meditation" className="text-gray-300 hover:text-white transition-colors">
                  🧘 Meditation
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-300 hover:text-white transition-colors">
                  🎮 Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/testimonies" className="text-gray-300 hover:text-white transition-colors">
                  💝 Testimonies
                </Link>
              </li>
              <li>
                <Link href="/prayers" className="text-gray-300 hover:text-white transition-colors">
                  🙏 Prayers
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors">
                  💖 Donate
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-6">Along Activities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/testimony-along" className="text-gray-300 hover:text-white transition-colors">
                  Testimony Along
                </Link>
              </li>
              <li>
                <Link href="/pray-along" className="text-gray-300 hover:text-white transition-colors">
                  Pray Along
                </Link>
              </li>
              <li>
                <Link href="/sing-along" className="text-gray-300 hover:text-white transition-colors">
                  Sing Along
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-300">info@biblicalfinancialcourses.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-xs text-gray-400 mb-3">
                Subscribe for updates and devotionals
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              <span>© 2025 Biblicalfinancialcourses.com. Made with love for the faith community.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}