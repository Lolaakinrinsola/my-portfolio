import Button from "../components/Button"
import Title from "../components/Title"
import useStore from "../store/useStore"
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Rate = () => {
const {space}=useStore()
const navigate=useNavigate()

const offerings = [
    { type: "Hourly", rate: "$15 /Hour", items: [
        "Bug fixes and debugging",
        "Minor feature additions or updates",
        "UI/UX adjustments",
        "Responsive design fixes",
        "Performance optimization",
        "Consulting or technical support",
      ] 
    },
    { type: "Monthly", rate: "$3500 /Month", items: [
        "Full-feature development",
        "End-to-end responsive design",
        "Integration with backend APIs",
        "Testing and debugging",
        "Deployment and maintenance",
        "Regular updates and meetings",
        "Collaboration with the team",
      ]
    },
  ];

  return (
    <div className={`${space} grid gap-[30px]`}>
        <div className="m-auto md:m-0">
        <Title title='Pricing Table'/>

        </div>

        <div className="flex justify-between items-center">
            <p className="text-[20px] md:text-[30px] text-dark dark:text-light">My <span className="text-green"> Pricing Model</span></p>
            <Button title='Get Started' onClick={()=>navigate('/contact')}/>
        </div>

        <div className="grid md:grid-cols-2 gap-[30px]">
        {offerings.map((offering, index) => (
          <div key={index} className="rounded-md bg-lightBackground dark:bg-lightDark p-5">
            <div className="rounded-md bg-green grid gap-[20px] text-dark p-3">
              <p className="text-[15px] font-bold">{offering.type}</p>
              <p className="font-bold text-[25px]">{offering.rate}</p>
            </div>
            <ul className="mt-3 grid gap-2">
              {offering.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-dark dark:text-light text-[14px] md:text-[16px] flex items-center gap-2"
                >
                  <FaCheckCircle className="text-green" />{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Rate