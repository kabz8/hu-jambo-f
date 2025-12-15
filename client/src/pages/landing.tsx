import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";

const featureTracks = [
  {
    title: "Biblical Money Foundations",
    description: "Build budgets, crush debt, and align spending with Scripture.",
    icon: <Wallet className="w-6 h-6" />,
    link: "/reading",
  },
  {
    title: "Generosity & Legacy",
    description: "Create a giving rhythm, plan for legacy, and bless your community.",
    icon: <HeartHandshake className="w-6 h-6" />,
    link: "/prayers",
  },
  {
    title: "Career & Calling",
    description: "Discern your calling, negotiate well, and grow income with integrity.",
    icon: <Briefcase className="w-6 h-6" />,
    link: "/worship",
  },
];

const proofPoints = [
  { label: "Learners guided", value: "18,400+" },
  { label: "Lessons & tools", value: "120+" },
  { label: "Countries reached", value: "42" },
  { label: "Group cohorts", value: "260" },
];

const pillars = [
  {
    title: "Bible-first learning",
    description: "Scripture anchors every module with practical next steps.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Actionable tools",
    description: "Budgets, giving plans, and checklists you can use today.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    title: "Community support",
    description: "Cohorts, testimonies, and prayer keep you encouraged.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Lasting impact",
    description: "Design a legacy that blesses family, church, and neighbors.",
    icon: <Target className="w-5 h-5" />,
  },
];

const programHighlights = [
  {
    title: "12-week Core Track",
    body: "Weekly lessons, Scripture reflections, and live Q&A to reset your finances around God's design.",
  },
  {
    title: "Giving & Stewardship Labs",
    body: "Guided exercises to build a sustainable generosity plan with your household or small group.",
  },
  {
    title: "Career & Calling Sprint",
    body: "Clarify calling, upgrade your skills, and negotiate fairly—without compromising integrity.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0b09] via-[#2b1a12] to-[#5c432f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Biblical Financial Courses
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-white/70">Stewardship · Generosity · Legacy</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                  Master your money<br />without losing your ministry
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-white/85 max-w-2xl">
                A complete discipleship path for finances—Bible-first lessons, ready-to-use tools, and community support so you can budget wisely, give boldly, and build a lasting legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#c89b68] text-[#0f0b09] hover:bg-[#b4834f] font-semibold text-lg px-7 py-3 shadow-lg shadow-black/20"
                >
                  <Link href="/donate">
                    Start the core track
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/70 text-white hover:bg-white hover:text-[#2b1a12] font-semibold text-lg px-7 py-3"
                >
                  <Link href="/reading">Explore lessons</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 w-full max-w-md">
              {proofPoints.map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl font-extrabold">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-white dark:bg-[#0f0b09]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="max-w-xl space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#9c7554]">What makes us different</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                A simple, repeatable system for faithful finances
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                We blend Scripture, coaching, and practical tools so you move from knowing to doing—without overwhelm.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="border border-[#e8dacf] dark:border-[#24170f] shadow-sm">
                  <CardContent className="p-5 space-y-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f3e6da] text-[#9c7554]">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 bg-[#f8efe7] dark:bg-[#14100c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9c7554]">Start with the core, add on as you grow</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">Guided tracks, real outcomes</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              Each track pairs Bible-first teaching with templates, budgets, and exercises you can put to work immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureTracks.map((track) => (
              <Card key={track.title} className="h-full border border-[#e8dacf] dark:border-[#24170f] bg-white dark:bg-[#0f0b09]">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#f3e6da] text-[#9c7554]">
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{track.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{track.description}</p>
                  <Button asChild variant="outline" className="justify-start border-[#d9c5b3] text-[#5c432f] dark:text-white hover:bg-[#f3e6da] dark:hover:bg-[#1c140e]">
                    <Link href={track.link}>
                      Explore track
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-white dark:bg-[#0f0b09]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9c7554]">Programs</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">Choose your next step</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Whether you’re resetting your budget, expanding generosity, or aligning career with calling, there’s a path built for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#f3e6da] text-[#5c432f] text-sm font-semibold">
                <Layers className="w-4 h-4" />
                Cohort-friendly
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#f3e6da] text-[#5c432f] text-sm font-semibold">
                <BarChart3 className="w-4 h-4" />
                Measurable steps
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 gap-4">
            {programHighlights.map((item) => (
              <Card key={item.title} className="border border-[#e8dacf] dark:border-[#24170f]">
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#e8dacf] dark:border-[#24170f] bg-gradient-to-r from-[#5c432f] via-[#9c7554] to-[#c89b68] text-white p-10 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-white/80">Begin today</p>
              <h2 className="text-3xl md:text-4xl font-black">Design a faithful financial life that lasts</h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Join thousands of believers budgeting, giving, and leading with peace. Your next faithful decision is one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#5c432f] hover:bg-[#f3e6da] font-semibold text-lg px-7 py-3"
                >
                  <Link href="/testimonies">
                    See testimonies
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5c432f] font-semibold text-lg px-7 py-3"
                >
                  <Link href="/donate">Support the mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
