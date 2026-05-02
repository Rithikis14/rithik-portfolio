import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 30, scale: 0.95 }} // Reduced y-offset for a shorter trip
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: false, amount: 0.15 }}      // Starts a bit earlier
  transition={{
    type: "spring",
    stiffness: 150,   // Higher stiffness = faster start
    damping: 20,      // Damping prevents it from "bouncing" too much
    mass: 0.8,        // Lower mass = lighter, faster movement
    duration: 0.4     // Faster total time
  }}
>
  {children}
</motion.div>
  );
};

export default ScrollReveal;