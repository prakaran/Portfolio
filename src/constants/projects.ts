export interface Project {
  title: string;
  src: string;
  description: string;
  href: string;
  techStack: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
  position: string;
}

export const projects: Project[] = [
  {
    title: "Rakam",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    description:
      "A peer-to-peer digital wallet app for seamless money transfers and transaction tracking.",
    href: "#",
    techStack: ["React", "TailwindCSS", "MongoDB", "NodeJS", "Express"],
  },
  {
    title: "Solana Address Book",
    src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop",
    description:
      "An on-chain contact manager on Solana using PDAs and ATAs for address verification.",
    href: "#",
    techStack: ["React", "TailwindCSS", "Solana", "Anchor", "Rust"],
  },
  {
    title: "Portfolio",
    src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop",
    description:
      "My personal portfolio — minimal, fast, and built with Next.js and Framer Motion.",
    href: "#",
    techStack: ["React", "TailwindCSS", "Next.js", "Framer Motion"],
  },
  {
    title: "Rakam Frontend",
    src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
    description:
      "A clean, minimalist fintech UI redesign built with React and TailwindCSS.",
    href: "#",
    techStack: ["React", "TailwindCSS"],
  },
  {
    title: "Project X",
    src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
    description:
      "A clean, minimalist fintech UI redesign built with React and TailwindCSS.",
    href: "#",
    techStack: ["React", "TailwindCSS"],
  },
  {
    title: "Project Y",
    src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
    description:
      "A clean, minimalist fintech UI redesign built with React and TailwindCSS.",
    href: "#",
    techStack: ["React", "TailwindCSS"],
  },
];

export const TestimonialData: Testimonial[] = [
  {
    quote:
      "Working with Karan was smooth and efficient. He quickly improved our backend performance and resolved issues we had struggled with for months.",
    name: "Dinesh Ojha",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "Software Engineer",
  },
  {
    quote:
      "Karan brought both technical clarity and reliability to the team. He consistently delivered features on time without compromising quality.",
    name: "Damodar Kafle",
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "Product Manager",
  },
  {
    quote:
      "He played a major role in shaping our platform architecture and always approached problems with a scalable mindset.",
    name: "Mukesh Awasthi",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "Co-Founder, Qbits",
  },
  {
    quote:
      "Our frontend performance improved noticeably after Karan joined the project. The application became faster and much easier to maintain.",
    name: "Prabhat Joshi",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "Lead Frontend Engineer",
  },
  {
    quote:
      "He helped us automate our deployment workflow and made releases far more reliable than before.",
    name: "Aarati Sharma",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "DevOps Tech Lead",
  },
  {
    quote:
      "Karan was detail-oriented throughout the entire frontend build process and delivered clean, reusable components from our designs.",
    name: "Sujata Regmi",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "Senior UI/UX Designer",
  },
  {
    quote:
      "He handled our migration to TypeScript with great care and significantly improved the overall developer experience.",
    name: "Kriti Shrestha",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D",
    position: "Engineering Director",
  },
  {
    quote:
      "Karan helped strengthen our authentication system and improved several important areas of platform security.",
    name: "Deepa Bhandari",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHwy",
    position: "Cybersecurity Analyst",
  },
];
