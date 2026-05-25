import Marquee from "react-fast-marquee";
import { TestimonialData } from "@/constants/projects";
import TestimonialCard from "./testimonial-card";
import SectionHeading from "./section-heading";
const Testimonial = () => {
  return (
    <>
      <div className="py-10">
        <SectionHeading delay={0.2}>
          Here's what people say about me.
        </SectionHeading>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <Marquee speed={50} pauseOnHover={true} className="py-4">
            <div className="flex gap-10">
              {TestimonialData.map((testimonial, idx) => (
                <TestimonialCard
                  key={`${testimonial.name}-${idx}`}
                  {...testimonial}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
