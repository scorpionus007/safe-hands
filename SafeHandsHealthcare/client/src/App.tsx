import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import Providers from "@/pages/Providers";
import ProviderProfile from "@/pages/ProviderProfile";
import Booking from "@/pages/Booking";
import Dashboard from "@/pages/Dashboard";
import AdminPanel from "@/pages/AdminPanel";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/providers" component={Providers} />
      <Route path="/providers/:id" component={ProviderProfile} />
      <Route path="/booking" component={Booking} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/admin" component={AdminPanel} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
