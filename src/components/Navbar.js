import { Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-md z-50">
      <div className="flex flex-row justify-between items-center w-full p-3 border-b border-gray-500/50" >
      <h1 className="font-bold text-lg pl-3">APP LOGO</h1>
      <div className="flex flex-row gap-6">
      <Link href="/" className="text-sm md:text-md lg:text-lg text-slate-600 hover:text-slate-900 transition-all">
        DASHBOARD
      </Link>
      <Link href="/create" className="text-sm md:text-md lg:text-lg text-slate-600 hover:text-slate-900 transition-all">
      CREATE ADS
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;