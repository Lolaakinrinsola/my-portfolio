import Button from "../components/Button";
import useStore from "../store/useStore";
import { Image } from "../assets/Images";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import FlowingServices from "../components/FlowingServices";
import Services from "../components/Services";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss, SiGit } from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import Academic from "../components/Academic";
import { homeServices } from "../components/ServiceList";
import { useNavigate } from "react-router-dom";
import ProjectDiv from "../components/ProjectDiv";
import { mainProjects } from "../components/ProjectMock";
import { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
const Home = () => {
    const navigate=useNavigate()
  const { space } = useStore();
  const about = [
    { title: "Project Completed", number: "20" },
    { title: "Industry Covered", number: "5" },
    { title: "Years of Experience", number: "4" },
  ];
  const tools = [
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Javascript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Git & GitHub", icon: <SiGit size={40} color="#F05032" /> },
    { name: "Node", icon: <FaNodeJs color="#339933" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default animation duration
  }, []);
  return (
    <>
      
      <header
        className={`min-h-[calc(100vh-100px)]  pt-[50px] md:pt-0 ${space} flex flex-wrap md:flex-row-reverse lg:flex-row gap-[20px]`}
        data-aos="fade-in"
      >
        <div className=" lg:w-[50%] md:my-auto grid gap-[20px] h-fit">
          <Title title="Hi There!" />
          <p className="font-bold  text-[2.5em] md:text-[3em]  dark:text-light text-dark ">
            <span className="text-green">I'm Ololade, </span>Frontend developer
            based in Canada.
          </p>
          <p className="text-dark dark:text-lightdarkwhite text-[15px]">
            I turn designs into interactive, pixel-perfect masterpieces—mostly
            on purpose! With 4+ years of experience wrangling React, Typescript,
            and tailwind, I create user-friendly interfaces that work like a
            charm .
          </p>

          <div className="grid md:flex gap-[20px]">
            <Button title="View My Projects" onClick={()=>navigate('/project')}/>
            <a
  href="/ololadecv.pdf"
  download="ololadecv.pdf"
  className={`py-[10px] px-[20px] rounded-full  hover:bg-green font-bold border-[1px] bg-light dark:bg-dark  border-darkwhite dark:text-light text-dark flex gap-2 items-center justify-center md:w-fit`}
>
  <FiDownload /> Download My CV
</a>
          
          </div>
        </div>

        <div className="relative lg:w-[45%] flex items-end overflow-hidden">
          {/* <div className="absolute bg-green w-[40vw] h-[40vw] z-10 rounded-full top-[-5%]"></div> */}
          <img
            src={Image.pic}
            alt="Ololade"
            className="absolute bottom-[-15%] left-0 w-full  object-cover z-10"
          />
        </div>
      </header>

      <FlowingServices />
      {/* Specialization */}
      <div className={`${space} pt-[70px] grid gap-[20px]`} data-aos="slide-right">
        <Title title="My Specialization" />
        <div className="flex items-center justify-between">
          <p className="text-[20px] md:text-[30px] text-dark dark:text-light font-bold">
            <span className="text-green">Services </span> I Provide
          </p>

          <Button title="View All Services" onClick={()=>navigate('/service')}/>
        </div>

        <div className="grid md:grid-cols-3 gap-[30px]">
          <Services service={homeServices} />
        </div>
      </div>

      {/* About Me */}
      <div className={`${space} py-[70px] flex flex-wrap gap-[30px]`} data-aos="slide-left">
        <div className="w-[40%] m-auto">
          <div className="relative  flex w-fit">
            <div className="absolute bg-green w-[270px] h-[270px] left-[-18%] z-10 rounded-full bottom-0 lg:w-[500px] lg:h-[500px] md:right-[-50%] md:hidden lg:block"></div>
            <img
              src={Image.pic}
              alt="Ololade"
              className=" w-[200px] md:w-[450px] md:h-[550px]  object-cover z-20 rounded-b-full "
            />
          </div>
        </div>
        <div className="grid gap-[20px] md:w-[50%] m-auto md:m-0 text-center md:text-left h-fit">
          <div className="m-auto md:m-0">
            <Title title="About Me" />
          </div>
          <p className="font-bold text-dark text-[40px] dark:text-white">
            Who is <span className="text-green">Ololade Akinrinsola ?</span>
          </p>
          <p className="text-lightDark text-[15px] dark:text-darkwhite">
            A frontend developer from Nigeria. I create websites that are fast,
            responsive, and full of personality—just like me! From fixing bugs
            (those “digital mosquitoes”) to adding smooth animations and
            seamless API connections, I’ve got your back.
            <br />
            <br />I make sure your site looks great on any device and is
            accessible to everyone, all while bringing a touch of humor and a
            human-first approach. Let’s turn your ideas into something amazing!
            😊
          </p>

          <div className="grid md:grid-cols-3 gap-[20px] items-center m-auto md:m-0">
            {about.map((val, index) => (
              <div className="grid text-center md:text-left" key={index}>
                <p className="text-green font-bold text-[25px]">
                  {val.number}+
                </p>
                <p className="text-lightDark dark:text-darkwhite text-[15px]">
                  {val.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Favorite tools */}
      <div className={`${space} py-[70px] gap-[30px] text-center m-auto grid`} data-aos="slide-right">
        <div className="m-auto ">
          <Title title="My Favorite Tools" />
        </div>
        <p className="text-green font-bold text-[40px] md:w-[40%] m-auto ">
          Exploring the Tools{" "}
          <span className="text-dark dark:text-light">Behind My Designs</span>
        </p>
        <div className="grid gap-[40px] md:grid-cols-2 lg:grid-cols-3">
          {tools.map((val, index) => (
            <div
              className="rounded-md max-h-[200px] dark:bg-lightDark grid gap-[15px] py-[20px] border-[1px]   border-b-[4px] border-b-green border-borderLight bg-lightBackground"
              key={index}
            >
              <div className="h-[60px] w-[60px] grid justify-center bg-white dark:bg-[#2A2A2A] items-center rounded-full m-auto text-[40px]">
                {val.icon}
              </div>
              <div className="px-[15px]">
                <p className="text-dark dark:text-light text-[20px] font-bold">
                  {val.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FlowingServices />

      {/* Porfolio */}
      
      <div className={`${space} py-[70px] gap-[30px]  m-auto grid`} data-aos="slide-right">
        <div className="m-auto md:m-0">
          <Title title="My Porfolio" />
        </div>
        <div className="flex justify-between text-dark dark:text-light  ">
          <p className="w-[80%] md:w-[40%] text-[30px] md:text-[40px] font-bold">
            Let's Have a Look at{" "}
            <span className="text-green ">My Portfolio</span>
          </p>
          <Button title="View All Projects" className="h-fit whitespace-nowrap" onClick={()=>navigate('/project')}/>
        </div>

<ProjectDiv projects={mainProjects}/>
        
      </div >
      <FlowingServices />

      {/* Education & Work */}
      <div className={`${space} py-[70px] gap-[30px]  m-auto grid`} data-aos="fade-in">
        <div className="m-auto ">
          <Title title="Education & Work" />
        </div>
        <p className="md:w-[40%] text-[40px] font-bold m-auto text-center text-dark dark:text-light">
          My <span className="text-green ">Academic & Professional </span>{" "}
          Journey
        </p>

        <div className="grid md:grid-cols-2 gap-[20px]">
          <Academic/>
        </div>
      </div>
      {/* Contact Me */}
      
    </>
    
  );
};

export default Home;
