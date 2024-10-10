import Image from "next/image";
import Link from "next/link";
import vlogo from "../../../public/vlogo.png";

const HeaderSection: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 shadow-md h-[50px]">
      <nav className="container flex items-center justify-between pt-2 pb-2">
        <div className="flex items-center -mt-2 ml-7">
          <Image
            src={vlogo}
            alt="Company Logo"
            className="h-12 w-12 animate-pulse"
          />
          <h1 className="text-white text-sm font-bold tracking-wide animate-text-fade">
            Vinit_Modi_
          </h1>
        </div>

        <div className="justify-end gap-10 hidden md:flex -mr-16">
          <Link href="/">
            <div className="text-white text-sm hover:text-pink-300 transition duration-300 ease-in-out">
              Home
            </div>
          </Link>
          <Link href="/aboutPage">
            <div className="text-white text-sm hover:text-pink-300 transition duration-300 ease-in-out">
              About
            </div>
          </Link>
          <Link href="/contactPage">
            <div className="text-white text-sm hover:text-pink-300 transition duration-300 ease-in-out">
              Contact
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
