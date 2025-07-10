import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Quote, Search, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export default function ReadAlong() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            Read Along
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our community in reading God's Word together and grow in faith through shared study
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Current Reading Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Today's Community Reading
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join 1,247 others reading the same passage today
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Psalm 23 - The Lord is My Shepherd
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  Day 15 of 30 - Psalms of Comfort Series
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-lg text-gray-800 dark:text-white leading-relaxed space-y-3">
                  <p><span className="font-semibold">¹</span> The Lord is my shepherd, I lack nothing.</p>
                  <p><span className="font-semibold">²</span> He makes me lie down in green pastures, he leads me beside quiet waters,</p>
                  <p><span className="font-semibold">³</span> he refreshes my soul. He guides me along the right paths for his name's sake.</p>
                  <p><span className="font-semibold">⁴</span> Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.</p>
                  <p><span className="font-semibold">⁵</span> You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.</p>
                  <p><span className="font-semibold">⁶</span> Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Today's Reflection Questions:</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• How has God been your shepherd in difficult times?</li>
                    <li>• What "green pastures" has God provided for you?</li>
                    <li>• How can you trust God's guidance today?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Community Insights:</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">"This psalm reminds me that God's presence is constant, even in dark times." - Sarah M.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">"The image of overflowing cups speaks to God's abundant provision." - Michael K.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Mark as Read
                </Button>
                <Button variant="outline">
                  <Quote className="w-4 h-4 mr-2" />
                  Share Reflection
                </Button>
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Join Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reading Plans Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Community Reading Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join others in structured Bible reading journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Psalms of Comfort",
                description: "30 days through comforting psalms with daily reflections",
                duration: "30 days",
                participants: "1,247 readers",
                currentDay: "Day 15",
                progress: 50,
                difficulty: "Beginner"
              },
              {
                title: "Gospel of John",
                description: "Journey through John's Gospel with community discussions",
                duration: "21 days",
                participants: "856 readers",
                currentDay: "Day 8",
                progress: 38,
                difficulty: "Intermediate"
              },
              {
                title: "Proverbs Wisdom",
                description: "Daily wisdom from Proverbs for practical living",
                duration: "31 days",
                participants: "634 readers",
                currentDay: "Day 22",
                progress: 71,
                difficulty: "Beginner"
              },
              {
                title: "Life of Jesus",
                description: "Chronological reading through Jesus' life and ministry",
                duration: "40 days",
                participants: "429 readers",
                currentDay: "Day 12",
                progress: 30,
                difficulty: "Intermediate"
              },
              {
                title: "Romans Deep Dive",
                description: "Intensive study of Paul's letter to the Romans",
                duration: "16 days",
                participants: "278 readers",
                currentDay: "Day 5",
                progress: 31,
                difficulty: "Advanced"
              },
              {
                title: "New Testament Overview",
                description: "Complete New Testament in 90 days with community",
                duration: "90 days",
                participants: "1,089 readers",
                currentDay: "Day 45",
                progress: 50,
                difficulty: "Intermediate"
              }
            ].map((plan, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                      {plan.difficulty}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{plan.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{plan.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Progress</span>
                      <span className="text-gray-600 dark:text-gray-300">{plan.currentDay}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      {plan.participants}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Join Reading Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reading Groups Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Reading Groups
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join smaller groups for deeper discussion and accountability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Young Adults Bible Study",
                description: "Weekly reading group for ages 18-35 focusing on practical Christian living",
                members: "23 members",
                meetingTime: "Thursdays 7:00 PM",
                currentStudy: "Gospel of Matthew",
                leader: "Pastor Sarah Johnson"
              },
              {
                title: "Women's Scripture Circle",
                description: "Monthly deep dive into women of the Bible and their lessons for today",
                members: "34 members",
                meetingTime: "2nd Saturday 10:00 AM",
                currentStudy: "Women of Faith",
                leader: "Elder Mary Thompson"
              },
              {
                title: "Men's Morning Study",
                description: "Early morning Bible study focusing on biblical manhood and leadership",
                members: "18 members",
                meetingTime: "Saturdays 6:30 AM",
                currentStudy: "Proverbs for Men",
                leader: "Deacon Mike Davis"
              },
              {
                title: "Seniors' Wisdom Group",
                description: "Bible study for seniors sharing life experiences and biblical wisdom",
                members: "45 members",
                meetingTime: "Tuesdays 2:00 PM",
                currentStudy: "Psalms & Prayers",
                leader: "Elder Robert Wilson"
              }
            ].map((group, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{group.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Members:</span>
                      <span className="text-gray-700 dark:text-gray-300">{group.members}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Meets:</span>
                      <span className="text-gray-700 dark:text-gray-300">{group.meetingTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Current Study:</span>
                      <span className="text-gray-700 dark:text-gray-300">{group.currentStudy}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Leader:</span>
                      <span className="text-gray-700 dark:text-gray-300">{group.leader}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reading Tools Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Reading Tools & Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enhance your Bible reading experience with these helpful tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bible Search",
                description: "Find specific verses, topics, or themes throughout Scripture",
                icon: <Search className="w-8 h-8" />,
                color: "bg-blue-500"
              },
              {
                title: "Reading Tracker",
                description: "Track your progress through different reading plans and goals",
                icon: <Calendar className="w-8 h-8" />,
                color: "bg-green-500"
              },
              {
                title: "Favorite Verses",
                description: "Save and organize your favorite Bible verses for easy reference",
                icon: <Star className="w-8 h-8" />,
                color: "bg-yellow-500"
              }
            ].map((tool, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                  <Button className="bg-gray-600 hover:bg-gray-700 text-white">
                    Use Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Stats Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Community Reading Impact
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our community is growing through God's Word
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">3,457</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Readers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Reading Plans</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Discussion Groups</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">89,234</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Chapters Read</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reading Tips Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Effective Bible Reading Tips
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get the most out of your Bible reading time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Start with Prayer",
                description: "Ask God to open your heart and mind to understand His Word before you begin reading."
              },
              {
                title: "Read Slowly",
                description: "Take time to meditate on what you're reading rather than rushing through passages."
              },
              {
                title: "Take Notes",
                description: "Write down insights, questions, or verses that speak to you during your reading."
              },
              {
                title: "Join a Group",
                description: "Reading with others provides accountability and different perspectives on Scripture."
              }
            ].map((tip, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Start Reading Today
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join our community in discovering the life-changing power of God's Word. Start your reading journey today!
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
            Choose a Reading Plan
          </Button>
        </section>
      </main>
    </div>
  );
}