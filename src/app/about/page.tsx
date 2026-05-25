import Container from "@/components/container";
import Heading from "@/components/heading";
import { Montage } from "@/components/montage";
import Scales from "@/components/scales";
import SectionHeading from "@/components/section-heading";
import SubHeading from "@/components/sub-heading";
import Timeline from "@/components/timeline";

const AboutPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
          <Scales />
          <Heading>About Me</Heading>
          <SubHeading>
            I am a passionate software engineer with experience in full-stack
            development. I enjoy working on challenging problems and
            continuously learning new technologies. I am a quick learner and
            always looking for new opportunities to grow and develop my skills.
          </SubHeading>
          <SectionHeading delay={0.2} className="mx-4">
            I love to travel.
          </SectionHeading>
          <Montage />

          <Timeline />
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
