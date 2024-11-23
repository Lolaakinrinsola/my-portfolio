import useStore from "../store/useStore";

const FlowingServices = () => {
    const { services } = useStore();
  return (
    <div className="w-screen py-[5px] text-[1em] lg:text-[2em] bg-green bg-opacity-40 dark:bg-opacity-80 text-dark relative overflow-hidden whitespace-nowrap">
      <div className=" inline-flex animate-marquee w-fit  ">
        {[...services, ...services].map((service:any, index:any) => (
          <span
            key={index}
            className="mx-4 font-bold uppercase text-dark dark:text-light"
          >
            {service} .
          </span>
        ))}
      </div>
      </div>
  )
}

export default FlowingServices