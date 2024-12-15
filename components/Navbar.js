import HomeIcon from "@/components/icon/home.svg";
import PartnersIcon from "@/components/icon/partners.svg";
import ShopIcon from "@/components/icon/shop.svg";
import ContactIcon from "@/components/icon/contact.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
   const currentPage = "home";

  return (
    <nav className="bg-blue-950 text-white p-3 flex justify-around items-center sticky bottom-4 mx-auto max-w-[70%] rounded-2xl shadow-lg">
      {/* Menu */}
      <ul className="flex gap-8">
        <li>
          <Link
            href="/"
            className={`flex flex-col items-center ${
              currentPage === "home" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <Image src={HomeIcon} alt="Home Icon" className="w-6 h-6 " />
            <span
              className={`block h-1 w-8 mt-1 ${
                currentPage === "home" ? "bg-blue-500" : "bg-transparent"
              }`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            href="/partners"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <Image src={PartnersIcon} alt="partners Icon" className="w-6 h-6" />
          </Link>
          <span
            className={`block h-1 w-8 mt-1 ${
              currentPage === "partners" ? "bg-blue-500" : "bg-transparent"
            }`}
          ></span>
        </li>
        <li>
          <Link
            href="/shop"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <Image src={ShopIcon} alt="Shop Icon" className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <Image src={ContactIcon} alt="Contact Icon" className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
