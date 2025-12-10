import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Search, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 lg:p-12 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="/images/hero-bg.png" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl space-y-6">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-1 text-sm font-medium rounded-full backdrop-blur-sm">
              Q4 2025 Update
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Transcend SEO Program Portal
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
              A comprehensive overview of our organic growth strategy, performance metrics, and collaborative vision for 2026.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/strategy">
                <Button size="lg" variant="secondary" className="font-semibold shadow-lg hover:shadow-xl transition-all">
                  Explore Strategy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/performance">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                  View Performance
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              label: "Top 3 Keywords", 
              value: "373", 
              change: "+16%", 
              icon: Search,
              desc: "High visibility terms"
            },
            { 
              label: "SERP Features", 
              value: "653", 
              change: "+65%", 
              icon: TrendingUp,
              desc: "Rich snippets & features"
            },
            { 
              label: "Revenue (Q3)", 
              value: "$76.7K", 
              change: "+22%", 
              icon: ShieldCheck,
              desc: "Direct organic revenue"
            },
            { 
              label: "Mobile Visibility", 
              value: "90%", 
              change: "+17%", 
              icon: Users,
              desc: "Market share vs competitors"
            },
          ].map((metric, index) => (
            <Card key={index} className="glass-card hover:shadow-md transition-all duration-300 border-t-4 border-t-secondary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary">
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-mono text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold font-mono tracking-tight text-foreground">{metric.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <p className="text-xs text-muted-foreground/70 pt-2">{metric.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Team Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">The Team</h2>
            <div className="h-px flex-1 bg-border ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Elma Cronje", role: "Digital Strategist", initials: "EC" },
              { name: "Chris Brooks", role: "SEO Specialist", initials: "CB" },
              { name: "Stephan Marais", role: "Head of SEO", initials: "SM" },
              { name: "Aimee Bishop", role: "Copywriter", initials: "AB" },
            ].map((member, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Introduction Content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Program Objectives</CardTitle>
                <CardDescription>Our core focus areas for driving organic growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Transcend SEO program is designed to build long-term, sustainable organic growth through a combination of technical excellence, authoritative content, and strategic keyword targeting.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {[
                    "Grow Organic Search Traffic",
                    "Increase Non-Branded Rankings",
                    "Capture Commercial Intent",
                    "Expand Market Visibility"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm font-medium text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="bg-primary text-primary-foreground h-full border-none shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/collaboration.png')] opacity-10 bg-cover bg-center" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl">Collaboration Focus</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  We are excited to welcome Adrienne to the process. Your expertise is crucial for elevating our content's authority and ensuring compliance.
                </p>
                <Link href="/vision">
                  <Button variant="secondary" className="w-full font-semibold">
                    View Collaboration Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
