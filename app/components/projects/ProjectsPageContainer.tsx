"use client";
import { useEffect, useState } from "react";
import ProjectsPage from "./ProjectsPage";
import { ProjectType } from "@/app/type/ProjectType";

export default function ProjectsPageContainer() {
  const [numberOfProjects, setNumberOfProjects] = useState<number>(1);
  const [projectsData, setProjectsData] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjectsData(data);
      setNumberOfProjects(data.length);
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className={`bg-[#2B2C30] relative`}>
      <h2 className="page-title text-center pt-12 pb-0 absolute top-10">
        PROJETS
      </h2>
      {projectsData?.map((project, index) => (
        <ProjectsPage
          key={index}
          projectData={project}
          numberOfProjects={numberOfProjects}
        />
      ))}
    </div>
  );
}
