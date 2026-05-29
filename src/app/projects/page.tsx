import Container from "@/components/container";
import Heading from "@/components/heading";
import Projects from "@/components/projects";
import Scales from "@/components/scales";
import SubHeading from "@/components/sub-heading";
import { projects } from "@/constants/projects";

const ProjectPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
          <Scales />
          <Heading>Projects</Heading>
          <SubHeading>
            Here are some of my favorite projects I've worked on. I'm passionate
            about building cool stuff and I love sharing my work with the world.
          </SubHeading>
          <Projects projects={projects} />
        </Container>
      </div>
    </>
  );
};

export default ProjectPage;
