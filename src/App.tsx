// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SocialMedia from "./pages/SocialMedia";
import SocialHighlights from "./pages/SocialHighlights";
import Galleries from "./pages/Galleries";
import Gear from "./pages/Gear";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Gallery pages
import AerialGallery from "./pages/galleries/AerialGallery";
import PortraitGallery from "./pages/galleries/PortraitGallery";
import WeddingGallery from "./pages/galleries/WeddingGallery";
import CommercialGallery from "./pages/galleries/CommercialGallery";
import LandscapeGallery from "./pages/galleries/LandscapeGallery";
import EventsGallery from "./pages/galleries/EventsGallery";

// Gear pages
import CameraGear from "./pages/gear/CameraGear";
import LensGear from "./pages/gear/LensGear";
import DroneGear from "./pages/gear/DroneGear";
import AccessoriesGear from "./pages/gear/AccessoriesGear";

// Custom 404 page (interactive game)
import NotFoundGame from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/social" element={<SocialMedia />} />
            <Route path="/social/highlights" element={<SocialHighlights />} />
            <Route path="/social/:platform" element={<SocialMedia />} />
            <Route path="/galleries" element={<Galleries />} />
            <Route path="/galleries/aerial" element={<AerialGallery />} />
            <Route path="/galleries/portraits" element={<PortraitGallery />} />
            <Route path="/galleries/weddings" element={<WeddingGallery />} />
            <Route path="/galleries/commercial" element={<CommercialGallery />} />
            <Route path="/galleries/landscape" element={<LandscapeGallery />} />
            <Route path="/galleries/events" element={<EventsGallery />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/gear/cameras" element={<CameraGear />} />
            <Route path="/gear/lenses" element={<LensGear />} />
            <Route path="/gear/drones" element={<DroneGear />} />
            <Route path="/gear/accessories" element={<AccessoriesGear />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundGame />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;