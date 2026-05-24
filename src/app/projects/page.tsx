import Container from "@/components/container";
import Heading from "@/components/heading";
import { Montage } from "@/components/montage";
import Projects from "@/components/projects";
import SubHeading from "@/components/sub-heading";
import Timeline from "@/components/timeline";

const AboutPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
          <Heading>About Me</Heading>
          <SubHeading>
            I am a passionate software engineer with experience in full-stack
            development. I enjoy working on challenging problems and
            continuously learning new technologies.
          </SubHeading>
          {/* <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
            Here are some of my projects.
          </p> */}
          <Projects />
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
