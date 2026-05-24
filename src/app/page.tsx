import Container from "@/components/container";
import Heading from "@/components/heading";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/projects";
import SubHeading from "@/components/sub-heading";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
          <Heading>Karan Bhatt</Heading>
          <SubHeading>
            I'm a software engineer with a passion for building innovative and
            user-friendly applications.I am currently working as a Software
            Engineer at Verloop.io
          </SubHeading>
          <Projects />
          <LandingBlogs />
        </Container>
      </div>
    </>
  );
};

export default Home;
