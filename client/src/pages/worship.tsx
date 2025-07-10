import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Play, Download, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";

export default function Worship() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Music className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            {t("worship.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t("worship.description")}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hymn Songs Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Traditional Hymns
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Timeless hymns that have blessed generations of believers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Amazing Grace", 
                artist: "John Newton", 
                duration: "4:32",
                description: "A beloved hymn of redemption and grace"
              },
              { 
                title: "How Great Thou Art", 
                artist: "Carl Boberg", 
                duration: "3:45",
                description: "A hymn of praise to God's majesty"
              },
              { 
                title: "It Is Well With My Soul", 
                artist: "Horatio Spafford", 
                duration: "4:18",
                description: "A hymn of faith through trials"
              },
              { 
                title: "Holy, Holy, Holy", 
                artist: "Reginald Heber", 
                duration: "3:52",
                description: "A hymn of worship and reverence"
              },
              { 
                title: "Great Is Thy Faithfulness", 
                artist: "Thomas Chisholm", 
                duration: "4:25",
                description: "A hymn celebrating God's faithfulness"
              },
              { 
                title: "Be Thou My Vision", 
                artist: "Irish Hymn", 
                duration: "3:38",
                description: "An ancient prayer for spiritual guidance"
              }
            ].map((hymn, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {hymn.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{hymn.artist}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{hymn.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{hymn.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Praise & Worship Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Praise & Worship
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Contemporary worship songs for spiritual connection and praise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "10,000 Reasons", 
                artist: "Matt Redman", 
                duration: "5:18",
                description: "A modern hymn of gratitude and praise"
              },
              { 
                title: "How Deep the Father's Love", 
                artist: "Stuart Townend", 
                duration: "4:42",
                description: "A powerful reflection on God's sacrificial love"
              },
              { 
                title: "In Christ Alone", 
                artist: "Keith Getty", 
                duration: "4:55",
                description: "A declaration of faith in Christ's victory"
              },
              { 
                title: "Way Maker", 
                artist: "Sinach", 
                duration: "6:12",
                description: "A powerful anthem of God's faithfulness"
              },
              { 
                title: "Goodness of God", 
                artist: "Bethel Music", 
                duration: "5:33",
                description: "A celebration of God's eternal goodness"
              },
              { 
                title: "What a Beautiful Name", 
                artist: "Hillsong Worship", 
                duration: "4:18",
                description: "A worship song about the name of Jesus"
              }
            ].map((song, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {song.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{song.artist}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{song.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{song.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Instruments Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Instrumental Worship
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beautiful instrumental music for meditation and prayer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Piano Meditations", 
                description: "Peaceful piano arrangements of beloved hymns",
                tracks: "12 tracks • 45 minutes"
              },
              { 
                title: "Guitar & Strings", 
                description: "Acoustic guitar and string ensemble worship",
                tracks: "8 tracks • 32 minutes"
              },
              { 
                title: "Orchestral Praise", 
                description: "Full orchestral arrangements of worship songs",
                tracks: "6 tracks • 28 minutes"
              },
              { 
                title: "Ambient Worship", 
                description: "Atmospheric instrumental music for prayer",
                tracks: "10 tracks • 38 minutes"
              }
            ].map((collection, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{collection.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{collection.tracks}</p>
                  <div className="flex gap-2">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Play Collection
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Share Your Heart in Worship
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Music is a gift from God that unites our hearts in praise. Join our community in sharing favorite worship songs and testimonies.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
            Share Your Testimony
          </Button>
        </section>
      </main>
    </div>
  );
}