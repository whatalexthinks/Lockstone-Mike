import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const services = [
  {
    icon: "fas fa-road",
    title: "DRIVEWAYS",
    description: "Durable, attractive driveways that enhance your property's curb appeal and withstand Idaho's changing seasons."
  },
  {
    icon: "fas fa-home",
    title: "PATIOS & WALKWAYS", 
    description: "Beautiful outdoor living spaces and safe walkways designed for both functionality and aesthetic appeal."
  },
  {
    icon: "fas fa-building",
    title: "FOUNDATIONS",
    description: "Solid foundations that provide the structural integrity your building project needs for decades to come."
  },
  {
    icon: "fas fa-city",
    title: "COMMERCIAL PROJECTS",
    description: "Large-scale commercial concrete solutions for businesses, warehouses, and industrial facilities."
  },
  {
    icon: "fas fa-palette",
    title: "DECORATIVE CONCRETE",
    description: "Stamped, colored, and textured concrete that combines durability with stunning visual appeal."
  },
  {
    icon: "fas fa-tools",
    title: "REPAIRS & RESTORATION",
    description: "Expert repair and restoration services to extend the life of your existing concrete structures."
  }
];

export default function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50 concrete-texture">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-deep-charcoal mb-4">
            CONCRETE SOLUTIONS THAT LAST
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From residential driveways to commercial foundations, we deliver precision craftsmanship that stands the test of time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-construction-orange rounded-lg flex items-center justify-center mb-6 mx-auto"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className={`${service.icon} text-white text-2xl`}></i>
              </motion.div>
              <h3 className="font-montserrat font-bold text-xl text-deep-charcoal mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
