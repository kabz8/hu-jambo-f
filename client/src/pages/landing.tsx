import { Link } from "wouter";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import NewsletterForm from "@/components/NewsletterForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Music, Book, Leaf, Gamepad2, Cross, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Landing() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-600 to-purple-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero image */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Faith community gathering in prayer" 
              className="rounded-xl shadow-2xl mx-auto max-w-4xl w-full h-64 object-cover" 
            />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t("hero.description")}
          </p>
          
          {/* Join Community CTA */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold italic mb-4">{t("cta.join")}</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <a href="/api/login">{t("cta.register")}</a>
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {t("cta.explore")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Testimony Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Heart className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("testimony.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("testimony.description")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Personal Testimony */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="Person sharing personal testimony" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Personal Testimony</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Share your personal faith journey and experiences</p>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                  Share Your Story
                </Button>
              </CardContent>
            </Card>

            {/* Group Testimony */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="Group sharing testimony together" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Group Testimony</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Community testimonies that inspire and uplift</p>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                  View Stories
                </Button>
              </CardContent>
            </Card>

            {/* Family Testimony */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="Christian family praying together" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Family Testimony</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Families sharing their faith journey together</p>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                  Family Stories
                </Button>
              </CardContent>
            </Card>

            {/* Marriage Testimony */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="Christian couple in marriage testimony" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Marriage Testimony</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Couples sharing their faith-centered marriage stories</p>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                  Marriage Stories
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Prayer Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Heart className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("prayer.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("prayer.description")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Prayer categories */}
            {[
              { icon: "💍", title: "For Marriages", desc: "Strengthen marriages through prayer" },
              { icon: "🏠", title: "For Families", desc: "Unity and blessing for families" },
              { icon: "👤", title: "For Individuals", desc: "Personal prayer needs and growth" },
              { icon: "🛡️", title: "Protection & Prosperity", desc: "Safety and blessing prayers" },
              { icon: "🙏", title: "For Thanksgiving", desc: "Gratitude and praise prayers" }
            ].map((category, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{category.desc}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm">
                    Request Prayer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Worship Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Music className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("worship.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("worship.description")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hymn Songs */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="People singing hymns in worship" 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Hymn Songs</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Traditional hymns that have blessed generations</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                  Browse Hymns
                </Button>
              </CardContent>
            </Card>

            {/* Praise & Worship */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="Contemporary praise and worship" 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Praise & Worship</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Contemporary worship songs for spiritual connection</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                  Listen Now
                </Button>
              </CardContent>
            </Card>

            {/* Instruments */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                  alt="Musical instruments for worship" 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Instruments</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Instrumental worship music and lessons</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                  Explore Music
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reading Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Book className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("reading.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("reading.description")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reading categories */}
            {[
              { icon: "📖", title: "Scriptures", desc: "Explore Bible passages and their meanings" },
              { icon: "💭", title: "Verse of the Day", desc: "Daily inspiration from God's Word" },
              { icon: "📅", title: "Bible Plan", desc: "Structured reading plans for spiritual growth" }
            ].map((category, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.desc}</p>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold">
                    {category.title === "Scriptures" ? "Read Scripture" : 
                     category.title === "Verse of the Day" ? "Today's Verse" : "Start Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meditation Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Leaf className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("meditation.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("meditation.description")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quotes */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Inspiring Quotes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Wisdom and inspiration for daily meditation</p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 dark:text-gray-300 italic">"Be still, and know that I am God" - Psalm 46:10</p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                  More Quotes
                </Button>
              </CardContent>
            </Card>

            {/* Nature */}
            <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200" 
                  alt="Peaceful nature scene for meditation" 
                  className="w-full h-32 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Nature Meditation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with God through His beautiful creation</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                  Explore Nature
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Games Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Gamepad2 className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("games.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("games.description")}</p>
          </div>
          
          <Card className="card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {[
                  { icon: "🧩", title: "Bible Puzzles" },
                  { icon: "❓", title: "Scripture Quiz" },
                  { icon: "🔍", title: "Word Search" },
                  { icon: "🎨", title: "Bible Coloring" }
                ].map((game, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-3xl mb-2">{game.icon}</div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{game.title}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Good for Christian Kids</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Educational and fun games that teach Bible stories and values</p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 font-semibold">
                Play Games
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Contribution Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Heart className="inline-block w-8 h-8 text-yellow-500 mr-2" />
              {t("support.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("support.description")}</p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Make a Difference</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your generous support helps us provide resources, maintain our platform, and reach more people with God's love. Every contribution makes a difference in building our faith community.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button 
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      <Link href="/donate">💳 Donate Now</Link>
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Participant Gifts</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Active community members receive special gifts and rewards:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>🎁 Monthly prayer cards</li>
                    <li>📖 Devotional booklets</li>
                    <li>🎵 Worship music collections</li>
                    <li>🏆 Completion certificates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Section */}
        <section className="mb-16">
          <div className="bg-blue-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t("newsletter.title")}</h2>
            <p className="text-lg mb-6 opacity-90">{t("newsletter.description")}</p>
            <NewsletterForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("contact.title")}</h3>
              <div className="space-y-2">
                <p><Mail className="inline w-4 h-4 mr-2 text-yellow-500" />info@faithjourney.org</p>
                <p><Phone className="inline w-4 h-4 mr-2 text-yellow-500" />+1 (555) 123-4567</p>
                <p><MapPin className="inline w-4 h-4 mr-2 text-yellow-500" />123 Faith Street, Hope City, HC 12345</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-2xl hover:text-yellow-500 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Faith Journey Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
