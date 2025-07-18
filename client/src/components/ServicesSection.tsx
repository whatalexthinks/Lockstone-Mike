import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const services = [
  {
    icon: "fas fa-tools",
    title: "CONCRETE REPAIR",
    description: "Expert crack repair, spalling fixes, and structural restoration to bring your concrete back to life."
  },
  {
    icon: "fas fa-layer-group",
    title: "CONCRETE RESURFACING", 
    description: "Transform worn concrete surfaces with professional resurfacing techniques that look like new."
  },
  {
    icon: "fas fa-spray-can",
    title: "EPOXY COATINGS",
    description: "High-performance epoxy floor coatings for garages, basements, and commercial spaces that last."
  },
  {
    icon: "fas fa-gem",
    title: "SPREAD STONE OVERLAY",
    description: "Revolutionary Spread Stone system that transforms old concrete into beautiful, durable surfaces."
  },
  {
    icon: "fas fa-shield-alt",
    title: "CONCRETE COATINGS",
    description: "Protective and decorative coatings that enhance durability while providing stunning aesthetics."
  },
  {
    icon: "fas fa-wrench",
    title: "SURFACE PREPARATION",
    description: "Professional diamond grinding, shot blasting, and surface prep for optimal coating adhesion.",
    image: "https://i.imgur.com/7zce7P7.jpeg"
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
            CONCRETE REPAIR & COATING EXPERTS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specializing in concrete repair, resurfacing, epoxy coatings, and revolutionary Spread Stone overlay systems.
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
