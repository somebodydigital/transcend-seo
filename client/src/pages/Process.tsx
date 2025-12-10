import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, FileText, Search, PenTool, CheckSquare, Upload, BarChart2, BrainCircuit } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Topic Discovery",
      desc: "Identifying high-potential keywords and user questions based on search data and competitor gaps."
    },
    {
      icon: FileText,
      title: "Content Brief",
      desc: "Creating a detailed outline including target keywords, headings, and required E-E-A-T elements."
    },
    {
      icon: BrainCircuit,
      title: "AI Draft & Human Edit",
      desc: "Generating an initial V1 draft using AI, followed by rigorous human editing for tone, accuracy, and flow."
    },
    {
      icon: PenTool,
      title: "Expert Review",
      desc: "Subject matter experts review technical content to ensure clinical accuracy and compliance."
    },
    {
      icon: CheckSquare,
      title: "Optimization",
      desc: "Fine-tuning meta tags, internal links, and schema markup for maximum search visibility."
    },
    {
      icon: Upload,
      title: "Publishing",
      desc: "Uploading to the CMS with proper formatting, images, and structured data implementation."
    },
    {
      icon: BarChart2,
      title: "Monitoring",
      desc: "Tracking performance post-launch and making data-driven adjustments to improve rankings."
    }
  ];

  return (
    <Layout>
      <div className="space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 mb-2">Workflow</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Content Production Process</h1>
          <p className="text-lg text-muted-foreground">
            A rigorous 7-step workflow ensuring every piece of content is optimized for search, accurate for users, and compliant with regulations.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <Card className="glass-card hover:shadow-lg transition-all duration-300 border-t-4 border-t-transparent hover:border-t-secondary group">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">Step 0{index + 1}</span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Marker */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-accent shadow-sm shrink-0">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* AI Disclosure Section */}
        <Card className="bg-slate-900 text-slate-50 border-none overflow-hidden relative mt-16">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <BrainCircuit className="h-5 w-5" />
                <span className="font-bold tracking-wide text-sm uppercase">Technology & Expertise</span>
              </div>
              <h2 className="text-2xl font-bold">The Role of AI in Our Process</h2>
              <p className="text-slate-300 leading-relaxed">
                We leverage AI to generate initial drafts and structures, allowing us to scale production efficiently. However, <strong>human expertise is non-negotiable.</strong> Every piece is heavily edited, fact-checked, and refined by SEO specialists and subject matter experts to ensure it meets our high standards for quality and accuracy.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-secondary" />
                Quality Assurance
              </h3>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span> Human Tone Check
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span> Fact Verification
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span> Compliance Review
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span> SEO Optimization
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
