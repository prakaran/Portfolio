import Container from "@/components/container";
import Heading from "@/components/heading";
import Scales from "@/components/scales";
import SubHeading from "@/components/sub-heading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "All the blogs written by Karan Bhatt",
};

const truncate = (text: string, length: number) => {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
};

const BlogsPage = async () => {
  const allBlogs = await getBlogs();
  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
          <Scales />
          <Heading>All Blogs</Heading>
          <SubHeading>
            I'm a software engineer with a passion for building scalable and
            efficient systems. I'm currently working as a software engineer at
            Google.
          </SubHeading>
          <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 flex flex-col gap-8 border-y border-neutral-200 px-4 py-10">
            {allBlogs.map((blog, idx) => (
              <Link href={`/blog/${blog.slug}`} key={blog.title}>
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
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogsPage;
