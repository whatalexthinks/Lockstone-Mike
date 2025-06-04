import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const concreteWork = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Spread Stone overlay transformation",
    title: "Spread Stone Overlay",
    description: "Revolutionary Spread Stone system transforms old concrete into beautiful, durable decorative surfaces.",
    icon: "fas fa-gem"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Epoxy floor coating application",
    title: "Epoxy Floor Coatings",
    description: "High-performance epoxy coatings for garages, basements, and commercial floors that resist wear and chemicals.",
    icon: "fas fa-spray-can"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Concrete crack repair and restoration",
    title: "Concrete Crack Repair",
    description: "Expert crack injection, spalling repair, and structural restoration to extend concrete lifespan.",
    icon: "fas fa-tools"
  },
  {
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Concrete surface resurfacing work",
    title: "Surface Resurfacing",
    description: "Professional concrete resurfacing that makes old surfaces look brand new with lasting durability.",
    icon: "fas fa-layer-group"
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Decorative concrete coating application",
    title: "Decorative Coatings",
    description: "Protective and aesthetic concrete coatings that enhance both appearance and performance.",
    icon: "fas fa-shield-alt"
  },
  {
    image: "https://images.pexels.com/photos/5891589/pexels-photo-5891589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Surface preparation and diamond grinding",
    title: "Surface Preparation",
    description: "Professional diamond grinding, shot blasting, and surface prep for optimal coating adhesion.",
    icon: "fas fa-wrench"
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
            REPAIR & COATING SPECIALISTS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming damaged concrete with expert repair, resurfacing, coatings, and revolutionary Spread Stone overlay systems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concreteWork.map((work, index) => (
            <motion.div
              key={work.title}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="absolute top-4 left-4 w-12 h-12 bg-construction-orange rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className={`${work.icon} text-white text-xl`}></i>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-deep-charcoal mb-3 group-hover:text-construction-orange transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {work.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-construction-orange to-steel-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
