import { FiExternalLink, FiGithub } from "react-icons/fi"
import { MdOutlineArrowOutward } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const ProjectDiv = ({projects}:any) => {
    const navigate=useNavigate()
    if (!Array.isArray(projects)) {
      return <div>No projects available.</div>; 
    }
  return (
    <div className="grid gap-10">
      {projects.map((project:any,index:any) => (
        <div key={project.id} className={`grid md:flex  p-3 rounded-md dark:bg-lightDark bg-lightBackground gap-[30px] ${
            index % 2 === 0 ? " md:flex-row" : "md:flex-row-reverse"
          }`}>
        {/* Image */}
        <div className="rounded-md md:h-[300px] bg-white">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md" />
        </div>

        {/* Text Content */}
        <div className="my-auto grid gap-[10px] h-fit md:w-[40%]">
        <div className="flex gap-2">
        {/* Live Link */}
        <a
          href={project.liveLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-500 text-white py-[5px] px-[20px] gap-1 justify-center  rounded-full hover:bg-blue-600 transition duration-200"
        >
          <FiExternalLink  /> 
          <span className="font-bold">Live</span>
        </a>

        {/* GitHub Link */}
        {project.githubLink && 
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:bg-gray-800 text-white py-[5px] px-[20px] gap-1 justify-center rounded-full bg-gray-900 transition duration-200"
        >
          <FiGithub  /> {/* React Icon for GitHub */}
          <span className="font-bold">GitHub</span>
        </a>
        
        }
      </div>
          {/* <div className="flex gap-[10px]">
            <Button title="Live Link" onClick={()=>navigate(project.liveLink)}/>
            {project.githubLink && 
            <Button title="Github"  onClick={()=>navigate(project.githubLink)} />
            }
          </div> */}
          <p className="text-dark dark:text-light text-[25px]">{project.title}</p>
          <p className="text-lightMuted dark:text-lightdarkwhite text-[15px] md:text-[12px]">
            {project.description}
          </p>
          <a
          rel="noopener noreferrer" className="flex gap-1 cursor-pointer text-dark dark:text-light items-center hover:text-green" onClick={() => navigate(`/project/${project.id}`)}>
          <MdOutlineArrowOutward className="text-[20px] hover:text-green "  />
<p className="text-[12px] hover:text-green">Go to Page</p>
          </a>
        </div>
      </div>
      ))}
    </div>

  )
}

export default ProjectDiv