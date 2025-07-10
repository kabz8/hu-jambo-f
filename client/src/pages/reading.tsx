import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Calendar, Quote, Search, BookOpen, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Reading() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Book className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            {t("reading.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t("reading.description")}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Verse of the Day Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Today's Verse
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Daily inspiration from God's Word to guide your day
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 mx-auto mb-6 text-blue-600" />
              <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 dark:text-white mb-6 italic leading-relaxed">
                "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
              </blockquote>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                Jeremiah 29:11 (NIV)
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Full Chapter
                </Button>
                <Button variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Save to Favorites
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Scripture Study Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Scripture Study
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dive deeper into God's Word with guided study resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Psalms of David",
                description: "A journey through the heart of worship and prayer",
                chapters: "150 chapters",
                category: "Poetry & Wisdom",
                difficulty: "Beginner"
              },
              {
                title: "The Gospel of John",
                description: "Experience Jesus through the eyes of the beloved disciple",
                chapters: "21 chapters",
                category: "Gospel",
                difficulty: "Intermediate"
              },
              {
                title: "Romans: The Gospel Explained",
                description: "Paul's masterpiece on salvation and Christian living",
                chapters: "16 chapters",
                category: "Epistle",
                difficulty: "Advanced"
              },
              {
                title: "Proverbs: Wisdom for Life",
                description: "Practical wisdom for daily living and decision making",
                chapters: "31 chapters",
                category: "Wisdom",
                difficulty: "Beginner"
              },
              {
                title: "1 Corinthians: Church Life",
                description: "Paul's guidance for Christian community and conduct",
                chapters: "16 chapters",
                category: "Epistle",
                difficulty: "Intermediate"
              },
              {
                title: "Isaiah: The Messianic Prophet",
                description: "Prophecies of hope, judgment, and the coming Messiah",
                chapters: "66 chapters",
                category: "Prophecy",
                difficulty: "Advanced"
              }
            ].map((study, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                      {study.category}
                    </span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                      {study.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{study.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{study.chapters}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Start Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bible Reading Plans Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Bible Reading Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Structured plans to help you read through the entire Bible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "One Year Bible Plan",
                description: "Read through the entire Bible in one year with daily readings from Old Testament, New Testament, Psalms, and Proverbs",
                duration: "365 days",
                dailyTime: "15-20 minutes",
                progress: "Start any day"
              },
              {
                title: "90-Day New Testament",
                description: "Focus on the New Testament with an intensive 90-day reading plan",
                duration: "90 days",
                dailyTime: "10-15 minutes",
                progress: "Fast-paced"
              },
              {
                title: "Chronological Bible",
                description: "Read the Bible in the order events occurred throughout history",
                duration: "365 days",
                dailyTime: "20-25 minutes",
                progress: "Historical order"
              },
              {
                title: "Topical Study Plan",
                description: "Study the Bible by topics such as love, faith, hope, and forgiveness",
                duration: "52 weeks",
                dailyTime: "10-15 minutes",
                progress: "Theme-based"
              }
            ].map((plan, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                    </div>
                    <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{plan.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Daily Time</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{plan.dailyTime}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Start Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bible Search Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-8 text-center">
              <Search className="w-12 h-12 mx-auto mb-6 text-yellow-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                Search the Scriptures
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Find specific verses, topics, or themes throughout the Bible
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Search for verses, topics, or keywords..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Featured Scripture Collections */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Featured Collections
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Curated scripture collections for specific life situations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verses for Comfort",
                description: "Scripture to bring peace during difficult times",
                verses: "25 verses",
                icon: "💙"
              },
              {
                title: "Promises of God",
                description: "God's faithful promises throughout Scripture",
                verses: "40 verses",
                icon: "🌟"
              },
              {
                title: "Prayers of Jesus",
                description: "Learn from how Jesus prayed",
                verses: "15 passages",
                icon: "🙏"
              }
            ].map((collection, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{collection.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{collection.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{collection.verses}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}