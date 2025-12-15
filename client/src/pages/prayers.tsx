import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrayerForm from "@/components/PrayerForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function Prayers() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: prayerRequests = [], isLoading } = useQuery({
    queryKey: ["/api/prayer-requests", selectedCategory],
    queryFn: async () => {
      const url = selectedCategory === "all" 
        ? "/api/prayer-requests"
        : `/api/prayer-requests?category=${selectedCategory}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch prayer requests");
      return response.json();
    },
  });

  const categories = [
    { id: "all", label: "All Prayers", color: "bg-gray-100 text-gray-800" },
    { id: "marriages", label: "Marriages", color: "bg-pink-100 text-pink-800" },
    { id: "families", label: "Families", color: "bg-green-100 text-green-800" },
    { id: "individuals", label: "Individuals", color: "bg-blue-100 text-blue-800" },
    { id: "protection", label: "Protection", color: "bg-yellow-100 text-yellow-800" },
    { id: "thanksgiving", label: "Thanksgiving", color: "bg-orange-100 text-orange-800" },
  ];



  return (
    <div className="min-h-screen bg-background/80 dark:bg-[#050403] transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl font-bold mb-4">
                <Heart className="inline w-8 h-8 mr-2" />
                Pray Along
              </h1>
              <p className="text-xl opacity-90">
                Join our prayer community for support and intercession
              </p>
            </div>
            <div className="hidden md:block">
              <PrayerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Mobile Share Button */}
        <div className="md:hidden mb-6">
          <PrayerForm />
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prayer Wall</h2>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading prayer requests...</p>
                  </div>
                ) : prayerRequests.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        No prayer requests yet
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Be the first to share your prayer request in this category!
                      </p>
                      <PrayerForm />
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-6">
                    {prayerRequests.map((prayer: any) => (
                      <Card key={prayer.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2">{prayer.title}</CardTitle>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(prayer.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  Anonymous
                                </div>
                              </div>
                            </div>
                            <Badge 
                              variant="secondary" 
                              className={`${categories.find(c => c.id === prayer.category)?.color || 'bg-gray-100 text-gray-800'}`}
                            >
                              {prayer.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm max-w-none dark:prose-invert">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                              {prayer.content}
                            </p>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                              Please join us in prayer for this request
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Prayer Guidelines */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Prayer Guidelines
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How to Pray</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Approach God with a humble heart</li>
                    <li>• Pray with faith and sincerity</li>
                    <li>• Include thanksgiving in your prayers</li>
                    <li>• Pray for others as you would for yourself</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Community Support</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• All prayer requests are reviewed before posting</li>
                    <li>• We maintain anonymity to protect privacy</li>
                    <li>• Join others in praying for shared requests</li>
                    <li>• Share testimonies of answered prayers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Share Your Prayer Request
              </h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Don't carry your burdens alone. Share your prayer request with our community 
                and let us stand together in faith, supporting one another through prayer.
              </p>
              <PrayerForm />
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
