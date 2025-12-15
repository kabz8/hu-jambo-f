import { useLanguage } from "./LanguageProvider";
import { Link } from "wouter";
import { Heart, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-[#2d1f14]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <BrandLogo withText />
            </div>
            <p className="text-white/80 text-sm mb-4">
              A community of faith where believers come together to worship, pray, study, and grow spiritually.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Faith Activities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/worship" className="text-white/70 hover:text-[#a47551] transition-colors">
                  🎵 Worship
                </Link>
              </li>
              <li>
                <Link href="/reading" className="text-white/70 hover:text-[#a47551] transition-colors">
                  📖 Reading
                </Link>
              </li>
              <li>
                <Link href="/meditation" className="text-white/70 hover:text-[#a47551] transition-colors">
                  🧘 Meditation
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-white/70 hover:text-[#a47551] transition-colors">
                  🎮 Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/testimonies" className="text-white/70 hover:text-[#a47551] transition-colors">
                  💝 Testimonies
                </Link>
              </li>
              <li>
                <Link href="/prayers" className="text-white/70 hover:text-[#a47551] transition-colors">
                  🙏 Prayers
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/70 hover:text-[#a47551] transition-colors">
                  💖 Donate
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-6 text-white">Along Activities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/testimony-along" className="text-white/70 hover:text-[#a47551] transition-colors">
                  Testimony Along
                </Link>
              </li>
              <li>
                <Link href="/pray-along" className="text-white/70 hover:text-[#a47551] transition-colors">
                  Pray Along
                </Link>
              </li>
              <li>
                <Link href="/sing-along" className="text-white/70 hover:text-[#a47551] transition-colors">
                  Sing Along
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-white/60" />
                <span className="text-white/80">info@biblicalfinancialcourses.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-white/60" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-xs text-white/60 mb-3">
                Subscribe for updates and devotionals
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-[#14100c] border border-[#2d1f14] rounded-l-md text-sm focus:outline-none focus:border-[#a47551] text-white placeholder:text-white/40"
                />
                <button className="px-4 py-2 bg-[#a47551] hover:bg-[#8a5f42] rounded-r-md text-sm font-medium transition-colors text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2d1f14] bg-[#0f0b09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-white/60 mb-4 md:mb-0">
              <Heart className="h-4 w-4 mr-2 text-[#a47551]" />
              <span>© 2025 Biblicalfinancialcourses.com. Made with love for the faith community.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-[#a47551] transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}