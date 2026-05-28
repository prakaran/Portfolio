import Container from "@/components/container";
import Heading from "@/components/heading";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/projects";
import Scales from "@/components/scales";
import SubHeading from "@/components/sub-heading";
import Testimonial from "@/components/testimonials";
import { LayoutTextFlipDemo } from "@/components/title-flip";
import { projects } from "@/constants/projects";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="relative min-h-[200vh] px-8 md:pt-20 md:pb-10">
          <Scales />
          <div className="flex flex-col items-start justify-start">
            <Heading>
              <LayoutTextFlipDemo />
            </Heading>

            <SubHeading>
              I'm a software engineer with a passion for building innovative and
              user-friendly applications.I am currently working as a Software
              Engineer at Verloop.io
            </SubHeading>
          </div>
          <Projects projects={projects.slice(0, 3)} />
          <LandingBlogs />
          <Testimonial />
        </Container>
      </div>
    </>
  );
};

export default Home;
