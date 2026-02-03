import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Img1 from "@/assets/img1.jpg";
import Img10 from "@/assets/img 10.jpg";
import ImgWine from "@/assets/wine.jpg";
import ImgMusic from "@/assets/IMG_6857.jpg";
import ImgFo from "@/assets/img 16.jpeg";
import ImgFoa from "@/assets/img 12.jpeg";
import ImWin from "@/assets/img 8.jpg";
import ImgL from "@/assets/img 5.jpg";
import Vdeo from "@/assets/img1.jpg"


interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: "Food" | "Drinks" | "Interior" | "Events";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Signature Cocktail",
    image: Img1,
    category: "Drinks",
  },
  {
    id: 2,
    title: "Grilled Steak",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    category: "Food",
  },
  {
    id: 3,
    title: "Luxury Bar Interior",
    image: Img10,
    category: "Interior",
  },
  {
    id: 4,
    title: "Live Music Night",
    image: ImgMusic,
    category: "Events",
  },
  {
    id: 5,
    title: "Chef Special Dish",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    category: "Food",
  },
  {
    id: 6,
    title: "Wine Collection",
    image: ImgWine,
    category: "Drinks",
  },
  {
    id: 7,
    title: "Signature Cocktail",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    category: "Drinks",
  },
  {
    id: 8,
    title: "Grilled Steak",
    image: ImgFo,
    category: "Food",
  },
  {
    id: 9,
    title: "Luxury Bar Interior",
    image: ImgL,
    category: "Interior",
  },
  {
    id: 10,
    title: "Live Music Night",
    image: Vdeo,
    category: "Events",
  },
  {
    id: 11,
    title: "Chef Special Dish",
    image: ImgFoa,
    category: "Food",
  },
  {
    id: 12,
    title: "Wine Collection",
    image: ImWin,
    category: "Drinks",
  },
];

export default function RestaurantGalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation />
      <section className="container mx-auto mt-20 px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Our Gallery
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl text-primary mx-auto">
          Experience the taste, atmosphere, and unforgettable moments at our restaurant & bar.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl mx-auto text-center">

          <h4 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Invitation Content
          </h4>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            Join us and discover a dining experience that brings people together
            through taste, culture, and atmosphere.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At <span className="font-medium text-primary">La Creola</span>, every plate
            tells a story — and every guest is part of it.
          </p>

        </div>
      </div>


      <Footer />
    </div>
  );
}
