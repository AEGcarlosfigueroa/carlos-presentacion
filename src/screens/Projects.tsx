import './../App.css';
import ProjectCards from '../components/ProjectCards';

function Projects() {

  return (
    <div className="flex flex-col w-full lg:w-[60%] lg:ml-[20%] items-center">
      <div className="text-5xl font-bold mt-6">PROJECTS</div>
      <ProjectCards/>
    </div>
  )
}

export default Projects;
