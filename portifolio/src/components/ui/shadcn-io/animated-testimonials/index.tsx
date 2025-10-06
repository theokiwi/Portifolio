"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}

// ✨ New component to manage its own state and prevent hydration errors
const TestimonialCard = ({
  testimonial,
  isActive,
  zIndex,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  zIndex: number;
}) => {
  // Initialize rotation state with a consistent value (0)
  const [rotations, setRotations] = useState({
    initial: 0,
    animate: 0,
    exit: 0,
  });

  // Generate random rotations only on the client-side after mounting
  useEffect(() => {
    const randomRotate = () => Math.floor(Math.random() * 21) - 10;
    setRotations({
      initial: randomRotate(),
      animate: randomRotate(),
      exit: randomRotate(),
    });
  }, []);

  return (
    <motion.div
      key={testimonial.src}
      initial={{
        opacity: 0,
        scale: 0.9,
        z: -100,
        rotate: rotations.initial,
      }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.95,
        z: isActive ? 0 : -100,
        rotate: isActive ? 0 : rotations.animate,
        zIndex: zIndex,
        y: isActive ? [0, -80, 0] : 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        z: 100,
        rotate: rotations.exit,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="absolute inset-0 origin-bottom"
    >
      <img
        src={testimonial.src}
        alt={testimonial.name}
        width={500}
        height={500}
        draggable={false}
        className="h-full w-full rounded-3xl object-cover object-center"
      />
    </motion.div>
  );
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12", className)}>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.src}
                  testimonial={testimonial}
                  isActive={index === active}
                  zIndex={
                    index === active
                      ? 40
                      : testimonials.length + 2 - index
                  }
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <ChevronLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <ChevronRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};