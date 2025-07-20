"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  target: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={className}>
      {inView ? <CountUp end={target} duration={2.5} separator="," /> : "0"}
      +
    </div>
  );
};

export default AnimatedCounter;