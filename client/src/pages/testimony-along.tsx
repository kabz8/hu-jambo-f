import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Users, Share2, Star, MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import TestimonyForm from "@/components/TestimonyForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TestimonyAlong() {
  const { t } = useLanguage();
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [likedTestimonies, setLikedTestimonies] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showComments, setShowComments] = useState(null);
  const [comments, setComments] = useState({
    0: [
      { author: "Sarah K.", text: "This is so encouraging! Thank you for sharing.", time: "2 hours ago" },
      { author: "Michael R.", text: "God is so good! Praise Him for this testimony.", time: "4 hours ago" }
    ],
    1: [
      { author: "David L.", text: "Amazing story of God's faithfulness!", time: "1 day ago" },
      { author: "Grace M.", text: "I needed to hear this today. Blessings!", time: "2 days ago" }
    ],
    2: [
      { author: "Pastor John", text: "What a powerful testimony of redemption!", time: "3 days ago" }
    ]
  });

  const handleLike = (testimonyIndex) => {
    const newLiked = new Set(likedTestimonies);
    if (newLiked.has(testimonyIndex)) {
      newLiked.delete(testimonyIndex);
    } else {
      newLiked.add(testimonyIndex);
    }
    setLikedTestimonies(newLiked);
  };

  const handleReadMore = (testimony) => {
    setSelectedTestimony(testimony);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // In a real app, this would filter testimonies by category
    alert(`Viewing ${category.title} testimonies - feature coming soon!`);
  };

  const handleViewComments = (testimonyIndex) => {
    setShowComments(showComments === testimonyIndex ? null : testimonyIndex);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            Testimony Along
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Share your faith journey and be inspired by others' testimonies of God's goodness
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Share Your Testimony Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your testimony can encourage and inspire others in their faith journey
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <TestimonyForm />
          </div>
        </section>

        {/* Featured Testimonies Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Recent Testimonies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Read how God is working in the lives of our community members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healed from Addiction",
                author: "Sarah M.",
                category: "Personal",
                excerpt: "After years of struggling with addiction, God gave me the strength to overcome. Today I'm 2 years clean and helping others find freedom.",
                date: "3 days ago",
                likes: 45,
                comments: 12
              },
              {
                title: "Marriage Restored",
                author: "John & Mary K.",
                category: "Marriage",
                excerpt: "We were on the brink of divorce, but through prayer and counseling, God restored our marriage stronger than ever.",
                date: "1 week ago",
                likes: 78,
                comments: 23
              },
              {
                title: "Miracle Healing",
                author: "David L.",
                category: "Healing",
                excerpt: "Doctors said I had 6 months to live. That was 3 years ago. God's healing power is real and He's not finished with me yet.",
                date: "2 weeks ago",
                likes: 156,
                comments: 45
              },
              {
                title: "Found Purpose",
                author: "Jennifer R.",
                category: "Personal",
                excerpt: "I felt lost and without purpose until I surrendered my life to Christ. Now I'm serving in ministry and have never been happier.",
                date: "3 weeks ago",
                likes: 34,
                comments: 8
              },
              {
                title: "Financial Breakthrough",
                author: "Michael T.",
                category: "Provision",
                excerpt: "We were facing foreclosure when God provided a new job opportunity. His timing is always perfect.",
                date: "1 month ago",
                likes: 67,
                comments: 19
              },
              {
                title: "Prodigal Son Returns",
                author: "Patricia W.",
                category: "Family",
                excerpt: "After 5 years of praying for my son, he came home to faith. Never stop praying for your loved ones.",
                date: "1 month ago",
                likes: 89,
                comments: 31
              }
            ].map((testimony, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                      {testimony.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{testimony.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {testimony.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">by {testimony.author}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {testimony.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <button 
                        onClick={() => handleLike(index)}
                        className={`flex items-center hover:text-red-500 transition-colors ${
                          likedTestimonies.has(index) ? 'text-red-500' : ''
                        }`}
                      >
                        <Heart className={`w-4 h-4 mr-1 ${likedTestimonies.has(index) ? 'fill-current' : ''}`} />
                        {testimony.likes + (likedTestimonies.has(index) ? 1 : 0)}
                      </button>
                      <button 
                        onClick={() => handleViewComments(index)}
                        className="flex items-center hover:text-blue-500 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {testimony.comments} comments
                      </button>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleReadMore(testimony)}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
                
                {/* Comments Section */}
                {showComments === index && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Comments</h4>
                    <div className="space-y-3">
                      {comments[index] ? comments[index].map((comment, commentIndex) => (
                        <div key={commentIndex} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-gray-900 dark:text-white text-sm">
                              {comment.author}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {comment.time}
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {comment.text}
                          </p>
                        </div>
                      )) : (
                        <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                          No comments yet. Be the first to encourage with a comment!
                        </p>
                      )}
                      
                      {/* Add Comment Button */}
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => alert('Comment feature coming soon! This will allow users to add encouraging comments.')}
                        >
                          Add Encouraging Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Testimony Categories Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find testimonies that relate to your situation or interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Personal Growth",
                icon: "🌱",
                count: "45 testimonies",
                color: "bg-green-500"
              },
              {
                title: "Healing & Health",
                icon: "🙏",
                count: "32 testimonies",
                color: "bg-blue-500"
              },
              {
                title: "Marriage & Family",
                icon: "👨‍👩‍👧‍👦",
                count: "28 testimonies",
                color: "bg-pink-500"
              },
              {
                title: "Financial Provision",
                icon: "💝",
                count: "23 testimonies",
                color: "bg-yellow-500"
              },
              {
                title: "Salvation Stories",
                icon: "✨",
                count: "67 testimonies",
                color: "bg-purple-500"
              },
              {
                title: "Ministry & Calling",
                icon: "📢",
                count: "19 testimonies",
                color: "bg-orange-500"
              },
              {
                title: "Overcoming Addiction",
                icon: "🆓",
                count: "15 testimonies",
                color: "bg-red-500"
              },
              {
                title: "Answered Prayers",
                icon: "🙌",
                count: "41 testimonies",
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
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{category.count}</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white"
                    onClick={() => handleCategoryClick(category)}
                  >
                    View Stories
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Community Impact
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our testimony sharing is building faith and hope in our community
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">284</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Testimonies</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,247</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lives Encouraged</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">52</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">New Believers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Prayers Answered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimony Tips Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Tips for Sharing Your Testimony
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some helpful guidelines for writing an impactful testimony
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Be Authentic",
                description: "Share your genuine experience with honesty and vulnerability. Your authentic story will resonate more than a perfect one.",
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: "Include Specific Details",
                description: "Mention specific ways God worked in your situation. Details help others see God's hand in your story.",
                icon: <Star className="w-6 h-6" />
              },
              {
                title: "Share the Transformation",
                description: "Explain how your life changed after encountering God. Show the before and after of your journey.",
                icon: <Share2 className="w-6 h-6" />
              },
              {
                title: "Give God the Glory",
                description: "Make sure your testimony points to God's goodness and faithfulness rather than your own efforts.",
                icon: <Calendar className="w-6 h-6" />
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
          <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Your Story Matters
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            God has done amazing things in your life. Share your testimony to encourage others and bring glory to His name.
          </p>
          <Button 
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            onClick={() => {
              // Scroll to the testimony form at the top
              document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Share Your Testimony Now
          </Button>
        </section>
      </main>

      <Footer />

      {/* Read More Dialog */}
      <Dialog open={!!selectedTestimony} onOpenChange={() => setSelectedTestimony(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedTestimony && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedTestimony.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                    {selectedTestimony.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{selectedTestimony.date}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">by {selectedTestimony.author}</p>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedTestimony.excerpt}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This is where the full testimony content would appear. In this demonstration, you can see how clicking "Read More" opens a detailed view of the testimony. The actual implementation would load the complete testimony text from a database.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This interactive feature shows how users can engage with testimonies in a meaningful way, allowing them to read the full stories that inspire and encourage their faith journey.
                  </p>
                </div>
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Heart className="w-4 h-4 mr-1" />
                    {selectedTestimony.likes} likes
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {selectedTestimony.comments} comments
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}