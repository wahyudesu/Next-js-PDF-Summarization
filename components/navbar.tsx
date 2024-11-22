import { FC } from "react";
import Link from "next/link";
import { FileText } from "lucide-react"; // Pastikan Anda memiliki icon library ini

const Navbar: FC = () => {
  return (
    <header className="px-4 lg:px-6 mt-4 h-14 flex items-center">
      {/* Logo Section */}
      <Link className="flex items-center justify-center" href="/">
        <FileText className="h-6 w-6" />
        <span className="ml-2 text-lg font-bold">Modul summarization</span>
      </Link>
      {/* Navigation Links */}
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
