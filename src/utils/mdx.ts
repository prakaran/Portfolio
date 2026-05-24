import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

interface FrontMatter {
  title: string;
  description: string;
  tags: string[];
  date: string;
  author: string;
  slug: string;
  image: string;
}

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data", `${slug}.mdx`),
    );
    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBlogs = async () => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "src/data"));
    const allBlogs = await Promise.all(
      files.map(
        async (file) =>
          await getBlogFrontMatterBySlug(file.replace(".mdx", "")),
      ),
    );
    return allBlogs.filter((blog): blog is FrontMatter => blog !== null);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data", `${slug}.mdx`),
      "utf-8",
    );
    if (!singleBlog) {
      throw new Error("No blog found");
    }
    const { frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });
    return frontmatter;
  } catch (error) {
    console.log(error);
    return null;
  }
};
