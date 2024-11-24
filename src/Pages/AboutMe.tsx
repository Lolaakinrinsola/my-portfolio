import { Image } from "../assets/Images";
import Title from "../components/Title";
import useStore from "../store/useStore";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import FlowingServices from "../components/FlowingServices";
import { FiDownload } from "react-icons/fi";


const AboutMe = () => {
    const { space } = useStore();
    const about = [
        { title: "Project Completed", number: "20" },
        { title: "Industry Covered", number: "5" },
        { title: "Years of Experience", number: "4" },
      ];
      const skills = [
        { name: "React.js", icon: <FaReact />, level: "Expert" },
        { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
        { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" },
        { name: "JavaScript", icon: <FaJsSquare />, level: "Expert" },
        { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate" },
      ];
    
      const testimonials = [
        {
          quote: "Ololade's attention to detail is phenomenal. Our website has never looked better!",
          name: "Brendan Ujunwa",
          role: "Project Manager",
        },
        {
          quote: "Fast, efficient, and creative—Ololade is a dream to work with.",
          name: "Chukwuebuka Odogwu",
          role: "CTO",
        },
      ];
  return (
    <div className="bg-light dark:bg-dark">
{/* Vision & Mission Section */}
<div className={`py-[50px] grid  ${space}`}>
    <div className="m-auto">

        <Title title="Vision & Mission" />
    </div>
        <div className="grid gap-[30px] mt-[30px] md:grid-cols-2 ">
          <div className=" dark:bg-lightDark p-[20px] rounded-md border-borderLight bg-lightBackground">
            <p className="text-green font-bold text-[25px]">Vision</p>
            <p className="text-lightDark dark:text-darkwhite text-[15px] mt-[10px]">
              To create a world where digital experiences are fast, accessible, and delightful, one pixel at a time.
            </p>
          </div>
          <div className="border-borderLight bg-lightBackground dark:bg-lightDark p-[20px] rounded-md">
            <p className="text-green font-bold text-[25px]">Mission</p>
            <p className="text-lightDark dark:text-darkwhite text-[15px] mt-[10px]">
              To empower businesses and individuals with cutting-edge frontend solutions, combining technical expertise with a human touch to deliver seamless, engaging digital products.
            </p>
          </div>
        </div>
      </div>

<div className={`${space} py-[70px] flex flex-wrap gap-[30px]`}>

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

          {/* <a
  href="/ololadecv.pdf"
  download="ololadecv.pdf"
  className={`py-[10px] px-[20px] rounded-full  hover:bg-green font-bold border-[1px] bg-light dark:bg-dark  border-darkwhite dark:text-light text-dark flex gap-2 items-center w-fit`}
>
  <FiDownload /> Download My CV
</a> */}
        </div>

        

      {/* Download Resume */}
      {/* <div className="py-[30px] text-center">
        <button className="bg-green text-white py-[10px] px-[20px] rounded-md shadow-lg hover:bg-dark">
          Download Resume
        </button>
      </div> */}

      </div>
      <FlowingServices/>
            {/* Skills Section */}
            <div className="py-[50px] bg-light dark:bg-lightDark">
            <div className="m-auto w-fit">

        <Title title="Skills" />
            </div>
        <div className="grid grid-cols-3 gap-y-[60px] justify-center mt-[30px] lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center text-dark dark:text-white flex flex-col items-center"
            >
              <div className="text-green text-[50px]">{skill.icon}</div>
              <p className="font-bold text-[18px] mt-[10px]">{skill.name}</p>
              <p className="text-lightDark dark:text-darkwhite text-[14px]">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`${space} py-[50px]`}>
        <div className="m-auto  w-fit">
        <Title title="What People Say" />
        </div>
        <p className="font-bold text-dark text-[40px] dark:text-white text-center">
            Testimonials that <span className="text-green"> Speaks to My Results</span>
          </p>
        <div className="grid md:grid-cols-2 gap-[30px] mt-[30px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-[20px] bg-lightBackground dark:bg-lightDark border-l-[4px] border-green rounded-md"
            >
              <p className="text-[14px] text-lightDark dark:text-darkwhite">
                "{testimonial.quote}"
              </p>
              <p className="mt-[10px] font-bold text-dark dark:text-white">
                - {testimonial.name}, {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe