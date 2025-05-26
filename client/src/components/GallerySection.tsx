import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const concreteWork = [
  {
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Commercial concrete flooring and foundations",
    title: "Commercial Projects",
    description: "Large-scale concrete solutions for warehouses, retail spaces, and industrial facilities across Ada County.",
    icon: "fas fa-city"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Beautiful residential concrete driveway and patio",
    title: "Residential Work",
    description: "Driveways, patios, walkways, and decorative concrete that enhances your home's value and appeal.",
    icon: "fas fa-home"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Rural concrete work and farm applications",
    title: "Rural & Agricultural",
    description: "Barn floors, equipment pads, feed lots, and agricultural concrete solutions for rural Idaho properties.",
    icon: "fas fa-tractor"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Professional concrete foundation work",
    title: "Foundations",
    description: "Solid, durable foundations for residential and commercial buildings built to last generations.",
    icon: "fas fa-building"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Concrete curb forming and street work",
    title: "Curb Forming & Repair",
    description: "Precision curb and gutter work, street repairs, and municipal concrete infrastructure projects.",
    icon: "fas fa-road"
  },
  {
    image: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Concrete stairs and steps construction",
    title: "Stairs & Steps",
    description: "Custom concrete stairs, steps, and ramps designed for safety, durability, and aesthetic appeal.",
    icon: "fas fa-stairs"
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
            OUR CONCRETE EXPERTISE
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From commercial facilities to residential driveways, we deliver precision concrete work across all sectors.
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
