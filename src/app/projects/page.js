// app/projects/page.js  (Server Component)
import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Projects",
  description: "Explore MSR DevXpert projects including Vision Green RKR and Oxynet."
};

export default function Projects() {
  return <ProjectsContent />;
}
