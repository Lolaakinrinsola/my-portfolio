import {useState} from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import useStore from "../store/useStore";
import Button from "./Button";
import DefaultInput from "./DefaultInput";
import Title from "./Title";

const ContactMe = () => {
  const { space } = useStore();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    budget: "",
    message: "",
    email: "",

  });
  const {name,phone,budget,message,email}=formState
const [errors, setErrors] = useState({
    name: "",
    phone: "",
    budget: "",
    message: "",
    email: "",
  });

  // Handle form changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };
  const validateForm = () => {
    let isValid = true;
    let newErrors = { ...errors };

    // Check if all fields are filled
    if (!formState.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formState.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    }
    if (!formState.budget) {
      newErrors.budget = "Budget range is required.";
      isValid = false;
    }
    if (!formState.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }
    if (!formState.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    const { name, phone, budget, message, email } = formState;

    // Validate fields
    if (!validateForm()) {
        return;
      }
  

    // Construct the email body
    const emailBody = `
      Hi Ololade,%0D%0A
      %0D%0A
      The budget for this is ${budget}. %0D%0A
      ${message} %0D%0A
      You can also reach me at ${phone} and ${email}.%0D%0A
      %0D%0A
      Sincerely, %0D%0A
      ${name}.
    `;

    setFormState({name:'',phone:'',budget:'',message:'',email:''})

    // Redirect to email client
    window.location.href = `mailto:ololadeakinrinsola@gmail.com?subject=Project Inquiry&body=${emailBody}`;
  };
  return (
    <div className={`${space} py-[70px] gap-[30px]  m-auto grid`}>
      <div className="m-auto ">
        <Title title="Contact Me" />
      </div>
      <p className="md:w-[40%] text-[40px] font-bold m-auto text-center text-dark dark:text-light">
        Let's Talk for <span className="text-green ">Your Next Projects </span>{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-[20px]">
        <div className="grid gap-[20px] h-fit">
          <div className="grid gap-[20px] lg:grid-cols-2 h-fit">
            <DefaultInput label="Your Name" placeHolder="Ex John" value={name} onChange={handleChange} name='name' error={errors.name}/>
            <DefaultInput
              label="Email"
              placeHolder="example@gmail.com"
              type="email"
              value={email} onChange={handleChange} name='email' error={errors.email}
            />
            <DefaultInput label="Phone" placeHolder="Enter Phone Number" value={phone} onChange={handleChange} name='phone' error={errors.phone}/>
            <DefaultInput
              label="Budget Range(CAD)"
              placeHolder="Type in range"
              value={budget} onChange={handleChange} name='budget' error={errors.budget} 
            />
          </div>
          <DefaultInput
            label="Your Message"
            placeHolder="Type here"
            type="textarea"
            value={message} onChange={handleChange} name='message' error={errors.message}
          />

          <Button title="Send Message" className="w-fit h-fit m-auto md:m-0" onClick={handleSubmit}/>
        </div>

        <div className="h-fit  border-[1px] border-borderLight bg-lightBackground dark:border-borderDark dark:bg-lightDark grid gap-[20px] rounded-md">
          <div className="p-3 grid gap-[20px]">
            <div className="grid mb-[20px]">
              <p className="text-green text-[20px] font-bold">Contact</p>
              <p className="dark:text-darkwhite text-lightText text-[15px]">
                Email: ololadeakinrinsola@gmail.com
              </p>
            </div>
            <div className="grid">
              <p className="text-green text-[20px] font-bold">Time</p>
              <p className="dark:text-darkwhite text-dark text-[15px]">
                Monday-Friday : 9:00 - 20:00
              </p>
              <p className="dark:text-darkwhite text-lightText text-[15px]">
                Saturday-Sunday : 11:00 - 16:00
              </p>
            </div>
          </div>

          <div className="bg-green p-3 rounded-b-md">
            <p className="text-dark text-[18px] font-bold">Stay Connected</p>
            
      <div className="flex gap-5 mt-2">
        {/* GitHub Icon */}
        <a
          href="https://github.com/lolaakinrinsola"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark  text-[24px] hover:text-dark hover:opacity-75"
        >
          <FaGithub />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:ololadeakinrinsolal@gmail.com"
          className="text-dark  text-[24px] hover:text-dark hover:opacity-75"
        >
          <FaEnvelope />
        </a>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
