import Container from "@/components/container";
import Heading from "@/components/heading";
import Projects from "@/components/projects";
import Scales from "@/components/scales";
import SubHeading from "@/components/sub-heading";
import { projects } from "@/constants/projects";

const AboutPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
          <Scales />
          <Heading>About Me</Heading>
          <SubHeading>
            I am a passionate software engineer with experience in full-stack
            development. I enjoy working on challenging problems and
            continuously learning new technologies.
          </SubHeading>
          <Projects projects={projects} />
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
