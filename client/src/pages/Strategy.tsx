import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle, BarChart, ArrowUpRight } from "lucide-react";

export default function Strategy() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Strategy & Opportunity</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Our data-driven approach to capturing market share and building authority in the sleep health space.
          </p>
        </div>

        <Tabs defaultValue="opportunity" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:w-[600px] bg-muted/50 p-1">
            <TabsTrigger value="opportunity">Initial Opportunity</TabsTrigger>
            <TabsTrigger value="strategy">Core Strategy</TabsTrigger>
            <TabsTrigger value="pillars">Strategic Pillars</TabsTrigger>
          </TabsList>

          {/* Opportunity Content */}
          <TabsContent value="opportunity" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    Market Position Analysis
                  </CardTitle>
                  <CardDescription>Findings from June 2024 Proposal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/30 border border-border/50">
                      <div className="p-2 bg-background rounded-md shadow-sm">
                        <span className="text-2xl font-bold font-mono text-primary">0.12%</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Initial Market Share</h4>
                        <p className="text-sm text-muted-foreground">MyTranscend.com held a small fraction of the market, indicating massive room for growth.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/30 border border-border/50">
                      <div className="p-2 bg-background rounded-md shadow-sm">
                        <span className="text-2xl font-bold font-mono text-secondary">77%</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Technical Health Score</h4>
                        <p className="text-sm text-muted-foreground">Initial site audit revealed technical foundations that needed strengthening.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-primary/5 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">Key Gaps Identified</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "E-E-A-T Signals", desc: "Lack of visible expertise and trust markers." },
                    { title: "Content Depth", desc: "Thin content on key commercial pages." },
                    { title: "Keyword Overlap", desc: "Missed opportunities vs. competitors." },
                    { title: "Technical Issues", desc: "Broken links and duplicate meta data." }
                  ].map((gap, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{gap.title}</p>
                        <p className="text-xs text-muted-foreground">{gap.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Strategy Content */}
          <TabsContent value="strategy" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card overflow-hidden">
                <div className="h-2 bg-secondary w-full" />
                <CardHeader>
                  <CardTitle>Content-First Approach</CardTitle>
                  <CardDescription>Building a library of high-value assets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our primary lever for growth is the creation of informational and commercial intent content to fill identified keyword gaps.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Targeting 'Micro CPAP' and travel-related terms",
                      "Expanding the 'Sleep Library' resource center",
                      "Creating comprehensive buying guides",
                      "Answering patient questions directly"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card overflow-hidden">
                <div className="h-2 bg-primary w-full" />
                <CardHeader>
                  <CardTitle>E-E-A-T Development</CardTitle>
                  <CardDescription>Expertise, Experience, Authoritativeness, Trust</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Google rewards sites that demonstrate genuine expertise. Our strategy focuses on signaling this trust to both users and search engines.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Incorporating expert author bios",
                      "Citing clinical studies and data",
                      "Showcasing real patient stories",
                      "Adding detailed product reviews"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pillars Content */}
          <TabsContent value="pillars" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Technical Foundation",
                  icon: "🛠️",
                  items: ["Site Speed", "Mobile Usability", "Indexation", "Schema Markup"]
                },
                {
                  title: "Content Authority",
                  icon: "📚",
                  items: ["Sleep Health Hub", "Product Guides", "Comparison Articles", "FAQ Sections"]
                },
                {
                  title: "Off-Page Signals",
                  icon: "🔗",
                  items: ["Digital PR", "Industry Citations", "Brand Mentions", "Social Signals"]
                }
              ].map((pillar, i) => (
                <Card key={i} className="glass-card hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="text-4xl mb-2">{pillar.icon}</div>
                    <CardTitle>{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-border" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
