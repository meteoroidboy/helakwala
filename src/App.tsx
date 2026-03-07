import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import GuaranteePage from "./pages/GuaranteePage";
import AboutPage from "./pages/AboutPage";
import WhyChoosePage from "./pages/WhyChoosePage";
import LocationPage from "./pages/LocationPage";
import ReviewsPage from "./pages/ReviewsPage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/guarantee" element={<GuaranteePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-choose-us" element={<WhyChoosePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingCall />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
