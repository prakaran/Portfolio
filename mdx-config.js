import rehypePrettyCode from "rehype-pretty-code";

const mdxConfig = {
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "vesper",
          keepBackground: true,
        },
      ],
    ],
  },
};

export default mdxConfig;
