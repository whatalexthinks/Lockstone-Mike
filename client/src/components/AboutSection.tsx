import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import AnimatedCounter from "./AnimatedCounter";

const features = [
  {
    icon: "fas fa-calendar-alt",
    title: "25+ Years Experience",
    description: "Decades of specialized concrete repair and coating expertise serving the greater Boise area.",
    counter: 25
  },
  {
    icon: "fas fa-tools",
    title: "Repair Specialists",
    description: "Expert in crack injection, spalling repair, and structural concrete restoration techniques."
  },
  {
    icon: "fas fa-gem",
    title: "Spread Stone Certified",
    description: "Certified installer of revolutionary Spread Stone overlay systems for stunning transformations."
  },
  {
    icon: "fas fa-spray-can",
    title: "Coating Experts",
    description: "Professional application of epoxy, polyurethane, and decorative concrete coating systems."
  },
  {
    icon: "fas fa-calculator",
    title: "Free Estimates",
    description: "Transparent, detailed estimates for all repair, resurfacing, and coating projects."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured with comprehensive warranties on all work."
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
            CONCRETE REPAIR & COATING EXPERTS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Why Ada County property owners trust Lockstone Concrete for concrete repair, resurfacing, and Spread Stone transformations.
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
