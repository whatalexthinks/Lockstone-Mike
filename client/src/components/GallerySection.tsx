import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const concreteWork = [
  {
    image: "https://images.pexels.com/photos/7931/pexels-photo-7931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Commercial concrete building and structures",
    title: "Commercial Projects",
    description: "Large-scale concrete solutions for warehouses, retail spaces, and industrial facilities across Ada County.",
    icon: "fas fa-city"
  },
  {
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Residential concrete work and cement mixing",
    title: "Residential Work",
    description: "Driveways, patios, walkways, and decorative concrete that enhances your home's value and appeal.",
    icon: "fas fa-home"
  },
  {
    image: "https://images.pexels.com/photos/19370588/pexels-photo-19370588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Construction site with concrete work in progress",
    title: "Rural & Agricultural",
    description: "Barn floors, equipment pads, feed lots, and agricultural concrete solutions for rural Idaho properties.",
    icon: "fas fa-tractor"
  },
  {
    image: "https://images.pexels.com/photos/15109999/pexels-photo-15109999.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Construction workers building concrete foundations",
    title: "Foundations",
    description: "Solid, durable foundations for residential and commercial buildings built to last generations.",
    icon: "fas fa-building"
  },
  {
    image: "@assets/Gemini_Generated_Image_4jhcgm4jhcgm4jhc.png",
    alt: "Professional curb forming with specialized equipment",
    title: "Curb Forming & Repair",
    description: "Precision curb and gutter work, street repairs, and municipal concrete infrastructure projects.",
    icon: "fas fa-road"
  },
  {
    image: "https://images.pexels.com/photos/5891589/pexels-photo-5891589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Stone and concrete steps construction",
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
