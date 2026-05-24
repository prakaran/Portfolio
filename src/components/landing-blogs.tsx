import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

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
      <div>
        <h1 className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love writing about things I learn.
        </h1>
        <div className="flex flex-col gap-4 py-10">
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
      </div>
    </>
  );
};

export default LandingBlogs;
