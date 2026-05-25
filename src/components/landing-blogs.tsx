import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import SectionHeading from "./section-heading";
import MotionDiv from "./motion-div";

const truncate = (text: string, length: number) => {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
};
const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <>
      <div className="px-4">
        <SectionHeading delay={0.2}>
          I love writing about things I learn.
        </SectionHeading>
        <div className="flex flex-col gap-8 py-10">
          {allBlogs.slice(0, 3).map((blog, idx) => (
            <MotionDiv
              initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              key={blog.title}
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-primary text-base font-bold tracking-tight md:text-base">
                    {blog.title}
                  </h2>
                  <p className="text-secondary pt-2 text-sm tracking-tight md:text-sm">
                    {new Date(blog.date).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p className="text-secondary max-w-lg pt-2 text-sm tracking-tight md:text-sm">
                  {truncate(blog.description, 150)}
                </p>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingBlogs;
