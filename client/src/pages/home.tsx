import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import TestimonyForm from "@/components/TestimonyForm";
import PrayerForm from "@/components/PrayerForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Music, Book, Leaf, Gamepad2, Plus, Calendar, User } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-600 to-purple-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, {user?.firstName || "Friend"}!
            </h1>
            <p className="text-xl opacity-90">
              Continue your faith journey with our community
            </p>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Share Testimony</h3>
                <div className="mt-4">
                  <TestimonyForm />
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Request Prayer</h3>
                <div className="mt-4">
                  <PrayerForm buttonText="Request Prayer" />
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Music className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Worship</h3>
                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                  Listen
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Book className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Scripture</h3>
                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  Read
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Verse of the Day */}
        {verseOfDay && (
          <section className="mb-8">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardHeader>
                <CardTitle className="text-center text-blue-800 dark:text-blue-200">
                  <Book className="inline w-6 h-6 mr-2" />
                  Verse of the Day
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                  "{verseOfDay.content}"
                </p>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {verseOfDay.title}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Community Feed */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Feed</h2>
          
          <Tabs defaultValue="testimonies" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="testimonies">Recent Testimonies</TabsTrigger>
              <TabsTrigger value="prayers">Prayer Requests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="testimonies" className="space-y-4">
              {testimoniesLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Loading testimonies...</p>
                </div>
              ) : testimonies.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">No testimonies yet. Be the first to share!</p>
                  </CardContent>
                </Card>
              ) : (
                testimonies.map((testimony: any) => (
                  <Card key={testimony.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{testimony.title}</CardTitle>
                        <Badge variant="outline">
                          {testimony.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {testimony.content.substring(0, 200)}...
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(testimony.createdAt).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
            
            <TabsContent value="prayers" className="space-y-4">
              {prayerRequestsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Loading prayer requests...</p>
                </div>
              ) : prayerRequests.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">No prayer requests yet. Be the first to share!</p>
                  </CardContent>
                </Card>
              ) : (
                prayerRequests.map((prayer: any) => (
                  <Card key={prayer.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{prayer.title}</CardTitle>
                        <Badge variant="outline">
                          {prayer.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {prayer.content.substring(0, 200)}...
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(prayer.createdAt).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* Quick Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/testimonies">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">All Testimonies</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/prayers">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Prayer Wall</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/donate">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Donate</h3>
                </CardContent>
              </Card>
            </Link>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Gamepad2 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Games</h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Logout */}
        <section className="text-center">
          <Button 
            asChild
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <a href="/api/logout">Logout</a>
          </Button>
        </section>
      </main>
    </div>
  );
}
