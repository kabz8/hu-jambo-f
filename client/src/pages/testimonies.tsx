import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import TestimonyForm from "@/components/TestimonyForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function Testimonies() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: testimonies = [], isLoading } = useQuery({
    queryKey: ["/api/testimonies", selectedCategory],
    queryFn: async () => {
      const url = selectedCategory === "all" 
        ? "/api/testimonies"
        : `/api/testimonies?category=${selectedCategory}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch testimonies");
      return response.json();
    },
  });

  const categories = [
    { id: "all", label: "All Testimonies", color: "bg-gray-100 text-gray-800" },
    { id: "personal", label: "Personal", color: "bg-blue-100 text-blue-800" },
    { id: "group", label: "Group", color: "bg-green-100 text-green-800" },
    { id: "family", label: "Family", color: "bg-purple-100 text-purple-800" },
    { id: "marriage", label: "Marriage", color: "bg-pink-100 text-pink-800" },
  ];



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-600 to-purple-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white py-12">
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
                Testimony Along
              </h1>
              <p className="text-xl opacity-90">
                Share your uplifting testimonies and be encouraged by others
              </p>
            </div>
            <div className="hidden md:block">
              <TestimonyForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Mobile Share Button */}
        <div className="md:hidden mb-6">
          <TestimonyForm />
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Browse Testimonies</h2>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading testimonies...</p>
                  </div>
                ) : testimonies.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        No testimonies yet
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Be the first to share your testimony in this category!
                      </p>
                      <TestimonyForm />
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-6">
                    {testimonies.map((testimony: any) => (
                      <Card key={testimony.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2">{testimony.title}</CardTitle>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(testimony.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  Anonymous
                                </div>
                              </div>
                            </div>
                            <Badge 
                              variant="secondary" 
                              className={`${categories.find(c => c.id === testimony.category)?.color || 'bg-gray-100 text-gray-800'}`}
                            >
                              {testimony.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm max-w-none dark:prose-invert">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                              {testimony.content}
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

        {/* Inspiration Section */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Share Your Story
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Your testimony can be a source of hope and encouragement to others. 
                Share how God has worked in your life and inspire others in their faith journey.
              </p>
              <TestimonyForm />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
