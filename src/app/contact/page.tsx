import ContactForm from "@/components/contact-form";
import Container from "@/components/container";
import Heading from "@/components/heading";
import { Montage } from "@/components/montage";
import Scales from "@/components/scales";
import SubHeading from "@/components/sub-heading";
import Timeline from "@/components/timeline";

const ContactPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
          <Scales />
          <Heading>Contact Me</Heading>
          <SubHeading>
            I am open to freelancing offers. Reach out to me if you have any
            projects in mind. I would love to collaborate with you.
          </SubHeading>
          <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 flex items-center justify-center border-y border-neutral-200 px-4">
            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;
