import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Meridian Homeowner",
    text: "Lockstone Concrete transformed our cracked driveway into something beautiful. The team was professional, on time, and the quality exceeded our expectations. Highly recommend!",
    rating: 5
  },
  {
    name: "Mike Rodriguez", 
    title: "Boise Business Owner",
    text: "We needed a commercial foundation for our new warehouse. Lockstone delivered exceptional work on schedule and within budget. True professionals with decades of experience.",
    rating: 5
  },
  {
    name: "Emily Chen",
    title: "Kuna Resident",
    text: "The decorative concrete patio they installed is absolutely stunning! Every neighbor asks about it. The attention to detail and craftsmanship is remarkable.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50 concrete-texture">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-deep-charcoal mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Ada County.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="bg-white rounded-xl p-8 shadow-lg mx-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <i className="fas fa-user text-gray-500 text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-deep-charcoal">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentSlide].title}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <motion.i 
                          key={i}
                          className="fas fa-star"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-construction-orange scale-125' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
