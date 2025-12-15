import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Heart,
  Users,
  Clock,
  BookOpen,
  Flame,
  Shield,
  HeartPulse,
  HeartHandshake,
  Coins,
  Sparkles,
  Compass,
  ShieldCheck,
  Megaphone,
  HandHeart,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import PrayerForm from "@/components/PrayerForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrayAlong() {
  const { t } = useLanguage();
  const [selectedPrayer, setSelectedPrayer] = useState(null);
  const [prayedFor, setPrayedFor] = useState(new Set());

  const handlePrayForThis = (prayerIndex) => {
    const newPrayedFor = new Set(prayedFor);
    if (newPrayedFor.has(prayerIndex)) {
      newPrayedFor.delete(prayerIndex);
    } else {
      newPrayedFor.add(prayerIndex);
    }
    setPrayedFor(newPrayedFor);
  };

  const handleViewDetails = (prayer) => {
    setSelectedPrayer(prayer);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            Pray Along
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our community in prayer and experience the power of united intercession
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Submit Prayer Request Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Submit Your Prayer Request
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Share your prayer needs with our community and experience the power of united prayer
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <PrayerForm />
          </div>
        </section>

        {/* Active Prayer Requests Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Current Prayer Requests
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join us in praying for these specific needs in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healing for Cancer Patient",
                author: "Sarah M.",
                category: "Health",
                request: "Please pray for my mother who was recently diagnosed with cancer. We're believing God for complete healing and peace during treatment.",
                date: "2 hours ago",
                prayerCount: 45,
                urgent: true
              },
              {
                title: "Job Opportunity",
                author: "Michael K.",
                category: "Financial",
                request: "I've been unemployed for 6 months. Praying for the right job opportunity to provide for my family.",
                date: "1 day ago",
                prayerCount: 23,
                urgent: false
              },
              {
                title: "Marriage Restoration",
                author: "Jennifer L.",
                category: "Relationship",
                request: "My husband and I are going through a difficult time. Please pray for reconciliation and God's healing in our marriage.",
                date: "3 days ago",
                prayerCount: 67,
                urgent: false
              },
              {
                title: "Prodigal Son",
                author: "David R.",
                category: "Family",
                request: "My son has turned away from faith and is making poor choices. Praying for his heart to be softened and for his return to God.",
                date: "5 days ago",
                prayerCount: 89,
                urgent: false
              },
              {
                title: "Financial Breakthrough",
                author: "Maria S.",
                category: "Financial",
                request: "Facing foreclosure on our home. Praying for a miracle and God's provision during this difficult time.",
                date: "1 week ago",
                prayerCount: 134,
                urgent: true
              },
              {
                title: "Salvation for Family",
                author: "Robert T.",
                category: "Salvation",
                request: "Please pray for my family members who don't know Jesus. Praying for their hearts to be open to the Gospel.",
                date: "1 week ago",
                prayerCount: 56,
                urgent: false
              }
            ].map((request, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                        {request.category}
                      </span>
                      {request.urgent && (
                        <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-2 py-1 rounded">
                          Urgent
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{request.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {request.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">by {request.author}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {request.request}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Heart className="w-4 h-4 mr-1" />
                      {request.prayerCount + (prayedFor.has(index) ? 1 : 0)} praying
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewDetails(request)}
                      >
                        Details
                      </Button>
                      <Button 
                        size="sm" 
                        className={`${
                          prayedFor.has(index) 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-purple-600 hover:bg-purple-700'
                        } text-white`}
                        onClick={() => handlePrayForThis(index)}
                      >
                        {prayedFor.has(index) ? 'Prayed ✓' : 'Pray Now'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prayer Categories Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Prayer Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find prayer requests by category and join in intercession
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Health & Healing",
                icon: <HeartPulse className="w-6 h-6" />,
                count: "34 requests",
                color: "bg-green-500"
              },
              {
                title: "Family & Relationships",
                icon: <HeartHandshake className="w-6 h-6" />,
                count: "28 requests",
                color: "bg-blue-500"
              },
              {
                title: "Financial Provision",
                icon: <Coins className="w-6 h-6" />,
                count: "19 requests",
                color: "bg-yellow-500"
              },
              {
                title: "Salvation",
                icon: <Sparkles className="w-6 h-6" />,
                count: "42 requests",
                color: "bg-purple-500"
              },
              {
                title: "Guidance & Wisdom",
                icon: <Compass className="w-6 h-6" />,
                count: "25 requests",
                color: "bg-orange-500"
              },
              {
                title: "Protection & Safety",
                icon: <ShieldCheck className="w-6 h-6" />,
                count: "16 requests",
                color: "bg-red-500"
              },
              {
                title: "Ministry & Calling",
                icon: <Megaphone className="w-6 h-6" />,
                count: "12 requests",
                color: "bg-teal-500"
              },
              {
                title: "General Prayers",
                icon: <HandHeart className="w-6 h-6" />,
                count: "31 requests",
                color: "bg-pink-500"
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
                  <Button size="sm" className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                    View Requests
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prayer Schedule Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Community Prayer Schedule
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our scheduled prayer times for maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Morning Prayer",
                time: "6:00 AM - 7:00 AM",
                description: "Start your day with prayer and scripture reading",
                icon: <Clock className="w-6 h-6" />,
                participants: "45 people"
              },
              {
                title: "Noon Intercession",
                time: "12:00 PM - 12:30 PM",
                description: "Midday prayer for urgent requests and world needs",
                icon: <Flame className="w-6 h-6" />,
                participants: "23 people"
              },
              {
                title: "Evening Devotion",
                time: "7:00 PM - 8:00 PM",
                description: "Evening prayer with thanksgiving and requests",
                icon: <BookOpen className="w-6 h-6" />,
                participants: "67 people"
              },
              {
                title: "Night Watch",
                time: "10:00 PM - 11:00 PM",
                description: "Night prayer for protection and peace",
                icon: <Shield className="w-6 h-6" />,
                participants: "19 people"
              }
            ].map((schedule, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-600 mr-3">
                      {schedule.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {schedule.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{schedule.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{schedule.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{schedule.participants} joining</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Join Prayer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prayer Impact Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Prayer Impact
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our united prayers are making a difference
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2,847</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Prayers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">456</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Requests</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">189</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Answered Prayers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">78</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Miracle Reports</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prayer Guidelines Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Prayer Guidelines
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tips for effective prayer and intercession
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pray with Faith",
                description: "Approach God with confidence, believing He hears and answers prayer according to His will.",
                verse: "Mark 11:24"
              },
              {
                title: "Pray Specifically",
                description: "Be specific in your requests while trusting God's wisdom in how He chooses to answer.",
                verse: "Philippians 4:6"
              },
              {
                title: "Pray Persistently",
                description: "Don't give up! Continue praying even when answers seem delayed.",
                verse: "Luke 18:1"
              },
              {
                title: "Pray with Others",
                description: "There's power in united prayer. Join with others for greater impact.",
                verse: "Matthew 18:20"
              }
            ].map((guideline, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {guideline.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{guideline.description}</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                    {guideline.verse}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Join Us in Prayer
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Your prayers matter! Join our community in intercession and experience the power of united prayer.
          </p>
          <Button 
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            onClick={() => {
              // Scroll to the prayer form at the top
              document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Submit a Prayer Request
          </Button>
        </section>
      </main>

      <Footer />

      {/* Prayer Details Dialog */}
      <Dialog open={!!selectedPrayer} onOpenChange={() => setSelectedPrayer(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedPrayer && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedPrayer.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                      {selectedPrayer.category}
                    </span>
                    {selectedPrayer.urgent && (
                      <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-2 py-1 rounded">
                        Urgent
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{selectedPrayer.date}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">by {selectedPrayer.author}</p>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedPrayer.request}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    <strong>How to pray for this request:</strong>
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>Pray for God's healing power and peace</li>
                    <li>Ask for wisdom for the doctors and medical team</li>
                    <li>Pray for strength for the family during this time</li>
                    <li>Believe God for complete restoration</li>
                  </ul>
                </div>
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Heart className="w-4 h-4 mr-1" />
                    {selectedPrayer.prayerCount} people praying
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