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

// Import Home Care pages
import HomeCarePage from "@/pages/home-care";
import ServiceDetailPage from "@/pages/home-care/[id]";
import BookingConfirmationPage from "@/pages/home-care/booking-confirmation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      
      {/* Home Care Routes */}
      <Route path="/home-care" component={HomeCarePage} />
      <Route path="/home-care/:id" component={ServiceDetailPage} />
      <Route path="/home-care/booking-confirmation" component={BookingConfirmationPage} />
      
      {/* Other Routes */}
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
