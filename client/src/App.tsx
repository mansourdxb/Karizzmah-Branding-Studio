import { useEffect } from "react";
import { Router as WouterRouter, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import ClientsPage from "@/pages/Clients";
import TeamPage from "@/pages/Team";
import ContactPage from "@/pages/Contact";

// function ScrollRestoration() {
//   useEffect(() => {
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }
//     // Only scroll to top on initial page load/refresh
//     window.scrollTo(0, 0);
//   }, []);

//   return null;
// }
function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // تأخير ميكروسكوبي (50ms) عشان نضمن إن الـ DOM رندر والمتصفح يفوق من الـ Hash
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

function Router() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/clients" component={ClientsPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollRestoration />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
