import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import FlowingServices from '../components/FlowingServices';
import { mockProjects } from '../components/ProjectMock';
import Title from '../components/Title';
import useStore from '../store/useStore';
import ProjectDiv from '../components/ProjectDiv';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
const ProjectPage = () => {
    const { space } = useStore();
    const {id}=useParams()

  // Find the project based on the ID
  const project = mockProjects.find((item: any) => item.id == id);

  const getRandomProjects = (excludedId: number, count: number) => {
    const filteredProjects = mockProjects.filter((item: any) => item.id !== excludedId);
  
    // Handle case where there are fewer projects than needed
    if (filteredProjects.length <= count) return filteredProjects;
  
    const randomIndices = new Set<number>();
    while (randomIndices.size < count) {
      const randomIndex = Math.floor(Math.random() * filteredProjects.length);
      randomIndices.add(randomIndex);
    }
  
    return Array.from(randomIndices).map((index) => filteredProjects[index]);
  };
  
  const randomProjects = project ? getRandomProjects(project.id, 2) : [];
  
  


    
  if (!project) {
    return <div className="bg-light dark:bg-dark py-[100px] pt-[200px] dark:text-white text-dark font-bold text-center uppercase text-[40px] w-full">Project Not Found</div>;  // Show a fallback message if category is not found
  }
  return (
    <>
    
    <div className={`${space} py-[70px] grid gap-[20px]`}>
    <a
          href={project.liveLink} className="rounded-md w-full  lg:h-[60vh]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md"/>
        </a>
    <div className="grid md:grid-cols-[2fr_1fr] gap-[30px]">
        <div className="grid gap-[20px] h-fit">
            <p className="text-green text-[30px]">{project.title} <span className="text-dark dark:text-light">Solution</span></p>

            <p className="text-[15px] text-lightDark dark:text-darkwhite">{project.description}</p>
        </div>

        <div className="rounded-md bg-lightBackground dark:bg-lightDark h-fit p-3 dark:text-darkwhite grid gap-3 text-dark">
            <div className="grid">
                <p className=" text-[18px] text-green">Project Category</p>
                <p className="font-bold  text-[18px]">{project.category}</p>
            </div>
            <div className="grid">
                <p className=" text-[18px] text-green">Tools</p>
                <p className="font-bold  text-[18px]">{project.tools}</p>
            </div>
            <div className="flex gap-2">
        {/* Live Link */}
        <a
          href={project.liveLink} // Replace with the actual live link URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-500 text-white w-[40px] h-[40px] justify-center  rounded-full hover:bg-blue-600 transition duration-200"
        >
          <FiExternalLink  /> {/* React Icon for Live Link */}
          {/* <span className="font-bold">Live</span> */}
        </a>

        {/* GitHub Link */}
        {project.githubLink && 
        <a
          href={project.githubLink} // Replace with the actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:bg-gray-800 text-white w-[40px] h-[40px] justify-center rounded-full bg-gray-900 transition duration-200"
        >
          <FiGithub  /> {/* React Icon for GitHub */}
          {/* <span className="font-bold">GitHub</span> */}
        </a>
        
        }
      </div>
        </div>
    </div>
    <div className="grid gap-[20px]">
            <p className="text-dark font-bold dark:text-light text-[20px]">
                The Challenge
            </p>
            <p className="text-[15px] text-lightDark dark:text-darkwhite list-disc" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: project.challenge||'' }} />
         
        </div>
        <div className="grid gap-[20px]">
            <p className="text-dark font-bold dark:text-light text-[20px]">
                The Solution
            </p>
            
            <p className="text-[15px] text-lightDark dark:text-darkwhite" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: project?.solution ||'' }} />
        </div>


    </div>
        <FlowingServices/>
        <div className={`${space} py-[70px] gap-[30px]  m-auto grid`}>
        <div className="m-auto w-fit">
          <Title title="View Projects" />
        </div>
        <div className="flex justify-between text-dark dark:text-light  ">
          <p className="w-[80%] md:w-[40%] text-[30px] md:text-[40px] font-bold">
            View
            <span className="text-green "> Other Projects</span>
          </p>
          <Button title="View All Projects" className="h-fit whitespace-nowrap" />
        </div>

        
        {randomProjects.length>0&&
        <ProjectDiv projects={randomProjects} />
        }
      </div>
    </>
  )
}

export default ProjectPage