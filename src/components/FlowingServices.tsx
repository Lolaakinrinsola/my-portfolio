import useStore from "../store/useStore";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const FlowingServices = () => {
    const { services } = useStore();
    const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (marqueeElement) {
      const width = marqueeElement.scrollWidth;

      gsap.to(marqueeElement, {
        x: -width / 2, 
        duration: 30, // Adjust speed of marquee
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);
  return (
    <div className="w-screen py-[5px] text-[1em] lg:text-[1.5em] bg-green bg-opacity-40 dark:bg-opacity-80 text-dark relative overflow-hidden ">
      <div className=" flex gap-4 w-fit  whitespace-nowrap" ref={marqueeRef}>
        {[...services, ...services].map((service:any, index:any) => (
          <span
            key={index}
            className=" font-bold uppercase text-dark dark:text-light  w-fit"
          >
            {service} .
          </span>
        ))}
      </div>
      </div>
  )
}

export default FlowingServices