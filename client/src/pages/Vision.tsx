import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, BookOpen, MessageSquare, FileCheck, Users } from "lucide-react";

export default function Vision() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Header Section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 lg:p-16 text-center space-y-6">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="/images/future-vision.png" 
              alt="Future Vision" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground px-4 py-1">Looking Ahead</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">2026 Strategic Vision</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our roadmap for the coming year focuses on deepening brand trust, leveraging AI search visibility, and establishing undisputed topical authority in sleep health.
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Improve Brand Trust",
              desc: "Produce authoritative, expert-driven content that signals reliability to both users and search engines."
            },
            {
              icon: Sparkles,
              title: "AI Visibility",
              desc: "Optimize for AI Overviews and Search Generative Experience (SGE) to capture the new wave of search traffic."
            },
            {
              icon: BookOpen,
              title: "Topical Authority",
              desc: "Expand our 'Sleep Health' library with 10+ new expert articles to cover every facet of the user journey."
            }
          ].map((obj, i) => (
            <Card key={i} className="glass-card hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <obj.icon className="h-6 w-6" />
                </div>
                <CardTitle>{obj.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{obj.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collaboration Plan */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-secondary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Regulatory Collaboration Plan</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-card border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Proposed Workflow
                </CardTitle>
                <CardDescription>How we envision working together</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    { title: "Input at Brief Stage", desc: "Regulatory team reviews content briefs to flag potential issues before writing begins." },
                    { title: "Data-Driven Claims", desc: "Collaborating to identify clinical data and studies that support our marketing claims." },
                    { title: "Shared Source Library", desc: "Building a repository of approved claims and references for the content team." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Open Discussion Points
                </CardTitle>
                <CardDescription>Key questions for our upcoming meeting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-4">
                  {[
                    "What are your primary concerns from a regulatory perspective regarding current SEO content?",
                    "What is the most efficient way for us to request claim verification without slowing down production?",
                    "Are there specific 'danger zones' or topics we should avoid entirely?",
                    "How can we best leverage your expertise to improve our E-E-A-T signals?"
                  ].map((q, i) => (
                    <li key={i} className="flex gap-3 items-start p-3 rounded-lg bg-background/50 border border-border/50">
                      <div className="mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{q}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-slate-800 p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Ready to align our strategies?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We believe that a strong partnership between SEO and Regulatory will not only ensure compliance but also create the most authoritative and trusted content in the industry.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Schedule Alignment Workshop
          </Button>
        </div>
      </div>
    </Layout>
  );
}
