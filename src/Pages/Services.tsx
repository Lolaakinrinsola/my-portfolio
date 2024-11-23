import { allServices } from "../components/ServiceList";
import Services from "../components/Services";
import Title from "../components/Title";
import useStore from "../store/useStore";

const Service = () => {
    const { space } = useStore();
  return (
    <div className={`${space} pt-[70px] grid gap-[20px]`}>
        <div className="m-auto">
        <Title title="My Specialization" />

        </div>
          <p className="text-[30px] md:text-[50px] text-dark dark:text-light font-bold text-center">
            <span className="text-green">Services </span> I Provide
          </p>
        

        <div className="grid md:grid-cols-3 gap-[30px]">
        <Services service={allServices} />
        </div>
      </div>
   
  );
};

export default Service;
