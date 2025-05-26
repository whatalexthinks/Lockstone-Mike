import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import AnimatedCounter from "./AnimatedCounter";

const features = [
  {
    icon: "fas fa-calendar-alt",
    title: "25+ Years Experience",
    description: "Decades of concrete expertise serving the greater Boise area with consistent quality and reliability.",
    counter: 25
  },
  {
    icon: "fas fa-shield-alt",
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind and protection on every project."
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Local Ada County Experts",
    description: "Deep understanding of local soil conditions, weather patterns, and building requirements."
  },
  {
    icon: "fas fa-award",
    title: "Premium Materials Only",
    description: "We use only the highest-grade concrete and materials to ensure lasting durability and performance."
  },
  {
    icon: "fas fa-calculator",
    title: "Free Estimates",
    description: "Transparent, detailed estimates with no hidden fees. Know exactly what you're investing in upfront."
  },
  {
    icon: "fas fa-handshake",
    title: "Guaranteed Quality",
    description: "Standing behind our work with comprehensive warranties and a commitment to your satisfaction."
  }
];

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-deep-charcoal mb-4">
            BUILT ON TRUST & EXPERTISE
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Why Ada County homeowners and businesses choose Lockstone Concrete for their most important projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div 
                className={`w-20 h-20 ${index % 2 === 0 ? 'bg-steel-blue' : 'bg-construction-orange'} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {feature.counter ? (
                  <AnimatedCounter 
                    target={feature.counter}
                    suffix="+"
                    isVisible={isIntersecting}
                    className="text-white font-montserrat font-black text-2xl"
                  />
                ) : (
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                )}
              </motion.div>
              <h3 className="font-montserrat font-bold text-xl text-deep-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
