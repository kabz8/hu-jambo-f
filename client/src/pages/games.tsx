import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Star,
  Trophy,
  Users,
  Clock,
  Play,
  HelpCircle,
  Search,
  Palette,
  Brain,
  BookOpen,
  Music,
  Sparkles,
  User,
  Puzzle,
  Map,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Games() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            {t("games.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t("games.description")}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Featured Games Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Featured Games
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fun and educational games that teach Bible stories and Christian values
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bible Heroes Adventure",
                description: "Journey through Bible stories with David, Moses, and other heroes",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                category: "Story Adventure",
                ageGroup: "6-12 years",
                difficulty: "Easy",
                duration: "20-30 min"
              },
              {
                title: "Scripture Memory Match",
                description: "Match Bible verses with their references in this memory game",
                image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                category: "Memory Game",
                ageGroup: "8-16 years",
                difficulty: "Medium",
                duration: "10-15 min"
              },
              {
                title: "Noah's Ark Animal Rescue",
                description: "Help Noah gather animals for the ark in this puzzle adventure",
                image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
                category: "Puzzle Game",
                ageGroup: "4-10 years",
                difficulty: "Easy",
                duration: "15-25 min"
              }
            ].map((game, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        {game.category}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                        {game.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {game.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{game.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span>{game.ageGroup}</span>
                      <span>⏱️ {game.duration}</span>
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Play Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Game Categories Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Game Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from different types of games to suit your learning style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bible Puzzles",
                description: "Jigsaw puzzles featuring Bible scenes and stories",
                icon: <Puzzle className="w-6 h-6" />,
                games: "12 games",
                color: "bg-blue-500"
              },
              {
                title: "Scripture Quiz",
                description: "Test your Bible knowledge with fun quizzes",
                icon: <HelpCircle className="w-6 h-6" />,
                games: "25 quizzes",
                color: "bg-green-500"
              },
              {
                title: "Word Search",
                description: "Find Bible words and names in challenging puzzles",
                icon: <Search className="w-6 h-6" />,
                games: "18 puzzles",
                color: "bg-purple-500"
              },
              {
                title: "Bible Coloring",
                description: "Digital coloring pages of Bible stories",
                icon: <Palette className="w-6 h-6" />,
                games: "30 pages",
                color: "bg-pink-500"
              },
              {
                title: "Memory Games",
                description: "Match Bible verses, characters, and stories",
                icon: <Brain className="w-6 h-6" />,
                games: "15 games",
                color: "bg-orange-500"
              },
              {
                title: "Story Adventures",
                description: "Interactive Bible story experiences",
                icon: <BookOpen className="w-6 h-6" />,
                games: "8 stories",
                color: "bg-teal-500"
              },
              {
                title: "Music & Songs",
                description: "Learn Bible songs and hymns through games",
                icon: <Music className="w-6 h-6" />,
                games: "20 songs",
                color: "bg-red-500"
              },
              {
                title: "Character Builder",
                description: "Games that teach Christian values and character",
                icon: <Sparkles className="w-6 h-6" />,
                games: "10 games",
                color: "bg-yellow-500"
              }
            ].map((category, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{category.games}</p>
                  <Button size="sm" className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                    Explore Games
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Age-Appropriate Games Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Games by Age Group
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find the perfect games for your child's age and development level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Little Learners",
                ageRange: "3-6 years",
                description: "Simple games with bright colors and easy interactions",
                games: [
                  "Animal Sounds from Noah's Ark",
                  "Simple Bible Picture Matching",
                  "Color the Creation Story",
                  "Find the Lost Sheep"
                ],
                features: ["Large buttons", "Simple instructions", "Bright colors", "Audio guidance"]
              },
              {
                title: "Young Explorers",
                ageRange: "7-12 years",
                description: "Interactive adventures and challenging puzzles",
                games: [
                  "David and Goliath Adventure",
                  "Moses and the Ten Plagues",
                  "Jesus' Parables Quiz",
                  "Bible Timeline Challenge"
                ],
                features: ["Story-driven", "Progressive difficulty", "Achievement rewards", "Educational content"]
              },
              {
                title: "Teen Challenge",
                ageRange: "13-18 years",
                description: "Advanced games with deeper biblical themes",
                games: [
                  "Biblical Wisdom Debates",
                  "Christian Character Building",
                  "Scripture Memory Master",
                  "Faith and Life Decisions"
                ],
                features: ["Complex scenarios", "Discussion prompts", "Real-world application", "Leadership themes"]
              }
            ].map((ageGroup, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#a47551]/15 text-[#a47551] mb-2">
                      {index === 0 ? <User className="w-7 h-7" /> : index === 1 ? <Users className="w-7 h-7" /> : <Star className="w-7 h-7" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {ageGroup.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{ageGroup.ageRange}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{ageGroup.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Popular Games:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {ageGroup.games.map((game, gameIndex) => (
                        <li key={gameIndex}>• {game}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ageGroup.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Users className="w-4 h-4 mr-2" />
                    View Games
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements & Rewards Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Achievements & Rewards
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Earn badges and certificates as you learn and grow in your faith
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Bible Scholar",
                    description: "Complete 10 Scripture quizzes",
                    icon: <BookOpen className="w-5 h-5" />,
                    progress: "7/10"
                  },
                  {
                    title: "Puzzle Master",
                    description: "Solve 15 Bible puzzles",
                    icon: <Puzzle className="w-5 h-5" />,
                    progress: "12/15"
                  },
                  {
                    title: "Story Explorer",
                    description: "Finish 5 Bible adventures",
                    icon: <Map className="w-5 h-5" />,
                    progress: "3/5"
                  },
                  {
                    title: "Faith Champion",
                    description: "Play games for 30 days",
                    icon: <Trophy className="w-5 h-5" />,
                    progress: "18/30"
                  }
                ].map((achievement, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#a47551]/15 text-[#a47551] mb-2">
                      {achievement.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{achievement.description}</p>
                    <div className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold">
                      {achievement.progress}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Parent Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              For Parents & Teachers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Resources to help guide your child's learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Progress Tracking",
                description: "Monitor your child's gaming progress and learning achievements",
                features: ["Weekly reports", "Skill development tracking", "Time management", "Achievement notifications"],
                icon: "📊"
              },
              {
                title: "Educational Resources",
                description: "Additional materials to extend learning beyond the games",
                features: ["Discussion guides", "Bible study plans", "Activity sheets", "Family devotions"],
                icon: "📋"
              }
            ].map((resource, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{resource.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Start Playing Today!
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join thousands of children who are learning about God through fun, interactive games. Safe, educational, and faith-centered.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
            <Play className="w-4 h-4 mr-2" />
            Browse All Games
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}