import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Calendar, TrendingUp, Activity, Star, Crown, Heart, Music, Book, Leaf, Gamepad2, Plus, User } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user } = useAuth();

  const { data: testimonies = [], isLoading: testimoniesLoading } = useQuery({
    queryKey: ["/api/testimonies"],
    select: (data) => data?.slice(0, 5) || [],
  });

  const { data: prayerRequests = [], isLoading: prayerRequestsLoading } = useQuery({
    queryKey: ["/api/prayer-requests"],
    select: (data) => data?.slice(0, 5) || [],
  });

  const { data: verseOfDay } = useQuery({
    queryKey: ["/api/content/verse_of_day"],
    select: (data) => data?.[0] || null,
  });

  // Mock data for demonstration - in real app this would come from API
  const recentActivity = [
    { type: "prayer", title: "Prayed for healing", time: "2 hours ago", icon: "🙏" },
    { type: "testimony", title: "Shared testimony", time: "1 day ago", icon: "💝" },
    { type: "reading", title: "Read Psalm 23", time: "2 days ago", icon: "📖" },
    { type: "worship", title: "Listened to hymns", time: "3 days ago", icon: "🎵" }
  ];

  const upcomingEvents = [
    { title: "Weekly Prayer Circle", date: "Today 7:00 PM", participants: 12 },
    { title: "Bible Study Group", date: "Tomorrow 6:30 PM", participants: 8 },
    { title: "Community Worship", date: "Sunday 10:00 AM", participants: 45 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Welcome Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Member Dashboard
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome back, <span className="text-blue-600 dark:text-blue-400">{user?.firstName || "Friend"}</span>!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Continue your spiritual journey with personalized activities and community engagement
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  <Link href="/prayers">
                    Start Prayer Time
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="font-semibold">
                  <Link href="/reading">Daily Reading</Link>
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Days active</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">12</div>
                    <div className="text-xs text-gray-500">Prayers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">5</div>
                    <div className="text-xs text-gray-500">Testimonies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Faith Journey Activities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continue Your Journey</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Music className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Worship</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Songs and hymns</p>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="/worship">
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Book className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Reading</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Scripture & devotions</p>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="/reading">
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <Leaf className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Meditation</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Guided reflection</p>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="/meditation">
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                        <Gamepad2 className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Games</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Interactive learning</p>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="/games">
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <span className="text-2xl">{activity.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/testimonies">
                    <Heart className="w-4 h-4 mr-2" />
                    Share Testimony
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/prayers">
                    <Plus className="w-4 h-4 mr-2" />
                    Request Prayer
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/donate">
                    <Heart className="w-4 h-4 mr-2" />
                    Make Donation
                  </Link>
                </Button>
              </div>
            </section>

            {/* Upcoming Events */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {event.participants} participants
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Weekly Progress */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">This Week</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Prayer Goal</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">5/7 days</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '71%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Reading Goal</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">3/5 chapters</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>
        </div>
        {/* Sign out section */}
        <section className="text-center py-8">
          <Button 
            asChild
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <a href="/api/logout">Sign Out</a>
          </Button>
        </section>
      </main>
    </div>
  );
}
