import { Link } from "wouter";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Heart,
  Sparkles,
  Crown,
  Star,
  Music,
  BookOpen,
  HandHeart,
  MoonStar,
  Share2,
  Gamepad2,
} from "lucide-react";
import heroImage from "@assets/7323_1752152530250.jpg";

export default function Landing() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 sm:p-12 backdrop-blur-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Financial discipleship, rooted in the Word
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-2">Biblical Financial Courses</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow">
                  Steward your finances
                  <span className="block text-[#f5efe8]">God's way</span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto lg:mx-0">
                Learn practical, faith-driven steps to budget wisely, give generously, and build a lasting legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#a47551] hover:bg-[#8a5f42] text-white font-semibold text-lg px-6 sm:px-8 py-3 shadow-lg border border-white/20"
                >
                  <Link href="/donate">
                    Begin Your Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-6 sm:px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#0b0b0b]"
                >
                  <Link href="/reading">View Course Tracks</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {[
                  { label: "Bible-first lessons", value: "12+" },
                  { label: "Stewardship guides", value: "40+" },
                  { label: "Community members", value: "10k+" },
                  { label: "Countries reached", value: "100+" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="max-w-xl mx-auto lg:mx-0 rounded-[32px] overflow-hidden border border-white/20 shadow-[0_35px_65px_rgba(0,0,0,0.55)] bg-black/40">
                <img
                  src="/banner.png"
                  alt="Biblical Financial Courses banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-[#fef9f4] text-[#2b1a12]">
        <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(circle_at_top,rgba(152,116,85,0.12),transparent_45%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a47551] mb-3">Learn · Practice · Share</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2b1a12] mb-4">
              A clear path to biblical stewardship
            </h2>
            <p className="text-lg text-[#4a3a2c] max-w-3xl mx-auto">
              Six focused tracks blend Scripture, practical exercises, and community to help you steward every resource with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Music className="w-6 h-6" />,
                title: "Worship Together",
                description: "Shape your heart toward generosity through worship and reflection.",
                link: "/worship",
                color: "from-[#a47551] to-[#c1916a]",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Study Scripture",
                description: "Follow guided readings and devotions on stewardship, calling, and contentment.",
                link: "/reading",
                color: "from-[#8a5f42] to-[#a47551]",
              },
              {
                icon: <HandHeart className="w-6 h-6" />,
                title: "Pray & Connect",
                description: "Share and respond to prayer needs as you walk this financial journey together.",
                link: "/prayers",
                color: "from-[#c1916a] to-[#a47551]",
              },
              {
                icon: <MoonStar className="w-6 h-6" />,
                title: "Meditate & Reflect",
                description: "Build habits of quiet reflection that align your plans with God's wisdom.",
                link: "/meditation",
                color: "from-[#704b34] to-[#a47551]",
              },
              {
                icon: <Share2 className="w-6 h-6" />,
                title: "Share Testimonies",
                description: "Encourage others with stories of God's provision and faithfulness.",
                link: "/testimonies",
                color: "from-[#a47551] to-[#8a5f42]",
              },
              {
                icon: <Gamepad2 className="w-6 h-6" />,
                title: "Learn Through Play",
                description: "Engage interactive lessons that make stewardship principles stick.",
                link: "/games",
                color: "from-[#c1916a] to-[#a47551]",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border border-[#e3d2c4] bg-white text-[#2b1a12] overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f0e5db] text-[#9c7554]">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2b1a12] group-hover:text-[#9c7554] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#4a3a2c] leading-relaxed">
                      {feature.description}
                    </p>
                    <Button asChild variant="outline" className="justify-start border-[#d9c5b3] text-[#5c432f] hover:bg-[#f3e6da]">
                      <Link href={feature.link}>
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-[#f7f0e7] dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.6),transparent_55%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Growing Together in Faith
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of believers in their spiritual journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Community Members", icon: <Users className="w-8 h-8" /> },
              { number: "50,000+", label: "Prayers Shared", icon: <Heart className="w-8 h-8" /> },
              { number: "5,000+", label: "Testimonies", icon: <Star className="w-8 h-8" /> },
              { number: "100+", label: "Countries", icon: <Sparkles className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a47551]/15 dark:bg-blue-900 rounded-full text-[#a47551] dark:text-blue-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#a47551] to-[#8a5f42] rounded-[40px] p-12 text-white relative overflow-hidden border border-white/20 shadow-[0_35px_65px_rgba(20,11,5,0.35)]">
            <div className="absolute inset-0 bg-pattern-light opacity-30"></div>
            <div className="relative">
              <Crown className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Begin Your Faith Journey Today
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our welcoming community and discover the joy of growing in faith together. Your spiritual journey starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-[#a47551] hover:bg-gray-100 font-bold text-lg px-8 py-4"
                >
                  <Link href="/worship">
                    Start Worshipping
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#a47551] font-bold text-lg px-8 py-4"
                >
                  <Link href="/donate">
                    Support Our Mission
                    <Heart className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
