import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Quote, Mountain, Sun, Moon, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Meditation() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            {t("meditation.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t("meditation.description")}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Daily Inspiration Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Daily Inspiration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start your day with encouraging thoughts and reflections
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 mx-auto mb-6 text-green-600" />
              <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 dark:text-white mb-6 italic leading-relaxed">
                "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
              </blockquote>
              <p className="text-xl text-green-600 dark:text-green-400 font-semibold mb-6">
                Psalm 46:10 (NIV)
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Today's Reflection
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  In our busy world, we often forget the power of stillness. God invites us to pause, breathe, and remember His sovereignty. Take a moment today to be still in His presence and find peace in knowing that He is in control.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Heart className="w-4 h-4 mr-2" />
                Save to My Devotions
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Meditation Topics Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Meditation Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose a focus for your meditation and prayer time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "God's Love",
                description: "Meditate on the infinite love of our Heavenly Father",
                icon: "💕",
                verses: "12 verses",
                duration: "5-10 minutes"
              },
              {
                title: "Peace & Rest",
                description: "Find calm in God's presence and promises",
                icon: "🕊️",
                verses: "15 verses",
                duration: "10-15 minutes"
              },
              {
                title: "Gratitude",
                description: "Reflect on God's blessings and goodness",
                icon: "🙏",
                verses: "10 verses",
                duration: "5-10 minutes"
              },
              {
                title: "Strength & Courage",
                description: "Draw strength from God's mighty power",
                icon: "💪",
                verses: "18 verses",
                duration: "8-12 minutes"
              },
              {
                title: "Forgiveness",
                description: "Experience God's grace and mercy",
                icon: "✨",
                verses: "14 verses",
                duration: "10-15 minutes"
              },
              {
                title: "Hope & Future",
                description: "Trust in God's plans and promises",
                icon: "🌟",
                verses: "16 verses",
                duration: "8-12 minutes"
              }
            ].map((topic, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{topic.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span>{topic.verses}</span>
                    <span>{topic.duration}</span>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Leaf className="w-4 h-4 mr-2" />
                    Start Meditation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nature Meditation Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Nature Meditation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with God through His beautiful creation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mountain Majesty",
                description: "Contemplate God's strength and permanence through mountain imagery",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                reflection: "The mountains declare God's eternal strength and majesty"
              },
              {
                title: "Ocean Depths",
                description: "Reflect on God's boundless love through the vastness of the sea",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                reflection: "As deep as the ocean, so is God's love for us"
              },
              {
                title: "Forest Sanctuary",
                description: "Find peace in God's quiet presence among the trees",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                reflection: "In stillness, we hear God's gentle whisper"
              },
              {
                title: "Sunrise Hope",
                description: "Celebrate God's daily mercies with the rising sun",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                reflection: "Each sunrise reminds us of God's faithfulness"
              }
            ].map((nature, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={nature.image} 
                      alt={nature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {nature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{nature.description}</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        "{nature.reflection}"
                      </p>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Mountain className="w-4 h-4 mr-2" />
                      Begin Meditation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guided Meditation Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Guided Meditations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Step-by-step meditation guides for deeper spiritual connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Morning Prayer Meditation",
                description: "Start your day with focused prayer and meditation",
                duration: "10 minutes",
                icon: <Sun className="w-6 h-6" />,
                steps: "7 guided steps"
              },
              {
                title: "Evening Reflection",
                description: "End your day with gratitude and peaceful reflection",
                duration: "8 minutes",
                icon: <Moon className="w-6 h-6" />,
                steps: "5 guided steps"
              },
              {
                title: "Scripture Meditation",
                description: "Deep contemplation on God's Word",
                duration: "15 minutes",
                icon: <Quote className="w-6 h-6" />,
                steps: "4 guided phases"
              },
              {
                title: "Breath Prayer",
                description: "Combine breathing with prayer for inner peace",
                duration: "5 minutes",
                icon: <Leaf className="w-6 h-6" />,
                steps: "Simple technique"
              }
            ].map((meditation, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-600 mr-3">
                      {meditation.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {meditation.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {meditation.duration} • {meditation.steps}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{meditation.description}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Start Guided Meditation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <Leaf className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Cultivate Inner Peace
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Regular meditation deepens your relationship with God and brings peace to your daily life. Start your journey today.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
            Create My Meditation Plan
          </Button>
        </section>
      </main>
    </div>
  );
}