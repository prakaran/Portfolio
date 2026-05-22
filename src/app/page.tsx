import Container from "@/components/container";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
          <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
            Hello Prakaran
          </h1>
          <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
            I'm a software engineer with a passion for building innovative and
            user-friendly applications.I am currently working as a Software
            Engineer at Verloop.io
          </p>
        </Container>
      </div>
    </>
  );
};

export default Home;
