import { Link } from "wouter";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Sparkles, Crown, Star } from "lucide-react";
import heroImage from "@assets/7323_1752152530250.jpg";

export default function Landing() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Welcome to Hu-jambo
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Grow Your Faith
                <span className="block text-blue-600 dark:text-blue-400">Together</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                Join our vibrant community of believers for worship, prayer, Bible study, and fellowship that strengthens your spiritual journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg"
                >
                  <a href="/api/login">
                    Join Community
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  Explore Activities
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="aspect-square max-w-sm mx-auto lg:max-w-none bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 rounded-2xl sm:rounded-3xl p-1 shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Person on spiritual journey path with mountains in background" 
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" 
                />
              </div>
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Crown className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-900" />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-pink-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Strengthen Your Faith Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover meaningful ways to grow spiritually through worship, study, fellowship, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎵",
                title: "Worship Together",
                description: "Join in uplifting worship with hymns, contemporary songs, and instrumental music",
                link: "/worship",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "📖",
                title: "Study Scripture", 
                description: "Dive deep into God's Word with reading plans, devotionals, and Bible study groups",
                link: "/reading",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🙏",
                title: "Pray & Connect",
                description: "Share prayer requests, join prayer circles, and support one another in faith",
                link: "/prayers",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🧘",
                title: "Meditate & Reflect",
                description: "Find peace through guided meditation, reflection, and spiritual contemplation",
                link: "/meditation",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: "💝",
                title: "Share Testimonies",
                description: "Inspire others by sharing your faith journey and celebrating God's goodness",
                link: "/testimonies",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: "🎮",
                title: "Learn Through Play",
                description: "Enjoy educational games that teach Bible stories and strengthen understanding",
                link: "/games",
                color: "from-orange-500 to-yellow-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Button asChild variant="outline" className="group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
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
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mb-4">
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
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-light"></div>
            <div className="relative">
              <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
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
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4"
                >
                  <a href="/api/login">
                    Join Our Community
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-4 text-[#000000]"
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
    </div>
  );
}
