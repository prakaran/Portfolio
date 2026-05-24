import Container from "@/components/container";
import { Montage } from "@/components/montage";
import Timeline from "@/components/timeline";

const AboutPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-[200vh] p-10 md:pt-20 md:pb-10">
          <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
            About Me
          </h1>
          <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
            I am a passionate software engineer with experience in full-stack
            development. I enjoy working on challenging problems and
            continuously learning new technologies. I am a quick learner and
            always looking for new opportunities to grow and develop my skills.
          </p>
          <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
            I love to travel.
          </p>
          <Montage />
          <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
            Here is the timeline of my life achievements.
          </p>
          <Timeline />
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
