
import ProjectDiv from "../components/ProjectDiv"
import { mockProjects } from "../components/ProjectMock"
import Title from "../components/Title";
import useStore from "../store/useStore";

const Project = () => {
    const { space } = useStore();
    
  return (
    <div className={`${space} pt-[70px] grid  `}>
      <div className="m-auto">
        <Title title="My Projects" />

        </div>
          <p className="text-[30px] md:text-[50px] text-dark dark:text-light font-bold text-center mb-[50px]">
            <span className="text-green">Projects </span> I Have Built
          </p>
        <ProjectDiv projects={mockProjects}/>
    </div>
  )
}

export default Project