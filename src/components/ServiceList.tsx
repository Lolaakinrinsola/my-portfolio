// services.js
import { FaLaptopCode, FaNodeJs, FaAws } from "react-icons/fa";
import { RiRocketLine } from "react-icons/ri";
import { HiOutlineServer } from "react-icons/hi";
import { AiOutlineLayout} from "react-icons/ai";
import { MdDevices} from "react-icons/md";
import { BiBug } from "react-icons/bi";

// Services for Home Page
export const homeServices = [
  {
    name: "Website Development",
    icon: <FaLaptopCode />,
    descrp: "I’ll create responsive, fast, and modern websites tailored to your needs.",
  },
  {
    name: "Performance Optimization",
    icon: <RiRocketLine />,
    descrp: "I'll make your site lightning-fast and ensure smooth user experiences.",
  },
  {
    name: "API Integration",
    icon: <HiOutlineServer />,
    descrp: "I’ll connect your frontend to APIs and ensure everything works like a charm.",
  },
];

// Services for Full Services Page
export const allServices = [
  ...homeServices,
  
  {
    name: "UI/UX Implementation",
    icon: <AiOutlineLayout />,
    descrp: "Turning your designs into pixel-perfect, interactive interfaces.",
  },
  {
    name: "Responsive Design",
    icon: <MdDevices />,
    descrp: "Your site will look great on any device—phones, tablets, laptops, you name it.",
  },
  {
    name: "Frontend Debugging & Fixes",
    icon: <BiBug />,
    descrp: "Stuck with a bug? I’ll squash it for you!",
  },
  {
    name: "Node.js Services",
    icon: <FaNodeJs />,
    descrp: "Building scalable and efficient backend APIs for your frontend.",
  },
  {
    name: "AWS Deployment",
    icon: <FaAws />,
    descrp: "Deploying and hosting your website on AWS for scalability and reliability.",
  },
];
