import Container from "../container";
import { Link } from "next-view-transitions";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <Container className="border-t border-neutral-100 px-10 py-3 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-950 hover:text-neutral-500 dark:text-neutral-500">
            Built with ❤️ and lots of coffee by Karan Bhatt.
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://x.com/prakaran21">
              <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-200" />
            </Link>
            <Link href="https://github.com/prakaran">
              <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/karan-bhatta/">
              <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-200" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
