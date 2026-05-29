import Container from "@/components/container";
import Scales from "@/components/scales";

import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

interface Params {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Params) => {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);
  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: frontmatter.title + " | Karan Bhatt",
    description: frontmatter.description,
  };
};

const SingleBlogPage = async (Props: Params) => {
  const { slug } = await Props.params;
  const singleBlog = await getSingleBlog(slug);

  if (!singleBlog) {
    redirect("/blog");
  }
  const { content, frontmatter } = singleBlog;

  return (
    <>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-screen px-20 md:pt-20 md:pb-10">
          <Scales />
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
          />
          <div className="prose dark:prose-invert mx-auto max-w-3xl">
            {content}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlogPage;
