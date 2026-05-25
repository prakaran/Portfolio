import { Testimonial } from "@/constants/projects";

const TestimonialCard = ({ quote, name, avatar }: Testimonial) => {
  return (
    <div className="shadow-input mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700 dark:text-neutral-200">{quote}</p>
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-300">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
