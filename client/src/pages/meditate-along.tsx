import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Clock, Users, Play, Pause, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export default function MeditateAlong() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            Meditate Along
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our community in quiet reflection and find peace in God's presence through guided meditation
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Today's Meditation Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Today's Guided Meditation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join 892 others in today's meditation on God's peace
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Finding Peace in God's Presence
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  15-minute guided meditation • Based on Psalm 46:10
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                    "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Psalm 46:10</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Meditation Focus:</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    In our noisy world, God invites us to be still and remember His sovereignty. This meditation will guide you through breathing exercises, scripture reflection, and quiet prayer to help you find His peace.
                  </p>
                </div>
                
                <div className="flex justify-center mb-4">
                  <div className="w-full max-w-md">
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>0:00</span>
                      <span>15:00</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Experience:</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Guided breathing exercises (3 minutes)</li>
                    <li>• Scripture meditation on Psalm 46:10 (5 minutes)</li>
                    <li>• Silent prayer and reflection (5 minutes)</li>
                    <li>• Closing prayer and affirmation (2 minutes)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Community Feedback:</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">"This meditation brought such peace to my anxious heart." - Maria S.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">"I felt God's presence so strongly during the silent prayer time." - David L.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Start Meditation
                </Button>
                <Button variant="outline">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule for Later
                </Button>
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Join Group Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meditation Categories Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Meditation Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose meditations based on your spiritual needs and current life situation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Peace & Calm",
                description: "Find tranquility in God's presence during stressful times",
                icon: "🕊️",
                meditations: "24 sessions",
                duration: "5-20 minutes",
                participants: "456 people"
              },
              {
                title: "Gratitude & Thanksgiving",
                description: "Cultivate a heart of gratitude for God's blessings",
                icon: "🙏",
                meditations: "18 sessions",
                duration: "8-15 minutes",
                participants: "329 people"
              },
              {
                title: "Healing & Restoration",
                description: "Meditations for physical, emotional, and spiritual healing",
                icon: "💚",
                meditations: "21 sessions",
                duration: "10-25 minutes",
                participants: "278 people"
              },
              {
                title: "Trust & Faith",
                description: "Strengthen your faith and trust in God's plan",
                icon: "⭐",
                meditations: "19 sessions",
                duration: "6-18 minutes",
                participants: "234 people"
              },
              {
                title: "Forgiveness & Grace",
                description: "Experience God's forgiveness and extend it to others",
                icon: "✨",
                meditations: "16 sessions",
                duration: "12-20 minutes",
                participants: "189 people"
              },
              {
                title: "Love & Compassion",
                description: "Meditate on God's love and grow in compassion",
                icon: "❤️",
                meditations: "22 sessions",
                duration: "5-15 minutes",
                participants: "345 people"
              }
            ].map((category, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Sessions:</span>
                      <span>{category.meditations}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Duration:</span>
                      <span>{category.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Participants:</span>
                      <span>{category.participants}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Explore Meditations
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scheduled Group Sessions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Group Meditation Sessions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join live meditation sessions with our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Morning Stillness",
                time: "7:00 AM - 7:30 AM",
                description: "Start your day with quiet meditation and prayer",
                leader: "Pastor Sarah Johnson",
                participants: "45 people",
                frequency: "Daily"
              },
              {
                title: "Midday Peace",
                time: "12:00 PM - 12:20 PM",
                description: "Find peace in the middle of your busy day",
                leader: "Spiritual Director Maria Santos",
                participants: "23 people",
                frequency: "Monday-Friday"
              },
              {
                title: "Evening Reflection",
                time: "8:00 PM - 8:45 PM",
                description: "End your day with gratitude and reflection",
                leader: "Elder Robert Wilson",
                participants: "67 people",
                frequency: "Tuesday & Thursday"
              },
              {
                title: "Weekend Contemplation",
                time: "Saturday 10:00 AM - 11:00 AM",
                description: "Deeper meditation and contemplative prayer",
                leader: "Contemplative Minister Jane Chen",
                participants: "34 people",
                frequency: "Weekly"
              }
            ].map((session, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {session.title}
                    </h3>
                    <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                      {session.frequency}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{session.time}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{session.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Leader:</span>
                      <span className="text-gray-700 dark:text-gray-300">{session.leader}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Participants:</span>
                      <span className="text-gray-700 dark:text-gray-300">{session.participants}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Join Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meditation Progress Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Your Meditation Journey
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Track your progress and celebrate your spiritual growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Sessions Completed:</span>
                      <span className="font-semibold text-purple-600">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Total Time:</span>
                      <span className="font-semibold text-purple-600">4h 32m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Streak:</span>
                      <span className="font-semibold text-purple-600">7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Favorite Category:</span>
                      <span className="font-semibold text-purple-600">Peace & Calm</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Reflections</h3>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">"Today's meditation on peace really helped calm my anxious thoughts."</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 days ago</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">"I felt God's presence so strongly during the gratitude session."</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  View Full Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meditation Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Meditation Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Additional tools and teachings to deepen your meditation practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Breathing Techniques",
                description: "Learn different breathing methods for deeper meditation",
                icon: "🌬️",
                resources: "8 guides"
              },
              {
                title: "Scripture Meditation",
                description: "How to meditate on God's Word effectively",
                icon: "📖",
                resources: "12 teachings"
              },
              {
                title: "Contemplative Prayer",
                description: "Deepen your prayer life through contemplative practices",
                icon: "🙏",
                resources: "6 methods"
              }
            ].map((resource, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{resource.resources}</p>
                  <Button className="bg-gray-600 hover:bg-gray-700 text-white">
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Community Meditation Impact
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how meditation is transforming our community
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">1,247</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Meditators</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">89</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Meditation Sessions</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">456</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Hours of Peace</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">78</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Testimonies of Peace</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meditation Tips Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Meditation Tips for Beginners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple guidelines to help you start your meditation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Start Small",
                description: "Begin with just 5 minutes of meditation daily and gradually increase the time as you become more comfortable."
              },
              {
                title: "Find a Quiet Space",
                description: "Choose a peaceful location where you won't be disturbed. This could be a corner of your room or a favorite outdoor spot."
              },
              {
                title: "Use Scripture",
                description: "Meditate on Bible verses that speak to your heart. Let God's Word guide your thoughts and prayers."
              },
              {
                title: "Be Patient",
                description: "Don't worry if your mind wanders. Gently bring your attention back to your meditation focus without judgment."
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
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 text-center">
          <Leaf className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Begin Your Journey of Peace
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Take the first step toward deeper intimacy with God through meditation. Join our community in finding peace and stillness in His presence.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
            Start Meditating Today
          </Button>
        </section>
      </main>
    </div>
  );
}