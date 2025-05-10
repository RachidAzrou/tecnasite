import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

const TestimonialCard = ({ 
  quote, 
  author, 
  position 
}: { 
  quote: string; 
  author: string; 
  position: string 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full">
      <div className="flex items-center mb-6">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-neutral-dark mb-6 italic">
        "{quote}"
      </p>
      <div>
        <h4 className="font-medium text-secondary">{author}</h4>
        <p className="text-sm text-neutral-dark">{position}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalSlides = testimonials.length;
  const maxSlide = Math.max(0, Math.ceil(totalSlides / slidesToShow) - 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = 100 / slidesToShow;
      const offset = currentSlide * slideWidth * slidesToShow;
      sliderRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentSlide, slidesToShow]);

  return (
    <section id="testimonials" className="py-16 bg-neutral-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-dark lg:mx-auto">
            Trusted by organizations of all sizes to deliver quality testing solutions
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 relative px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500"
              style={{
                width: `${100 * (totalSlides / slidesToShow)}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="px-4"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <TestimonialCard 
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none hover:bg-neutral-lightest transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none hover:bg-neutral-lightest transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
