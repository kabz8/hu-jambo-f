import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import Testimonies from "@/pages/testimonies";
import Prayers from "@/pages/prayers";
import Donate from "@/pages/donate";
import Worship from "@/pages/worship";
import Reading from "@/pages/reading";
import Meditation from "@/pages/meditation";
import Games from "@/pages/games";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      {!isAuthenticated ? (
        <>
          <Route path="/" component={Landing} />
          <Route path="/testimonies" component={Landing} />
          <Route path="/prayers" component={Landing} />
          <Route path="/donate" component={Landing} />
          <Route path="/worship" component={Worship} />
          <Route path="/reading" component={Reading} />
          <Route path="/meditation" component={Meditation} />
          <Route path="/games" component={Games} />
        </>
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/testimonies" component={Testimonies} />
          <Route path="/prayers" component={Prayers} />
          <Route path="/donate" component={Donate} />
          <Route path="/worship" component={Worship} />
          <Route path="/reading" component={Reading} />
          <Route path="/meditation" component={Meditation} />
          <Route path="/games" component={Games} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
