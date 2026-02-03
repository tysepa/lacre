import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import aboutVideo from "@/assets/One-video.mp4";
import Footer from "@/components/Footer";
import homes from "@/assets/Ktn.jpg";
import barInterior from "@/assets/Ktm.jpg";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground mt-20">
      <Navigation />
      <section className="py-24 bg-restaurant-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-6xl mb-4">
                        {/* image */}
                        <img src={barInterior} alt="Japanese Architecture" className="rounded-lg shadow-lg object-cover" />
                      </div>
                      <p className="text-sm tracking-wide">RWANDAN ARCHITECTURE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                    About La Creola
                  </h2>
                  <div className="w-16 h-px restaurant-gold-gradient mb-8" />
                </div>

                <div className="space-y-6 elegant-text">
                  <p className="text-lg leading-relaxed text-foreground">
                   At La Creola, we believe dining is more than just food — it’s a story, a feeling, and a journey. Located in the heart of Kigali, La Creola brings 
                   together bold African spirit and refined Asian influence in a way that feels both familiar and refreshingly new. 
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our culinary philosophy is rooted in fusion without compromise: blending vibrant spices, fresh local ingredients, and innovative techniques to create 
                    dishes that surprise and delight. From shareable tapas inspired by the rhythms of Africa to signature creations with an Asian twist, each plate is crafted to ignite conversation and curiosity. 
                    We pair our food with creative cocktails and drinks, designed to complement the menu and elevate your experience — whether you’re here for an evening dinner, a relaxed lunch, or a vibrant night with friends. 

                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    But La Creola is more than a restaurant — it’s a place to gather, celebrate, and create memories. Our warm, inviting space and attentive service 
                    reflect Rwandan hospitality at its best, welcoming locals and travelers alike. 
                    We’re proud to be part of Kigali’s thriving culinary scene, offering a unique dining story that is rooted in culture, creativity, and connection.

                  </p>
                </div>

                <div className="pt-6">
                  <Button variant="default" size="lg" className="px-8 py-4">
                    <a href="/reserve">

                      BOOK A TABLE
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;