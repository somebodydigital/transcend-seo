import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Target,
  FileText,
  BarChart3,
  Rocket,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: "Overview", href: "/", icon: LayoutDashboard },
    { name: "Strategy & Opportunity", href: "/strategy", icon: Target },
    { name: "Content Process", href: "/process", icon: FileText },
    { name: "Performance", href: "/performance", icon: BarChart3 },
    { name: "2026 Vision", href: "/vision", icon: Rocket },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full py-6 space-y-8">
      <div className="px-6 flex items-center space-x-3">
        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">T</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">Transcend SEO</span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group cursor-pointer",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                <span>{item.name}</span>
                {isActive && (
                  <ChevronRight className="ml-auto h-4 w-4 text-primary animate-in fade-in slide-in-from-left-1" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <div className="bg-accent/50 rounded-xl p-4 border border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Prepared for</p>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs">
              R
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Transcend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-border bg-card/50 backdrop-blur-xl fixed h-full z-30">
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-md border border-border shadow-sm"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 bg-card">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <NavContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 min-h-screen transition-all duration-300 ease-in-out">
        <div className="container py-8 lg:py-12 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
