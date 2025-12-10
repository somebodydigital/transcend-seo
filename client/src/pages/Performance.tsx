import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ArrowUpRight, DollarSign, Eye, Search, MousePointerClick } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Line, LineChart } from "recharts";

const q2Data = [
  { name: "AI Overviews", value: 600, label: "+600%" },
  { name: "Non-Brand Rank", value: 36, label: "+36%" },
  { name: "Top 3 SERP", value: 292, label: "+292%" },
  { name: "Revenue", value: 22, label: "+22%" },
];

const q3Data = [
  { month: "Jul", revenue: 22000, sessions: 12000 },
  { month: "Aug", revenue: 25000, sessions: 13500 },
  { month: "Sep", revenue: 29725, sessions: 15000 },
];

export default function Performance() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Performance Metrics</h1>
            <p className="text-lg text-muted-foreground">
              Tracking our progress across key organic growth indicators for Q2 and Q3 2025.
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="px-3 py-1 h-8">Q2 2025</Badge>
            <Badge className="px-3 py-1 h-8 bg-primary text-primary-foreground">Q3 2025</Badge>
          </div>
        </div>

        <Tabs defaultValue="q3" className="space-y-8">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="q3">Q3 2025 Highlights</TabsTrigger>
            <TabsTrigger value="q2">Q2 2025 Recap</TabsTrigger>
          </TabsList>

          <TabsContent value="q3" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            {/* Q3 Hero Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="glass-card border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                      <h3 className="text-2xl font-bold mt-1">$76,725</h3>
                    </div>
                    <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                      <DollarSign className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    Generated from SEO efforts
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Top 3 Keywords</p>
                      <h3 className="text-2xl font-bold mt-1">373</h3>
                    </div>
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                      <Search className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-blue-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +16% increase from 322
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">SERP Features</p>
                      <h3 className="text-2xl font-bold mt-1">653</h3>
                    </div>
                    <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-purple-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +65% increase from 397
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Mobile Visibility</p>
                      <h3 className="text-2xl font-bold mt-1">90%</h3>
                    </div>
                    <div className="p-2 bg-orange-100 text-orange-700 rounded-lg">
                      <MousePointerClick className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-orange-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    Outranking primary competitors
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Q3 Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Revenue & Sessions Trend</CardTitle>
                  <CardDescription>Monthly breakdown for Q3 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={q3Data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis yAxisId="left" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                        <YAxis yAxisId="right" orientation="right" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value/1000}k`} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                          itemStyle={{ color: 'var(--foreground)' }}
                        />
                        <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: "var(--primary)" }} activeDot={{ r: 6 }} name="Revenue" />
                        <Line yAxisId="right" type="monotone" dataKey="sessions" stroke="var(--secondary)" strokeWidth={3} dot={{ r: 4, fill: "var(--secondary)" }} activeDot={{ r: 6 }} name="Sessions" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Visibility Growth</CardTitle>
                  <CardDescription>Market share vs. Competitors</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-[300px]">
                  <div className="text-center space-y-4">
                    <div className="relative h-40 w-40 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-8 border-muted" />
                      <div className="absolute inset-0 rounded-full border-8 border-secondary border-t-transparent rotate-[-45deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                      <div className="text-center">
                        <span className="text-4xl font-bold text-foreground">90%</span>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Mobile Share</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                      Transcend has outpaced all primary search competitors in visibility for tracked keywords on mobile devices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="q2" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Q2 2025 Growth Metrics</CardTitle>
                <CardDescription>Year-over-Year comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={q2Data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={120} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }} axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={{ fill: 'var(--accent)' }}
                        contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                      />
                      <Bar dataKey="value" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={32} label={{ position: 'right', fill: 'var(--foreground)', fontSize: 12, formatter: (val: any) => `+${val}%` }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
