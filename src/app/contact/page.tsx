import ContactForm from "@/components/contact-form";
import Container from "@/components/container";
import Heading from "@/components/heading";
import { Montage } from "@/components/montage";
import SubHeading from "@/components/sub-heading";
import Timeline from "@/components/timeline";

const ContactPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen p-10 md:pt-20 md:pb-10">
          <Heading>Contact Me</Heading>
          <SubHeading>
            I am open to freelancing offers. Reach out to me if you have any
            projects in mind. I would love to collaborate with you.
          </SubHeading>
          <div className="flex items-center justify-center">
            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;
