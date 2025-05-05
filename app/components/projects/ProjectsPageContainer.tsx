import ProjectsPage from './ProjectsPage';

export default function ProjectsPageContainer() {
  const numberOfProjects = 3;

  return (
    <div id='projects' className={`h-[cal(100vh)*${numberOfProjects}] bg-[#272727]`}>
      <ProjectsPage titlePage='PROJETS' />
      <ProjectsPage titlePage='' />
      <ProjectsPage titlePage='' />
    </div>
  )
}