import Link from "next/link";
interface ButtonProps {
  Text?: string;
  PrefixIcon?: React.ReactNode;
  SuffixIcon?: React.ReactNode;
  customStyle?: string;
  className?: string;
  href?: string;

}
const Button = ({ Text, PrefixIcon, SuffixIcon, customStyle, className, href }: ButtonProps) => {
  return (<>
    {
      href ? <Link href={href} target="_blank" >
        <button
          className={`p-3 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out ${customStyle} ${className}`}
        >
          {PrefixIcon && <span className="mr-2">{PrefixIcon}</span>}
          <span className="font-normal text-nowrap text-xs font-semibold font-['Inter'] leading-normal">
            {Text}
          </span>
          {SuffixIcon && <span className="ml-2">{SuffixIcon}</span>}
        </button>
      </Link>
        : <button
          className={`p-3 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out ${customStyle} ${className}`}
        >
          {PrefixIcon && <span className="mr-2">{PrefixIcon}</span>}
          <span className="font-normal text-nowrap text-xs font-semibold font-['Inter'] leading-normal">
            {Text}
          </span>
          {SuffixIcon && <span className="ml-2">{SuffixIcon}</span>}
        </button>}
  </>
  );
};


export default Button;
