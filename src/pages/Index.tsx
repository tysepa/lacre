import Navigation from "@/components/Navigation";
import IntroSection from "@/components/IntroSection";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials.new";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EventsPage from "@/components/Events";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <IntroSection />
      <About />
      <EventsPage />
      <Testimonials />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;