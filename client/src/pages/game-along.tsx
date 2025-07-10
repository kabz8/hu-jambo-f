import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Users, Trophy, Star, Clock, Play } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export default function GameAlong() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            Game Along
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our community in fun, educational games that teach Bible stories and strengthen faith together
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Live Game Sessions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Live Game Sessions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join multiplayer games happening now with other community members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bible Trivia Challenge",
                players: "12/20 players",
                description: "Test your Bible knowledge in this fast-paced trivia game",
                difficulty: "All Levels",
                timeLeft: "Starting in 5 minutes",
                host: "Pastor John",
                category: "Trivia",
                status: "joining"
              },
              {
                title: "Scripture Memory Race",
                players: "8/15 players",
                description: "Race to complete Bible verses from memory",
                difficulty: "Intermediate",
                timeLeft: "15 minutes remaining",
                host: "Teacher Sarah",
                category: "Memory",
                status: "active"
              },
              {
                title: "Bible Character Guess",
                players: "6/12 players",
                description: "Guess the Bible character from clues and descriptions",
                difficulty: "Beginner",
                timeLeft: "Waiting for players",
                host: "Elder Mary",
                category: "Characters",
                status: "waiting"
              },
              {
                title: "Parable Puzzle",
                players: "15/16 players",
                description: "Solve puzzles based on Jesus' parables",
                difficulty: "Advanced",
                timeLeft: "2 minutes remaining",
                host: "Dr. Michael",
                category: "Parables",
                status: "active"
              },
              {
                title: "Worship Song Challenge",
                players: "20/25 players",
                description: "Name that tune with Christian songs and hymns",
                difficulty: "All Levels",
                timeLeft: "Starting soon",
                host: "Music Team",
                category: "Music",
                status: "joining"
              },
              {
                title: "Bible Geography",
                players: "4/10 players",
                description: "Explore biblical locations and their significance",
                difficulty: "Intermediate",
                timeLeft: "Waiting for players",
                host: "History Teacher",
                category: "Geography",
                status: "waiting"
              }
            ].map((game, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        {game.category}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        game.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' :
                        game.status === 'joining' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300' :
                        'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                      }`}>
                        {game.status === 'active' ? 'Live' : game.status === 'joining' ? 'Joining' : 'Waiting'}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{game.difficulty}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{game.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Players:</span>
                      <span className="text-gray-700 dark:text-gray-300">{game.players}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Host:</span>
                      <span className="text-gray-700 dark:text-gray-300">{game.host}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Status:</span>
                      <span className="text-gray-700 dark:text-gray-300">{game.timeLeft}</span>
                    </div>
                  </div>
                  
                  <Button className={`w-full text-white ${
                    game.status === 'active' ? 'bg-green-600 hover:bg-green-700' :
                    game.status === 'joining' ? 'bg-yellow-600 hover:bg-yellow-700' :
                    'bg-blue-600 hover:bg-blue-700'
                  }`}>
                    <Play className="w-4 h-4 mr-2" />
                    {game.status === 'active' ? 'Join Game' : game.status === 'joining' ? 'Join Now' : 'Enter Lobby'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tournaments Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Upcoming Tournaments
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Compete in special tournaments for prizes and recognition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Christmas Bible Bowl",
                description: "Annual Christmas-themed Bible knowledge competition",
                startDate: "December 20, 2024",
                duration: "3 days",
                prize: "Christmas Gift Basket + Bible",
                participants: "234 registered",
                registrationEnds: "December 15",
                difficulty: "All Levels"
              },
              {
                title: "New Testament Marathon",
                description: "Comprehensive competition covering all New Testament books",
                startDate: "January 15, 2025",
                duration: "1 week",
                prize: "Study Bible + Amazon Gift Card",
                participants: "156 registered",
                registrationEnds: "January 10",
                difficulty: "Advanced"
              },
              {
                title: "Youth Bible Games",
                description: "Special tournament designed for teenagers and young adults",
                startDate: "February 1, 2025",
                duration: "5 days",
                prize: "Youth Group Retreat Scholarship",
                participants: "89 registered",
                registrationEnds: "January 25",
                difficulty: "Youth"
              },
              {
                title: "Psalms Poetry Contest",
                description: "Creative games based on the poetic books of the Bible",
                startDate: "March 10, 2025",
                duration: "2 weeks",
                prize: "Poetry Book Collection",
                participants: "67 registered",
                registrationEnds: "March 5",
                difficulty: "Intermediate"
              }
            ].map((tournament, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                      Tournament
                    </span>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded">
                      {tournament.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tournament.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tournament.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Start Date:</span>
                      <span className="text-gray-700 dark:text-gray-300">{tournament.startDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                      <span className="text-gray-700 dark:text-gray-300">{tournament.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Prize:</span>
                      <span className="text-gray-700 dark:text-gray-300">{tournament.prize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Registered:</span>
                      <span className="text-gray-700 dark:text-gray-300">{tournament.participants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Registration Ends:</span>
                      <span className="text-gray-700 dark:text-gray-300">{tournament.registrationEnds}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Trophy className="w-4 h-4 mr-2" />
                    Register for Tournament
                  </Button>
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
              Explore different types of faith-based games for all skill levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bible Trivia",
                icon: "❓",
                description: "Test your knowledge of Scripture",
                activeGames: "12 games",
                averageTime: "15 min",
                color: "bg-blue-500"
              },
              {
                title: "Memory Games",
                icon: "🧠",
                description: "Scripture memorization challenges",
                activeGames: "8 games",
                averageTime: "10 min",
                color: "bg-green-500"
              },
              {
                title: "Bible Characters",
                icon: "👥",
                description: "Learn about biblical figures",
                activeGames: "15 games",
                averageTime: "12 min",
                color: "bg-purple-500"
              },
              {
                title: "Word Puzzles",
                icon: "🔤",
                description: "Biblical word games and crosswords",
                activeGames: "20 games",
                averageTime: "8 min",
                color: "bg-yellow-500"
              },
              {
                title: "Story Adventures",
                icon: "📖",
                description: "Interactive Bible story experiences",
                activeGames: "6 games",
                averageTime: "25 min",
                color: "bg-red-500"
              },
              {
                title: "Music & Songs",
                icon: "🎵",
                description: "Christian music and hymn games",
                activeGames: "10 games",
                averageTime: "12 min",
                color: "bg-pink-500"
              },
              {
                title: "Geography",
                icon: "🗺️",
                description: "Biblical locations and maps",
                activeGames: "7 games",
                averageTime: "18 min",
                color: "bg-orange-500"
              },
              {
                title: "Parables",
                icon: "🌱",
                description: "Games based on Jesus' parables",
                activeGames: "9 games",
                averageTime: "14 min",
                color: "bg-teal-500"
              }
            ].map((category, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{category.description}</p>
                  <div className="space-y-1 mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{category.activeGames}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Avg: {category.averageTime}</p>
                  </div>
                  <Button size="sm" className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                    Play Games
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leaderboards Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Community Leaderboards
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See who's leading in various game categories this month
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Bible Trivia Champions",
                period: "This Month",
                leaderboard: [
                  { rank: 1, name: "Sarah Johnson", score: "2,450 points", badge: "🥇" },
                  { rank: 2, name: "Michael Chen", score: "2,340 points", badge: "🥈" },
                  { rank: 3, name: "Emily Davis", score: "2,180 points", badge: "🥉" },
                  { rank: 4, name: "David Wilson", score: "2,050 points", badge: "⭐" },
                  { rank: 5, name: "Maria Santos", score: "1,990 points", badge: "⭐" }
                ]
              },
              {
                title: "Scripture Memory Masters",
                period: "This Month",
                leaderboard: [
                  { rank: 1, name: "Pastor Robert", score: "156 verses", badge: "🥇" },
                  { rank: 2, name: "Jennifer Lee", score: "142 verses", badge: "🥈" },
                  { rank: 3, name: "Timothy Brown", score: "139 verses", badge: "🥉" },
                  { rank: 4, name: "Grace Kim", score: "128 verses", badge: "⭐" },
                  { rank: 5, name: "John Martinez", score: "125 verses", badge: "⭐" }
                ]
              }
            ].map((board, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {board.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{board.period}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {board.leaderboard.map((player, playerIndex) => (
                      <div key={playerIndex} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{player.badge}</span>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              {player.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Rank #{player.rank}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {player.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gaming Stats Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Community Gaming Stats
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our community is growing through faith-based gaming
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,567</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Players</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">89</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Available Games</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">24,567</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Games Played</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">456</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Hours of Learning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gaming Tips Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Gaming Tips for Better Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get the most out of your faith-based gaming experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Play Regularly",
                description: "Consistent gaming helps reinforce Biblical knowledge and build lasting friendships in the community.",
                icon: <Clock className="w-6 h-6" />
              },
              {
                title: "Join Team Games",
                description: "Collaborate with others to solve challenges and learn from different perspectives on Scripture.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Challenge Yourself",
                description: "Try games at different difficulty levels to continue growing in your Biblical knowledge.",
                icon: <Star className="w-6 h-6" />
              },
              {
                title: "Have Fun Learning",
                description: "Remember that games are meant to be enjoyable while deepening your understanding of God's Word.",
                icon: <Trophy className="w-6 h-6" />
              }
            ].map((tip, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-3">
                      {tip.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Join the Game Community
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Connect with fellow believers while learning God's Word through fun, interactive games. Start playing today and grow in faith together!
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
            <Play className="w-4 h-4 mr-2" />
            Start Playing Now
          </Button>
        </section>
      </main>
    </div>
  );
}