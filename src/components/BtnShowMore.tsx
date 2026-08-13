import { ArrowRight } from "lucide-react";
import Link from "next/link";


export const BtnShowMore = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-zinc-500 font-semibold text-base md:text-lg transition-colors duration-200 hover:text-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 rounded-md"
      aria-label="Переглянути всі проєкти портфоліо"
    >
      <span className="relative pb-1">
        {title}
        <span className="absolute -bottom-0 left-0 w-full h-0.5 bg-lime-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </span>

      <ArrowRight //#endregion
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
};
