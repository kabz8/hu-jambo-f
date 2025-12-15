import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Music,
  Play,
  Download,
  Heart,
  Mic,
  Users,
  BookOpen,
  Gift,
  Sunrise,
  Sparkles,
  MoonStar,
  Book,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SingAlong() {
  const { t } = useLanguage();
  const [likedSongs, setLikedSongs] = useState(new Set());
  const [playingSong, setPlayingSong] = useState(null);

  const handleLikeSong = (songIndex) => {
    const newLiked = new Set(likedSongs);
    if (newLiked.has(songIndex)) {
      newLiked.delete(songIndex);
    } else {
      newLiked.add(songIndex);
    }
    setLikedSongs(newLiked);
  };

  const handlePlaySong = (songIndex) => {
    if (playingSong === songIndex) {
      setPlayingSong(null);
      alert('Song paused! In a real app, this would control audio playback.');
    } else {
      setPlayingSong(songIndex);
      alert('Song playing! In a real app, this would start audio playback.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Music className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 faith-heading">
            Sing Along
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our community in worship through song and make a joyful noise unto the Lord
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Featured Songs Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Featured Worship Songs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Popular songs for community worship and personal devotion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Amazing Grace",
                artist: "Traditional Hymn",
                key: "G Major",
                tempo: "Slow",
                duration: "4:32",
                difficulty: "Beginner",
                lyrics: "Amazing grace, how sweet the sound, that saved a wretch like me...",
                singAlongCount: 234
              },
              {
                title: "How Great Thou Art",
                artist: "Traditional Hymn",
                key: "Bb Major",
                tempo: "Moderate",
                duration: "3:45",
                difficulty: "Intermediate",
                lyrics: "O Lord my God, when I in awesome wonder, consider all the worlds thy hands have made...",
                singAlongCount: 189
              },
              {
                title: "10,000 Reasons",
                artist: "Matt Redman",
                key: "C Major",
                tempo: "Moderate",
                duration: "5:18",
                difficulty: "Beginner",
                lyrics: "Bless the Lord, O my soul, O my soul, worship His holy name...",
                singAlongCount: 345
              },
              {
                title: "Way Maker",
                artist: "Sinach",
                key: "D Major",
                tempo: "Moderate",
                duration: "6:12",
                difficulty: "Intermediate",
                lyrics: "You are here, moving in our midst, I worship You, I worship You...",
                singAlongCount: 456
              },
              {
                title: "What a Beautiful Name",
                artist: "Hillsong Worship",
                key: "E Major",
                tempo: "Slow",
                duration: "4:18",
                difficulty: "Advanced",
                lyrics: "You were the Word at the beginning, one with God the Lord Most High...",
                singAlongCount: 278
              },
              {
                title: "Goodness of God",
                artist: "Bethel Music",
                key: "F Major",
                tempo: "Moderate",
                duration: "5:33",
                difficulty: "Intermediate",
                lyrics: "I love You, Lord, oh Your mercy never fails me...",
                singAlongCount: 298
              }
            ].map((song, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        {song.difficulty}
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                        {song.key}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{song.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {song.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">by {song.artist}</p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                      "{song.lyrics}"
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>Tempo: {song.tempo}</span>
                    <span>{song.singAlongCount} singing</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className={`${
                        playingSong === index 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white flex-1`}
                      onClick={() => handlePlaySong(index)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {playingSong === index ? 'Pause' : 'Sing Along'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => alert('Lyrics download feature coming soon!')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Lyrics
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={`${likedSongs.has(index) ? 'text-red-500 border-red-500' : ''}`}
                      onClick={() => handleLikeSong(index)}
                    >
                      <Heart className={`w-4 h-4 ${likedSongs.has(index) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Song Categories Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Song Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from different types of worship songs for various moods and occasions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Traditional Hymns",
                icon: <BookOpen className="w-6 h-6" />,
                count: "45 songs",
                description: "Classic hymns that have blessed generations",
                color: "bg-blue-500"
              },
              {
                title: "Contemporary Worship",
                icon: <Music className="w-6 h-6" />,
                count: "67 songs",
                description: "Modern worship songs for today's church",
                color: "bg-purple-500"
              },
              {
                title: "Children's Songs",
                icon: <Heart className="w-6 h-6" />,
                count: "32 songs",
                description: "Fun and educational songs for kids",
                color: "bg-yellow-500"
              },
              {
                title: "Christmas Carols",
                icon: <Gift className="w-6 h-6" />,
                count: "28 songs",
                description: "Celebrate the birth of Jesus",
                color: "bg-green-500"
              },
              {
                title: "Easter Songs",
                icon: <Sunrise className="w-6 h-6" />,
                count: "19 songs",
                description: "Celebrate the resurrection",
                color: "bg-orange-500"
              },
              {
                title: "Praise & Worship",
                icon: <Sparkles className="w-6 h-6" />,
                count: "54 songs",
                description: "High-energy songs of praise",
                color: "bg-red-500"
              },
              {
                title: "Contemplative",
                icon: <MoonStar className="w-6 h-6" />,
                count: "23 songs",
                description: "Quiet songs for reflection",
                color: "bg-teal-500"
              },
              {
                title: "Scripture Songs",
                icon: <Book className="w-6 h-6" />,
                count: "31 songs",
                description: "Songs based on Bible verses",
                color: "bg-pink-500"
              }
            ].map((category, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{category.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{category.count}</p>
                  <Button size="sm" className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                    Browse Songs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Sing-Along Sessions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Live Sing-Along Sessions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our scheduled community singing sessions online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sunday Morning Praise",
                time: "9:00 AM - 10:00 AM",
                description: "Start your Sunday with uplifting worship songs",
                host: "Pastor John & Worship Team",
                participants: "145 people",
                upcoming: "This Sunday"
              },
              {
                title: "Wednesday Night Hymns",
                time: "7:00 PM - 8:00 PM",
                description: "Traditional hymn singing with piano accompaniment",
                host: "Elder Mary Thompson",
                participants: "78 people",
                upcoming: "Tomorrow"
              },
              {
                title: "Children's Sing-Along",
                time: "3:00 PM - 4:00 PM",
                description: "Fun worship songs for kids and families",
                host: "Ms. Sarah Kids Ministry",
                participants: "234 families",
                upcoming: "Saturday"
              },
              {
                title: "Christmas Carol Night",
                time: "6:00 PM - 7:30 PM",
                description: "Celebrate the season with classic Christmas carols",
                host: "Community Choir",
                participants: "189 people",
                upcoming: "Dec 23rd"
              }
            ].map((session, index) => (
              <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {session.title}
                    </h3>
                    <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                      {session.upcoming}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{session.time}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{session.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Mic className="w-4 h-4 mr-2" />
                      Host: {session.host}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      {session.participants} joining
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

        {/* Song Requests Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Music className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Request a Song
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Can't find a song you'd like to sing? Request it and we'll add it to our collection!
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Song Title
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter song title..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Artist/Composer
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter artist name..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Why do you want this song added?
                  </label>
                  <textarea 
                    placeholder="Tell us why this song would be meaningful for our community..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Submit Request
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Stats Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
                  Community Singing Stats
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our community is growing in worship together
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">1,234</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Singers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">456</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Songs Available</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">89</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Live Sessions</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2,567</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Hours of Worship</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Singing Tips Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 faith-heading">
              Singing Tips
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Helpful tips to improve your worship singing experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sing from Your Heart",
                description: "Focus on the meaning of the words rather than perfect pitch. God loves sincere worship.",
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: "Practice Breathing",
                description: "Take deep breaths and support your voice. This helps with sustained notes and tone quality.",
                icon: <Music className="w-6 h-6" />
              },
              {
                title: "Know the Song",
                description: "Familiarize yourself with the lyrics beforehand so you can focus on worship instead of reading.",
                icon: <Play className="w-6 h-6" />
              },
              {
                title: "Sing with Others",
                description: "Join group singing sessions to build confidence and experience the power of united voices.",
                icon: <Users className="w-6 h-6" />
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
          <Music className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 faith-heading">
            Lift Your Voice in Worship
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join our community in singing praises to God. Whether you're a seasoned vocalist or just starting out, your voice matters in our worship.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
            Start Singing Today
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}