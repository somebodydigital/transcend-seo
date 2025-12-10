import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Strategy from "./pages/Strategy";
import Process from "./pages/Process";
import Performance from "./pages/Performance";
import Vision from "./pages/Vision";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/strategy" component={Strategy} />
      <Route path="/process" component={Process} />
      <Route path="/performance" component={Performance} />
      <Route path="/vision" component={Vision} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
