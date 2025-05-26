import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import BeforeAfterSlider from "./BeforeAfterSlider";

const projects = [
  {
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    afterImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    beforeAlt: "Old cracked concrete driveway before renovation",
    afterAlt: "Beautiful new concrete driveway after renovation",
    title: "Residential Driveway Transformation",
    description: "Complete driveway replacement in Meridian - from cracked and stained to pristine and durable."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    beforeAlt: "Old damaged concrete patio before renovation",
    afterAlt: "Stunning new decorative concrete patio after renovation",
    title: "Patio Renovation Project",
    description: "Transformed a cracked patio into a beautiful stamped concrete entertainment area in Boise."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    afterImage: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    beforeAlt: "Broken concrete walkway before repair",
    afterAlt: "Beautiful new concrete walkway after renovation",
    title: "Walkway Restoration",
    description: "Complete walkway replacement in Kuna - safe, beautiful, and built to last decades."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    afterImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    beforeAlt: "Construction site before foundation work",
    afterAlt: "Professional concrete foundation after completion",
    title: "Commercial Foundation",
    description: "Professional foundation work for a new commercial building in Caldwell - precision and strength."
  }
];

export default function GallerySection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gray-50 concrete-texture">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-deep-charcoal mb-4">
            TRANSFORMATIONS THAT SPEAK FOR THEMSELVES
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the dramatic before and after results that showcase our commitment to excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <BeforeAfterSlider {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
