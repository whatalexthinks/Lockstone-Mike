
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
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block bg-construction-orange/10 px-6 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-construction-orange font-montserrat font-bold text-sm uppercase tracking-wider">
              Free Consultation
            </span>
          </motion.div>
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-deep-charcoal mb-6">
            GET YOUR FREE ESTIMATE
            <span className="block text-construction-orange text-3xl md:text-5xl mt-2">TODAY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your property with professional concrete work? Get a detailed, 
            no-obligation estimate from Ada County's premier concrete specialists.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Takes up 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <div className="mb-8">
                <h3 className="font-montserrat font-bold text-2xl text-deep-charcoal mb-3">
                  Project Details
                </h3>
                <p className="text-gray-600">
                  Tell us about your concrete project and we'll provide a customized estimate.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-montserrat font-semibold text-deep-charcoal">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
                              {...field}
                              className="h-12 bg-gray-50 border-gray-200 focus:border-construction-orange focus:ring-construction-orange"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-montserrat font-semibold text-deep-charcoal">
                            Phone *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(208) 555-0123" 
                              {...field}
                              className="h-12 bg-gray-50 border-gray-200 focus:border-construction-orange focus:ring-construction-orange"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-montserrat font-semibold text-deep-charcoal">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              {...field}
                              className="h-12 bg-gray-50 border-gray-200 focus:border-construction-orange focus:ring-construction-orange"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-montserrat font-semibold text-deep-charcoal">
                            Project Type *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-construction-orange focus:ring-construction-orange">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="concrete-repair">Concrete Repair</SelectItem>
                              <SelectItem value="concrete-resurfacing">Concrete Resurfacing</SelectItem>
                              <SelectItem value="epoxy-coatings">Epoxy Coatings</SelectItem>
                              <SelectItem value="spread-stone-overlay">Spread Stone Overlay</SelectItem>
                              <SelectItem value="surface-preparation">Surface Preparation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat font-semibold text-deep-charcoal">
                          Project Description *
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your project, including size, location, and any specific requirements..."
                            className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-construction-orange focus:ring-construction-orange resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={submitContactMutation.isPending}
                      className="w-full h-14 bg-construction-orange hover:bg-orange-600 text-white font-montserrat font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {submitContactMutation.isPending ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-paper-plane"></i>
                          <span>GET MY FREE ESTIMATE</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Call Us Card */}
              <motion.div 
                className="text-center p-8 bg-deep-charcoal rounded-2xl text-white shadow-2xl"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.i 
                  className="fas fa-phone text-5xl text-construction-orange mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <h3 className="font-montserrat font-bold text-2xl mb-4">Call Us Today!</h3>
                <a 
                  href="tel:208-860-7050" 
                  className="text-3xl font-montserrat font-black text-construction-orange hover:text-orange-400 transition-colors block mb-3"
                >
                  (208) 860-7050
                </a>
                <p className="text-gray-300 text-sm">Available 7 days a week</p>
                <p className="text-gray-400 text-xs mt-2">Fast response guaranteed</p>
              </motion.div>

              {/* Info Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: "fas fa-map-marker-alt",
                    title: "Service Areas",
                    description: "Boise, Meridian, Kuna, Nampa, Caldwell",
                    bgColor: "bg-steel-blue",
                    textColor: "text-white"
                  },
                  {
                    icon: "fas fa-clock",
                    title: "Business Hours", 
                    description: "Mon-Fri: 7AM-6PM\nSat: 8AM-4PM",
                    bgColor: "bg-white",
                    textColor: "text-deep-charcoal",
                    border: "border border-gray-200"
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "Licensed & Insured",
                    description: "Fully bonded for your protection",
                    bgColor: "bg-construction-orange",
                    textColor: "text-white"
                  },
                  {
                    icon: "fas fa-award",
                    title: "25+ Years Experience",
                    description: "Proven track record of excellence",
                    bgColor: "bg-white",
                    textColor: "text-deep-charcoal",
                    border: "border border-gray-200"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className={`p-6 rounded-xl shadow-lg ${item.bgColor} ${item.textColor} ${item.border || ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`w-12 h-12 ${item.bgColor === 'bg-white' ? 'bg-construction-orange text-white' : 'bg-white/20 text-current'} rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 5 }}
                      >
                        <i className={`${item.icon} text-lg`}></i>
                      </motion.div>
                      <div>
                        <h4 className="font-montserrat font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm opacity-90 whitespace-pre-line leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <motion.div 
                className="bg-gradient-to-r from-construction-orange to-orange-600 p-6 rounded-xl text-white text-center shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="font-montserrat font-bold text-lg mb-3">Why Choose Us?</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-xl">500+</div>
                    <div className="opacity-90">Projects</div>
                  </div>
                  <div>
                    <div className="font-bold text-xl">25+</div>
                    <div className="opacity-90">Years</div>
                  </div>
                  <div>
                    <div className="font-bold text-xl">100%</div>
                    <div className="opacity-90">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
