import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "../../Style/Testimonial.css"; // Import the CSS file

const testimonials = [
  {
    id: 1,
    name: "Charles",
    text: "Amazing work!",
    position: "Founder",
    company: "Flying Secoya",
  },
  {
    id: 2,
    name: "Gaëlle",
    text: "Very efficient!",
    position: "UX Researcher",
    company: "Google",
  },
  {
    id: 3,
    name: "Elvira",
    text: "Met all deadlines.",
    position: "Office Manager",
    company: "Only.Pro",

  },
  {
    id: 4,
    name: "Daniel",
    text: "Very professional!",
    position: "CTO",
    company: "NextGen Labs",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Maya",
    text: "Loved working together.",
    position: "Creative Director",
    company: "VisionX",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  },
];

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const ref = useRef(null);
  const [hoverId, setHoverId] = useState(2);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <motion.div
        layout
        className={isVisible ? "horizontal-scroll-layout" : "fullscreen-layout"}
        transition={{
          layout: { duration: 1.6, ease: [0.25, 0.8, 0.25, 1] }
        }}
        onLayoutAnimationComplete={() => {
          if (isVisible) setTimeout(() => setHasTransitioned(true), 300);
        }}
      >
        {isVisible ? (
          testimonials.map((t, i) => (
            <Card
              key={t.id}
              t={t}
              layoutId={t.id === 2 ? "main" : undefined}
              transitioning={t.id === hoverId && !hasTransitioned}
              setHoverId={setHoverId}
            />
          ))
        ) : (
          <Card
            t={testimonials[1]}
            layoutId="main"
            large
            transitioning
            animateOnMount
          />
        )}
      </motion.div>

      <div ref={ref} className="invisible-trigger" />
    </>
  );
};

const Card = ({
  t,
  layoutId,
  large = false,
  transitioning = false,
  animateOnMount = false,
  setHoverId
}) => {
  return (
    <motion.div
      layout
      layoutId={layoutId}
      className={`card ${large ? "large" : ""} ${transitioning ? "transitioning" : ""}`}
      initial={animateOnMount ? { scale: 0.95, opacity: 0 } : false}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
        },
      }}
      style={{
        transformOrigin: 'center',
      }}
      onMouseEnter={() => {
        setHoverId && setHoverId(t.id);
      }}
      onMouseLeave={() => {
        setHoverId && setHoverId(-1);
      }}
    >
      <img src={t.image} alt={t.name} className="avatar" />
      <h3>{t.name}</h3>
      <p>"{t.text}"</p>
      <p>{t.position} – {t.company}</p>
      <div className="rating">
        <Star fill="#4ade80" />
        <span>5/5</span>
      </div>
    </motion.div>
  );
};

export default Testimonial;