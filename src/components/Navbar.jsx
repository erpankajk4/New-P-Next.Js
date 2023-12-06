"user client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../firebase/auth";

const Navbar = () => {
  const { signOut, authUser, isLoading } = useAuth();
  const router = useRouter();

  const handleAuth = () => {
    authUser ? signOut() : router.push("/login");
  };

  return (
    <nav className="">
      <ul className="py-2 border-t border-gray-300 flex justify-between flex-wrap-reverse">
        <li className="space-x-6 text-xs flex flex-wrap">
          <Link href="/world" className="hover:underline focus:underline">
            World
          </Link>
          <Link href="/business" className="hover:underline focus:underline">
            Business
          </Link>
          <Link href="/science" className="hover:underline focus:underline">
            Science
          </Link>
          <Link href="/health" className="hover:underline focus:underline">
            Health
          </Link>
          <Link href="/sports" className="hover:underline focus:underline">
            Sports
          </Link>
          <Link href="/books" className="hover:underline focus:underline">
            Books
          </Link>
          <Link href="/lifestyle" className="hover:underline focus:underline">
            Lifestyle
          </Link>
          <Link href="/food" className="hover:underline focus:underline">
            Food
          </Link>
          <Link href="/travel" className="hover:underline focus:underline">
            Travel
          </Link>
          <Link href="/bitcoin" className="hover:underline focus:underline">
            Bitcoin
          </Link>
          <Link href="/india" className="hover:underline focus:underline">
            India
          </Link>
        </li>
        {/* Liked & SignIn  */}
        <li className="space-x-6 text-xs flex flex-wrap">
          <Link href="/liked"  className="font-bold hover:underline focus:underline hover:cursor-pointer">
            Liked
          </Link>
          <span
            className="font-bold hover:underline focus:underline hover:cursor-pointer"
            onClick={handleAuth}
          >
            {authUser ? "LogOut" : "LogIn"}
          </span>
        </li>
      </ul>
      <div className="w-full h-[1px] bg-black mb-1" />
      <div className="w-full h-[1px] bg-black" />
    </nav>
  );
};

export default Navbar;
