import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      description: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact-submissions'] });
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly at (208) 860-7050.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-deep-charcoal mb-4">
            GET YOUR FREE ESTIMATE TODAY
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your property with professional concrete work? Contact us for a detailed, no-obligation estimate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: "fas fa-map-marker-alt",
                  title: "Service Areas",
                  description: "Boise, Meridian, Kuna, Nampa, Caldwell",
                  bgColor: "bg-steel-blue"
                },
                {
                  icon: "fas fa-clock",
                  title: "Business Hours", 
                  description: "Mon-Fri: 7AM-6PM\nSat: 8AM-4PM",
                  bgColor: "bg-steel-blue"
                },
                {
                  icon: "fas fa-shield-alt",
                  title: "Licensed & Insured",
                  description: "Fully bonded for your protection",
                  bgColor: "bg-construction-orange"
                },
                {
                  icon: "fas fa-award",
                  title: "25+ Years Experience",
                  description: "Proven track record of excellence",
                  bgColor: "bg-construction-orange"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <motion.div 
                    className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className={`${item.icon} text-white`}></i>
                  </motion.div>
                  <div>
                    <h4 className="font-montserrat font-bold text-deep-charcoal">{item.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call Us Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="text-center p-8 bg-deep-charcoal rounded-xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.i 
                className="fas fa-phone text-4xl text-construction-orange mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <h3 className="font-montserrat font-bold text-2xl mb-2">Call Us Today!</h3>
              <a 
                href="tel:208-860-7050" 
                className="text-3xl font-montserrat font-black text-construction-orange hover:text-orange-400 transition-colors"
              >
                (208) 860-7050
              </a>
              <p className="text-gray-300 mt-2">Available 7 days a week</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
