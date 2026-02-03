import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Map from "./Map";
import Navigation from "./Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />

      <motion.section
        id="location"
        className="py-16 sm:py-20 lg:py-24 bg-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto mt-16 sm:mt-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

              {/* Contact Information */}
              <motion.div
                className="space-y-10"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div>
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-primary mb-4"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Visit Us
                  </motion.h2>

                  <motion.div
                    className="w-16 h-px restaurant-gold-gradient mb-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.p
                    className="text-base sm:text-lg text-muted-foreground"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    Located in the heart of Kimihurura with breathtaking views of the hills of Kigali
                  </motion.p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg sm:text-xl text-primary mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Kigali/ Kimihurura <br />
                    KG 28 Avenue, Kigali closer Adventist Church
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-lg sm:text-xl text-primary mb-3">Hours</h3>
                  <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span>Tuesday - Thursday</span>
                      <span>6:00 PM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>6:00 PM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>6:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg sm:text-xl text-primary mb-2">Contact</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    +250 793 084 995 <br />
                    reservations@lacreola.com
                  </p>
                </div>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Button size="lg" className="w-full sm:w-auto px-8">
                    <a href="/reserve">MAKE RESERVATION</a>
                  </Button>

                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                    GET DIRECTIONS
                  </Button>
                </motion.div>
              </motion.div>

              {/* Map */}
              <motion.div
                className="w-full"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="aspect-[2/3] sm:aspect-square rounded-lg overflow-hidden bg-muted">
                  <Map />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
